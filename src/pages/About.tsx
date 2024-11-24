const About = () => {
  const softSkills = [
    "Team Leadership",
    "Problem Solving",
    "Communication",
    "Adaptability",
    "Time Management",
    "Creativity"
  ];

  const hardSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "REST APIs"
  ];

  return (
    <div className="page-transition min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary/10 text-primary mb-4">
            About Me
          </span>
          <h1 className="text-4xl font-bold mb-6">Who am I?</h1>
          
          <div className="glass-card rounded-lg p-6 mb-8">
            <p className="text-lg leading-relaxed mb-6">
              I'm a passionate developer with a love for creating beautiful and functional web experiences. With several years of experience in web development, I specialize in building modern applications using cutting-edge technologies.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass-card rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Soft Skills</h2>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-accent/20 text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Hard Skills</h2>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Experience</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-medium">Senior Developer</h3>
                <p className="text-muted-foreground">Company Name • 2020-Present</p>
              </li>
              <li>
                <h3 className="font-medium">Full Stack Developer</h3>
                <p className="text-muted-foreground">Company Name • 2018-2020</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;