import { User, Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-white p-1">
            <img 
              src="/pfp.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Ángel Hurtado Flores</h1>
            <p className="text-xl text-slate-300">Computer Engineer</p>
          </div>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-4">
          <ContactLink icon={<Mail size={18} />} href="mailto:anghflores@gmail.com" text="anghflores@gmail.com" />
          <ContactLink icon={<Phone size={18} />} href="tel:+34619311871" text="+34 619 311 871" />
          <ContactLink icon={<Linkedin size={18} />} href="https://www.linkedin.com/in/angel-hurtado-flores/" text="Angel Hurtado Flores" />
          <ContactLink icon={<Github size={18} />} href="https://github.com/Pelochus" text="Angel-HF" />
        </div>
      </div>
    </header>
  );
}

function ContactLink({ icon, href, text }: { icon: React.ReactNode; href: string; text: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-slate-700/50 hover:bg-slate-700 transition-colors px-4 py-2 rounded-full text-sm"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}