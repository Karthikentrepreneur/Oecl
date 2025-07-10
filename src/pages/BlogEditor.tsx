
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Save, Eye, Trash2, Upload, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Link, useNavigate } from "react-router-dom";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  featured_image?: string;
  published_at: string;
}

const BlogEditor = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check if user is already authenticated
  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem('blog_admin_auth');
    if (isAdminLoggedIn === 'true') {
      setIsAuthenticated(true);
      fetchArticles();
    }
  }, []);

  const handleLogin = async () => {
    if (email === 'admin@oecl.sg' && password === 'OECL@12345') {
      setIsAuthenticated(true);
      localStorage.setItem('blog_admin_auth', 'true');
      fetchArticles();
      toast({ title: "Logged in successfully!" });
    } else {
      toast({
        title: "Invalid credentials",
        description: "Please check your email and password.",
        variant: "destructive"
      });
    }
  };

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error fetching articles",
        description: error.message,
        variant: "destructive"
      });
    } else {
      setArticles(data || []);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setFeaturedImage(imageUrl);
    }
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    const text = prompt('Enter link text:');
    if (url && text) {
      const linkHtml = `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">${text}</a>`;
      setContent(prev => prev + linkHtml);
    }
  };

  const formatText = (tag: string) => {
    const selectedText = window.getSelection()?.toString() || prompt(`Enter text to make ${tag}:`);
    if (selectedText) {
      let formattedText = '';
      switch (tag) {
        case 'bold':
          formattedText = `<strong>${selectedText}</strong>`;
          break;
        case 'italic':
          formattedText = `<em>${selectedText}</em>`;
          break;
        case 'h2':
          formattedText = `<h2 class="text-2xl font-bold mb-4">${selectedText}</h2>`;
          break;
        case 'h3':
          formattedText = `<h3 class="text-xl font-semibold mb-3">${selectedText}</h3>`;
          break;
        case 'paragraph':
          formattedText = `<p class="mb-4">${selectedText}</p>`;
          break;
      }
      setContent(prev => prev + formattedText);
    }
  };

  const handleSaveArticle = async () => {
    if (!title || !content) {
      toast({
        title: "Missing fields",
        description: "Title and content are required.",
        variant: "destructive"
      });
      return;
    }

    const slug = generateSlug(title);
    const articleData = {
      title,
      content,
      excerpt: excerpt || content.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
      slug,
      featured_image: featuredImage || null,
      published_at: publishDate || new Date().toISOString()
    };

    if (editingArticle) {
      const { error } = await supabase
        .from('articles')
        .update(articleData)
        .eq('id', editingArticle.id);

      if (error) {
        toast({
          title: "Error updating article",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({ title: "Article updated successfully!" });
        resetForm();
        fetchArticles();
      }
    } else {
      const { error } = await supabase
        .from('articles')
        .insert([articleData]);

      if (error) {
        toast({
          title: "Error creating article",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({ title: "Article created successfully!" });
        resetForm();
        fetchArticles();
      }
    }
  };

  const handleEditArticle = (article: Article) => {
    setEditingArticle(article);
    setTitle(article.title);
    setContent(article.content);
    setExcerpt(article.excerpt);
    setFeaturedImage(article.featured_image || '');
    setPublishDate(new Date(article.published_at).toISOString().split('T')[0]);
  };

  const handleDeleteArticle = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;
    
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error deleting article",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({ title: "Article deleted successfully!" });
      fetchArticles();
    }
  };

  const resetForm = () => {
    setEditingArticle(null);
    setTitle('');
    setContent('');
    setExcerpt('');
    setFeaturedImage('');
    setPublishDate('');
    setImageFile(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('blog_admin_auth');
    setIsAuthenticated(false);
    setEmail('');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh] px-4 pt-20">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center">Blog Editor Login</CardTitle>
              <p className="text-center text-sm text-gray-600">
                Admin access required
              </p>
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
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
              </div>
              <Button onClick={handleLogin} className="w-full bg-red-600 hover:bg-red-700">
                Login
              </Button>
              <div className="text-center">
                <Link to="/blog" className="text-red-600 hover:underline text-sm">
                  ← Back to Blog
                </Link>
              </div>
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
          <div className="flex items-center gap-4">
            <Link to="/blog" className="text-red-600 hover:text-red-700">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-3xl font-bold">Blog Editor</h1>
          </div>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <Card>
            <CardHeader>
              <CardTitle>{editingArticle ? 'Edit Article' : 'Create New Article'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="Article title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Brief description of the article"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="publishDate">Publish Date</Label>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <Input
                    id="publishDate"
                    type="date"
                    value={publishDate}
                    onChange={(e) => setPublishDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="featuredImage">Featured Image</Label>
                <div className="flex gap-2">
                  <Input
                    id="featuredImage"
                    placeholder="Image URL or upload below"
                    value={featuredImage}
                    onChange={(e) => setFeaturedImage(e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('imageUpload')?.click()}
                  >
                    <Upload className="w-4 h-4" />
                  </Button>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
                {featuredImage && (
                  <img 
                    src={featuredImage} 
                    alt="Preview" 
                    className="w-full h-32 object-cover rounded-md mt-2"
                  />
                )}
              </div>

              {/* Rich Text Formatting Tools */}
              <div className="space-y-2">
                <Label>Formatting Tools</Label>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" onClick={() => formatText('bold')}>
                    <strong>B</strong>
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => formatText('italic')}>
                    <em>I</em>
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => formatText('h2')}>
                    H2
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => formatText('h3')}>
                    H3
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => formatText('paragraph')}>
                    P
                  </Button>
                  <Button size="sm" variant="outline" onClick={insertLink}>
                    Link
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content * (HTML supported)</Label>
                <Textarea
                  id="content"
                  placeholder="Write your article content here. You can use HTML tags for formatting and the buttons above for quick formatting."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={15}
                  className="font-mono text-sm"
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={handleSaveArticle} className="bg-red-600 hover:bg-red-700">
                  <Save className="w-4 h-4 mr-2" />
                  {editingArticle ? 'Update Article' : 'Save Article'}
                </Button>
                {editingArticle && (
                  <Button onClick={resetForm} variant="outline">
                    Cancel
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Articles List */}
          <Card>
            <CardHeader>
              <CardTitle>Published Articles ({articles.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {articles.map((article) => (
                  <div key={article.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    {article.featured_image && (
                      <img 
                        src={article.featured_image} 
                        alt={article.title}
                        className="w-full h-32 object-cover rounded-md mb-3"
                      />
                    )}
                    <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {new Date(article.published_at).toLocaleDateString()}
                      </span>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditArticle(article)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(`/blog/${article.slug}`, '_blank')}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteArticle(article.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                {articles.length === 0 && (
                  <p className="text-gray-500 text-center py-8">No articles yet. Create your first article!</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogEditor;
