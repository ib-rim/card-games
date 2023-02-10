import Card from "@/components/Card";

describe('<Card />', () => {
  it('should render and display expected content', () => {
    cy.mount(<Card rank="A" suit="♠"/>);
    cy.get('div').contains('A');
    cy.get('div').contains('♠');
  })
})