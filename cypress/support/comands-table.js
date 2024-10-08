Cypress.Commands.add('fillRegistrationForm', () => {
    cy.get('#firstName')
        .click()
        .type('Bruno')
    cy.get('#lastName')
        .click()
        .type('Gomes')
    cy.get('#userEmail')
        .click()
        .type('emailteste@teste.com')
    cy.get('#age')
        .click()
        .type('22')
    cy.get('#salary')
        .click()
        .type('1500')
    cy.get('#department')
        .click()
        .type('industrial')
    cy.get('#submit')
        .click()
})

Cypress.Commands.add('editFillRegistrationFormAndDelete', () => {
    cy.get('.action-buttons #edit-record-4')
        .click()
    cy.get('#age')
        .click()
        .clear()
        .type('21')
    cy.get('#submit')
        .click()
    cy.get('.action-buttons #delete-record-1')
        .click()
})