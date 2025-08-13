import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import { ArrowLeft, Mail, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Contact = () => {
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
            <h1 className="text-4xl font-bold text-text-primary mb-4">Let's Work Together</h1>
            <p className="text-text-secondary text-lg">
              Ready to bring your next project to life? I'd love to hear from you and discuss how we can create something amazing together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-[--border-radius-lg] p-8 shadow-[--shadow-card]">
                <h2 className="text-2xl font-bold text-text-primary mb-6">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-button-primary rounded-[--border-radius] flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">Email</h3>
                      <p className="text-text-secondary">sebastian@vibemarketer.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-button-primary rounded-[--border-radius] flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">Location</h3>
                      <p className="text-text-secondary">Miami, FL</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-button-primary rounded-[--border-radius] flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">Availability</h3>
                      <p className="text-text-secondary">Available for new projects</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-[--border-radius-lg] p-8 shadow-[--shadow-card]">
                <h3 className="text-xl font-bold text-text-primary mb-4">What I Do</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Growth Marketing Strategy</li>
                  <li>• Web Application Development</li>
                  <li>• Conversion Optimization</li>
                  <li>• Marketing Automation</li>
                  <li>• Full-Stack Development</li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;