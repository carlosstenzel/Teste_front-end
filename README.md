# Lista de Fundos de Investimento

Projeto desenvolvido para listar os fundos de investimentos separando os mesmos por macro, com opção de de filtrar como:

- Pesquisa por nome :white_check_mark:
- Aplicação mínima :white_check_mark:
- Perfil de risco do fundo :white_check_mark:
- Prazo de resgate :white_check_mark:
- Filtro por Renda Fixa :white_check_mark:

Foi feito alteração no modo de exibição dos fundo usado Lazy load para diminuir o tempo de carregamento, assim como foi usando SWR.

Assim obtendo uma boa nota na nota no [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=pt-br&url=https%3A%2F%2Fteste-front-end-git-master.carlosstenzel.vercel.app%2F&tab=desktop) , onde poderia ser melhorado ainda mais com paginação no json retorno pelo serve.

Foi utlizado no desenvolvimento:

- [Next.js](https://nextjs.org/)
- foundation-sites@6.6.3 (css)
- styled-components
- react-icons
- [SWR](https://swr.vercel.app/)
- react-lazyload

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Test

Run :

```bash
npm run test
# or
yarn test
```
