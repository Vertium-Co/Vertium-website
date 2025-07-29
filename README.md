# Vertium Co. - Website Institucional

![Vertium Co. Cover](public/images/og-image-cover.jpg)

Bem-vindo ao repositório do site institucional da **Vertium Co.**, uma empresa de tecnologia especializada em transformação digital e desenvolvimento de software sob medida.

## 🚀 Sobre o Projeto

Este projeto é uma landing page moderna e totalmente responsiva, construída com as tecnologias mais recentes do ecossistema Next.js. O objetivo do site é apresentar os serviços, processos, e a cultura da Vertium Co. de uma forma elegante e profissional.

O design é focado em uma experiência de usuário fluida, com microinterações, animações suaves e um tema escuro (dark mode) sofisticado.

## ✨ Tecnologias Utilizadas

A stack principal do projeto inclui:

-   **Framework:** [Next.js](https://nextjs.org/) (com App Router)
-   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
-   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
-   **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/)
-   **Ícones:** [Lucide React](https://lucide.dev/)
-   **Animações:** [Framer Motion](https://www.framer.com/motion/) (implícito via shadcn) e CSS customizado
-   **Linting:** [ESLint](https://eslint.org/)
-   **Formatação:** [Prettier](https://prettier.io/)

## 📂 Estrutura de Diretórios

O projeto segue uma estrutura de diretórios pensada para ser escalável e organizada:

```
/
├── app/                  # Rotas, layouts e páginas principais (App Router)
├── components/           # Componentes React reutilizáveis
│   ├── common/           # Componentes comuns (Header, Footer)
│   ├── layout/           # Componentes de estrutura (Seções da página)
│   └── ui/               # Componentes do shadcn/ui
├── hooks/                # Hooks customizados
├── lib/                  # Funções utilitárias e lógica de negócios
└── public/               # Arquivos estáticos (imagens, fontes)
```

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
-   [pnpm](https://pnpm.io/) (recomendado como gerenciador de pacotes)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/Vertium-Co/Vertium-Website.git
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd Vertium-Website
    ```

3.  Instale as dependências:
    ```bash
    pnpm install
    ```

### Execução

Para iniciar o servidor de desenvolvimento, rode o comando:

```bash
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

## 📜 Scripts Disponíveis

-   `pnpm dev`: Inicia o servidor de desenvolvimento.
-   `pnpm build`: Gera a build de produção do projeto.
-   `pnpm start`: Inicia um servidor de produção.
-   `pnpm lint`: Executa o linter para encontrar problemas no código.
-   `pnpm format`: Formata todo o código com o Prettier.

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Se você tiver alguma ideia para melhorar o projeto, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

---

**Vertium Co.** - Conectando ideias à realidade digital.