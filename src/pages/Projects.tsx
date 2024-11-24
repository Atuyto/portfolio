import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "https://via.placeholder.com/600x400",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Project 2",
    description: "A brief description of project 2",
    tags: ["Next.js", "Node.js", "MongoDB"],
    image: "https://via.placeholder.com/600x400",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  // Add more projects as needed
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="page-transition min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary/10 text-primary mb-4">
            Portfolio
          </span>
          <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
          <p className="text-muted-foreground">
            A collection of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" /> Source
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;