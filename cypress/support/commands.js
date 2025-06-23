/* global Cypress, cy */
/// <reference types="cypress" />

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/');
  cy.contains('button', 'Exercise 5').click();
  cy.get('[data-cy="email-input"]').clear().type(email);
  cy.get('[data-cy="password-input"]').clear().type(password);
  cy.get('[data-cy="submit-button"]').click();

  cy.get('[data-cy="welcome-message"]', { timeout: 10000 })
    .should('be.visible')
    .and('contain', 'Welcome back!');
});


