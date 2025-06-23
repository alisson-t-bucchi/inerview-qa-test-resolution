/* global describe, it, beforeEach, cy */
/// <reference types="cypress" />

/*
Exercise 4: Verify Element Relationships
Requirements:
Write two Cypress commands that will verify element relationships.
Verify "old-car" is within an element with class "my-class"
Verify that the number "1" is a sibling of "old-car"
Solution should work even if:
The order of the cards changes
There are multiple "old-car" texts
There are multiple numbers
*/

describe('Test automation exercise 4', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })

  it('verify elements relationship', () => {

    cy.contains('button', 'Exercise 4').click();

    cy.get('.my-class')
    .contains('span', 'old-car')
    .should('exist'); 
    
    cy.get('.my-class')
    .contains('span', 'old-car')
    .parent()
    .within(() => {
        cy.contains('span', '1')
        .should('exist');
    });  
  });
});
