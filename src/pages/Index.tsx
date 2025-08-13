import Header from '@/components/Header';
import ProfileCard from '@/components/ProfileCard';
import ProjectsSection from '@/components/ProjectsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="max-w-lg mx-auto px-6">
          <div className="space-y-8">
            <ProfileCard />
            <ProjectsSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
