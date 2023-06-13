describe('template spec', () => {
  it('login', () => {
    cy.visit('/')
    cy.contains('iniciar session').click();

    cy.origin('https://dev-0s05fi17.us.auth0.com', (): void => {
      cy.get('input#username').type('jose@hotmail.com')
      cy.get('input#password').type('Nodos12345$$');
      
      //cy.get('button').click().should('have.class', 'active')
      cy.get("[data-action-button-primary=true]").click();
      //cy.get('@btn').should('have.class', 'active')
})

  })
})


