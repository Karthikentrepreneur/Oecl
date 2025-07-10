
import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  created_at: string;
  published_at: string | null;
  tags: string[] | null;
  profiles: {
    email: string;
    full_name: string | null;
  } | null;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          id,
          title,
          slug,
          excerpt,
          created_at,
          published_at,
          tags,
          profiles:author_id (
            email,
            full_name
          )
        `)
        .eq('status', 'published')
        .order('published_at', { ascending: false, nullsLast: true })
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

  const getAuthorName = (blog: BlogPost) => {
    if (!blog.profiles) return "Unknown Author";
    return blog.profiles.full_name || blog.profiles.email;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Stay updated with the latest insights, trends, and stories from the world of logistics and freight forwarding.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="text-lg">Loading blog posts...</div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="text-red-600 text-lg">Error loading blogs: {error}</div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-lg text-gray-600">No blog posts available yet.</div>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                  <article key={blog.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors">
                        <Link to={`/blog/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h2>
                      
                      {blog.excerpt && (
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {blog.excerpt}
                        </p>
                      )}

                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="mr-1 h-3 w-3" />
                          {getAuthorName(blog)}
                        </div>
                        
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {new Date(blog.published_at || blog.created_at).toLocaleDateString()}
                        </div>
                      </div>

                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {blog.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {blog.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{blog.tags.length - 3} more
                            </Badge>
                          )}
                        </div>
                      )}

                      <Link 
                        to={`/blog/${blog.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
