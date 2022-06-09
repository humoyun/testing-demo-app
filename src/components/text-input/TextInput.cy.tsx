import TextInput from '.';

describe('', () => {
  it('mounts', () => {
    cy.mount(<TextInput placeholder="Enter name" />);
    cy.get('input').should('have.attr', 'placeholder', 'Enter name');

    cy.get("[data-testid='custom-text-input']").type('Ahmad');
    cy.get("[data-testid='custom-text-input']")
      .should('exist')
      .contains('Ahmad');
  });
});
