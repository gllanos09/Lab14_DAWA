'use client';

import { useActionState } from 'react';
import { sendContactMessage, type ContactState } from '@/app/contact/actions';

const initialState: ContactState = { success: false, message: '' };

const inputClass =
  'w-full rounded-xl border border-line bg-ink/60 px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30';

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  if (state.success) {
    return (
      <div
        className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-200"
        role="status"
      >
        {state.message}
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.message && (
        <p className="rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200" role="alert">
          {state.message}
        </p>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
          Nombre
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        {state.errors?.name && <p className="mt-1 text-sm text-red-300">{state.errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
          Correo electrónico
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        {state.errors?.email && <p className="mt-1 text-sm text-red-300">{state.errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
          Asunto
        </label>
        <input id="subject" name="subject" type="text" required className={inputClass} />
        {state.errors?.subject && <p className="mt-1 text-sm text-red-300">{state.errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
          Mensaje
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClass} />
        {state.errors?.message && <p className="mt-1 text-sm text-red-300">{state.errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-linear-to-r from-accent to-accent-2 px-6 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition hover:shadow-accent/40 disabled:opacity-60"
      >
        {pending ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
}
