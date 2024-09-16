describe('Acessa menu Forms', () => {
    it.only('Preenche formulário', () => {
        cy.visit('https://demoqa.com/')

        cy.get('.category-cards > :nth-child(2)')
            .click()
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0')
            .click()
        cy.get('#genterWrapper > .col-md-9 > :nth-child(2)')
            .click()
        cy.fillMandatoryFieldsAndSubmit()
    });
})