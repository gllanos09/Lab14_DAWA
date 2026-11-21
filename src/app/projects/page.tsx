import { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora mi colección de proyectos de desarrollo web y aplicaciones',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Proyectos - Portafolio',
    description: 'Explora mi colección de proyectos de desarrollo web',
    images: ['/avatar.png'],
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="animate-fade-up">
        <SectionHeading
          as="h1"
          eyebrow="Portafolio"
          title="Mis proyectos"
          description="Una colección de proyectos en los que he trabajado, desde e-commerce hasta dashboards en tiempo real."
        />
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
