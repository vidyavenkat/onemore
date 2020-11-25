// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// Alternatively you can use CommonJS syntax:
import 'cypress-xpath'
import * as sqlServer from 'cypress-sql-server'
sqlServer.loadDBCommands()
require('cypress-mailosaur')

beforeEach(() => {
  // clear browser cookie before each test
  cy.clearCookies()
})

before(() => {
  cy.task('clearDownloads')

  const downloadDirectory = 'cypress/Downloads'

  if (Cypress.browser.name !== 'firefox') {
    // since this call returns a promise, must tell Cypress to wait
    // for it to be resolved
    cy.wrap(
      Cypress.automation('remote:debugger:protocol', {
        command: 'Page.setDownloadBehavior',
        params: { behavior: 'allow', downloadPath: downloadDirectory },
      }),
      { log: false }
    )
  }
})

// eslint-disable-next-line no-unused-vars
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
