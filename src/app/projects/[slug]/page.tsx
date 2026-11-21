import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { ArrowLeftIcon, ExternalIcon, GitHubIcon } from '@/components/icons';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  // Las redes sociales no aceptan SVG como og:image; en ese caso usamos el avatar
  const ogImage = project.image.endsWith('.svg') ? '/avatar.png' : project.image;

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [ogImage],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [ogImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
      >
        <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Volver a proyectos
      </Link>

      <article className="mt-8 animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Caso de estudio
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent to-accent-2 px-6 py-3 font-semibold text-white shadow-lg shadow-accent/25"
            >
              Ver demo
              <ExternalIcon />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <GitHubIcon />
              Ver código
            </a>
          )}
        </div>

        <div className="relative mt-12 aspect-video overflow-hidden rounded-3xl border border-line shadow-2xl shadow-accent/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            preload
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <section className="mt-12 rounded-2xl border border-line bg-surface/70 p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-white">Características principales</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-slate-300">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-6 rounded-2xl border border-line bg-surface/70 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold text-white">Tecnologías utilizadas</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-blue-200"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
