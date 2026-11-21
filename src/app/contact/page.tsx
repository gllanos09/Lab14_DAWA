import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { personalInfo } from '@/lib/data';

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
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
        <p className="text-lg text-gray-600 mb-10">
          ¿Tienes un proyecto en mente o quieres colaborar? Escríbeme y te
          responderé lo antes posible.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <aside className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Email</h2>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-blue-600 hover:underline break-all"
              >
                {personalInfo.email}
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Redes</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <section className="md:col-span-2 bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíame un mensaje</h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
}
