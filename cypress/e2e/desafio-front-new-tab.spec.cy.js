describe('Verifica menu Alerts, Frame & Windows', () => {
    it.only('Verifica abertura de nova janela', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(3)')
            .click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-0')
            .click()
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://demoqa.com/sample';
            }).as("popup")
        })
        cy.get('#windowButton')
            .click()
        cy.get('@popup')
            .should("be.called")
        cy.get('h1')
            .should('have.text', 'This is a sample page')
        
        cy.visit('https://demoqa.com/')
        
        cy.get('header > a > img')
            .should('be.visible')
       
    })
})