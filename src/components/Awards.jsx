import AnimatedSection from './AnimatedSection'
import { awards } from '../data/content'

export default function Awards() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <AnimatedSection className="mb-12">
          <span className="text-xs font-medium text-ink/50 uppercase tracking-wide">{awards.eyebrow}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">{awards.title}</h2>
        </AnimatedSection>

        <div className="border-t border-line">
          {awards.items.map((item, i) => (
            <AnimatedSection key={`${item.award}-${item.year}`} delay={0.04 * i}>
              <div className="flex items-center justify-between gap-6 py-6 border-b border-line">
                <span className="font-display font-bold text-lg md:text-xl w-16 shrink-0">{item.year}</span>
                <span className="flex-1 font-medium text-base md:text-lg">{item.award}</span>
                <span className="text-sm text-ink/50 text-right shrink-0">{item.category}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
