import { Check } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { pricing } from '../data/content'

export default function Pricing() {
  return (
    <section className="py-24 md:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <AnimatedSection className="text-center mb-14">
          <span className="text-xs font-medium text-ink/50 uppercase tracking-wide">{pricing.eyebrow}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 max-w-xl mx-auto">{pricing.title}</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {pricing.plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={0.1 * i}>
              <div
                className={`h-full rounded-3xl border p-8 md:p-10 flex flex-col ${
                  plan.highlighted ? 'border-ink bg-ink text-paper' : 'border-line bg-paper text-ink'
                }`}
              >
                <span className="text-sm font-medium opacity-70">{plan.name}</span>
                <div className="flex items-end gap-1 mt-4">
                  <span className="font-display font-extrabold text-4xl md:text-5xl">{plan.price}</span>
                  <span className="text-sm opacity-60 mb-1">{plan.period}</span>
                </div>
                <p className={`text-sm mt-4 ${plan.highlighted ? 'text-paper/70' : 'text-ink/60'}`}>
                  {plan.description}
                </p>

                <a
                  href="#contato"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-medium transition-opacity hover:opacity-85 ${
                    plan.highlighted ? 'bg-paper text-ink' : 'bg-ink text-paper'
                  }`}
                >
                  {plan.cta}
                </a>

                <ul className="mt-8 flex flex-col gap-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          plan.highlighted ? 'bg-paper/15' : 'bg-ink/10'
                        }`}
                      >
                        <Check size={12} />
                      </span>
                      <span className={plan.highlighted ? 'text-paper/85' : 'text-ink/75'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
