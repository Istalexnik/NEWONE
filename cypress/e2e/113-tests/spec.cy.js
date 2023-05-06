/// <reference types = 'cypress' />

describe('DemoQA Menu', () => {
  const expectedMenuItemnames = [
    'Elements',
    'Forms',
    'Alerts, Frame & Windows',
    'Widgets',
    'Interactions',
    'Book Store Application'];

  it('Verification menu item names', () => {
    cy.visit('/');
    cy.get('.card').should('have.length', expectedMenuItemnames.length).each((el, idx) => {

      expect(el.text()).to.be.equal(expectedMenuItemnames[idx]);
      // cy.wrap(el.text()).should('have.text', expectedMenuItemnames[idx])
      //cy.log(el.text())
    });
  })

  it('Verification menu item names 2', () => {
    cy.visit('/');
    cy.get('.card').should('have.length', expectedMenuItemnames.length)
      .then((els) => {
       return Cypress.$.makeArray(els).map(el=>el.innerText)
      })
      .should('deep.equal', expectedMenuItemnames)
  });




})