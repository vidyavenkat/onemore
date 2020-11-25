import { defineStep } from 'cypress-cucumber-preprocessor/steps'
import VinetiPage from '../page-objects/VinetiPage'
import Utilities from '../Vineti/utilities'

const Username = 'vidya' + Utilities.generate_random_string(5)

// the user navigates to the site
defineStep('the user navigates to the site', () => {
  cy.visit('https://demoblaze.com')
  cy.contains('PRODUCT STORE').should('be.visible')
  cy.get(VinetiPage.SIGNUP_LINK).should('be.visible')
})

defineStep('signup for new account', () => {
  cy.get(VinetiPage.SIGNUP_LINK).click()
  cy.get(VinetiPage.SIGNUP_USERNAME).clear().type(Username)
  cy.get(VinetiPage.SIGNUP_PASSWORD).clear().type('Test1234')
  cy.get(VinetiPage.SIGNUP_BUTTON).click()
})

defineStep('the user logs into the site', () => {
  cy.visit('https://demoblaze.com')
  cy.contains('PRODUCT STORE').should('be.visible')
  cy.get(VinetiPage.ACCOUNT_LOGIN).click()
  cy.get(VinetiPage.USERNAME).type(Username)
  cy.get(VinetiPage.PASSWORD).type('Test1234')
  cy.get(VinetiPage.LOGIN_BUTTON).click()
  cy.contains('Log out').should('be.visible')
})

defineStep('add samsung s6 to the cart', () => {
  cy.contains('Samsung galaxy s6').should('be.visible').click()
  cy.contains('Add to cart').click()
})

defineStep('see the added mobile in the cart', () => {
  cy.get(VinetiPage.GOTO_CART).click()
  cy.contains('Samsung galaxy s6').should('be.visible')
})
