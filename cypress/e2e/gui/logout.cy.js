/// <reference types = "Cypress"/>

describe('Realiza loggout da aplicação', () => {

    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })

    it('com sucesso', () => {
      cy.logout()

      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)

    })
     
  })