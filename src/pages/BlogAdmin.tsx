
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Trash2, Edit, Plus, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: any;
  excerpt: string | null;
  status: string;
  created_at: string;
  published_at: string | null;
}

const BlogAdmin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  // Form states
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      fetchPosts();
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (email === 'admin@oecl.sg' && password === 'OECL@12345') {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the blog admin panel!",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch posts: " + error.message,
        variant: "destructive",
      });
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const parseContent = (content: string) => {
    const lines = content.split('\n').filter(line => line.trim());
    const parsedContent: any[] = [];
    
    lines.forEach(line => {
      line = line.trim();
      if (line.startsWith('# ')) {
        parsedContent.push({
          type: 'heading',
          level: 1,
          text: line.substring(2)
        });
      } else if (line.startsWith('## ')) {
        parsedContent.push({
          type: 'heading',
          level: 2,
          text: line.substring(3)
        });
      } else if (line.includes('[') && line.includes('](')) {
        // Handle hyperlinks
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const processedText = line.replace(linkRegex, (match, text, url) => {
          return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">${text}</a>`;
        });
        parsedContent.push({
          type: 'paragraph',
          html: processedText
        });
      } else if (line) {
        parsedContent.push({
          type: 'paragraph',
          text: line
        });
      }
    });
    
    return parsedContent;
  };

  const handleSavePost = async () => {
    if (!title || !content) {
      toast({
        title: "Missing Fields",
        description: "Please fill in title and content fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Get admin user for author_id
      const { data: profiles, error: profileError } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', 'admin@oecl.sg')
        .single();

      if (profileError) throw profileError;

      const slug = generateSlug(title);
      const parsedContent = parseContent(content);
      
      const blogData = {
        title,
        slug,
        content: parsedContent,
        excerpt,
        status: 'published',
        author_id: profiles.id,
        published_at: new Date().toISOString()
      };

      if (editingPost) {
        const { error } = await supabase
          .from('blogs')
          .update(blogData)
          .eq('id', editingPost.id);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blogs')
          .insert([blogData]);
        
        if (error) throw error;
      }

      // Reset form
      setTitle('');
      setExcerpt('');
      setContent('');
      setEditingPost(null);
      setIsDialogOpen(false);
      
      await fetchPosts();

      toast({
        title: "Success",
        description: editingPost ? "Post updated successfully!" : "Post created successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to save post: " + error.message,
        variant: "destructive",
      });
    }
  };

  const contentToMarkdown = (content: any) => {
    if (!content || !Array.isArray(content)) return "";
    
    return content.map((block: any) => {
      if (block.type === 'heading') {
        const hashes = '#'.repeat(block.level);
        return `${hashes} ${block.text}`;
      } else if (block.type === 'paragraph') {
        return block.html || block.text || "";
      }
      return "";
    }).join('\n\n');
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setExcerpt(post.excerpt || '');
    setContent(contentToMarkdown(post.content));
    setIsDialogOpen(true);
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      await fetchPosts();
      
      toast({
        title: "Post Deleted",
        description: "The blog post has been removed.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to delete post: " + error.message,
        variant: "destructive",
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh] px-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center">Blog Admin Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@oecl.sg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button onClick={handleLogin} className="w-full bg-red-600 hover:bg-red-700">
                Login
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Admin Panel</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700" onClick={() => {
                setEditingPost(null);
                setTitle('');
                setExcerpt('');
                setContent('');
              }}>
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingPost ? 'Edit Post' : 'Create New Post'}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    placeholder="Enter post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Input
                    id="excerpt"
                    placeholder="Brief description (optional)"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content *</Label>
                  <Textarea
                    id="content"
                    placeholder="Write your content here...&#10;&#10;Use # for main headings&#10;Use ## for subheadings&#10;Use [Link Text](https://example.com) for hyperlinks"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={12}
                    className="font-mono"
                  />
                  <p className="text-sm text-gray-600">
                    Use # for headings, ## for subheadings. Use [text](url) for links.
                  </p>
                </div>
                <Button onClick={handleSavePost} className="w-full bg-red-600 hover:bg-red-700">
                  {editingPost ? 'Update Post' : 'Create Post'}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                {post.excerpt && (
                  <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-500 mb-4">
                  Created: {new Date(post.created_at).toLocaleDateString()}
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEditPost(post)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDeletePost(post.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts yet. Create your first post!</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BlogAdmin;
