
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
            I Am Modern <span className="gradient-text">Backend Developer</span>
          </h2>
          <div className="w-24 h-1 bg-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple/20 to-navy/20 p-6">
                <img 
                  src="/lovable-uploads/6b3ebd26-6b19-4638-a932-a5db6c59615f.png" 
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
                I'm Ijeoma Ifeyinwa Enem, a passionate and purpose-driven individual blending technical mastery with strategic thinking. I am a senior backend developer specializing in .NET and microservices, but my work clearly goes beyond code — I think in systems, scale, and impact.
              </p>
              <p className="transform hover:translate-x-2 transition-transform duration-300">
                I have a strong entrepreneurial mindset, frequently exploring ideas that merge technology, education, and empowerment, especially for fresh graduates and tech migrants. My approach combines deep technical expertise with leadership skills that drive meaningful transformation in every project I touch.
              </p>
              <p className="transform hover:translate-x-2 transition-transform duration-300">
                With extensive experience in enterprise-grade systems and a passion for mentoring the next generation of developers, I focus on creating scalable solutions that not only meet business requirements but also foster growth and innovation within development teams.
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
