describe('<Navigation/>', () => {
    it('should navigate to the blackjack page from the home page', () => {
        cy.visit('http://localhost:3000/')
        cy.get('a[href*="blackjack"]').click()
        cy.url().should('include', '/blackjack')
    })
    it('should navigate to the home page from the blackjack page', () => {
        cy.visit('http://localhost:3000/blackjack')
        cy.get('a[href="/"]').click()
        cy.url().should('include', '/')
    })
})