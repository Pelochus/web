import Section from './Section';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  skills: string[];
}

function ExperienceItem({ title, company, location, period, skills }: ExperienceItemProps) {
  return (
    <div className="mb-6 last:mb-0 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-lg text-slate-700 mb-2">{company}</p>
      <div className="flex gap-4 text-sm text-slate-600 mb-2">
        <span className="flex items-center gap-1">
          <Calendar size={16} />
          {period}
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={16} />
          {location}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ExperienceItem
        title="Embedded Software Engineer"
        company="Safran Electronics & Defense"
        location="Granada, Spain"
        period="09/2024 – Present"
        skills={['Embedded C', 'Embedded Linux', 'Time synchronization protocols (White Rabbit, PTP, NTP)']}
      />
      <ExperienceItem
        title="Research Assistant"
        company="ICAR Department, CITIC — Universidad de Granada"
        location="Granada, Spain"
        period="04/2024 – 09/2024"
        skills={['Swarm robotics', 'Low-level programming', 'Drone control', 'Control algorithms (GVF)']}
      />
    </Section>
  );
}