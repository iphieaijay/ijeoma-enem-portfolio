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
  const certifications = [
    {
      title: "LFS250: Kubernetes and Cloud Native Essentials ",
      issuer: "The Linux Foundation",
      year: "2025"
    },
    {
      title: "Technology Operations Management ",
      issuer: "Canvas Credentials (Badgr)",
      year: "2024"
    },
    
    {
      title: "ITIL Foundation Certificate in IT Service Management",
      issuer: "PeopleCert",
      year: "2020"
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      year: "2020"
    },
    
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-900/10 to-purple-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            I Am A <span className="gradient-text">Fullstack Developer</span>
          </h2>
          <div className="w-24 h-1 bg-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Me Column */}
          <div className="animate-fade-in">
            <div className="relative">
              <h4 className="text-xl font-semibold text-navy mb-4">About Me</h4>
               <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-navy to-purple p-8 shadow-lg text-white">               
                <div className="space-y-6 text-[15px] leading-relaxed">
                  <p className="transform hover:translate-x-1 transition-transform duration-300">
                    Hi, I’m <strong>Ijeoma Ifeyinwa Enem</strong> — a purpose-driven technologist who blends deep technical expertise with strategic thinking to build systems that scale and deliver real-world impact.
                  </p>
                  <p className="transform hover:translate-x-1 transition-transform duration-300">
                    As a <strong>Senior Fullstack Developer</strong>, I do more than just write code — I architect solutions with a systems-level mindset, always thinking in terms of performance, sustainability, and business value.
                  </p>
                  <p className="transform hover:translate-x-1 transition-transform duration-300">
                    With a strong entrepreneurial spirit, I'm passionate about exploring ideas that merge technology and business, especially within the SaaS, B2B, and B2C spaces. My work is guided by a vision to create products that not only function — but also transform.
                  </p>
                  <p className="transform hover:translate-x-1 transition-transform duration-300">
                    Beyond engineering, I’m deeply invested in mentoring the next generation of developers and shaping collaborative teams that grow together. Whether I’m designing enterprise-grade platforms or brainstorming a new idea, I aim to create solutions that empower users, drive innovation, and support long-term business growth.
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-navy/30 rounded-full blur-xl"></div>
            </div>
          </div>

          
         {/* Right Column */}
      <div className="animate-slide-in-right mt-8 md:mt-0 space-y-10">
        {/* Education Section */}
        <div>
          <h4 className="text-xl font-semibold text-navy mb-4">Education</h4>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-purple bg-white/90 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-4">
                  <h5 className="font-semibold text-navy">{edu.degree}</h5>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-purple font-medium">{edu.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

          {/* Certifications Section */}
          <div>
            <h4 className="text-xl font-semibold text-navy mb-4">Certifications</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-navy/95 bg-white/90 hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-2">
                    <h5 className="font-semibold text-navy">{cert.title}</h5>
                    <p className="text-gray-400">{cert.issuer}</p>
                    <p className="text-sm text-navy-600 font-medium">{cert.year}</p>
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
