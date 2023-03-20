const apis = [
  {
    name: "Trip",
    scenarios: true,
    inputs: [
      {
        label: "Quantas rotas você prentende fazer por mês?",
        type: "range",
        initialValue: 500,
        rangeOptions: {
          step: 500,
          min: 500,
          max: 100000,
          unit: "rotas",
        },
      },
      {
        label: "Qual a média de pontos de parada nessas rotas?",
        type: "range",
        initialValue: 2,
        rangeOptions: {
          step: 1,
          min: 2,
          max: 200,
          unit: "pontos",
        },
      },
      {
        label:
          "Em média, quantas vezes você deseja consultar o resultado de cada rota?",
        type: "number",
        initialValue: 2,
      },
    ],
  },
  {
    name: "Trip Sync",
    scenarios: true,
    inputs: [
      {
        label: "Quantas rotas você prentende fazer por mês?",
        type: "range",
        initialValue: 500,
        rangeOptions: {
          step: 500,
          min: 500,
          max: 100000,
          unit: "rotas",
        },
      },
      {
        label: "Qual a média de pontos de parada nessas rotas?",
        type: "range",
        initialValue: 2,
        rangeOptions: {
          step: 1,
          min: 2,
          max: 200,
          unit: "pontos",
        },
      },
    ],
  },
  {
    name: "Planning",
    scenarios: true,
    inputs: [
      {
        label:
          "Quantas planejamentos você prentende realizar o planeja por mês?",
        type: "number",
        initialValue: 100,
      },
      {
        label: "Qual a média de operações por planejamento?",
        type: "range",
        initialValue: 2,
        rangeOptions: {
          step: 1,
          min: 2,
          max: 200,
          unit: "operações",
        },
      },
      {
        label:
          "Em média, quantas vezes você deseja consultar o resultado de cada planejamento?",
        type: "number",
        initialValue: 5,
      },
    ],
  },
  {
    name: "Toll",
    scenarios: false,
    inputs: [
      {
        label: "Em quantas rotas você deseja calcular os pedágios por mês?",
        type: "number",
        initialValue: 100,
      },
    ],
  },
  {
    name: "Toll for Maps",
    scenarios: true,
    inputs: [
      {
        label: "Em quantas rotas você deseja calcular os pedágios por mês?",
        type: "number",
        initialValue: 100,
      },
      {
        label: "Até quantas rotas alternativas serão enviadas por requisição?",
        type: "select",
        options: [
          {
            label: "Nenhuma rota alternativa",
            value: 0,
            selected: true,
          },
          {
            label: "1 rota alternativa",
            value: 1,
          },
          {
            label: "2 rotas alternativas",
            value: 2,
          },
          {
            label: "3 rotas alternativas",
            value: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Geocode",
    scenarios: false,
    inputs: [
      {
        label: "Qual a média de endereços que você irá geocodificar por mês?",
        type: "range",
        initialValue: 2,
        rangeOptions: {
          step: 1,
          min: 2,
          max: 200,
          unit: "endereços",
        },
      },
    ],
  },
  {
    name: "Distance Matrix",
    scenarios: false,
    inputs: [
      {
        label:
          "Quantas matrizes de distâncias você prentende calcular por mês?",
        type: "number",
        initialValue: 100,
      },
      {
        label:
          "Em média, quantas vezes você deseja consultar o resultado do cálculo das distâncias?",
        type: "number",
        initialValue: 2,
      },
    ],
  },
  {
    name: "Freight",
    scenarios: false,
    inputs: [
      {
        label:
          "Qual a média de rotas em que você deseja calcular o frete mínimo por mês?",
        type: "range",
        initialValue: 2,
        rangeOptions: {
          step: 1,
          min: 2,
          max: 100000,
          unit: "rotas",
        },
      },
    ],
  },
  {
    name: "CO2",
    scenarios: false,
    inputs: [
      {
        label:
          "Qual a média de rotas em que você deseja calcular a emissão de carbono por mês?",
        type: "range",
        initialValue: 2,
        rangeOptions: {
          step: 1,
          min: 2,
          max: 100000,
          unit: "rotas",
        },
      },
    ],
  },
  {
    name: "Tracking",
    scenarios: false,
    inputs: [
      {
        label:
          "Em média quantos pedidos você deseja obter o rastreamento por mês?",
        type: "range",
        initialValue: 2,
        rangeOptions: {
          step: 1,
          min: 2,
          max: 100000,
          unit: "pedidos",
        },
      },
    ],
  },
  {
    name: "Map Display",
    scenarios: false,
    inputs: [
      {
        label: "Em média quantas rotas você deseja exibir no mapa por mês?",
        type: "range",
        initialValue: 2,
        rangeOptions: {
          step: 1,
          min: 2,
          max: 100000,
          unit: "rotas",
        },
      },
    ],
  },
];

export default apis;
