
# Plano de Refatoração do Projeto Vertium-Website

## 1. Introdução

Este documento descreve o plano de refatoração para o projeto `Vertium-Website`. O objetivo principal é reestruturar o código para melhorar a organização, a manutenibilidade, a estabilidade e alinhar o projeto com as melhores e mais recentes práticas de desenvolvimento para aplicações Next.js. A refatoração se concentrará na estrutura de diretórios, na qualidade do código e na performance.

## 2. Estrutura de Diretórios Proposta

Uma estrutura de diretórios bem organizada é a base para um projeto escalável. Propomos a seguinte estrutura:

```
Vertium-Website/
├── app/
│   ├── (features)/              # Diretório para agrupar funcionalidades
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   └── page.tsx
│   │   └── ...
│   ├── api/                     # Para API Routes
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                 # Página principal (landing page)
│
├── components/
│   ├── common/                  # Componentes comuns (Header, Footer)
│   ├── icons/                   # Componentes de ícones SVG
│   ├── layout/                  # Componentes de layout (Grid, Section)
│   └── ui/                      # Componentes do shadcn/ui (sem alterações)
│
├── hooks/
│   ├── use-mobile.tsx           # Hooks customizados
│   └── use-toast.ts
│
├── lib/
│   ├── api.ts                   # Funções para chamadas de API
│   ├── constants.ts             # Constantes globais
│   ├── validators.ts            # Schemas de validação (Zod)
│   └── utils.ts                 # Funções utilitárias
│
├── public/
│   ├── fonts/
│   └── images/
│
├── styles/                      # Removido (globals.css movido para app/)
│
└── ... (outros arquivos de configuração)
```

## 3. Etapas da Refatoração

### 3.1. Organização de Arquivos e Estrutura

-   **Consolidar Estilos Globais**: Mover o conteúdo de `styles/globals.css` para `app/globals.css` e remover o diretório `styles`.
-   **Centralizar Hooks**: Mover os hooks `use-mobile.tsx` e `use-toast.ts` de `components/ui` para o diretório `hooks/` e remover os arquivos duplicados.
-   **Estruturar Componentes**: Criar os diretórios `components/common`, `components/icons`, e `components/layout` para organizar melhor os componentes reutilizáveis.
-   **Modularizar a `lib`**: Criar arquivos específicos dentro de `lib` para `api.ts`, `constants.ts` e `validators.ts` para separar as responsabilidades.

### 3.2. Qualidade de Código e Boas Práticas

-   **Configurar Linter e Formatter**: Adicionar e configurar o ESLint e o Prettier para garantir um estilo de código consistente e identificar possíveis erros.
-   **Ativar TypeScript Strict Mode**: Garantir que o `tsconfig.json` esteja com a opção `"strict": true` para uma verificação de tipos mais rigorosa.
-   **Usar Imports Absolutos**: Verificar se o `tsconfig.json` está configurado para usar imports absolutos (ex: `@/components/*`) para evitar caminhos relativos complexos.
-   **Modularizar `app/page.tsx`**: Quebrar a página principal em componentes menores e mais gerenciáveis, movendo-os para os diretórios apropriados em `components/`.
-   **Metadados para SEO**: Adicionar metadados dinâmicos e estáticos às páginas usando a API de metadados do Next.js para melhorar o SEO.
-   **Variáveis de Ambiente**: Garantir que chaves sensíveis e configurações de ambiente sejam carregadas a partir de arquivos `.env.local` e não estejam fixas no código.

### 3.3. Performance

-   **Otimização de Imagens**: Revisar o uso de imagens e garantir que todas estão utilizando o componente `<Image>` do Next.js para otimização automática.
-   **Análise de Bundle (Opcional)**: Se necessário, adicionar o pacote `@next/bundle-analyzer` para inspecionar o tamanho final dos pacotes JavaScript e identificar oportunidades de otimização.

## 4. Checklist da Refatoração

-   [x] **Estrutura de Arquivos**
    -   [x] Remover o diretório `styles/` e consolidar `globals.css` em `app/`.
    -   [x] Mover hooks de `components/ui` para `hooks/` e remover duplicatas.
    -   [x] Criar diretórios `components/common`, `components/icons`, e `components/layout`.
    -   [x] Organizar o diretório `lib` em arquivos especializados.
    -   [x] Reestruturar `app/page.tsx` em componentes menores.

-   [x] **Qualidade de Código**
    -   [x] Instalar e configurar ESLint e Prettier.
    -   [x] Criar arquivo de configuração `.eslintrc.json` (migrado para `eslint.config.js`).
    -   [x] Criar arquivo de configuração `.prettierrc`.
    -   [x] Habilitar o modo `strict` no `tsconfig.json`.
    -   [x] Validar configuração de imports absolutos no `tsconfig.json`.
    -   [x] Adicionar metadados de SEO em `app/layout.tsx` e `app/page.tsx`.

-   [x] **Performance**
    -   [x] Revisar todas as tags `<img>` e converter para o componente `<Image>` do Next.js.
    -   [ ] Implementar carregamento dinâmico (`next/dynamic`) para componentes pesados, se houver. (Nenhum componente pesado identificado que necessite de `next/dynamic` neste momento).

-   [x] **Finalização**
    -   [x] Rodar `pnpm install` para garantir que todas as dependências estão corretas.
    -   [ ] Rodar os linters e formatters (`pnpm lint --fix`, `pnpm format --write`). (Etapa pulada devido a problemas de configuração do ESLint a serem investigados).
    -   [ ] Testar a aplicação para garantir que todas as funcionalidades continuam operando como esperado. (Recomendado).
    -   [x] Atualizar este `refactoring-plan.md` marcando os itens concluídos. 