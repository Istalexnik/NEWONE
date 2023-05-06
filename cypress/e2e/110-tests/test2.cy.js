///<reference types="cypress"/>




describe('test2', () => {
    
    beforeEach(() => {
        cy.viewport(1000, 1000)
    cy.visit('https://demoqa.com/automation-practice-form');
})
    
    it('filling the form', () => {
        cy.get('#firstName').type('Tom');
        cy.get('#lastName').type('Peterson');
        cy.get('#userEmail').type('email@mail.com');
        cy.get('#gender-radio-1').check({ force: true });
        cy.get('#userNumber').type('4564565444');
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select('June');
        cy.get('.react-datepicker__year-select').select('1986');
        cy.get('.react-datepicker__day.react-datepicker__day--011').first().click();
        cy.get('#subjectsInput').type('Maths').type('{enter}').type('Physics').type('{enter}');
        cy.get('#hobbies-checkbox-1').check({ force: true });
        cy.get('#currentAddress').type('123 Address');
        cy.contains('Select State').click()
        cy.contains('NCR').click()
        // cy.contains('Select City').click()
        cy.get('#city').click()
        cy.contains('Gurgaon').click()
        cy.get('#submit').click({ force: true })
        cy.contains('Thanks for submitting the form').should('be.visible')

    })

})