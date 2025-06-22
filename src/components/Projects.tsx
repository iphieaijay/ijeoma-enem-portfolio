import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "User Authentication API",
      description: "A secure .NET Core 8 REST API implementing JWT authentication with comprehensive user management features, role-based authorization, and password reset functionality.",
      technologies: [".NET Core 8", "JWT", "Swagger", "EF Core", "SQL Server"],
      githubUrl: "#",
      features: [
        "JWT Token Authentication",
        "Role-based Authorization", 
        "Password Reset System",
        "API Documentation with Swagger",
        "Email Verification"
      ]
    },
    {
      title: "Store Smart Payment System",
      description: "Enterprise-grade payment processing system with POS and NFC integrations, supporting multiple payment methods and real-time transaction monitoring.",
      technologies: [".NET Core", "RabbitMQ", "Azure", "SQL Server", "Angular"],
      githubUrl: "#",
      features: [
        "POS Integration",
        "NFC Payment Processing",
        "Real-time Monitoring",
        "Multi-Payment Gateway Support",
        "Transaction Analytics"
      ]
    },
    {
      title: "Microservices E-Commerce Platform",
      description: "Scalable e-commerce backend built with microservices architecture, featuring order management, inventory tracking, and payment processing services.",
      technologies: ["Microservices", ".NET Core", "Docker", "Kubernetes", "PostgreSQL"],
      githubUrl: "#",
      features: [
        "Microservices Architecture",
        "Docker Containerization",
        "API Gateway",
        "Service Discovery",
        "Event-Driven Communication"
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-slate-800/5 to-navy/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-purple mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-navy mb-3">{project.title}</CardTitle>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-navy mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-purple/10 text-purple border-purple/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-navy mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-purple mr-2">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GitHub Link */}
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-purple text-purple hover:bg-purple hover:text-white"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Github size={16} />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
