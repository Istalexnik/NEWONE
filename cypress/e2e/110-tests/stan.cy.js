describe('fill out form', () => {
    // const expectedManuItemNames = [это с прошлого урока 29 апреля
    //     'Elements',
    //     'Forms',
    //     'Alerts, Frame & Windows',
    //     'Widgets',
    //     'Interactions',
    //     'Book Store Application',
    // ];
    let formData;
    before(function () {
        cy.fixture('formData').then((data) => {
            this.formData = data
        })
    })
    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/');
        // cy.fixture('formData').then((data) =>{
        //     this.formData = data
    })

    it('Form filling', function () {
        cy.get('.card:nth-child(2)').click();
        cy.get('.element-group:nth-child(2)>div').click();
        cy.get('#firstName')
            .should('have.text', '')
            .type(`${this.formData.firstName}{enter}`)
            .should('have.value', this.formData.firstName)
            .should('have.css', 'border-color', 'rgb(40, 167, 69)');
        cy.get('#userEmail')
            .should('have.text', '')
            .type(`${this.formData.userEmail}{enter}`)
            .should('have.value', this.formData.userEmail)
            .should('have.css', 'border-color', 'rgb(40, 167, 69)');
    })
    it('Form filling Version 2', function () {
        cy.get('.card:nth-child(2)').click();
        cy.get('.element-group:nth-child(2)>div').click();
        cy.get('#firstName')
            .should('have.text', '')
            .type(`${this.formData.firstName}{enter}`)
            .should('have.value', this.formData.firstName)
            .should('have.css', 'border-color', 'rgb(40, 167, 69)');
        cy.get('#userEmail')
            .should('have.text', '')
            .type(`${this.formData.userEmail}{enter}`)
            .should('have.value', this.formData.userEmail)
            .should('have.css', 'border-color', 'rgb(40, 167, 69)');
    })
})