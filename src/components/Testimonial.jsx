import AnimatedSection from './AnimatedSection'
import { testimonial } from '../data/content'

export default function Testimonial() {
  return (
    <section className="py-24 md:py-32 border-y border-line">
      <div className="max-w-content mx-auto px-6 md:px-10 text-center">
        <AnimatedSection className="max-w-3xl mx-auto">
          <p className="font-display font-medium text-3xl md:text-5xl leading-tight">
            “{testimonial.quote}”
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="flex flex-col items-center gap-4 mt-10">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-sm">{testimonial.name}</p>
            <p className="text-sm text-ink/50">{testimonial.role}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
