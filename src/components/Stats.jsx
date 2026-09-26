import AnimatedSection from './AnimatedSection'
import { stats } from '../data/content'

export default function Stats() {
  return (
    <section className="py-20 md:py-28 border-b border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={0.06 * i}>
              <span className="block font-display font-extrabold text-5xl md:text-6xl tracking-tight">
                {stat.value}
              </span>
              <span className="block text-sm text-ink/55 mt-3 max-w-[16ch]">{stat.label}</span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
