import { ArrowRight, Globe, Code, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Web Development",
      description: "Creating responsive and intuitive web applications using modern frameworks and best practices."
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Frontend Expertise",
      description: "Building beautiful user interfaces with React, TypeScript, and modern CSS frameworks."
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Backend Development",
      description: "Developing robust server-side solutions and APIs for scalable applications."
    }
  ];

  return (
    <div className="page-transition min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Creative</span>{" "}
            <span className="text-foreground">Developer</span>
          </h1>
          <div className="space-y-4 mb-12">
            <p className="text-xl text-muted-foreground">
              Transforming ideas into elegant, efficient, and scalable solutions.
            </p>
            <p className="text-xl text-muted-foreground">
              Specialized in modern web development and software engineering.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-lg p-8 hover:border-primary/50 transition-colors"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;