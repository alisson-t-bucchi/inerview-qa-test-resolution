/* global describe, it, beforeEach, cy */
/// <reference types="cypress" />

/*
Exercise 3: Verify Checkbox State
Requirements:
Write a Cypress command to verify if a specific checkbox is checked.
Checkbox must be associated with a paragraph containing "Test2"
Must be within the test-grid-3 section
Must be inside an item-content div
Multiple "Test2" texts exist in different locations
Several checkboxes are checked
Similar structures appear in different grids
Some "Test2" texts are in different element types
*/

describe('Test automation xxercise 3', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })

  it('verify checkboc state', () => {

    cy.contains('button', 'Exercise 3').click();

    cy.get('[data-cy="test-grid-3"]')    
      .find('.item-content')                      
      .contains('p', 'Test2')                   
      .should('exist')                          
      .parent()                                    
      .find('input[type="checkbox"]')              
      .should('be.checked');                       
  });
});
