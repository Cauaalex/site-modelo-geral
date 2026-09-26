# suamarca® — Landing Page

Landing page para agência de design/tecnologia. React + Vite + Tailwind CSS + Framer Motion.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  data/content.js       ← todo o texto, imagens e links do site (edite aqui)
  components/
    AnimatedSection.jsx ← wrapper de animação (fade + slide-up no scroll)
    Header.jsx           ← navbar fixa com blur no scroll + menu mobile
    Hero.jsx
    Portfolio.jsx
    Testimonial.jsx
    Services.jsx         ← lista interativa (acordeão) dos serviços
    Stats.jsx
    VideoSection.jsx     ← thumbnail com parallax e botão de play
    Pricing.jsx
    Awards.jsx
    Blog.jsx
    Contact.jsx          ← split screen: formulário + informações de contato
    Footer.jsx
  App.jsx                ← une todas as seções, nesta ordem
  index.css              ← Tailwind + fontes (Syne para títulos, Inter para texto)
tailwind.config.js        ← paleta de cores e fontes
```

## Editando o conteúdo

Praticamente tudo o que aparece na página vem de `src/data/content.js`. Troque
os textos, os arrays de projetos, depoimentos, serviços, planos, prêmios e
posts do blog diretamente ali — os componentes não precisam ser tocados.

As imagens usam placeholders de `picsum.photos` (funcionam com internet, sem
precisar de chave de API). Basta trocar cada `image: '...'` por uma URL real
ou por um import local (ex: `import capa from '../assets/capa.jpg'`).

## Personalizando cores e tipografia

- Cores: edite `theme.extend.colors` em `tailwind.config.js` (`ink`, `paper`,
  `mist`, `line`, `accent`).
- Fontes: trocadas em `src/index.css` (import do Google Fonts) e em
  `tailwind.config.js` (`fontFamily.display` / `fontFamily.body`).

## Formulário de contato

O formulário em `Contact.jsx` já previne o reload da página e mostra uma
mensagem de confirmação, mas não envia dados para nenhum lugar ainda. Ligue o
`handleSubmit` a um endpoint próprio, a um serviço como Formspree/Resend, ou a
uma função serverless.

## Dependências principais

- `react` / `react-dom`
- `framer-motion` — animações de entrada e parallax
- `lucide-react` — ícones
- `tailwindcss` — estilização utilitária
- `vite` — build tool
