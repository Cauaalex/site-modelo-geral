// ============================================================================
// CONTEÚDO DO SITE
// Edite os valores abaixo para trocar textos, imagens e links sem precisar
// mexer nos componentes. Cada seção da página consome um destes arrays/objetos.
// ============================================================================

export const brand = {
  name: 'suamarca',
  nameWithMark: 'suamarca®',
}

export const nav = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Trabalhos', href: '#trabalhos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
]

export const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'X.com', href: 'https://x.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
]

export const hero = {
  eyebrow: 'Disponível para novos projetos',
  headline: 'Criando narrativas visuais que falam ao coração das marcas.',
  image: 'https://picsum.photos/seed/hero-agency/1200/1400',
  scrollLabel: 'Role para ver mais',
}

export const portfolio = {
  eyebrow: 'Trabalhos selecionados',
  title: 'Projetos de que nos orgulhamos',
  subtitle:
    'Uma coleção com curadoria de projetos que mostram nossa abordagem de design, unindo estratégia e criatividade.',
  projects: [
    {
      id: 'studiolink',
      name: 'Studiolink',
      category: 'Identidade de marca',
      image: 'https://picsum.photos/seed/studiolink/900/1000',
      dark: true,
    },
    {
      id: 'zentrox',
      name: 'Zentrox',
      category: 'Direção de arte',
      image: 'https://picsum.photos/seed/zentrox/900/1000',
      dark: false,
    },
    {
      id: 'corehue',
      name: 'Corehue',
      category: 'Campanha digital',
      image: 'https://picsum.photos/seed/corehue/900/1000',
      dark: false,
    },
    {
      id: 'elevana',
      name: 'Elevana',
      category: 'Editorial & moda',
      image: 'https://picsum.photos/seed/elevana/900/1000',
      dark: true,
    },
  ],
}

export const testimonial = {
  quote:
    'A equipe entendeu nossa marca antes mesmo de abrirmos o briefing. Cada entrega chegou mais afiada que a anterior, sem perder a nossa voz.',
  name: 'Marina Castro',
  role: 'Diretora de Marca, Corehue',
  avatar: 'https://picsum.photos/seed/marina-castro/200/200',
}

export const services = {
  eyebrow: 'O que fazemos',
  title: 'Serviços',
  items: [
    {
      number: '01',
      title: 'Branding',
      description:
        'Uma marca forte te destaca em um mercado saturado e transforma a primeira impressão em fidelidade duradoura.',
      image: 'https://picsum.photos/seed/service-branding/800/600',
    },
    {
      number: '02',
      title: 'Desenvolvimento',
      description:
        'Sites e produtos rápidos, acessíveis e fáceis de manter — construídos para crescer junto com o seu negócio.',
      image: 'https://picsum.photos/seed/service-dev/800/600',
    },
    {
      number: '03',
      title: 'Motion',
      description:
        'Animações e vídeos que dão ritmo à marca e prendem a atenção nos primeiros três segundos.',
      image: 'https://picsum.photos/seed/service-motion/800/600',
    },
    {
      number: '04',
      title: 'UI/UX Design',
      description:
        'Interfaces claras e testadas, para que um produto seja bonito e também fácil de usar do início ao fim.',
      image: 'https://picsum.photos/seed/service-uiux/800/600',
    },
  ],
}

export const stats = [
  { value: '120+', label: 'Marcas impulsionadas com design estratégico' },
  { value: '75%', label: 'Aumento médio no engajamento dos usuários' },
  { value: '8+', label: 'Anos de experiência no setor' },
  { value: '99%', label: 'Satisfação na entrega dos projetos' },
]

export const video = {
  eyebrow: 'Conheça o estúdio',
  title: 'Veja como trabalhamos por trás das telas',
  thumbnail: 'https://picsum.photos/seed/studio-reel/1600/900',
  ctaLabel: 'Assistir agora',
}

export const pricing = {
  eyebrow: 'Investimento',
  title: 'Vamos encontrar o plano certo para você',
  plans: [
    {
      name: 'Plano Básico',
      price: 'R$ 4.500',
      period: '/projeto',
      description: 'Ideal para marcas que estão começando e precisam de uma base sólida.',
      cta: 'Começar projeto',
      highlighted: false,
      features: [
        'Identidade visual completa',
        'Landing page responsiva',
        '2 rodadas de revisão',
        'Entrega em até 3 semanas',
      ],
    },
    {
      name: 'Plano Pro',
      price: 'R$ 9.800',
      period: '/projeto',
      description: 'Para times que precisam de um parceiro completo, do conceito ao código.',
      cta: 'Falar com o time',
      highlighted: true,
      features: [
        'Tudo do Plano Básico',
        'Website completo em React',
        'Motion e microinterações',
        'Revisões ilimitadas por 30 dias',
        'Suporte prioritário por 3 meses',
      ],
    },
  ],
}

export const awards = {
  eyebrow: 'Reconhecimento',
  title: 'Prêmios & conquistas',
  items: [
    { year: '2025', award: 'Awwwards — Site of the Day', category: 'Design Digital' },
    { year: '2024', award: 'CSS Design Awards', category: 'UI/UX Design' },
    { year: '2024', award: 'Behance Portfolio Review', category: 'Branding' },
    { year: '2023', award: 'FWA — Favourite Website', category: 'Motion & Interação' },
    { year: '2022', award: 'D&AD New Blood', category: 'Direção de Arte' },
  ],
}

export const blog = {
  eyebrow: 'Do nosso jornal',
  title: 'Ideias recentes',
  posts: [
    {
      category: 'Design',
      title: 'A arte do branding minimalista: menos, porém impactante',
      image: 'https://picsum.photos/seed/blog-branding/700/500',
      href: '#',
    },
    {
      category: 'Design Visual',
      title: 'O papel do storytelling no design moderno',
      image: 'https://picsum.photos/seed/blog-storytelling/700/500',
      href: '#',
    },
    {
      category: 'Design Criativo',
      title: 'Tendências de design que estamos observando em 2026',
      image: 'https://picsum.photos/seed/blog-trends/700/500',
      href: '#',
    },
  ],
}

export const contact = {
  eyebrow: 'Fale com a gente',
  title: 'Vamos conversar',
  phone: '+1 (208) 555-0112',
  emails: ['ola@suamarca.com', 'contato@suamarca.com'],
  formTitle: 'Tem um projeto em mente?',
}

export const footer = {
  columns: [
    {
      title: 'Navegação',
      links: [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Trabalhos', href: '#trabalhos' },
        { label: 'Serviços', href: '#servicos' },
        { label: 'Contato', href: '#contato' },
      ],
    },
    {
      title: 'Redes sociais',
      links: socials,
    },
  ],
  legal: '© 2026 suamarca. Todos os direitos reservados.',
}
