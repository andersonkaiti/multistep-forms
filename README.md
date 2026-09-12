# Multistep Forms

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-4-3E67B1?logo=zod&logoColor=white)
![Biome](https://img.shields.io/badge/Biome-2-60A5FA?logo=biome&logoColor=white)

Formulário multi-step (wizard) construído com React 19, dividido em etapas de **Conta**, **Dados pessoais** e **Endereço**, com validação por etapa, estado de formulário compartilhado e transições animadas entre os passos.

## Funcionalidades

| Funcionalidade | Descrição |
| --- | --- |
| Fluxo em etapas | Barra de progresso animada e indicadores de conclusão |
| Validação por etapa | Só avança quando os campos da etapa atual são válidos (Zod) |
| Estado compartilhado | Dados preservados entre as etapas via `FormProvider` |
| Aviso ao sair | Alerta ao fechar a página com alterações não salvas (`beforeunload`) |
| Máscara de CPF | Formatação de documento com `react-number-format` |
| Transições animadas | Animação entre os passos com `motion` |

## Stack

| Tecnologia | Uso |
| --- | --- |
| [React 19](https://react.dev/) + [Vite](https://vite.dev/) | UI e build |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | Formulário e validação |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilização |
| [motion](https://motion.dev/) | Animações |
| [lucide-react](https://lucide.dev/) | Ícones |
| [Biome](https://biomejs.dev/) | Lint e formatação |
| [Husky](https://typicode.github.io/husky/) + [Commitlint](https://commitlint.js.org/) | Git hooks e padrão de commits |
