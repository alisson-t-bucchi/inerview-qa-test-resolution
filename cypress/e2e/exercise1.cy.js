/* global describe, it, beforeEach, cy */
/// <reference types="cypress" />

/* 
Exercise 1: Find Product with Specific Price
Requirements:
Write a Cypress command to find the product with price $59
*/


describe('Test automation exercise 1', () => {

  beforeEach(() => {
    cy.visit('/'); 
  })

  it('find a product with price 59 ', () => {

    cy.contains('button', 'Exercise 1').click();

    cy.get('[data-cy="product-price"]').contains('$59').then(($price) => {
      const productItem = $price.closest('[data-cy="product-item"]');
    
      cy.wrap(productItem).find('[data-cy="product-name"]').should('have.text', 'Mouse');
  
      cy.wrap(productItem).should('have.attr', 'data-product-id', '45628');
    });
  })
})