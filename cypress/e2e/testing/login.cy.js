describe('login', () => {
  beforeEach(() => {
    cy.visit('/index.html')
  })
  it('clicks login button', () => {
    cy.wait(500)
    cy.get('.modal-footer button[data-auth="login"]').click()
    cy.wait(500)
    cy.get('#loginEmail').type(Cypress.env('USERNAME'))
    cy.get('#loginPassword').type(Cypress.env('PASSWORD'))
    cy.get(`button[type="submit"]`).contains('Login').click()
    cy.get('.profile-email').contains(Cypress.env('USERNAME'))
  })
  it('logout', () => {
    cy.wait(500)
    cy.get('.modal-footer button[data-auth="login"]').click()
    cy.wait(500)
    cy.get('#loginEmail').type(Cypress.env('USERNAME'))
    cy.get('#loginPassword')
      .type(Cypress.env('PASSWORD'))
      .should('have.value', Cypress.env('PASSWORD'))
    cy.get(`button[type="submit"]`).contains('Login').click()
    cy.get(`button[data-auth="logout"]`).click()
    cy.get('#registerModalLabel')
    cy.should('be.visible')
  })
})