import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, User, ArrowRight } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const ScrollToTop = () => {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);
  return null;
};
const blogPosts = [{
  id: 1,
  title: "The Future of Global Logistics",
  excerpt: "Exploring how emerging technologies are reshaping the logistics industry and creating new opportunities for businesses worldwide.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  author: "Sarah Johnson",
  date: "December 15, 2024",
  readTime: "5 min read",
  imageUrl: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Technology"
}, {
  id: 2,
  title: "Sustainable Shipping Solutions",
  excerpt: "How companies are adopting eco-friendly practices to reduce their environmental impact while maintaining operational efficiency.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  author: "Michael Chen",
  date: "December 10, 2024",
  readTime: "7 min read",
  imageUrl: "https://images.unsplash.com/photo-1605600659873-d808a13e4d9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Sustainability"
}, {
  id: 3,
  title: "Digital Transformation in Supply Chain",
  excerpt: "The impact of digitalization on modern supply chains and how businesses can leverage technology for competitive advantage.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  author: "Emma Rodriguez",
  date: "December 5, 2024",
  readTime: "6 min read",
  imageUrl: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Digital"
}, {
  id: 4,
  title: "International Trade Regulations",
  excerpt: "Understanding the latest changes in global trade policies and their implications for international businesses.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  author: "Robert Kim",
  date: "November 28, 2024",
  readTime: "8 min read",
  imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Regulations"
}, {
  id: 5,
  title: "AI in Logistics Operations",
  excerpt: "How artificial intelligence is revolutionizing warehouse management, route optimization, and customer service.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  author: "David Liu",
  date: "November 20, 2024",
  readTime: "9 min read",
  imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "AI"
}, {
  id: 6,
  title: "Cross-Border E-commerce Growth",
  excerpt: "The explosive growth of international e-commerce and what it means for logistics providers and retailers.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  author: "Lisa Wang",
  date: "November 15, 2024",
  readTime: "4 min read",
  imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "E-commerce"
}];
const itemsPerPage = 6;
const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);
  const currentPosts = blogPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  return <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navigation />
      <div className="container mx-auto px-4 py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Stay updated with the latest insights, trends, and innovations in global logistics and supply chain management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map(post => <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-all duration-300 group">
              {post.imageUrl && <div className="h-48 overflow-hidden rounded-t-lg relative">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>}
              <CardHeader>
                <div className="flex items-center justify-between mb-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <User className="w-4 h-4 mr-2" />
                  <span>By {post.author}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full group" asChild>
                  <Link to={`/blog/${post.id}`} className="flex items-center justify-center gap-2 bg-red-500 text-white p-2 rounded">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>)}
        </div>

        {totalPages > 1 && <Pagination>
            <PaginationContent>
              {currentPage > 1 && <PaginationItem>
                  <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                </PaginationItem>}
              
              {[...Array(totalPages)].map((_, i) => <PaginationItem key={i}>
                  <PaginationLink isActive={currentPage === i + 1} onClick={() => handlePageChange(i + 1)}>
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>)}
              
              {currentPage < totalPages && <PaginationItem>
                  <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                </PaginationItem>}
            </PaginationContent>
          </Pagination>}
      </div>
      <Footer />
    </div>;
};
export default Blog;
