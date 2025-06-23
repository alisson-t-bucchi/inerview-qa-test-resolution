/* global describe, it, cy */
/// <reference types="cypress" />

/* Exercise 5: Login Command
Requirements:
Create a custom Cypress command for user login functionality.

Command should:
Accept email and password as parameters
Use data-cy attributes for selectors
Include a basic assertion to verify login success
Follow Cypress best practices for custom commands
Can be reused across different test files
Should verify successful login
*/


describe('Test Automation 5', () => {
  it('should log in successfully with valid credentials', () => {
    cy.login('test@example.com', 'password123');
  });
});
