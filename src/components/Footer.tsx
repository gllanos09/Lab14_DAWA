import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons';

export default function Footer() {
  const socials = [
    { href: personalInfo.github, label: 'GitHub', icon: GitHubIcon, external: true },
    { href: personalInfo.linkedin, label: 'LinkedIn', icon: LinkedInIcon, external: true },
    { href: `mailto:${personalInfo.email}`, label: 'Email', icon: MailIcon, external: false },
  ];

  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
        <div className="text-center md:text-left">
          <Link href="/" className="font-display text-lg font-semibold text-white">
            {personalInfo.name}
          </Link>
          <p className="mt-1 text-sm text-slate-400">
            © {new Date().getFullYear()} · {personalInfo.title}. Todos los derechos reservados.
          </p>
        </div>
        <ul className="flex gap-3">
          {socials.map(({ href, label, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-slate-400 transition hover:border-accent/60 hover:text-white"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
