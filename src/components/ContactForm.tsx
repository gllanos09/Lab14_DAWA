'use client';

import { useActionState } from 'react';
import { sendContactMessage, type ContactState } from '@/app/contact/actions';

const initialState: ContactState = { success: false, message: '' };

const inputClass =
  'w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200';

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  if (state.success) {
    return (
      <div
        className="rounded-lg bg-green-50 border border-green-200 p-6 text-green-800"
        role="status"
      >
        {state.message}
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.message && (
        <p className="rounded-lg bg-red-50 border border-red-200 p-3 text-red-700" role="alert">
          {state.message}
        </p>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        {state.errors?.name && <p className="mt-1 text-sm text-red-600">{state.errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Correo electrónico
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        {state.errors?.email && <p className="mt-1 text-sm text-red-600">{state.errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Asunto
        </label>
        <input id="subject" name="subject" type="text" required className={inputClass} />
        {state.errors?.subject && <p className="mt-1 text-sm text-red-600">{state.errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClass} />
        {state.errors?.message && <p className="mt-1 text-sm text-red-600">{state.errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
      >
        {pending ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
}
