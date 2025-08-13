import Header from '@/components/Header';
import ProfileCard from '@/components/ProfileCard';
import ProjectsSection from '@/components/ProjectsSection';
import ProductsSection from '@/components/ProductsSection';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <ProfileCard />
              <ProjectsSection />
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              <ContactForm />
              <ProductsSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
