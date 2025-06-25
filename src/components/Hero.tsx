
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-navy-light rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Left Side */}
          <div className="animate-slide-in-left order-2 md:order-1">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple to-navy p-1">
                  <img 
                    src="/portfolio/lovable-uploads/db7c5721-d700-4d36-a624-791eb8defe2e.png" 
                    alt="Ijeoma Ifeyinwa Enem" 
                    className="w-full h-auto object-cover rounded-xl bg-white"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-light rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-navy rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="animate-fade-in order-1 md:order-2">
            <p className="text-purple-light text-lg font-medium mb-4 uppercase tracking-wide">
              HELLO!
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              I Am{' '}
              <span className="gradient-text">
                Ijeoma Ifeyinwa Enem
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
              Engineering Scalable Solutions with Purpose & Precision
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Senior Backend Fullstack Developer specializing in .NET, Blazor, NodeJS, Angular, React-Next.JS, MongoDB, PostgreSQL, and microservices architecture. 
              I think in systems, scale, and impact, blending technical mastery with strategic thinking 
              to create solutions that empower and transform.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('#projects')}
                className="bg-purple hover:bg-purple-light text-white px-8 py-3 text-lg font-medium transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('#contact')}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-navy px-8 py-3 text-lg font-medium transform hover:scale-105 transition-all duration-300"
              >
                Hire Me
              </Button>
              <Button 
                onClick={() => scrollToSection('#contact')}
                variant="ghost" 
                className="text-purple-light hover:text-white hover:bg-purple/20 px-8 py-3 text-lg font-medium transform hover:scale-105 transition-all duration-300"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('#about')}
          className="text-white/60 hover:text-white transition-colors duration-300"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
