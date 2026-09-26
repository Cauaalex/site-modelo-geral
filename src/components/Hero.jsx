import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { brand, hero } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="pt-32 md:pt-44 pb-10">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <AnimatedSection className="max-w-md">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-ink/60 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              {hero.eyebrow}
            </span>
            <p className="font-display text-2xl md:text-3xl font-bold leading-snug">
              {hero.headline}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="hidden md:block">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-7 py-4 text-sm font-medium hover:opacity-85 transition-opacity"
            >
              Iniciar um projeto
            </a>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15} className="mt-12 rounded-3xl overflow-hidden">
          <img
            src={hero.image}
            alt="Projeto em destaque da agência"
            className="w-full h-[50vh] md:h-[65vh] object-cover"
          />
        </AnimatedSection>

        <div className="mt-10 md:mt-14 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold lowercase leading-[0.85] text-[18vw] md:text-[13vw] tracking-tighter -mx-1"
          >
            {brand.name}
          </motion.h1>
        </div>

        <AnimatedSection delay={0.3} className="flex items-center justify-between border-t border-line pt-6 mt-4">
          <span className="text-xs text-ink/50">{hero.scrollLabel}</span>
          <ArrowDown size={16} className="text-ink/50 animate-bounce" />
        </AnimatedSection>
      </div>
    </section>
  )
}
