describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:6969/');
  });

  it('Text h1 contains the correct text', () => {
    cy.getByData('header').contains('Home');
  });

  it('Render fetched items', () => {
    cy.getByData('item').should('have.length', 20);
  });

  it('Invalid search request', () => {
    cy.get('input[type="text"]').type('asdasd');
    cy.get('[type="submit"]').click();
    cy.contains('There is nothing here');
  });

  it('Valid search request and saved', () => {
    cy.get('input[type="text"]').type('rick');
    cy.get('[type="submit"]').click();
    cy.getByData('item').should('have.length', 20);
    cy.contains('About').click();
    cy.getByData('header').contains('About');
    cy.contains('Home').click();
    cy.getByData('header').contains('Home');
    cy.get('input[type="text"]').should('have.value', 'rick');
  });

  it('Test item modal', () => {
    cy.getByData('item').first().click();
    cy.contains('04.11.2017, 22:48:46');
    cy.getByData('overlay').click({ force: true });
    cy.contains('04.11.2017, 22:48:46').should('not.exist');
  });

  it('Test pagination', () => {
    cy.getByData('prev').should('be.disabled');
    cy.getByData('next').click();
    cy.getByData('item').should('have.length', 20);
    cy.contains('Aqua Morty');
    cy.getByData('prev').click();
    cy.getByData('prev').should('be.disabled');
    cy.get('input[type="text"]').type('Agency Director');
    cy.get('[type="submit"]').click();
    cy.contains('Agency Director');
    cy.getByData('item').should('have.length', 1);
    cy.getByData('prev').should('be.disabled');
    cy.getByData('next').should('be.disabled');
    cy.contains('Agency Director').click();
    cy.contains('05.11.2017, 00:06:54');
  });
});
