import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { services } from '../data/content'

export default function Services() {
  const [active, setActive] = useState(0)
  const activeItem = services.items[active]

  return (
    <section id="servicos" className="py-24 md:py-32 bg-ink text-paper">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <AnimatedSection className="mb-14">
          <span className="text-xs font-medium text-paper/50 uppercase tracking-wide">{services.eyebrow}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">{services.title}</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            {services.items.map((item, i) => {
              const isActive = active === i
              return (
                <AnimatedSection key={item.number} delay={0.05 * i}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="w-full text-left border-b border-paper/15 py-6 md:py-7 group"
                  >
                    <span
                      className={`font-display font-bold text-3xl md:text-5xl transition-colors duration-300 ${
                        isActive ? 'text-paper' : 'text-paper/30 group-hover:text-paper/60'
                      }`}
                    >
                      {item.title}{' '}
                      <sup
                        className={`text-base md:text-lg font-medium not-italic align-super ml-1 ${
                          isActive ? 'text-accent' : 'text-paper/30'
                        }`}
                      >
                        ({item.number})
                      </sup>
                    </span>

                    {/* Descrição + imagem inline, visível apenas em telas pequenas */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="md:hidden overflow-hidden"
                        >
                          <div className="pt-5 pb-1">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-40 object-cover rounded-2xl mb-4"
                            />
                            <p className="text-sm text-paper/60 leading-relaxed">{item.description}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </AnimatedSection>
              )
            })}
          </div>

          {/* Painel lateral, visível apenas em telas médias/grandes */}
          <div className="hidden md:block sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.number}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-64 object-cover rounded-3xl mb-6"
                />
                <span className="text-xs font-medium text-paper/50 uppercase tracking-wide">
                  {activeItem.title}
                </span>
                <p className="font-medium text-lg mt-2 text-paper/90 leading-relaxed max-w-sm">
                  {activeItem.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
