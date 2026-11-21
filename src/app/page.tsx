import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from '@/components/icons';

const stack = [
  'Next.js',
  'React',
  'TypeScript',
  'Python',
  'FastAPI',
  'Kotlin',
  'PostgreSQL',
  'Docker',
  'AWS',
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero */}
      <section className="grid items-center gap-12 pb-20 pt-14 md:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-28">
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 text-sm text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Disponible para nuevos proyectos
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hola, soy <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          <p className="mt-4 font-display text-xl text-slate-300 sm:text-2xl">
            {personalInfo.title}
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400 lg:mx-0">
            {personalInfo.description}. Construyo aplicaciones web rápidas,
            accesibles y optimizadas para buscadores con Next.js y TypeScript.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-accent to-accent-2 px-7 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition hover:shadow-accent/40"
            >
              Ver proyectos
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-line bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contáctame
            </Link>
          </div>

          <div className="mt-8 flex justify-center gap-3 lg:justify-start">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-line text-slate-400 transition hover:border-accent/60 hover:text-white">
              <GitHubIcon />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-line text-slate-400 transition hover:border-accent/60 hover:text-white">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="grid h-11 w-11 place-items-center rounded-full border border-line text-slate-400 transition hover:border-accent/60 hover:text-white">
              <MailIcon />
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:150ms] lg:max-w-md">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-accent/40 to-accent-2/30 blur-3xl" aria-hidden="true" />
          <div className="relative animate-float rounded-[2rem] bg-linear-to-br from-accent via-accent-2 to-accent p-[2px] shadow-2xl shadow-accent/20">
            <div className="relative aspect-square overflow-hidden rounded-[calc(2rem-2px)] bg-surface">
              <Image
                src={personalInfo.avatar}
                alt={`Avatar de ${personalInfo.name}`}
                fill
                preload
                className="object-cover"
                sizes="(max-width: 1024px) 384px, 448px"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-2 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-6">
            <p className="text-xs text-slate-400">Especialidad</p>
            <p className="font-display text-sm font-semibold text-white">Next.js · React</p>
          </div>
          <div className="absolute -right-2 -top-4 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur sm:-right-6">
            <p className="text-xs text-slate-400">Enfoque</p>
            <p className="font-display text-sm font-semibold text-white">SEO & Rendimiento</p>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section aria-label="Tecnologías" className="border-y border-line py-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-400">
          {stack.map((tech) => (
            <li key={tech} className="font-display text-sm font-medium tracking-wide sm:text-base">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* Proyectos destacados */}
      <section className="py-20 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Portafolio"
            title="Proyectos destacados"
            description="Una selección de trabajos donde combino diseño, rendimiento y buenas prácticas."
          />
          <Link href="/projects" className="group inline-flex shrink-0 items-center gap-2 font-medium text-accent hover:text-white">
            Ver todos
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-linear-to-br from-surface-2 to-surface p-10 text-center sm:p-14">
          <div className="absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
          <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Conversemos sobre cómo puedo ayudarte a construirlo.
          </p>
          <Link
            href="/contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-ink transition hover:bg-slate-200"
          >
            Escríbeme
            <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}
