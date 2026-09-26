import { ArrowUpRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { portfolio } from '../data/content'

export default function Portfolio() {
  return (
    <section id="trabalhos" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <AnimatedSection>
            <span className="text-xs font-medium text-ink/50 uppercase tracking-wide">{portfolio.eyebrow}</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 max-w-xl">{portfolio.title}</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-sm text-ink/60 max-w-xs">{portfolio.subtitle}</p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {portfolio.projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={0.05 * i}>
              <a
                href="#"
                className="group relative block aspect-[4/5] md:aspect-[4/4.4] rounded-3xl overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 ${
                    project.dark ? 'bg-ink/35' : 'bg-ink/15'
                  } group-hover:bg-ink/45 transition-colors duration-500`}
                />

                <div className="absolute inset-0 flex items-end justify-between p-7">
                  <span className="text-paper">
                    <span className="block font-display font-bold text-2xl md:text-3xl">{project.name}</span>
                    <span className="block text-xs text-paper/70 mt-1">{project.category}</span>
                  </span>

                  <span className="w-12 h-12 rounded-full bg-paper text-ink flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
