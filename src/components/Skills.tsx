import Section from './Section';
import { Code, Terminal, Network, MessageSquare } from 'lucide-react';

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

function SkillCategory({ icon, title, skills }: SkillCategoryProps) {
  return (
    <div className="skill-card mb-4">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm hover:from-blue-100 hover:to-indigo-100 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-2">
        <SkillCategory
          icon={<Code className="text-blue-600" />}
          title="Programming"
          skills={['C++20', 'C', 'Python', 'Rust', 'Java']}
        />
        <SkillCategory
          icon={<Terminal className="text-green-600" />}
          title="DevOps/SysAdmin"
          skills={['Linux', 'Bash', 'Docker', 'Ansible', 'Git', 'CMake']}
        />
        <SkillCategory
          icon={<Network className="text-purple-600" />}
          title="Embedded & AI"
          skills={['Embedded Linux', 'FreeRTOS', 'NPU/Edge AI', 'Agentic Workflows']}
        />
        <SkillCategory
          icon={<MessageSquare className="text-orange-600" />}
          title="Soft Skills"
          skills={['Communication', 'Problem Solving', 'Critical Thinking', 'Teamwork', 'Adaptability']}
        />
      </div>
    </Section>
  );
}