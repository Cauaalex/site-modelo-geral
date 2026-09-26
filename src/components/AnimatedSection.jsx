import { motion } from 'framer-motion'

/**
 * Envolve qualquer bloco de conteúdo com uma animação de fade + slide-up
 * disparada quando o elemento entra na viewport durante o scroll.
 *
 * Props:
 * - delay: atraso em segundos antes da animação começar (útil para escalonar itens de uma lista)
 * - y: distância em px que o elemento percorre verticalmente
 * - as: tag/elemento motion a ser usado (padrão: div)
 */
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  y = 32,
  once = true,
  amount = 0.2,
  as = 'div',
  ...props
}) {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
