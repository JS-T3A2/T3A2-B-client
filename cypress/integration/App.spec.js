const loadAndIntercept = () => {};

describe('App', () => {
  it('should work', () => {
    cy.intercept(
      { method: 'POST', url: 'http://localhost:3000/api/v1/graphql' },
      { data: { isAuth: true } },
    ).as('IsAuth');
    cy.visit('/');
    cy.wait('@IsAuth');
    cy.get('h1').should('have.text', 'Learn React');
  });
});
