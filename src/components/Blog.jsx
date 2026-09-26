import AnimatedSection from './AnimatedSection'
import { blog } from '../data/content'

export default function Blog() {
  return (
    <section className="py-24 md:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <AnimatedSection className="mb-14">
          <span className="text-xs font-medium text-ink/50 uppercase tracking-wide">{blog.eyebrow}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">{blog.title}</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {blog.posts.map((post, i) => (
            <AnimatedSection key={post.title} delay={0.08 * i}>
              <a href={post.href} className="group block">
                <div className="rounded-3xl overflow-hidden mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="block text-xs text-ink/50 mb-2">{post.category}</span>
                <h3 className="font-display font-bold text-xl leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
