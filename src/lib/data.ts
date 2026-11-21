import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'vael',
    title: 'Vael',
    description:
      'Plataforma SaaS de reclutamiento inteligente con IA que automatiza todo el proceso de selección de candidatos.',
    image: '/projects/vael.svg',
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Gemini AI', 'AWS S3', 'Docker'],
    highlights: [
      'Análisis automático de CV con inteligencia artificial.',
      'Exámenes técnicos adaptativos según el perfil del candidato.',
      'Entrevistas por voz con análisis emocional.',
      'Ranking automático de candidatos para el reclutador.',
    ],
    githubUrl: 'https://github.com/Vael-Tesis/Vael',
    featured: true,
  },
  {
    slug: 'tetoca',
    title: 'TeToca',
    description:
      'App Android de inventario inteligente que detecta stock bajo y genera el pedido de reposición listo para enviar por WhatsApp.',
    image: '/projects/tetoca.svg',
    technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room', 'Retrofit', 'Firebase'],
    highlights: [
      'Detección automática de productos con stock bajo y aviso al dueño del negocio.',
      'Generación del pedido de reposición listo para enviar por WhatsApp.',
      'Gestión de productos y proveedores con persistencia local en Room.',
      'Integración con API de tipo de cambio mediante Retrofit.',
    ],
    githubUrl: 'https://github.com/gllanos09/TeToca',
    featured: true,
  },
  {
    slug: 'metro-lima',
    title: 'MetroLima',
    description: 'Aplicación de consulta del Metro de Lima para la terminal, desarrollada en Swift.',
    image: '/projects/metrolima.svg',
    technologies: ['Swift', 'CLI'],
    highlights: [
      'Consulta de información del Metro de Lima directamente desde la terminal.',
      'Aplicación de línea de comandos escrita en Swift.',
    ],
    githubUrl: 'https://github.com/gllanos09/MetroLima',
    featured: false,
  },
];

export const personalInfo = {
  name: 'Gabriel Llanos',
  title: 'Full Stack Developer',
  description: 'Desarrollador apasionado por crear experiencias web excepcionales',
  email: 'angel.llanos@tecsup.edu.pe',
  github: 'https://github.com/gllanos09',
  linkedin: 'https://linkedin.com/in/gllanos',
  // En Vercel define la variable NEXT_PUBLIC_SITE_URL con tu dominio final
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  avatar: '/avatar.png',
};
