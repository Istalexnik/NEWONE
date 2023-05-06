/// <reference types="cypress" />
describe('test3', () => {
    it('VerifySomething', () => {
     //   cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/');
        cy.get('.home-banner a').invoke('removeAttr', 'target').click();

        cy.origin('https://www.toolsqa.com', () => {
            cy.get('a[href="#enroll-form"]:nth-child(2)').click();
            cy.get('#first-name').type('Sveta')
            cy.get('#last-name').type('Sereda')
            cy.get('#email').type('Sereda@gmail.com')
            cy.get('#country').select('Barbados')
            cy.get('#city').type('NY')
            cy.get('#mobile').type('374378473')
            cy.get('#message').type('fjdkjfskdfjdkfsdsfdfs!!!!!')

            cy.get('#code').type('eruer')
            cy.get('.btn-primary').click()
            cy.wait(1000)
            cy.get('.alert.alert-error').should('have.text', 'Sorry ! Unable to verify that you are human.')


        })
    })
})