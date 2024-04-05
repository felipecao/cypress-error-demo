describe('Authentication', () => {
  it('should be able to log into the app', () => {
    const email = 'email to be provided via private message';
    const password = 'some fake password';

    cy.visit("https://mail.google.com");

    cy.get('input#identifierId').should('be.visible').type(email);
    cy.get('input#identifierId').should('contain.value', email);
    cy.contains('span', 'Next').click();
    cy.get('input[type="password"]').should('be.visible', {timeout: 30000}).type(password);
    cy.get('button[type="button"]').eq(1).should('be.enabled').click({force: true});
    
  });
});
