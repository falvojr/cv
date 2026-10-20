# Portfolio Profissional

Base arquitetural de um portfólio profissional construído com **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **shadcn/ui** e **Lucide React**.

## Objetivo da base

Este scaffold foi pensado para:

- organizar a aplicação de forma escalável;
- separar responsabilidade entre layout, seções, dados e serviços;
- facilitar a evolução para páginas de carreira, projetos, experiências e contato;
- manter uma estrutura próxima do que times de produto usam em projetos reais.

## Como a estrutura foi pensada

- `src/app`: rotas, layout global e composição da página.
- `src/components`: componentes reutilizáveis e UI base.
- `src/layouts`: shells de página e estruturas de composição.
- `src/sections`: blocos maiores da página, como hero, trajetória e projetos.
- `src/hooks`: hooks reutilizáveis da aplicação.
- `src/lib`: utilitários de baixo nível, como `cn`.
- `src/services`: camada de acesso e orquestração de dados.
- `src/types` e `src/interfaces`: contratos tipados do domínio.
- `src/constants`: valores fixos da aplicação.
- `src/data`: dados estáticos e conteúdo inicial.
- `src/styles`: estilos globais.
- `src/utils`: funções utilitárias específicas.
- `public/assets`: arquivos estáticos públicos.

## Próximos passos recomendados

1. Adicionar o conteúdo real da carreira em `src/data`.
2. Evoluir as seções para narrativa profissional, resultados e stacks.
3. Integrar animações refinadas com Framer Motion.
4. Criar responsividade, SEO e acessibilidade avançadas.
