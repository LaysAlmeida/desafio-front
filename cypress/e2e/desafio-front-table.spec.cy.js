describe('Acessa menu Elements', () => {
    it('Adiciona novo cadastro', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(1)')
            .click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3')
            .click()
        cy.get('#addNewRecordButton')
            .click()
            cy.get('#firstName')
            .click()
            .type('Bruno')
        cy.fillRegistrationForm()
        cy.editFillRegistrationFormAndDelete()
        
    });
})