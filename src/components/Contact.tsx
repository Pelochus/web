import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import Section from './Section';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" />,
      label: 'Email',
      value: 'anghflores@gmail.com',
      href: 'mailto:anghflores@gmail.com'
    },
    {
      icon: <Phone className="text-green-500" />,
      label: 'Phone',
      value: '+34 619 311 871',
      href: 'tel:+34619311871'
    },
    {
      icon: <Linkedin className="text-blue-600" />,
      label: 'LinkedIn',
      value: 'Angel Hurtado Flores',
      href: 'https://www.linkedin.com/in/angel-hurtado-flores/'
    },
    {
      icon: <Github className="text-slate-800" />,
      label: 'GitHub',
      value: 'Angel-HF',
      href: 'https://github.com/Pelochus'
    },
    {
      icon: <MapPin className="text-red-500" />,
      label: 'Location',
      value: 'Spain'
    }
  ];

  return (
    <Section id="contact" title="Contact">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {info.icon}
              <div>
                <h3 className="text-sm font-medium text-slate-500">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-lg text-slate-800">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Let's Connect!</h3>
          <p className="text-slate-600 mb-4">
            I'm always interested in new opportunities and collaborations. Feel free to reach out through any of the channels listed here.
          </p>
          <p className="text-slate-600 mb-4">
            Available for both full-time positions and freelance projects in embedded systems, low-level development, and computer engineering.
          </p>
          <p className="text-slate-600">
            I also enjoy contributing to open-source projects and the world of servers, including SysAdmin/DevOps related technologies.
          </p>
        </div>
      </div>
    </Section>
  );
}