import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import { personalInfo } from '@/lib/data';
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name}, ${personalInfo.title}. Envíame un mensaje para proyectos, colaboraciones u oportunidades laborales.`,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `Contacto | ${personalInfo.name}`,
    description: `Ponte en contacto con ${personalInfo.name} para proyectos y colaboraciones.`,
    url: `${personalInfo.siteUrl}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `Contacto | ${personalInfo.name}`,
    description: `Ponte en contacto con ${personalInfo.name} para proyectos y colaboraciones.`,
  },
};

export default function ContactPage() {
  const channels = [
    {
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: MailIcon,
      external: false,
    },
    {
      label: 'GitHub',
      value: personalInfo.github.replace('https://', ''),
      href: personalInfo.github,
      icon: GitHubIcon,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: personalInfo.linkedin.replace('https://', ''),
      href: personalInfo.linkedin,
      icon: LinkedInIcon,
      external: true,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="animate-fade-up">
          <SectionHeading
            as="h1"
            eyebrow="Contacto"
            title="Hablemos de tu próximo proyecto"
            description="¿Tienes una idea, una propuesta o quieres colaborar? Escríbeme y te responderé lo antes posible."
          />

          <ul className="mt-10 space-y-3">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-surface/70 p-4 transition hover:border-accent/50"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-slate-400">{label}</span>
                    <span className="block truncate font-medium text-white group-hover:text-blue-200">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <section className="rounded-3xl border border-line bg-surface/80 p-6 shadow-2xl shadow-accent/5 sm:p-10">
          <h2 className="font-display text-2xl font-bold text-white">Envíame un mensaje</h2>
          <p className="mt-2 text-sm text-slate-400">Todos los campos son obligatorios.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
