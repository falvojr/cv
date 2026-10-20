# Arquitetura do Projeto

Este projeto foi estruturado para evoluir como um portfólio profissional de longo prazo. A ideia é separar **composição de interface**, **conteúdo**, **regras de negócio leves** e **utilidades técnicas**.

## Visão geral

A base segue uma organização em camadas:

- **App Router** para rotas e composição global.
- **Componentes reutilizáveis** para UI e padrões visuais.
- **Seções** para blocos grandes da narrativa profissional.
- **Camadas de dados e serviços** para centralizar conteúdo e facilitar manutenção.
- **Utilitários e tipos** para manter consistência e segurança de tipos.

## Estrutura e propósito de cada pasta

### `src/app`
Responsável pelas rotas, layout raiz e entrada principal da aplicação.

Aqui ficam:

- `layout.tsx`
- `page.tsx`
- arquivos globais da aplicação no padrão do Next.js App Router

**Por que existe:**

- concentra a infraestrutura da aplicação;
- evita espalhar configuração global pela base;
- facilita crescimento para novas rotas futuras.

### `src/components`
Contém componentes reutilizáveis de interface.

Exemplos:

- wrappers de animação;
- componentes base como botão, card e badge;
- pequenos blocos reutilizáveis entre seções.

**Por que existe:**

- evita duplicação;
- incentiva reaproveitamento;
- permite evoluir a UI sem acoplar comportamento às seções.

### `src/components/ui`
Camada de componentes visuais base, no estilo do ecossistema shadcn/ui.

**Por que existe:**

- padroniza a linguagem visual;
- centraliza estilos de elementos básicos;
- deixa a interface consistente em todo o projeto.

### `src/layouts`
Estruturas maiores de página, como shell, header, footer e composições de página.

**Por que existe:**

- separa a moldura da página do conteúdo;
- evita repetir header/footer em múltiplas rotas;
- facilita criar layouts diferentes no futuro.

### `src/sections`
Blocos grandes e narrativos do portfólio.

Exemplos:

- hero;
- trajetória profissional;
- experiências;
- projetos;
- skills;
- contato.

**Por que existe:**

- cada seção representa uma parte da história profissional;
- melhora a legibilidade do código;
- facilita reorganizar a narrativa sem mexer no restante da aplicação.

### `src/hooks`
Hooks reutilizáveis da aplicação.

**Por que existe:**

- concentra lógica de comportamento compartilhado;
- reduz repetição;
- permite reuso em múltiplas seções ou páginas.

### `src/lib`
Utilitários de baixo nível e helpers técnicos.

Exemplo:

- função `cn` para composição de classes.

**Por que existe:**

- centraliza funções genéricas e pequenas;
- evita duplicação de lógica de infraestrutura;
- é uma camada ideal para helpers estáveis.

### `src/services`
Camada de serviços que orquestra dados e abstrai a origem do conteúdo.

**Por que existe:**

- cria uma fronteira entre UI e dados;
- permite mudar a origem do conteúdo sem reescrever telas;
- prepara o projeto para APIs, CMS ou integrações futuras.

### `src/types`
Contratos tipados do domínio.

**Por que existe:**

- define formas de dados que trafegam pela aplicação;
- evita inconsistências entre componentes;
- melhora a segurança de tipos em toda a base.

### `src/interfaces`
Interfaces mais completas para modelar estruturas compostas de conteúdo.

**Por que existe:**

- organiza contratos mais abrangentes;
- separa tipos simples de estruturas maiores;
- ajuda a manter a modelagem mais clara.

### `src/constants`
Constantes globais do projeto.

Exemplos:

- nome do site;
- título;
- descrição;
- URL base.

**Por que existe:**

- evita strings espalhadas pelo código;
- facilita mudanças globais;
- melhora consistência entre metadados e interface.

### `src/data`
Conteúdo estático ou inicial do projeto.

**Por que existe:**

- centraliza textos, experiências e projetos;
- permite alimentar a UI a partir de dados separados;
- prepara o portfólio para eventual migração para CMS ou API.

### `src/styles`
Estilos globais e tokens visuais.

**Por que existe:**

- concentra configuração de tema;
- mantém Tailwind e CSS global organizados;
- facilita evolução visual da interface.

### `src/utils`
Utilitários específicos de domínio ou de apoio à aplicação.

**Por que existe:**

- guarda helpers que não pertencem à camada `lib`;
- mantém funções especializadas organizadas;
- evita misturar regras com componentes.

### `public/assets`
Arquivos estáticos públicos.

Exemplos:

- imagens;
- ícones;
- logos;
- arquivos de mídia.

**Por que existe:**

- segue o padrão do Next.js para conteúdo estático;
- facilita o uso de mídias no site;
- deixa recursos públicos organizados.

## Decisões arquiteturais importantes

### Separação entre conteúdo e interface
O texto da carreira não deve ficar espalhado em componentes.
Ele deve morar em `src/data` e ser consumido pelas seções.

### Camada de serviços mesmo para dados locais
Mesmo começando com conteúdo estático, a camada de serviço já existe para permitir evolução futura sem reescrever a UI.

### Seções como unidades narrativas
O portfólio é uma história, não apenas uma vitrine.
Por isso, cada seção deve representar um capítulo da trajetória.

### UI base reutilizável
Componentes em `src/components/ui` devem ser pequenos, previsíveis e consistentes.

## Próximo passo recomendado

A próxima etapa ideal é preencher `src/data` com seu histórico real e, em seguida, montar as seções:

- introdução;
- trajetória cronológica;
- empresas;
- projetos;
- stacks;
- resultados;
- contato.
