import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { brand, nav } from '../data/content'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-paper/70 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-content mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="font-display font-bold text-lg tracking-tight lowercase">
            {brand.nameWithMark}
          </a>

          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-ink/70 hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="w-11 h-11 rounded-full bg-ink text-paper flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink text-paper flex flex-col"
          >
            <div className="max-w-content mx-auto w-full px-6 md:px-10 h-20 flex items-center justify-between">
              <span className="font-display font-bold text-lg lowercase">{brand.nameWithMark}</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="w-11 h-11 rounded-full bg-paper text-ink flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center max-w-content mx-auto w-full px-6 md:px-10">
              {nav.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="group flex items-center justify-between border-b border-paper/15 py-6 md:py-8"
                >
                  <span className="font-display font-bold text-4xl md:text-6xl lowercase group-hover:pl-3 transition-all">
                    {item.label}
                  </span>
                  <ArrowUpRight
                    size={32}
                    className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                  />
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
