
import React, { useState, useEffect } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Search, 
  Filter, 
  Plus, 
  Eye, 
  Pencil, 
  Trash2,
  Save
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: any;
  excerpt: string | null;
  status: string;
  created_at: string;
  published_at: string | null;
  profiles: {
    email: string;
    full_name: string | null;
  } | null;
}

const BlogManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    status: "draft"
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          id,
          title,
          slug,
          content,
          excerpt,
          status,
          created_at,
          published_at,
          profiles:author_id (
            email,
            full_name
          )
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      setBlogs(data || []);
    } catch (err: any) {
      console.error('Error fetching blogs:', err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateOrUpdate = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Error",
          description: "You must be logged in to create blogs",
          variant: "destructive"
        });
        return;
      }

      const blogData = {
        title: formData.title,
        slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-'),
        content: parseContent(formData.content),
        excerpt: formData.excerpt,
        status: formData.status,
        author_id: user.id,
        ...(formData.status === 'published' && !editingBlog ? { published_at: new Date().toISOString() } : {})
      };

      let result;
      if (editingBlog) {
        result = await supabase
          .from('blogs')
          .update(blogData)
          .eq('id', editingBlog.id);
      } else {
        result = await supabase
          .from('blogs')
          .insert([blogData]);
      }

      if (result.error) throw result.error;

      toast({
        title: "Success",
        description: `Blog ${editingBlog ? 'updated' : 'created'} successfully`
      });

      setIsDialogOpen(false);
      setEditingBlog(null);
      setFormData({ title: "", slug: "", content: "", excerpt: "", status: "draft" });
      fetchBlogs();
    } catch (err: any) {
      console.error('Error saving blog:', err.message);
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive"
      });
    }
  };

  const parseContent = (content: string) => {
    // Convert markdown-like content to structured JSON
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
      } else if (line.startsWith('### ')) {
        parsedContent.push({
          type: 'heading',
          level: 3,
          text: line.substring(4)
        });
      } else if (line.includes('[') && line.includes('](')) {
        // Handle hyperlinks
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const processedText = line.replace(linkRegex, (match, text, url) => {
          return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
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

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      slug: blog.slug,
      content: contentToMarkdown(blog.content),
      excerpt: blog.excerpt || "",
      status: blog.status
    });
    setIsDialogOpen(true);
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

  const handleDelete = async (blogId: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', blogId);
      
      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Blog deleted successfully"
      });
      
      fetchBlogs();
    } catch (err: any) {
      console.error('Error deleting blog:', err.message);
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive"
      });
    }
  };

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (blog.profiles?.email && blog.profiles.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "published": return "default";
      case "draft": return "secondary";
      case "archived": return "outline";
      default: return "outline";
    }
  };

  const getAuthorName = (blog: Blog) => {
    if (!blog.profiles) return "Unknown";
    return blog.profiles.full_name || blog.profiles.email;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Blog Management</h1>
        <p className="text-muted-foreground">Create and manage blog posts with rich content</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search blogs..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" onClick={() => {
                setEditingBlog(null);
                setFormData({ title: "", slug: "", content: "", excerpt: "", status: "draft" });
              }}>
                <Plus className="mr-2 h-4 w-4" />
                New Blog
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingBlog ? 'Edit Blog' : 'Create New Blog'}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter blog title"
                  />
                </div>
                <div>
                  <Label htmlFor="slug">URL Slug</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="url-friendly-slug"
                  />
                </div>
                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Brief description of the blog post"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="# Main Heading&#10;&#10;This is a paragraph with some text.&#10;&#10;## Subheading&#10;&#10;Another paragraph with a [link](https://example.com).&#10;&#10;### Another Subheading&#10;&#10;More content here."
                    rows={12}
                    className="font-mono"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Use # for headings, ## for subheadings, ### for smaller headings. 
                    Use [text](url) for links. Each paragraph should be on a new line.
                  </p>
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full p-2 border border-input rounded-md"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
                <Button onClick={handleCreateOrUpdate}>
                  <Save className="mr-2 h-4 w-4" />
                  {editingBlog ? 'Update Blog' : 'Create Blog'}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="border rounded-md">
        {isLoading ? (
          <div className="p-8 text-center">Loading blogs...</div>
        ) : error ? (
          <div className="p-8 text-center text-red-500">Error: {error}</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Published</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <TableRow key={blog.id}>
                    <TableCell className="font-medium">{blog.title}</TableCell>
                    <TableCell>{getAuthorName(blog)}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(blog.status)}>
                        {blog.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(blog.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      {blog.published_at ? new Date(blog.published_at).toLocaleDateString() : '-'}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(blog)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleDelete(blog.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    No blogs found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default BlogManagement;
