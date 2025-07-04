
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { newsItems } from '@/data/newsData'; // Wir werden diese Datei gleich erstellen
import { NewsItem } from '@/types/newsTypes'; // Wir werden diese Datei gleich erstellen

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Finde die News anhand der ID
    if (id) {
      const item = newsItems.find(news => news.id.toString() === id);
      setNewsItem(item || null);
    }
    setLoading(false);
  }, [id]);

  // Function to render content with section icons for KI news article
  const renderContent = () => {
    if (!newsItem || !newsItem.content) return null;
    
    // Only apply special formatting for the KI news article (id: 3)
    if (newsItem.id.toString() !== '3') {
      return <div className="whitespace-pre-line">{newsItem.content}</div>;
    }
    
    // Helper function to check if content contains specific section titles
    const replaceWithIcons = (content: string) => {
      // Track which sections have already been processed
      const processedSections = new Set<string>();
      
      const sections = [
        {
          title: "Kundenservice & Support",
          icon: "https://github.com/stone1971grey/projekt-bilder/blob/ccds_web/E-Commerce_Produktberatung--293x300.png?raw=true"
        },
        {
          title: "Interne Assistenz für HR & IT",
          icon: "https://github.com/stone1971grey/projekt-bilder/blob/ccds_web/Bildung-Weiterbildung-293x300.png?raw=true"
        },
        {
          title: "E-Commerce & Produktberatung",
          icon: "https://github.com/stone1971grey/projekt-bilder/blob/ccds_web/E-Commerce_Produktberatung--293x300.png?raw=true"
        },
        {
          title: "Finanzdienstleistungen & Versicherungen",
          icon: "https://github.com/stone1971grey/projekt-bilder/blob/ccds_web/Finanzdienstleistungen-Versicherungen-293x300.png?raw=true"
        },
        {
          title: "Behörden & öffentliche Verwaltung",
          icon: "https://github.com/stone1971grey/projekt-bilder/blob/ccds_web/Behoerden-oeffentliche-Verwaltungen-293x300.png?raw=true"
        },
        {
          title: "Bildung & Weiterbildung",
          icon: "https://github.com/stone1971grey/projekt-bilder/blob/ccds_web/Bildung-Weiterbildung-293x300.png?raw=true"
        }
      ];
      
      // Split the content by lines to process each paragraph
      const lines = content.split('\n');
      
      // Process each line
      const processedLines = lines.map((line, index) => {
        for (const section of sections) {
          if (line.includes(section.title) && !processedSections.has(section.title)) {
            // Mark this section as processed so we don't show its icon again
            processedSections.add(section.title);
            
            // If the line contains a section title, wrap it with icon
            return (
              <div key={`${section.title}-${index}`} className="flex items-center mt-6 mb-2">
                <img 
                  src={section.icon} 
                  alt={section.title} 
                  className="w-12 h-12 mr-3"
                />
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>
            );
          }
        }
        // Return regular paragraph for non-section lines
        return <p key={index} className="mb-4">{line}</p>;
      });
      
      return <div>{processedLines}</div>;
    };
    
    return replaceWithIcons(newsItem.content);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Lade Artikel...</p>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Artikel nicht gefunden</h1>
        <Button asChild variant="outline">
          <Link to="/news">Zurück zur Übersicht</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Button asChild variant="outline" className="mb-8">
            <Link to="/news" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Übersicht
            </Link>
          </Button>
        </div>

        {newsItem.imageUrl && (
          <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8 relative">
            <img 
              src={newsItem.imageUrl} 
              alt={newsItem.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <Card className="mb-8 shadow-md border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-3xl md:text-4xl font-bold">{newsItem.title}</CardTitle>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{newsItem.date}</span>
              </div>
              {newsItem.category && (
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  <span className="text-blue bg-blue/10 px-2 py-1 rounded text-xs font-medium">
                    {newsItem.category}
                  </span>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              {newsItem.content ? (
                renderContent()
              ) : (
                <p>{newsItem.summary}</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetailPage;
