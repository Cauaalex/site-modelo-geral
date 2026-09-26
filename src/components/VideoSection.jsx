import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { video } from '../data/content'

export default function VideoSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <AnimatedSection className="text-center mb-12">
          <span className="text-xs font-medium text-ink/50 uppercase tracking-wide">{video.eyebrow}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 max-w-2xl mx-auto">{video.title}</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="relative rounded-3xl overflow-hidden h-[45vh] md:h-[70vh]">
          <motion.img
            src={video.thumbnail}
            alt="Capa do vídeo institucional"
            style={{ y }}
            className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover"
          />
          <div className="absolute inset-0 bg-ink/30" />

          <button
            aria-label={video.ctaLabel}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-4 text-paper"
          >
            <span className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-paper/95 text-ink flex items-center justify-center group-hover:scale-105 transition-transform">
              <Play size={28} className="translate-x-0.5" fill="currentColor" />
            </span>
            <span className="text-sm font-medium tracking-wide">{video.ctaLabel}</span>
          </button>
        </AnimatedSection>
      </div>
    </section>
  )
}
