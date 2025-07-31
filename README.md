# 🎬 Studio Ghibli API

Uma aplicação web moderna desenvolvida durante a oficina de React ministrada pelo [@arturbomtempo.dev](https://www.arturbomtempo.dev/), que apresenta os filmes do icônico Studio Ghibli através de uma interface elegante e responsiva.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte de uma oficina prática de React, demonstrando a integração com APIs externas, roteamento, gerenciamento de estado e design responsivo. A aplicação consome a [Ghibli API](https://ghibliapi.vercel.app) para exibir informações detalhadas sobre os filmes, diretores e produções do Studio Ghibli.

## ✨ Funcionalidades

- 🏠 **Página inicial**: Hero section com apresentação do Studio Ghibli
- 👨‍🎬 **Seção de diretores**: Apresentação dos principais diretores com suas fotos
- 🎥 **Catálogo de filmes**: Listagem completa dos filmes com paginação
- 📝 **Detalhes do filme**: Página individual com informações completas de cada filme
- 📱 **Design responsivo**: Interface adaptada para desktop, tablet e mobile
- ⚡ **Performance otimizada**: Carregamento otimizado com lazy loading e request cancellation
- 🎨 **UI/UX moderna**: Design limpo e intuitivo com animações suaves

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19.1.0** - Biblioteca principal para construção da interface
- **TypeScript** - Tipagem estática para maior segurança e produtividade
- **React Router DOM 7.7.1** - Roteamento client-side
- **Vite 7.0.4** - Build tool moderna e rápida

### Estilização
- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **PostCSS** - Processamento de CSS
- **Autoprefixer** - Adição automática de prefixos CSS
- **Google Fonts** - Tipografias personalizadas (Nunito, Libre Baskerville, Roboto Serif)

### Requisições HTTP
- **Axios 1.11.0** - Cliente HTTP para consumo da API
- **AbortController** - Cancelamento de requisições

### Ícones
- **React Icons 5.5.0** - Biblioteca de ícones (Phosphor Icons, Font Awesome)

### Qualidade de Código
- **ESLint 9.30.1** - Linting de código
- **Prettier 3.6.2** - Formatação automática de código
- **TypeScript ESLint** - Integração do ESLint com TypeScript

## 🏗️ Arquitetura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Common/         # Componentes compartilhados
│   │   ├── AllFilms/   # Lista de filmes
│   │   ├── Container/  # Container principal
│   │   ├── Footer/     # Rodapé
│   │   └── Header/     # Cabeçalho
│   ├── FilmDetails/    # Componentes da página de detalhes
│   └── Home/           # Componentes da página inicial
├── hooks/              # Custom hooks
├── lib/                # Configurações e utilitários
├── pages/              # Páginas da aplicação
└── assets/             # Recursos estáticos
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/eduardavieira-dev/StudioGhibli-api.git

# Entre no diretório do projeto
cd StudioGhibli-api

# Instale as dependências
npm install
```

### Execução
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint

# Formatação de código
npm run format
```

## 🎯 Conceitos Aplicados

### React Fundamentals
- **Componentes funcionais** com TypeScript
- **Hooks** (useState, useEffect, useMemo)
- **Props** e **interfaces** tipadas
- **Custom hooks** para lógica reutilizável
- **Conditional rendering** e **lists**

### Roteamento
- **React Router DOM** para SPA
- **Nested routes** com layout compartilhado
- **Dynamic routes** com parâmetros
- **Programmatic navigation**

### Estado e Efeitos
- **Estado local** com useState
- **Side effects** com useEffect
- **Cleanup** de efeitos e cancelamento de requisições
- **Memoização** com useMemo para otimização

### HTTP e APIs
- **Axios** para requisições HTTP
- **Error handling** robusto
- **Loading states** para UX
- **Request cancellation** com AbortController

### Performance
- **Lazy loading** de imagens
- **Request optimization** com cleanup
- **Memoização** de computações custosas
- **Code splitting** com Vite

### Styling e UI
- **Tailwind CSS** para estilização utilitária
- **Responsive design** mobile-first
- **Custom fonts** e **color palette**
- **Animations** e **transitions**
- **Backdrop blur** e **gradient overlays**

## 📱 Páginas e Rotas

- **`/`** - Home page com hero, diretores e preview dos filmes
- **`/filmes`** - Catálogo completo de filmes
- **`/filme/:id`** - Detalhes específicos de um filme

## 🎨 Design System

### Cores
- **Surface**: `#121212` - Fundo principal escuro
- **Divider**: `#d9d9d9` - Separadores
- **Footer BG**: `#292929` - Fundo do rodapé
- **Footer Color**: `#f7f7f7` - Texto do rodapé

### Tipografia
- **Nunito** - Fonte principal para textos
- **Libre Baskerville** - Títulos e destaques
- **Roboto Serif** - Marca/logo

## 🔧 Configurações

### Vite
- **Hot reload** para desenvolvimento rápido
- **Alias** configurado (`@` aponta para `/src`)
- **Porta 3000** para desenvolvimento

### TypeScript
- **Strict mode** habilitado
- **Build info** otimizada
- **Configurações separadas** para app e node

### ESLint & Prettier
- **Regras modernas** do ESLint
- **React hooks** rules
- **Formatação consistente** com Prettier

## 🎓 Aprendizados da Oficina

Este projeto demonstra na prática conceitos essenciais do desenvolvimento React moderno:

1. **Componentização** eficiente com TypeScript
2. **Gerenciamento de estado** local e global
3. **Integração com APIs** externas
4. **Roteamento** em Single Page Applications
5. **Responsive design** com Tailwind CSS
6. **Performance optimization** e boas práticas
7. **Code quality** com linting e formatação automática
8. **Modern tooling** com Vite e TypeScript

## 👨‍💻 Instrutor

**Artur Bomtempo** - [@arturbomtempo.dev](https://www.arturbomtempo.dev/)

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais durante a oficina de React.

---

⭐ **Desenvolvido com ❤️ durante a oficina de React**
