const { defineConfig } = require('cypress')

module.exports = defineConfig({

  e2e: { 
    baseUrl: 'https://qa-challenge-rx.vercel.app/',
    specifDate: '05/15/2024',
    fixturesFolder: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
  }
})