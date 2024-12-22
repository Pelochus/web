import { FileDown } from 'lucide-react';
import Section from './Section';

export default function Resume() {
  return (
    <Section id="resume" title="Resume">
      <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Download my CV as a PDF</h3>
            <p className="text-slate-600">Get a detailed overview of my experience and skills</p>
          </div>
          <a
            href="/CV.pdf"
            download
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <FileDown size={20} />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </Section>
  );
}