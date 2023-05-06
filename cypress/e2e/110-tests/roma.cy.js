/// <reference types = "cypress" />

describe('Test demoqa', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('/');
        cy.get('.card:nth-child(2)').click()
        cy.get('.element-group:nth-child(2)>div').click()
    });

    xit('Form filling', () => {
        cy.get('#firstName')
            .should('have.text', '')
            .type('Stan')
            .should('have.value', 'Stan')
        cy.get('button#submit')
            .click()
        cy.wait(500)
        cy.get('#firstName')
            .should('have.css', 'border-color', 'rgb(40, 167, 69)')
    })

    xit('Input field Last name is visible', () => {

        cy.get('#lastName').should('be.visible').and('have.attr', 'placeholder', 'Last Name');
    });

    it('Checkbox "Sports" default uncheck', () => {

        cy.get('#firstName').type('Name')
        cy.get('#lastName').type('LastName')
        cy.get('#userEmail').type('email@gmail.com')
        cy.get('#gender-radio-1').check({ force: true })
        //.get('label[for="gender-radio-1"]').click()
        cy.get('#userNumber').type('4454545454')
        cy.get('#dateOfBirthInput').click()
        // cy.get('.react-datepicker__month-container .react-datepicker__year-select').select('1990')
        // cy.get('.react-datepicker__month-container .react-datepicker__year-select [value="1990"]').click()
        // cy.get('.react-datepicker__month-container [aria-label*="April 11th"]').click()
        cy.get('#subjectsInput').type('Subjects')
        cy.get('#hobbies-checkbox-1').check({ force: true })
        cy.get('#hobbies-checkbox-3').check({ force: true })
        cy.get('#currentAddress').type('123 Main St, New York NY 11111')
        cy.get('#state').click()
        cy.get('#react-select-3-input').type('NCR')
        cy.get('button#submit').click()
        cy.get('.modal-content').should('be.visible')

    });


})