import Button from '.';

/**
 * https://www.youtube.com/watch?v=vJ0rDP4CG-w
 */

describe('Button component unit test cases', () => {
  it('simple test case for button', () => {
    const onClickSpy = cy.spy().as('onClickSpy');

    cy.mount(<Button onClick={onClickSpy}>Submit</Button>);
    cy.get('[data-testid="custom-button"]')
      .should('contain.text', 'Submit')
      .click();

    cy.get('@onClickSpy').should('always.have.been.calledWith', 1);
  });
});
