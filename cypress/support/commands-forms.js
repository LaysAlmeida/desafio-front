Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {

    cy.get('#firstName')
        .type('Bruno')
        .should('not.have.value','')

    cy.get('#lastName')
        .type('Gomes')
        .should('not.have.value','')

    cy.get('#userEmail')
        .type('emailteste@teste.com')
        .should('have.value','emailteste@teste.com')

    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
        .click()

    cy.get('#userNumber')
        .type('999999999')
        .should('have.value', '999999999')
    
    cy.get('#dateOfBirthInput')
        .click()
    cy.get('select.react-datepicker__year-select')
        .select('1990')
    cy.get(':nth-child(2) > .react-datepicker__day--005')
        .click()
    cy.get('#subjectsContainer')
    .type('English{enter}')
    
    cy.get('#hobbies-checkbox-1')
    .should('not.be.visible')
    .check({force:true})
    .should('be.checked')
    
    cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/example.json')
    .then(file => {
        expect(file[0].files[0].name).to.equal('example.json')
    })

    cy.get('#currentAddress')
        .type('9227 Emard Mall, Lake Elina, HI 17025-2834')

    cy.get('#state > .css-yk16xz-control > .css-1hwfws3')
        .click()
    cy.get('#react-select-3-option-2')
        .click()
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3')
        .click()
    cy.get('#react-select-4-option-0')
        .click()

    cy.get('#submit')
        .click()

    cy.get('.modal-header')
    .should('have.text', 'Thanks for submitting the form')

    cy.get('#closeLargeModal')
    .click()
})