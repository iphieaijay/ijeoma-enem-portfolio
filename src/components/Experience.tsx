import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Backend Team Lead/Senior .NET Developer",
      company: "Connected Analytics Limited",
      period: "November 2022 – Present",
      description: [
        "Lead a team of 10+ engineers in the design, development, and deployment of fintech SaaS products, delivering scalable and secure applications with a 20% performance improvement.",
        "Led the development of B2C fintech solutions, integrating Restful API and modern UI/UX designs, increasing user retention by 25%.",
        "Designed and implemented cloud-based microservices using .NET Core and Azure, ensuring 99.9% application uptime.",
        "Mentored junior developers, fostering a culture of technical excellence and collaboration.",
        "Streamlined CI/CD processes, reducing deployment times by 30% and enhancing development efficiency."
      ],
      achievements: [
        "Led deployment of Store Smart application API Architecture, improving merchant payment workflows through POS and NFC integrations, resulting in a 45% boost in merchant sales",
        "Optimized backend processing by designing efficient database schemas and writing advanced queries, achieving a 40% reduction in query execution time"
      ],
      current: true
    },
    {
      title: "Senior .Net Developer",
      company: "Leadway Assurance Company Limited",
      period: "February 2020 – November 2022",
      description: [
        "Developed and maintained secure B2C insurance applications using C#, .NET Framework, and Microsoft SQL Server.",
        "Implemented design patterns and best practices to optimize application scalability and reliability.",
        "Collaborated with cross-functional teams to launch new features that improved customer engagement by 20%.",
        "Enhanced API performance and documentation, reducing integration times for third-party developers by 40%.",
        "Optimized legacy applications performance, reducing system downtime by 25%."
      ],
      achievements: [
        "Successfully launched a Compliance Reporting Dashboard that streamlined documentation workflows, resulting in a 35% reduction in processing time and improved regulatory reporting accuracy.",
        "Successfully developed and deployed an internal bidding application for auctioning company-owned assets, streamlining the disposal process and reducing asset liquidation time by 60%, while increasing internal participation by 40%.",
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
