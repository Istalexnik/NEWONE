/// <reference types="cypress" />


describe('first test', () => {

    beforeEach(()=>{
    cy.visit('https://demoqa.com/');
    })
    
    it('verify link0', ()=> {
        cy.get('div.category-cards .card-body h5').contains('Elements').click();
    
    })


    // it('verify link', ()=> {
    //     cy.visit('https://example.cypress.io/');
    //     cy.contains('next').click();
    //     cy.url().should('include', 'commands/traversal');
    //     cy.get('div.container h1').should('have.text', 'Traversal');
    // })
    

    
    })