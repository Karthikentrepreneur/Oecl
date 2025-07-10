
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: any;
  excerpt: string | null;
  status: string;
  created_at: string;
  published_at: string | null;
  tags: string[] | null;
  profiles: {
    email: string;
    full_name: string | null;
  } | null;
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const fetchBlog = async () => {
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
          tags,
          profiles:author_id (
            email,
            full_name
          )
        `)
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (error) throw error;
      
      setBlog(data);
    } catch (err: any) {
      console.error('Error fetching blog:', err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = (content: any) => {
    if (!content || !Array.isArray(content)) return null;

    return content.map((block: any, index: number) => {
      if (block.type === 'heading') {
        const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
        const className = block.level === 1 
          ? "text-3xl font-bold mb-6 mt-8" 
          : block.level === 2 
          ? "text-2xl font-semibold mb-4 mt-6" 
          : "text-xl font-medium mb-3 mt-4";
        
        return (
          <HeadingTag key={index} className={className}>
            {block.text}
          </HeadingTag>
        );
      } else if (block.type === 'paragraph') {
        return (
          <p 
            key={index} 
            className="mb-4 leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ 
              __html: block.html || block.text || "" 
            }}
          />
        );
      }
      return null;
    });
  };

  const getAuthorName = (blog: BlogPost) => {
    if (!blog.profiles) return "OECL Admin";
    return blog.profiles.full_name || blog.profiles.email;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-24">
          <div className="text-center">Loading blog post...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article className="bg-white rounded-lg shadow-sm p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-gray-900">{blog.title}</h1>
              
              {blog.excerpt && (
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {blog.excerpt}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <User className="mr-1 h-4 w-4" />
                  {getAuthorName(blog)}
                </div>
                
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {new Date(blog.published_at || blog.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>

              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {renderContent(blog.content)}
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
