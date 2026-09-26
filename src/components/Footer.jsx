import { brand, footer } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-ink text-paper pt-16 md:pt-24 pb-10">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-10 md:gap-6 pb-16 border-b border-paper/15">
          <div className="md:col-span-1">
            <p className="text-paper/50 text-sm max-w-[24ch]">
              Agência de design e tecnologia criando marcas com propósito e cuidado.
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <span className="text-xs font-medium text-paper/40 uppercase tracking-wide">{col.title}</span>
              <ul className="flex flex-col gap-3 mt-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="font-display font-extrabold lowercase leading-[0.85] text-[16vw] md:text-[10vw] tracking-tighter pt-10 pb-6">
          {brand.name}
        </h2>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-paper/40">
          <span>{footer.legal}</span>
          <span>Feito com cuidado, do conceito ao código.</span>
        </div>
      </div>
    </footer>
  )
}
