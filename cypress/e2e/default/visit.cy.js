// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// check this file using TypeScript if available
// @ts-check

describe('Twitter Clone', function () {
  // setup these constants to match what TodoMVC does
  it('Loads main page', () => {
    cy.visit('http://localhost:3000');
    cy.get('not found');
  });
});
