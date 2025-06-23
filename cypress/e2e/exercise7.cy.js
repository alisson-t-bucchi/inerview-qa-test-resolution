/* global describe, it, cy */
/// <reference types="cypress" />

/* Exercise 7: API Interception
Requirements:
Write a Cypress test that intercepts an API call and verifies both request and response using callback functions.
Must intercept POST request to jsonplaceholder.typicode.com/posts
Verify request payload has:
title (string)
body (string)
userId (number)
Verify response contains:
id field (number)
Use callback functions for verification
*/

describe('Automation test 7', () => {
    it('should intercept POST and verify request and response', () => {

    cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts', (req) => {

      expect(req.body).to.have.property('title').and.to.be.a('string');
      expect(req.body).to.have.property('body').and.to.be.a('string');
      expect(req.body).to.have.property('userId').and.to.be.a('number');

    
      req.continue((res) => {
        expect(res.body).to.have.property('id').and.to.be.a('number');
      });
    }).as('postRequest');

    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'Product Added',
        body: 'Added product to cart',
        userId: 1,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});

