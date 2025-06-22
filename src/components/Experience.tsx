import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Backend Team Lead/Senior .NET Developer",
      company: "Connected Analytics Limited",
      period: "November 2022 – Present",
      description: [
        "Led Project Management Efforts for Store Smart application, overseeing project phases from requirements gathering to deployment, improving application workflows by 20%",
        "Managed Cross-Functional Teams in Agile settings, coordinating with product, QA, and operations teams to translate business requirements into scalable technical solutions",
        "Designed and Implemented Enterprise-Grade Systems using .NET Core, EF Core, Dapper, RabbitMQ, SQL Server and Azure optimizing for security, scalability, and performance",
        "Authored Comprehensive Documentations detailing architectural decisions, design patterns, best practices and technical guidelines"
      ],
      achievements: [
        "Led deployment of Store Smart application, improving merchant payment workflows through POS and NFC integrations, resulting in a 45% boost in merchant sales",
        "Optimized backend processing by designing efficient database schemas and writing advanced queries, achieving a 40% reduction in query execution time"
      ],
      current: true
    },
    {
      title: "Senior .Net Developer",
      company: "Leadway Assurance Company Limited",
      period: "February 2020 – November 2022",
      description: [
        "Oversaw Software Development Life Cycle (SDLC), coordinating technical specifications, code reviews, and testing protocols",
        "Streamlined Backend Operations by managing project tasks focused on API integration with Citibank and improving response times by over 20%",
        "Implemented Project Management Best Practices to refine workflows and ensure on-time delivery in fast-paced environments"
      ],
      achievements: [
        "Successfully launched a compliance dashboard, reducing document processing times by 35%",
        "Improved system reliability and decreased downtime by 25% through strategic backend optimization and database indexing"
      ],
      current: false
    },
    {
      title: "Digital Banking Developer/ .Net Developer",
      company: "First City Monument Bank (FCMB)",
      period: "September 2018 – February 2020",
      description: [
        "Designed and developed RESTful APIs for digital banking platforms, enabling seamless integration with third-party financial services",
        "Enhanced digital wallet APIs for mobile and web applications, leading to a 15% increase in transaction processing efficiency",
        "Led the optimization of Treasury bill sales portals, improving transaction speeds and reducing errors by 25%"
      ],
      achievements: [],
      current: false
    },
    {
      title: "VP Infotech and Innovation/.NET Developer",
      company: "Codeplus Software Academy",
      period: "November 2015 – September 2018",
      description: [
        "Led Large-Scale Software Projects including ERP implementation, resulting in a 30% efficiency increase",
        "Mentored and Supervised Teams in Agile development, promoting collaboration and improving team output by 15%",
        "Implemented TDD and Code Review Practices across projects to enhance code quality and ensure robust, standards-compliant code"
      ],
      achievements: [],
      current: false
    },
    {
      title: "Technical Manager",
      company: "New Horizons Computer Learning Centers",
      period: "March 2012 – November 2015",
      description: [
        "Led the development of multiple desktop and web applications using Java, C#, and PHP, enhancing the efficiency of internal business processes by 40%",
        "Implemented SSRS-based report generation systems, reducing report generation time by 50%"
      ],
      achievements: [],
      current: false
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-navy/5 to-slate-800/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-purple mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className={`${exp.current ? 'border-purple shadow-lg' : 'border-gray-200'} hover:shadow-md transition-shadow duration-300 animate-fade-in`}>
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-navy mb-2">
                      {exp.title}
                    </CardTitle>
                    <h4 className="text-lg font-semibold text-purple">{exp.company}</h4>
                  </div>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <Badge variant={exp.current ? "default" : "secondary"} className={exp.current ? "bg-purple" : ""}>
                      {exp.period}
                    </Badge>
                    {exp.current && (
                      <Badge className="bg-green-500">Current</Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-navy mb-2">Responsibilities:</h5>
                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple mr-2">•</span>
                          <span className="text-gray-700">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {exp.achievements.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-navy mb-2">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700 font-medium">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
