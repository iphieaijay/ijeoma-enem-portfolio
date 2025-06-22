import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const technicalSkills = [
    ".NET (C#, ASP.NET Core)",
    "RESTful APIs",
    "SQL Server",
    "PostgreSQL", 
    "MySQL",
    "Azure",
    "AWS",
    "Angular",
    "React",
    "Vue.js",
    "SOLID Principles",
    "CI/CD",
    "Agile",
    "Microservices",
    "RabbitMQ",
    "EF Core",
    "Dapper"
  ];

  const services = [
    {
      title: "Backend API & Microservices Architecture",
      description: "Design and develop scalable, high-performance backend systems using .NET Core, implementing microservices architecture patterns and RESTful APIs that support enterprise-level applications.",
      icon: "🏗️"
    },
    {
      title: "Technical Mentorship & Career Coaching",
      description: "Provide comprehensive mentorship for junior developers and career guidance for tech migrants, focusing on practical skills development and professional growth in backend development.",
      icon: "👥"
    },
    {
      title: "System Design Consulting",
      description: "Offer strategic consulting on system architecture, database design, and technology selection to help organizations build robust, scalable solutions that align with business objectives.",
      icon: "🎯"
    },
    {
      title: "Enterprise Integration Solutions",
      description: "Develop comprehensive integration solutions for enterprise systems, including third-party API integrations, payment processing systems, and cross-platform data synchronization.",
      icon: "🔗"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-purple-900/10 to-slate-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Skills & <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-purple mx-auto"></div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy mb-8 text-center">Technical Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technicalSkills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-white border border-purple/20 text-navy hover:bg-purple hover:text-white transition-colors duration-300 px-4 py-2 text-sm font-medium animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Services Offered */}
        <div>
          <h3 className="text-2xl font-bold text-navy mb-8 text-center">Services Offered</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-l-4 border-l-purple hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{service.icon}</span>
                    <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
