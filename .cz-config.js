module.exports = {
  types: [{
          value: 'feat',
          name: 'feat:     Uma nova feature'
      },
      {
          value: 'fix',
          name: 'fix:      Um bug fix'
      },
      {
          value: 'docs',
          name: 'docs:     Mudança apenas na documentação'
      },
      {
          value: 'style',
          name: 'style:    Mudança que não altera afeta a lógica do código\n            (white-space, formatting, missing semi-colons, etc)',
      },
      {
          value: 'refactor',
          name: 'refactor: Um código que não é nem um bug fix nem uma feature',
      },
      {
          value: 'perf',
          name: 'perf:     Uma mudança no código para melhorar a performance',
      },
      {
          value: 'test',
          name: 'test:     Adicionando testes que faltavam'
      },
      {
          value: 'chore',
          name: 'chore:    Mudança no processo de build, alguma ferramenta auxilar\n            ou libs para geração de documentação',
      },
      {
          value: 'revert',
          name: 'revert:   Reverte um commit'
      },
      {
          value: 'WIP',
          name: 'WIP:      Work in progress - Trabalho em progresso'
      },
  ],

  scopes: [{
      name: 'componentes'
  }, {
      name: 'diretiva'
  }, {
      name: 'lib'
  }],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'ISSUES FECHADAS:',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [

      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
      type: "Seleciona o tipo de mudança que você tá commitando:",
      scope: '\nDescreva o scopo dessa mudança (opcional):',
      // used if allowCustomScopes is true
      customScope: 'nDescreva o scopo dessa mudança:',
      subject: 'Escreva uma descrição PEQUENA e IMPERATIVA sobre a mudança:\n',
      body: 'Forneça uma decriçao LONGA sobre a mudança (opcional). Use "|" para quebrar uma nova linha:\n',
      breaking: 'Liste qualquer BREAKING CHANGES (opcional):\n',
      footer: 'Liste qualquer ISSUE FECHADA por essa mudança (optional). E.g.: #31, #34:\n',
      confirmCommit: 'Você tem certeza que quer proceder com o commit de cima?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};