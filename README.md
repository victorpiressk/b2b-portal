# B2B Portal

Portal B2B desenvolvido com React, TypeScript e Vite.

## 🔄 Histórico de Versões

### v2.0.0 (Em desenvolvimento)
- ⚡ Migrado de Create React App para Vite
- 🎨 Migrado de Styled Components para Tailwind CSS (em breve)
- 🚀 Performance significativamente melhorada
- 📦 Build otimizado com code splitting

### [v1.0.0](../../tree/release/1.0.0)
- Create React App
- Styled Components
- Redux Toolkit
- React Router v7

## 🚀 Tecnologias

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool e dev server ultra-rápido
- **Redux Toolkit** - Gerenciamento de estado
- **React Router v7** - Roteamento
- **Formik + Yup** - Gerenciamento de formulários e validação
- **Styled Components** - Estilização (em processo de migração para Tailwind)

## 📋 Pré-requisitos

- Node.js >= 18.0.0
- npm >= 9.0.0

## 🛠️ Instalação

```bash
# Clone o repositório
git clone [seu-repositorio]

# Entre no diretório
cd b2b-portal

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
```

## 🎯 Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Lint do código
npm run lint

# Servidor JSON (mock API)
npm run server
```

## 🌱 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```env
VITE_API_URL=http://localhost:4000
```

**Importante:** No Vite, todas as variáveis de ambiente expostas ao cliente devem começar com `VITE_`.

## 📁 Estrutura do Projeto

```
b2b-portal/
├── public/              # Assets estáticos
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── routes/         # Configuração de rotas
│   ├── services/       # Serviços e APIs
│   ├── store/          # Redux store, slices e reducers
│   ├── models/         # Tipos e interfaces
│   ├── utils/          # Funções utilitárias
│   ├── main.tsx        # Entry point da aplicação
│   └── vite-env.d.ts   # Tipos do Vite
├── index.html          # HTML principal
├── vite.config.ts      # Configuração do Vite
├── tsconfig.json       # Configuração do TypeScript
└── package.json
```

## 🎨 Path Aliases

O projeto está configurado com aliases para imports mais limpos:

```typescript
import Component from '@components/Component';
import { useSomeHook } from '@utils/hooks';
import { SomeModel } from '@models/SomeModel';
```

Aliases disponíveis:
- `@/` → `src/`
- `@components/` → `src/components/`
- `@pages/` → `src/pages/`
- `@services/` → `src/services/`
- `@store/` → `src/store/`
- `@utils/` → `src/utils/`
- `@models/` → `src/models/`
- `@routes/` → `src/routes/`

## 🔥 Hot Module Replacement

O Vite oferece HMR instantâneo. Suas mudanças aparecerão no navegador em milissegundos, sem reload completo da página.

## 🏗️ Build

O build de produção é otimizado automaticamente:
- Tree-shaking
- Code splitting
- Minificação
- Otimização de assets

```bash
npm run build
```

Os arquivos otimizados estarão em `build/`.

## 🧪 Testes

(Em desenvolvimento)

## 📝 Contribuindo

1. Crie uma branch de feature: `git checkout -b feat/nova-feature`
2. Commit suas mudanças: `git commit -m 'feat: adiciona nova feature'`
3. Push para a branch: `git push origin feat/nova-feature`
4. Abra um Pull Request

### Padrão de Commits

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação, espaços em branco
- `refactor:` - Refatoração de código
- `test:` - Testes
- `chore:` - Tarefas de manutenção

## 📄 Licença

Este projeto é privado e parte de um portfólio pessoal.

## 👤 Autor

Seu Nome
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [seu-perfil](https://linkedin.com/in/seu-perfil)

## 🙏 Agradecimentos

- Documentação do Vite
- Comunidade React
- Todos que contribuíram para as bibliotecas utilizadas
