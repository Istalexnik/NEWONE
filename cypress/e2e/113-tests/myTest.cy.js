/// <reference types='cypress'/>
beforeEach(() => {
    cy.visit('/');
})

describe('myTest',() => {
    xit('test1', () => {

        cy.get('div.card-body').contains('Elements').click();
        cy.get('svg+span').contains(/^Buttons$/).click();
        cy.contains('.btn.btn-primary', /^Click Me$/).click();
        cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
        cy.get('.main-header').contains(/^Buttons$/);
    })


    it('test2', () => {
        cy.get('div.card-body').contains('Elements').click();
        cy.get('li:nth-child(1)>span.text').contains('Text Box').click();
        cy.get('#userName').type('Test Testov');
        cy.get('#userEmail').type('test@gmail.com');
        cy.get('#currentAddress').type('test');
        cy.get('#permanentAddress').type('test');
        cy.get('#submit').click().then(() => {
            cy.get('p#permanentAddress').should('be.visible');
        })

    })

})