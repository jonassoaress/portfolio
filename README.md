## 🌐 Portfolio do Jonas Soares

Aplicação de portfólio construída com Next.js (App Router) e Tailwind CSS. O conteúdo de projetos é carregado dinamicamente da API do GitHub, garantindo que o site esteja sempre atualizado com os repositórios mais recentes.

## 🚀 Stack

- [Next.js 15](https://nextjs.org/) com App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- ESLint + configurações do Next.js

## 🧰 Pré-requisitos

- Node.js 18.18 ou superior
- npm (ou pnpm/bun/yarn, caso prefira)

## ⚙️ Variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto com as variáveis abaixo:

```bash
# Obrigatório: define qual conta do GitHub será consultada
GITHUB_USERNAME=jonassantoss

# Opcional: expõe o mesmo usuário no cliente (componentes client-side)
NEXT_PUBLIC_GITHUB_USERNAME=jonassantoss

# Opcional: recomendado para evitar limites de rate da API
# Gere um token em https://github.com/settings/tokens (escopo "public_repo" é suficiente)
GITHUB_TOKEN=ghp_xxxxxxxxxxxxx
```

Se nenhuma variável for definida, o projeto usa `jonassantoss` como usuário padrão e faz requisições não autenticadas (sujeitas a rate limit reduzido).

## ▶️ Como rodar

Instale as dependências e suba o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Depois disso, acesse [http://localhost:3000](http://localhost:3000).

## 🧪 Scripts úteis

- `npm run dev`: inicia o servidor de desenvolvimento
- `npm run build`: gera o build de produção
- `npm run start`: serve o build de produção
- `npm run lint`: roda as checagens do ESLint

## 📦 Estrutura principal

- `src/app`: rotas do App Router e estilos globais
- `src/components`: componentes reutilizáveis (layout, seções e UI)
- `src/data`: adaptadores de dados (GitHub, skills, etc.)
- `src/lib`: utilitários compartilhados, incluindo a integração com o GitHub

## 📡 Integração com o GitHub

- Os projetos são carregados via `src/lib/github.ts` utilizando `fetch`
- É aplicado cache por 1 hora (`revalidate`) para equilibrar desempenho e frescor
- Repositórios marcados com o tópico `featured` (ou `destaque`) ganham destaque na home
- Campos como estrelas, tags e data de atualização são derivados das informações do repositório

## 🚀 Deploy

Faça o deploy rapidamente na [Vercel](https://vercel.com/) ou na plataforma de sua preferência. Lembre-se de configurar as variáveis de ambiente no painel da hospedagem.
