import Section from './Section';
import { GraduationCap } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

function EducationItem({ degree, institution, period, details }: EducationItemProps) {
  return (
    <div className="mb-6 last:mb-0 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start gap-3">
        <div className="mt-1">
          <GraduationCap className="text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{degree}</h3>
          <p className="text-lg text-slate-700">{institution}</p>
          <p className="text-sm text-slate-600">{period}</p>
          {details && <p className="mt-2 text-slate-700">{details}</p>}
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <Section id="education" title="Education">
      <EducationItem
        degree="Master's degree in Data Science & Computer Engineering"
        institution="Universidad de Granada"
        period="2024 – 2025"
      />
      <EducationItem
        degree="Bachelor's degree in Computer Science & Engineering"
        institution="Universidad de Granada"
        period="2020 – 2024"
        details="Specialization in Computer Engineering"
      />
    </Section>
  );
}