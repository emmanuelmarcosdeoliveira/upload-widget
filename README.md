<div align="center">

# 📤 Upload Widget

![Static Badge](https://img.shields.io/badge/React-19.2.0-61DAFB?style=plastic&logo=react&logoColor=white)
![Static Badge](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=plastic&logo=typescript&logoColor=white)
![Static Badge](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=plastic&logo=vite&logoColor=white)
![Static Badge](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=plastic&logo=tailwindcss&logoColor=white)
![Static Badge](https://img.shields.io/badge/Zustand-5.0.1-FF6B6B?style=plastic&logo=redux&logoColor=white)
![Static Badge](https://img.shields.io/badge/Axios-1.13.2-5A29E4?style=plastic&logo=axios&logoColor=white)

</div>

---

## 📑 Índice

- [📋 Sobre o Projeto](#-sobre-o-projeto)
- [🛠️ Tecnologias](#️-tecnologias)
- [📚 Bibliotecas Utilizadas](#-bibliotecas-utilizadas)
- [🏗️ Padrões de Projeto](#️-padrões-de-projeto)
- [⚙️ Configuração e Setup](#️-configuração-e-setup)
- [🚀 Como Executar](#-como-executar)
- [📝 Scripts Disponíveis](#-scripts-disponíveis)

---

## 📋 Sobre o Projeto

**Upload Widget** é uma aplicação web moderna `fullStack` desenvolvida para converter e comprimir imagens com interface intuitiva e responsiva.
</br>
O projeto utiliza as mais recentes tecnologias do ecossistema React, <br />
para proporcionar uma experiência de usuário fluida e performática.

**Desenvolvido por:** [Emmanuel Oliveira](https://www.linkedin.com/in/oliveira-emmanuel/)  
**Fonte de Estudo:** [RocketSeat](https://app.rocketseat.com.br/)

> [!TIP] Dica
> Acesse o repositório back-end da aplicação
> https://github.com/emmanuelmarcosdeoliveira/upload-widget-server

---

## 🛠️ Tecnologias

### Core

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.9.3** - Superset do JavaScript com tipagem estática
- **Vite 7.2.4** - Build tool e dev server de alta performance

### Estilização

- **Tailwind CSS 4.1.18** - Framework CSS utility-first
- **Tailwind Merge** - Utilitário para mesclar classes Tailwind
- **Tailwind Variants** - Sistema de variantes para componentes

### UI Components

- **Radix UI** - Componentes acessíveis e desacoplados
  - `@radix-ui/react-collapsible`
  - `@radix-ui/react-progress`
  - `@radix-ui/react-scroll-area`
  - `@radix-ui/react-slot`
- **Lucide React** - Biblioteca de ícones moderna

### Gerenciamento de Estado

- **Zustand 5.0.1** - Biblioteca de gerenciamento de estado leve e simples
- **Immer 11.1.3** - Biblioteca para trabalhar com estado imutável

### HTTP & Upload

- **Axios 1.13.2** - Cliente HTTP baseado em Promises
- **React Dropzone 14.3.8** - Componente React para drag & drop de arquivos

### Animações

- **Motion 12.23.26** - Biblioteca de animações para React

### Desenvolvimento

- **ESLint** - Linter para JavaScript/TypeScript
- **TypeScript ESLint** - Linter específico para TypeScript

---

## 📚 Bibliotecas Utilizadas

### Dependências Principais

```json
{
  "@radix-ui/react-collapsible": "^1.1.12",
  "@radix-ui/react-progress": "^1.1.8",
  "@radix-ui/react-scroll-area": "^1.2.10",
  "@radix-ui/react-slot": "^1.2.4",
  "@tailwindcss/vite": "^4.1.18",
  "axios": "^1.13.2",
  "immer": "^11.1.3",
  "lucide-react": "^0.562.0",
  "motion": "^12.23.26",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-dropzone": "^14.3.8",
  "tailwind-merge": "^3.4.0",
  "tailwind-variants": "^3.2.2",
  "tailwindcss": "^4.1.18",
  "zustand": "5.0.1"
}
```

### Dependências de Desenvolvimento

```json
{
  "@eslint/js": "^9.39.1",
  "@types/node": "^24.10.1",
  "@types/react": "^19.2.5",
  "@types/react-dom": "^19.2.3",
  "@vitejs/plugin-react": "^5.1.1",
  "eslint": "^9.39.1",
  "eslint-plugin-react-hooks": "^7.0.1",
  "eslint-plugin-react-refresh": "^0.4.24",
  "globals": "^16.5.0",
  "typescript": "~5.9.3",
  "typescript-eslint": "^8.46.4",
  "vite": "^7.2.4"
}
```

---

## 🏗️ Padrões de Projeto

### Estrutura de Pastas

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes de UI reutilizáveis
│   └── upload-widget-* # Componentes específicos do widget
├── store/              # Gerenciamento de estado (Zustand)
├── http/               # Configuração e serviços HTTP (Axios)
├── utils/              # Funções utilitárias
├── app.tsx             # Componente principal da aplicação
├── main.tsx            # Ponto de entrada da aplicação
└── index.css           # Estilos globais
```

### Padrões Implementados

- **Component-Based Architecture** - Componentes modulares e reutilizáveis
- **State Management** - Zustand para gerenciamento de estado global
- **Type Safety** - TypeScript para tipagem estática
- **Utility-First CSS** - Tailwind CSS para estilização
- **Accessible Components** - Radix UI para componentes acessíveis
- **Immutability** - Immer para manipulação de estado imutável
- **Code Quality** - ESLint para manter qualidade do código

---

## ⚙️ Configuração e Setup

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **pnpm** (gerenciador de pacotes)

### Instalação do pnpm

Se você ainda não possui o pnpm instalado:

```bash
npm install -g pnpm
```

ou

```bash
corepack enable
corepack prepare pnpm --activate
```

---

## 🚀 Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/emmanuelmarcosdeoliveira/upload-widget
cd upload-widget
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Execute o servidor de desenvolvimento

```bash
pnpm dev
```

A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

### 4. Build para produção

```bash
pnpm build
```

Os arquivos de produção serão gerados na pasta `dist/`.

### 5. Preview da build de produção

```bash
pnpm preview
```

---

## 📝 Scripts Disponíveis

| Script         | Descrição                                |
| -------------- | ---------------------------------------- |
| `pnpm dev`     | Inicia o servidor de desenvolvimento     |
| `pnpm build`   | Compila o projeto para produção          |
| `pnpm lint`    | Executa o linter ESLint                  |
| `pnpm preview` | Visualiza a build de produção localmente |

---

## Contributors or owners

<img height="64px" src="https://res.cloudinary.com/delo0gvyb/image/upload/v1752287431/profile_mjvmdb.png"><br>

<small>Emmanuel Oliveira</small>

developed by 💖 [Emmanuel Oliveira](https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit)<br>

&copy; Todos os Direitos Reservados

### Contribute to the projects

> Clique na seta abaixo e veja como você pode contribuir para o projeto

<details close>
<summary>Como fazer uma contribuição ao Projeto ?</summary>
 Familiarize-se com a documentação do projeto, que geralmente inclui guias de instalação.<br>
 Explore o código do projeto para entender sua estrutura e funcionamento.
 <br>

**Faça um Fork**

Crie uma cópia (fork) do repositório original em sua conta do GitHub.<br>

 <img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
 <a href="https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"></a>

**Clone o Repositório**

Isso criará uma cópia local do projeto, onde você poderá fazer suas modificações.

 <img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
 <a href="https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository"></a>

**Crie uma Nova Branch:**

Crie uma nova branch para isolar suas alterações.<br>
Isso facilita a organização do seu trabalho e a criação de pull requests.<br>

**Faça as Alterações:**

Crie funcionalidades, mude estilos ou resolva `bugs` que iram contribuir para a melhoria do Projeto.<br>

**Crie um Pull Request:**

Inclua uma descrição clara das suas alterações e explique como elas resolvem o problema ou melhoram o projeto.<br>
Solicitação: Envie um pull request para o repositório original, solicitando que suas alterações sejam incorporadas ao projeto.
<br>

**Revise e Responda a Feedback:**

Colabore: Os mantenedores do projeto podem solicitar alterações ou fornecer feedback sobre o seu código.

</details>

## Contact

[![Lindekin](https://img.shields.io/badge/--path?style=social&logo=Linkedin&logoColor=%230664C1&logoSize=auto&label=Linkedin&labelColor=%23fff&cacheSeconds=https%3A%2F%2Fwww.linkedin.com%2Fin%2Femmanuel-marcos-oliveira%2F)](https://www.linkedin.com/in/emmanuel-marcos-oliveira/)
[![WhatsApp](https://img.shields.io/badge/--path?style=social&logo=WhatsApp&logoColor=%231F3833&logoSize=auto&label=WhatsApp&color=%23fff&cacheSeconds=https%3A%2F%2Fwa.me%2F5511968336094)](https://wa.me/5511968336094)
<a href="mailto:ofs.dev.br@gmail.com"><img alt="Static Badge" src="https://img.shields.io/badge/--path?style=social&logo=Gmail&logoSize=auto&label=Gmail&cacheSeconds=--query&link=mailto%3Adev-oliveira%40outlook.com.br%22"> </a>

<sub>😁Obrigado por chegar até aqui!<sub>

## License

![Static Badge](https://img.shields.io/badge/--path?style=plastic&logo=mit&logoSize=auto&label=license%20MIT&labelColor=%23555555&color=%2397CA00)<br>
Released in 2025 This project is under the **MIT license**<br>
<br>

<div align="left">
<strong>
⭐ Se este projeto foi útil para você, considere dar uma estrela! 
</strong>

</div>
