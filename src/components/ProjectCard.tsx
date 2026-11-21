import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import { ArrowRightIcon } from './icons';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/70 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10"
    >
      <div className="relative aspect-16/10 overflow-hidden">
        {/* Imágenes con lazy loading */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/10 to-transparent" />
        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            Destacado
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-line bg-white/5 px-2 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded-md border border-line bg-white/5 px-2 py-1 text-xs text-slate-300">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
          Ver proyecto
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
