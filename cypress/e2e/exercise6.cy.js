/* global describe, it, cy */
/// <reference types="cypress" />

/* Exercise 6: Product Selection
Requirements:
Write a Cypress test that specifically clicks the "Add to Cart" button for the Gaming Headset (the third product).
Must click the correct "Add to Cart" button
Note that:
All buttons have the same text
All buttons have the same data-cy attribute
Product order might change
*/

describe('Automation test 6', () => {
  it('should click the Add to Cart button for the Gaming Headset', () => {
    cy.visit('/');
    cy.contains('button', 'Exercise 6').click();
    cy.contains('.product-card', 'Gaming Headset', '89.99')
      .within(() => {
        cy.get('[data-cy="add-button"]').click();
    });
  });
});





