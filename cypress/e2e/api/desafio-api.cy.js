describe('API - Fluxo Funcional API DemoQA', () => {
    const BASE_URL = Cypress.env('BASE_URL')
    var idUser
    it('Cadastra usuário com sucesso', () => {
        cy.request({
            method: 'POST',
            url: `${BASE_URL}/Account/v1/User`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "userName": "testeqa12",
                "password": "Testeqa2!"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.userID).to.exist
            idUser = response.body.userID
        })
    })

    it('Gera token de acesso', () => {
        cy.request({
            method: 'POST',
            url: `${BASE_URL}/Account/v1//GenerateToken`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "userName": "testeqa12",
                "password": "Testeqa2!"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.token).to.exist
        })
    })

    it('Verifica se usuário criado está autorizado', () => {
        cy.request({
            method: 'POST',
            url: `${BASE_URL}/Account/v1/Authorized`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "userName": "testeqa12",
                "password": "Testeqa2!"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.equal(true)
        })
    })

    it('Lista livros disponíveis', () => {
        cy.request({
            method: 'GET',
            url: `${BASE_URL}/BookStore/v1/Books`,
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.books).to.exist
        })
    })

    it('Aluga dois livros', () => {
        cy.request({
            method: 'POST',
            url: `${BASE_URL}/BookStore/v1/Books`,
            auth: {
                user: 'testeqa12',
                pass: 'Testeqa2!'
            },
            body: {
                "userId": idUser,
                "collectionOfIsbns": [
                    {
                        "isbn": "9781449337711",
                        "isbn1": "9781491904244"

                    }
                ]
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.books).to.exist
        })
    })

    it('Lista detalhes do usuário e reservas', () => {
        cy.request({
            method: 'GET',
            url: `${BASE_URL}/Account/v1/User/${idUser}`,
            auth: {
                user: 'testeqa12',
                pass: 'Testeqa2!'
            },
            body: {
                "userID": idUser,
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.userId).to.exist
            expect(response.body.books).to.exist
        })

    })
})