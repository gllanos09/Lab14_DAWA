'use server';

export type ContactState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const subject = String(formData.get('subject') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  // Validación en el servidor
  const errors: ContactState['errors'] = {};
  if (name.length < 2) errors.name = 'Ingresa tu nombre (mínimo 2 caracteres).';
  if (!EMAIL_REGEX.test(email)) errors.email = 'Ingresa un correo válido.';
  if (subject.length < 3) errors.subject = 'Ingresa un asunto (mínimo 3 caracteres).';
  if (message.length < 10) errors.message = 'El mensaje debe tener al menos 10 caracteres.';

  if (Object.keys(errors).length > 0) {
    return { success: false, message: 'Revisa los campos del formulario.', errors };
  }

  // Aquí se podría enviar el correo (Resend, Nodemailer, etc.) o guardarlo en una BD.
  console.log('Nuevo mensaje de contacto:', { name, email, subject, message });

  return {
    success: true,
    message: `¡Gracias ${name}! Tu mensaje fue enviado correctamente. Te responderé pronto.`,
  };
}
