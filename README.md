# Projeto Next.js - Exercício 3

Este projeto foi desenvolvido com o intuito educacional para testar e aprimorar os conhecimentos em Next.js, um framework React para construção de aplicações web modernas e performáticas. O projeto utiliza as seguintes tecnologias principais:

- **Next.js**: Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código, aumentando a segurança e a produtividade no desenvolvimento.
- **CSS Modules**: Para estilização modular e escopo de estilos por componente.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
eslint.config.mjs
next-env.d.ts
next.config.ts
package.json
README.md
tsconfig.json
app/
  globals.css
  layout.tsx
  (homePage)/
    page.module.css
    page.tsx
  categories/
    page.tsx
    styles.module.css
    [category]/
      page.tsx
      styles.module.css
  spaceships/
    page.tsx
    styles.module.css
    [id]/
      page.tsx
      styles.module.css
database/
  spaceships.json
public/
  images/
```

- A pasta `app/` contém as páginas e componentes principais do projeto, organizados em subpastas para cada funcionalidade.
- A pasta `database/` contém dados estáticos em formato JSON para simular uma base de dados.
- A pasta `public/` armazena os arquivos estáticos, como imagens.

## Como rodar o projeto

Siga os passos abaixo para rodar o projeto localmente:

1. Certifique-se de ter o **Node.js** instalado em sua máquina. Recomenda-se a versão LTS mais recente.
2. Clone este repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

3. Acesse o diretório do projeto:

```bash
cd exercicio-3
```

4. Instale as dependências:

```bash
npm install
```

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

6. Abra o navegador e acesse `http://localhost:3000` para visualizar o projeto em execução.

## Objetivo Educacional

Este projeto foi criado como parte de um exercício para praticar e consolidar os conhecimentos adquiridos em Next.js. Ele explora conceitos como:

- Rotas dinâmicas e estáticas.
- Renderização no lado do servidor (SSR) e geração de páginas estáticas (SSG).
- Organização de arquivos e componentes em um projeto Next.js.
- Uso de CSS Modules para estilização.

Sinta-se à vontade para explorar o código, modificar e experimentar novas funcionalidades para aprimorar suas habilidades em Next.js.