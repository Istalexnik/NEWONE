/// <reference types="cypress" />
/** @type {HTMLDivElement} */


describe('test', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/');
    })
    it.skip('verify link 1', () => {     
        cy.contains("next").click();
        cy.url().should('include', 'commands/traversal');
        cy.get('.container h1').should('have.text', 'Traversal')
    })

    it.skip('verify link 2', () => {        
        cy.contains('clear').click();
        cy.url().should('include', 'commands/actions');
        cy.get('.container h1').should('have.text', 'Actions')
    })

    it('verify link 4', () => {
        cy.get("a[class='dropdown-toggle']").click();
        cy.get('.dropdown-menu a[href="/commands/querying"]').click();
        cy.get('button#query-btn').should('include.text', 'Button');
    })


    
})

