
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const BlogDetail = () => {
  const { slug } = useParams();

  // This component is no longer needed since we have the main BlogDetail page
  // Redirect to the main blog detail page
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12 pt-24">
        <h1 className="text-4xl font-bold mb-4">Blog post not found</h1>
        <p className="text-muted-foreground mb-2">The blog post you're looking for doesn't exist.</p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
