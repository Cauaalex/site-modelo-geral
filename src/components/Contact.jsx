import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import { contact, socials } from '../data/content'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ligue este ponto ao seu backend, serviço de email ou endpoint de formulário.
    setSent(true)
  }

  return (
    <section id="contato" className="grid md:grid-cols-2 min-h-[85vh]">
      {/* Lado esquerdo: formulário */}
      <div className="bg-mist flex items-center px-6 md:px-16 py-20">
        <AnimatedSection className="w-full max-w-md">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">{contact.formTitle}</h2>

          {sent ? (
            <p className="text-ink/70 text-sm">
              Mensagem enviada. Obrigado pelo contato — responderemos em breve.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <label className="flex flex-col gap-2 text-sm font-medium">
                Seu nome <span className="text-accent">*</span>
                <input
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="rounded-xl bg-paper border border-line px-4 py-3.5 text-sm font-normal placeholder:text-ink/35 focus:border-ink transition-colors"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium">
                Endereço de email <span className="text-accent">*</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@exemplo.com"
                  className="rounded-xl bg-paper border border-line px-4 py-3.5 text-sm font-normal placeholder:text-ink/35 focus:border-ink transition-colors"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium">
                Mensagem <span className="text-accent">*</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem"
                  className="rounded-xl bg-paper border border-line px-4 py-3.5 text-sm font-normal placeholder:text-ink/35 focus:border-ink transition-colors resize-none"
                />
              </label>

              <button
                type="submit"
                className="mt-2 rounded-full bg-ink text-paper py-4 text-sm font-medium hover:opacity-85 transition-opacity"
              >
                Enviar
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>

      {/* Lado direito: informações de contato */}
      <div className="bg-ink text-paper flex items-center px-6 md:px-16 py-20">
        <AnimatedSection delay={0.1} className="w-full max-w-md">
          <span className="text-xs font-medium text-paper/50 uppercase tracking-wide">{contact.eyebrow}</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl mt-3 mb-10 leading-[0.95]">
            {contact.title}
          </h2>

          <div className="flex flex-col divide-y divide-paper/15 border-t border-b border-paper/15">
            <p className="py-4 font-medium text-lg">{contact.phone}</p>
            {contact.emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="py-4 text-paper/70 hover:text-paper transition-colors">
                {email}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-8 mt-8">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-paper/70 hover:text-paper border-b border-transparent hover:border-paper transition-colors pb-0.5"
              >
                {social.label}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
