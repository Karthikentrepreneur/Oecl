import { useParams } from 'react-router-dom';
import { blogPosts } from './Blog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-center py-20">Post not found.</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12 pt-24">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-2">By {post.author} • {post.date} • {post.readTime}</p>
        <img src={post.imageUrl} alt={post.title} className="w-full rounded-lg mb-6" />
        <p className="text-lg text-foreground">{post.content}</p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
