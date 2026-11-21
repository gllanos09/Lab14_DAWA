import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import SectionHeading from '@/components/SectionHeading';
import { ArrowRightIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
  alternates: {
    canonical: '/about',
  },
};

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['JavaScript / TypeScript', 'React & Next.js', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js & Express', 'PostgreSQL', 'MongoDB', 'APIs REST'],
  },
  {
    title: 'Herramientas',
    skills: ['Git & GitHub', 'Docker', 'AWS', 'Vercel'],
  },
];

const values = [
  {
    title: 'Código limpio',
    text: 'Escribo código legible, mantenible y fácil de escalar.',
  },
  {
    title: 'Rendimiento',
    text: 'Optimizo imágenes, carga diferida y Core Web Vitals.',
  },
  {
    title: 'SEO',
    text: 'Meta tags dinámicos, sitemap y robots para mejor posicionamiento.',
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-linear-to-br from-accent/30 to-accent-2/20 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line">
            <div className="relative aspect-square">
              <Image
                src={personalInfo.avatar}
                alt={`Avatar de ${personalInfo.name}`}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 384px, 420px"
              />
            </div>
          </div>
        </div>

        <div className="animate-fade-up">
          <SectionHeading as="h1" eyebrow="Sobre mí" title={`¡Hola! Soy ${personalInfo.name}`} />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-400">
            <p>
              Soy desarrollador full stack y estudiante de desarrollo de
              software, apasionado por crear experiencias web modernas,
              rápidas y bien construidas.
            </p>
            <p>
              Mi enfoque está en escribir código limpio, mantenible y
              eficiente, aplicando buenas prácticas de rendimiento y SEO para
              que cada proyecto se vea bien y también se encuentre fácilmente.
            </p>
            <p>
              Cuando no estoy programando, me gusta aprender nuevas
              tecnologías, explorar proyectos de código abierto y mejorar mis
              habilidades día a día.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-line bg-surface/70 p-5">
                <h2 className="font-display font-semibold text-white">{value.title}</h2>
                <p className="mt-2 text-sm text-slate-400">{value.text}</p>
              </div>
            ))}
          </div>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-white">Habilidades técnicas</h2>
            <div className="mt-6 space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    {group.title}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-line bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/50"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <Link
            href="/contact"
            className="group mt-12 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent to-accent-2 px-7 py-3 font-semibold text-white shadow-lg shadow-accent/25"
          >
            Trabajemos juntos
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
