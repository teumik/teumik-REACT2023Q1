describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:6969/');
  });

  it('Text h1 contains the correct text', () => {
    cy.getByData('header').contains('Home');
  });

  it('Render fetched items', () => {
    // cy.getByData('item').last().should('have.length', 20);
    // cy.get('section').last().should('have.length', 20);
  });

  it('Search with no data', () => {
    cy.get('input[type="text"]').type('asdasd');
    cy.get('[type="submit"]').click();
    cy.contains('There is nothing here');
  });
});
