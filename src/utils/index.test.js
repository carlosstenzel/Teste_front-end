import { formateAmout, formateDate, formatFundsData } from './index';

describe('Format amount', () => {
  it('Passing string', () => {
    expect(formateAmout('12')).not.toBe(12);
  });
  it('Passing float', () => {
    expect(formateAmout(12.5)).not.toBe(12.5);
  });
  it('Returning a string', () => {
    const result = formateAmout(12.5);
    expect(typeof result).toEqual('string');
  });
  it('three decimal places', () => {
    expect(formateAmout(12.5)).toEqual('R$ 12,50');
  });
  it('Passing number large', () => {
    expect(formateAmout(120000.5)).toEqual('R$ 120.000,50');
  });
});

describe('Format date', () => {
  it('Convert format equal to DD/MM/YYYY', () => {
    expect(formateDate('2020-10-25 01:11')).toEqual('25/10/2020');
  });
});

describe('Format Funds', () => {
  const fund = {
    initial_date: '2019-02-27',
    performance_audios: [],
    fees: {
      maximum_administration_fee: 'Não há',
      anticipated_retrieval_fee_value: '0.00',
      administration_fee: '0,93%',
      anticipated_retrieval_fee: 'Não há',
      performance_fee: 'Não há',
      has_anticipated_retrieval: false,
    },
    is_simple: false,
    description_seo:
      'Investir em fundos pela Órama é a melhor forma de acessar todos os investimentos sem preocupação, afinal, tem sempre um especialista cuidando disso para você.',
    operability: {
      has_operations_on_thursdays: false,
      retrieval_liquidation_days_type: 'úteis',
      application_quotation_days_type: 'úteis',
      retrieval_quotation_days: 1,
      anticipated_retrieval_quotation_days_type: 'corridos',
      anticipated_retrieval_quotation_days_str: 'Não há',
      retrieval_quotation_days_type: 'úteis',
      anticipated_retrieval_quotation_days: 0,
      has_operations_on_wednesdays: true,
      minimum_balance_permanence: '10000.00',
      has_operations_on_mondays: false,
      has_grace_period: false,
      application_time_limit: '13:00:59',
      retrieval_time_limit: '13:00:59',
      has_operations_on_fridays: false,
      anticipate_retrieval_liquidation_days: 0,
      minimum_initial_application_amount: '25000.00',
      anticipate_retrieval_liquidation_days_type: 'corridos',
      retrieval_special_type: '',
      anticipate_retrieval_liquidation_days_str: 'Não há',
      application_quotation_days_str: 'D+1 (somente às quartas-feiras)',
      grace_period_in_days_str: null,
      retrieval_quotation_days_str: 'D+1 (somente às quartas-feiras)',
      grace_period_in_days: 0,
      retrieval_liquidation_days_str: 'D+5',
      minimum_subsequent_retrieval_amount: '0.00',
      retrieval_direct: false,
      retrieval_liquidation_days: 5,
      application_quotation_days: 1,
      max_balance_permanence: '0.00',
      maximum_initial_application_amount: '0.00',
      has_operations_on_tuesdays: false,
      minimum_subsequent_application_amount: '5000.00',
    },
    full_name: 'PIMCO Income Dólar FIC FIM IE',
    opening_date: null,
    id: 1013,
    is_closed: false,
    simple_name: 'PIMCO Income Dólar FIC FIM IE',
    target_fund: null,
    documents: [
      {
        position: 1,
        document_type: 'Regulamento',
        name: 'Regulamento',
        document_url:
          'app_img/fund_document/R_-__PIMCO_Income_Dólar_FIC_FIM_IE_-_20190208.pdf',
      },
      {
        position: 2,
        document_type: 'Formulário de Informações Complementares',
        name: 'Formulário de Informações Complementares',
        document_url:
          'app_img/fund_document/FORM_INFO_COMP_-_PIMCO_Income_Dólar_FIC_FIM_IE_2019_02_08.pdf',
      },
      {
        position: 0,
        document_type: 'Lâmina',
        name: 'Lâmina',
        document_url:
          'app_img/fund_document/20200812010154_PIMCO_Income_Dólar_FIC_FIM_IE.pdf',
      },
      {
        position: 0,
        document_type: 'Material de Distribuição',
        name: 'Material de Distribuição',
        document_url:
          'app_img/fund_document/20201015140000_PIMCO_Income_Dólar_FIC_FIM_IE.pdf',
      },
    ],
    specification: {
      fund_suitability_profile: {
        score_range_order: 1,
        name: 'Conservador',
      },
      fund_risk_profile: {
        score_range_order: 4,
        name: 'Régua de risco 4',
      },
      is_qualified: true,
      fund_type: 'Multimercado',
      fund_class: 'Multimercado Investimento no Exterior',
      fund_macro_strategy: {
        explanation:
          'Fundos que buscam retorno por meio de investimentos em ativos de renda fixa. São indicados para a parcela conservadora da carteira do investidor. Podem investir em títulos públicos e/ ou em títulos privados, com remuneração prefixada, pós-fixada ou atrelada a algum índice de preço.',
        id: 1,
        name: 'Renda Fixa',
      },
      fund_class_anbima: null,
      fund_main_strategy: {
        explanation:
          'Fundos que investem em uma carteira diversificada de títulos de renda fixa, soberanos ou privados, principalmente estrangeiros. A seleção dos títulos é baseada em análise fundamentalista.',
        fund_macro_strategy: 1,
        id: 21,
        name: 'Renda Fixa Global',
      },
    },
    quota_date: '2020-10-22',
    tax_classification: 'Longo prazo',
    cnpj: '32.225.478/0001-06',
    description: {
      objective:
        'A política de investimento do FUNDO consiste\r\nem aplicar, no mínimo, 95% (noventa e cinco por cento)\r\nde seu patrimônio líquido em cotas do PIMCO INCOME\r\nDÓLAR FUNDO DE INVESTIMENTO MULTIMERCADO\r\nINVESTIMENTO NO EXTERIOR, inscrito no CNPJ nº\r\n32.225.606/0001-11 (“Fundo Master”), administrado pelo\r\nADMINISTRADOR e gerido pela GESTORA, cuja\r\npolítica de investimento consiste em aplicar os recursos\r\ndos cotistas em instrumentos, valores mobiliários e\r\nativos financeiros de diferentes naturezas e\r\ncaracterísticas, de acordo com uma política de gestão\r\nde carteira com o objetivo de que visa a obter\r\noportunidades em diferentes mercados, baseada em\r\numa sólida análise macroeconômica e sujeita às\r\nrestrições descritas no presente Regulamento.',
      movie_url: null,
      target_audience: 'Investidores Qualificados',
      strengths:
        'A PIMCO foi fundada em 1971, presente em 12 países e no Brasil desde 2012. Recebeu vários prêmios da Morningstar como Gestor de Renda Fixa. Indicado para diversificação global.',
      strategy:
        'Fundo classificado como Renda Fixa Global - Investimento no Exterior, com objetivo de retorno de CDI+3% ao ano no médio/longo prazo. O Fundo investe no mercado de renda fixa global, com exposição cambial, com base em análise macroeconômica e fundamentalista. Possui uma gestão internacional que busca das melhores oportunidades de renda fixa ao redor do mundo, com o objetivo de captar as grandes tendências.',
    },
    performance_videos: [],
    is_active: true,
    benchmark: {
      id: 2,
      name: 'CDI',
    },
    orama_standard: true,
    slug: 'PIMCO-Income-Dolar-FIC-FIM-IE',
    fund_situation: {
      code: '1',
      name: 'Fundo aberto',
    },
    volatility_12m: '0.173649',
    strategy_video: null,
    insurance_company_code: null,
    profitabilities: {
      m60: null,
      m48: null,
      m24: null,
      m36: null,
      month: '0.001675',
      m12: '0.383084',
      year: '0.401766',
      day: '-0.001805',
    },
    closed_to_capture_explanation: '',
    closing_date: null,
    net_patrimony_12m: '0.00',
    is_closed_to_capture: false,
    fund_manager: {
      description:
        'Fundada em 1971, a PIMCO é formada por mais de 2.000 profissionais dedicados, em 12 países, compartilhando a mesma missão: gerenciar riscos e gerar retorno para nossos clientes. Gerimos investimentos para uma ampla variedade de clientes, incluindo fundos de pensão públicos e privados, bem como ativos em nome de milhões de pessoas, de todos os extratos sociais, em todo o mundo. Somos investidores de longo prazo e líderes de opinião. Nossas perspectivas e soluções baseiam-se em um processo de investimento comprovado, que gera visões macroeconômicas cíclicas (de curto prazo) e seculares (de três a cinco anos), e que alia essas previsões com profundas pesquisas de crédito, análises de capital e gerenciamento de riscos. Em 30/Jun/2016 a PIMCO possuía USD 1,51 trilhões de ativos sob gestão.',
      id: 41,
      full_name: 'PIMCO Latin America Administradora de Carteiras LTDA.',
      logo: 'app_img/manager/logo_small/pimco.jpg',
      slug: 'PIMCO',
      name: 'PIMCO',
    },
    esg_seal: false,
  };

  it('Return Formated', () => {
    expect(formatFundsData([fund])).toEqual([
      {
        nameMacro: 'Renda Fixa',
        filterFundClass: { 'Renda Fixa Global': [fund] },
      },
    ]);
  });
});
