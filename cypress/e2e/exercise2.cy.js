/* global describe, it, beforeEach, cy */
/// <reference types="cypress" />

/* 
Exercise 2: Find Table Elements
Requirements:
Complete the code to find specific elements within the row that matches the 05/15/2024 date (in Los Angeles timezone).
All elements must be found within the aliased row ("@test-table")
Be specific with element types as similar text appears in different elements
Order of elements matters
Multiple similar classes exist
*/


describe('Test automation exercise 2', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('find elements in the row with date 05/15/2024', () => {
    
    const specifDate = Cypress.env('specifDate') || '05/15/2024';

    cy.contains('button', 'Exercise 2').click();

    cy.get('table[name="Test1"]')
    .contains(specifDate)
    .closest('tr')
    .as("test-table")
    
    cy.get('@test-table')
    .find('p')
    .contains(/^First$/)
    .should('exist');
    
    cy.get('@test-table')
    .find('span')
    .contains('Accepted')
    .should('exist');
    
    cy.get('@test-table')
    .find('button')
    .contains('View')
    .should('exist');
    
    cy.get('@test-table')
    .find('button.button-order-more')
    .click();
  });
})  