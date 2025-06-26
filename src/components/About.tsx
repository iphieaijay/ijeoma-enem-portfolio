
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: "MBA in Artificial Intelligence",
      institution: "Nexford University, USA",
      year: "2024"
    },
    {
      degree: "BSc. Computer Science",
      institution: "University of Nigeria Nsukka",
      year: "2005"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-900/10 to-purple-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            I Am A Modern <span className="gradient-text">Fullstack Developer</span>
          </h2>
          <div className="w-24 h-1 bg-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple/20 to-navy/20 p-6">
                <img 
                  src="/portfolio/lovable-uploads/6b3ebd26-6b19-4638-a932-a5db6c59615f.png" 
                  alt="Ijeoma Ifeyinwa Enem" 
                  className="w-full h-auto object-cover rounded-xl transform hover:scale-105 transition-all duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-navy/30 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-navy mb-6">About Me</h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="transform hover:translate-x-2 transition-transform duration-300">
              Hi, I’m Ijeoma Ifeyinwa Enem — a purpose-driven technologist who blends deep technical expertise with strategic thinking to build systems that scale and deliver real-world impact.
            </p>
              <p className="transform hover:translate-x-2 transition-transform duration-300">
              As a Senior Fullstack Developer, I do more than just write code — I architect solutions with a systems-level mindset, always thinking in terms of performance, sustainability, and business value.
          </p>
              <p className="transform hover:translate-x-2 transition-transform duration-300">
              With a strong entrepreneurial spirit, I'm passionate about exploring ideas that merge technology and business, especially within the SaaS, B2B, and B2C spaces. My work is guided by a vision to create products that not only function — but also transform.
            </p>
            <p className="transform hover:translate-x-2 transition-transform duration-300">
              Beyond engineering, I’m deeply invested in mentoring the next generation of developers and shaping collaborative teams that grow together. Whether I’m designing enterprise-grade platforms or brainstorming a new idea, I aim to create solutions that empower users, drive innovation, and support long-term business growth.
            </p>
            </div>

            {/* Education */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-navy mb-4">Education</h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="border-l-4 border-l-purple transform hover:scale-105 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <h5 className="font-semibold text-navy">{edu.degree}</h5>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-sm text-purple font-medium">{edu.year}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
