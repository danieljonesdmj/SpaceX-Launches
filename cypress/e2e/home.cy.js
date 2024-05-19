describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('renders a heading', () => {
    cy.get('h1').contains('SpaceX Launches')
  })

  it('displays 10 cards', () => {
    cy.get('[data-cy=card]').should('have.length', 10)
  })

  it('displays the correct information for failure FalconSat launch', () => {
    cy.contains('h2', 'FalconSat')
    cy.contains('li', '24/03/2006')
    cy.contains('li', 'Merlin1A')
    cy.contains('li', '5eb0e4b5b6c3bb0006eeb1e1')
    cy.contains('li', 'Satellite')
    cy.contains('h3', 'Failure')
    cy.contains('li', 'merlin engine failure')
  })

  it('displays the correct information for successful RatSat launch', () => {
    cy.contains('h2', 'RatSat')
    cy.contains('li', '29/09/2008')
    cy.contains('li', 'Merlin2C')
    cy.contains('li', '5eb0e4b7b6c3bb0006eeb1e5')
    cy.contains('li', 'Satellite')
    cy.contains('h3', 'Success')
  })
})