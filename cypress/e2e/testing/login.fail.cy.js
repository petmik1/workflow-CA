describe('login fail alert', () => {
  beforeEach(() => {
    cy.visit('/index.html')
  })
  it('showes a alert when wrong credentials are given', () => {
    cy.wait(2000)
    cy.get('.modal-footer button[data-auth="login"]').click()
    cy.wait(2000)
    cy.get('#loginEmail')
      .type(Cypress.env('USERNAME'))
      .should('have.value', Cypress.env('USERNAME'))
    cy.get('#loginPassword')
      .type('wrongPassword')
      .should('have.value', 'wrongPassword')
    cy.get(`button[type="submit"]`).contains('Login').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        'Either your username was not found or your password is incorrect'
      )
    })
  })
})
