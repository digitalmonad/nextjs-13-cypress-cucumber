// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// check this file using TypeScript if available
// @ts-check

describe('TodoMVC - React', function () {
  // setup these constants to match what TodoMVC does
  it('passes', () => {
    cy.visit('http://localhost:3000');
  });
});
