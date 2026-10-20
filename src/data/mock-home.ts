import type { HomeContent, Language } from '@/types/home';

export const homeContent: Record<Language, HomeContent> = {
  'pt-BR': {
    metrics: [
      {
        value: '2 anos',
        label: 'Experiência no mercado',
        description:
          'Atuação em análise de dados, machine learning e desenvolvimento de software em empresas de diferentes segmentos.',
      },
      {
        value: '2 empresas',
        label: 'Experiências: FATECOINS & BASF',
        description: 'Passagem por uma multinacional do setor químico, com entregas de alto impacto.',
      },
      {
        value: 'ML + Dev',
        label: 'Dupla especialidade',
        description: 'Combinação de machine learning aplicado com desenvolvimento back-end e fullstack para produtos reais.',
      },
      {
        value: 'Fullstack',
        label: 'Versatilidade técnica',
        description: 'Maior profundidade em back-end, banco e arquitetura, com atuação também no front-end.',
      },
    ],
    timeline: [
      {
        period: '2024 — 2026',
        company: 'FATECOINS (experiência anterior)',
        role: 'Analista Desenvolvedor',
        summary:
          'Atuação anterior na FATECOINS, de 2024 a 2026, como desenvolvedor fullstack, com maior profundidade em back-end, banco de dados e arquitetura. No front-end, a experiência de trabalhar lado a lado com desenvolvedores na BASF trouxe fluência para conectar endpoints e garantir a entrega completa do software.',
        technologies: ['Python', 'FastAPI', 'Next.js', 'Vue.js', 'PostgreSQL', 'MySQL', 'Apache Airflow'],
        results: [
          'Arquitetura escalável separando back-end do ambiente de análise com Apache Airflow',
          'Pipeline de dados isolada para que o back-end receba apenas o resultado otimizado',
          'Desenvolvimento fullstack com integração direta entre front e API',
        ],
      },
      {
        period: 'Março — Agosto 2025',
        company: 'BASF',
        role: 'Analista Desenvolvedor',
        summary:
          'Contratação pontual para desenvolver um único projeto interno de machine learning em uma multinacional. A atuação foi principalmente no back-end, com foco em levar o projeto até a conclusão, incluindo integração de dados, testes de modelos e simulações.',
        technologies: ['Python', 'Machine Learning', 'API REST', 'SQL Server', 'Back-end'],
        results: [
          'Back-end integrado para consumo de dados corporativos via software próprio',
          'Modelos de ML (Decision Tree, Random Forest) testados com simulações antes da aplicação real',
          'Colaboração diária com desenvolvedor front-end para garantir integração completa',
          'Projeto entregue integralmente e contratação encerrada após a conclusão do escopo',
        ],
      },
    ],
    projects: [
      {
        name: 'Classificação de Perfil para Instituição de Grande Porte',
        description:
          'Modelo de machine learning para classificação de perfis (engajado vs. evadido) em uma grande instituição nacional. o foco foi a construção de pipelines de dados e avaliação de modelos preditivos.',
        stack: ['Python', 'Machine Learning', 'Decision Tree', 'Feature Engineering', 'Data Pipeline'],
        impact: 'Permitiu à instituição antecipar comportamentos e direcionar ações de retenção com base em dados.',
      },
      {
        name: 'Otimização de Recursos Industriais com ML',
        description:
          'Projeto interno para otimizar o uso de matéria-prima sem perder qualidade. Desenvolvimento back-end para integrar endpoints com dados corporativos, testes de modelos (Decision Tree, Random Forest) e simulações antes da aplicação real.',
        stack: ['Python', 'FastAPI', 'Machine Learning', 'Random Forest', 'SQL Server', 'API REST'],
        impact: 'Cientistas passaram a simular e validar formulações antes de gastar recursos físicos, reduzindo custos.',
      },
      {
        name: 'Plataforma Fullstack com IA para Análise de Negócios',
        description:
          'Aplicação web completa com front-end, back-end e banco de dados, integrando inteligência artificial para analisar dados do cliente e gerar insights/feedbacks automatizados com sugestões de melhoria para o dia a dia do negócio.',
        stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Python', 'IA/ML', 'Apache Airflow'],
        impact: 'Clientes recebem insights acionáveis sobre o próprio negócio sem precisar de conhecimento técnico.',
      },
    ],
    skillGroups: [
      {
        category: 'Back-end',
        items: ['Python', 'FastAPI', 'API REST', 'Arquiteturas Escaláveis'],
      },
      {
        category: 'Front-end',
        items: ['Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        category: 'Banco de Dados',
        items: ['PostgreSQL', 'MySQL', 'SQL Server'],
      },
      {
        category: 'Machine Learning',
        items: ['Decision Tree', 'Random Forest', 'Feature Engineering', 'Pipelines de Dados'],
      },
      {
        category: 'Engenharia de Dados',
        items: ['Apache Airflow', 'ETL', 'Pipelines Isoladas', 'Otimização de Fluxo'],
      },
      {
        category: 'Metodologias',
        items: ['Agile', 'Scrum', 'Colaboração cross-funcional'],
      },
    ],
    contactLinks: [
      { label: 'LinkedIn (PT-BR)', href: 'https://www.linkedin.com/in/jo%C3%A3o-gabriel-m-alves/?locale=pt-BR' },
      { label: 'LinkedIn (EN)', href: 'https://www.linkedin.com/in/jo%C3%A3o-gabriel-m-alves/?locale=en-US' },
      { label: 'GitHub', href: 'https://github.com/its-gabe' },
      { label: 'E-mail', href: 'mailto:j.gabrielmoreiraalves@gmail.com' },
      { label: 'WhatsApp', href: 'https://wa.me/5512992238651' },
    ],
  },
  en: {
    metrics: [
      {
        value: '2 years',
        label: 'Market experience',
        description: 'Work across data analysis, machine learning, and software development in companies from different industries.',
      },
      {
        value: '2 companies',
        label: 'Experience: FATECOINS & BASF',
        description: 'Experience at a data consultancy and a chemical-sector multinational, with high-impact deliveries at both.',
      },
      {
        value: 'ML + Dev',
        label: 'Dual specialty',
        description: 'A combination of applied machine learning with back-end and fullstack development for real products.',
      },
      {
        value: 'Fullstack',
        label: 'Technical versatility',
        description: 'Deep expertise in back-end, databases, and architecture, with strong front-end experience as well.',
      },
    ],
    timeline: [
      {
        period: '2024 — 2026',
        company: 'FATECOINS (previous experience)',
        role: 'Software Developer Analyst',
        summary:
          'Previous experience at FATECOINS from 2024 to 2026 as a fullstack developer, with strongest expertise in back-end, databases, and architecture. On the front end, the experience of working side by side with developers at BASF brought the fluency needed to connect endpoints and deliver complete software.',
        technologies: ['Python', 'FastAPI', 'Next.js', 'Vue.js', 'PostgreSQL', 'MySQL', 'Apache Airflow'],
        results: [
          'Scalable architecture separating the back end from the analysis environment running Apache Airflow',
          'Isolated data pipeline so the back end receives only the optimized result',
          'Fullstack development with direct integration between the front end and API',
        ],
      },
      {
        period: 'March — August 2025',
        company: 'BASF',
        role: 'Software Developer Analyst',
        summary:
          'Short-term contract to develop a single internal machine learning project at a multinational. The work focused mainly on the back end, taking the project through completion, including data integration, model testing, and simulations.',
        technologies: ['Python', 'Machine Learning', 'REST API', 'SQL Server', 'Back-end'],
        results: [
          'Integrated back end for consuming corporate data through custom software',
          'ML models (Decision Tree, Random Forest) tested with simulations before real-world application',
          'Daily collaboration with a front-end developer to ensure complete integration',
          'Project delivered in full, with the contract ending after the scope was completed',
        ],
      },
    ],
    projects: [
      {
        name: 'Profile Classification for a Large Institution',
        description:
          'Machine learning model for classifying profiles (engaged vs. churned) at a large national religious institution. Confidential project — the focus was building data pipelines and evaluating predictive models.',
        stack: ['Python', 'Machine Learning', 'Decision Tree', 'Feature Engineering', 'Data Pipeline'],
        impact: 'Enabled the institution to anticipate behaviors and target retention actions using data.',
      },
      {
        name: 'Industrial Resource Optimization with ML',
        description:
          'Internal project at a chemical-sector multinational to optimize raw material use without sacrificing quality. Back-end development connected endpoints to corporate data, with Decision Tree and Random Forest model testing and simulations before real-world application.',
        stack: ['Python', 'FastAPI', 'Machine Learning', 'Random Forest', 'SQL Server', 'REST API'],
        impact: 'Scientists could simulate and validate formulations before using physical resources, reducing costs.',
      },
      {
        name: 'Fullstack AI Platform for Business Analysis',
        description:
          'Complete web application with front end, back end, and database, integrating artificial intelligence to analyze customer data and generate automated feedback with improvement suggestions for day-to-day business.',
        stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Python', 'AI/ML', 'Apache Airflow'],
        impact: 'Clients receive actionable insights about their own business without needing technical knowledge.',
      },
    ],
    skillGroups: [
      {
        category: 'Back-end',
        items: ['Python', 'FastAPI', 'REST API', 'Scalable Architectures'],
      },
      {
        category: 'Front-end',
        items: ['Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        category: 'Database',
        items: ['PostgreSQL', 'MySQL', 'SQL Server'],
      },
      {
        category: 'Machine Learning',
        items: ['Decision Tree', 'Random Forest', 'Feature Engineering', 'Data Pipelines'],
      },
      {
        category: 'Data Engineering',
        items: ['Apache Airflow', 'ETL', 'Isolated Pipelines', 'Flow Optimization'],
      },
      {
        category: 'Methodologies',
        items: ['Agile', 'Scrum', 'Cross-functional Collaboration'],
      },
    ],
    contactLinks: [
      { label: 'LinkedIn (PT-BR)', href: 'https://www.linkedin.com/in/jo%C3%A3o-gabriel-m-alves/?locale=pt-BR' },
      { label: 'LinkedIn (EN)', href: 'https://www.linkedin.com/in/jo%C3%A3o-gabriel-m-alves/?locale=en-US' },
      { label: 'GitHub', href: 'https://github.com/its-gabe' },
      { label: 'Email', href: 'mailto:j.gabrielmoreiraalves@gmail.com' },
      { label: 'WhatsApp', href: 'https://wa.me/5512992238651' },
    ],
  },
};
