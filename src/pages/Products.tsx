import Header from '@/components/Header';
import ProductsSection from '@/components/ProductsSection';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="text-text-secondary hover:text-text-primary mb-4 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-text-primary mb-4">Digital Products</h1>
            <p className="text-text-secondary text-lg">
              Explore my collection of digital products designed to help marketers and developers 
              grow their skills and build amazing projects.
            </p>
          </div>
          
          <ProductsSection />
        </div>
      </main>
    </div>
  );
};

export default Products;