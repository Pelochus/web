import Section from './Section';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  links: {
    demo?: string;
    github?: string;
  };
  tags: string[];
}

function Project({ title, description, image, links, tags }: ProjectProps) {
  return (
    <div className="project-card">
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-700 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ExternalLink size={16} />
              View Demo
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-700 hover:text-slate-900 transition-colors"
            >
              <Github size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        <Project
          title="Rockobot"
          description="A robot built for a university course. Won the class tournament and received an honors grade."
          image="/rockobot.jpg"
          links={{
            demo: "https://blog.arduino.cc/2023/09/29/can-you-smell-what-the-rockobot-is-cooking/"
          }}
          tags={["Arduino", "Robotics", "C++", "Electronics"]}
        />
        <Project
          title="ezrknpu"
          description="Automated installation of libraries and programs for the Rockchip RK3588 SoC. Accelerates LLMs like ChatGPT on SBCs under 10W of power."
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
          links={{
            github: "https://github.com/Pelochus/ezrknpu"
          }}
          tags={["Linux", "AI/ML", "Automation", "Python"]}
        />
      </div>
    </Section>
  );
}