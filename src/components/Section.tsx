interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">{title}</h2>
      {children}
    </section>
  );
}