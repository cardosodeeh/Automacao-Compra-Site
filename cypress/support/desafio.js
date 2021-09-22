import loc from '../support/loc-desafio';

export const visit = () => {
    cy.visit(loc.visit.site)
}

export const buyProduct = () => {
    cy.get(loc.buy.selectProduct).click()
    cy.get(loc.contains.productFirst).should('have.text', 'Faded Short Sleeve T-shirts')
    cy.get(loc.buy.addProduct).click()
    cy.get(loc.buy.buyProduct).click()
    cy.get(loc.contains.productSecond).should('have.text', 'Faded Short Sleeve T-shirts')
    cy.get(loc.buy.checkout).click()
    cy.get(loc.loginData.email).type('candidato@justa.com.vc')
    cy.get(loc.loginData.password).type('tamojusto')
    cy.get(loc.loginData.confirmLogin).click()
}

export const deliveryAddress = () => {
    cy.get(loc.updateAddress.deliveryAddress).click()
}

export const billingAddress = () => {
    cy.get(loc.updateAddress.billingAddress).click()
}

export const updateAddress = () => {
    cy.get(loc.updateAddress.newAddress)
        .clear()
        .type('Av México')
    cy.get(loc.updateAddress.newCity)
        .clear()
        .type('Novo México')
    cy.get(loc.updateAddress.newState)
        .select('New Mexico')
        .invoke('val')
        .should('eq', '31')
    cy.get(loc.updateAddress.confirmAddress).click()
}

export const checkout = () => {
    cy.get(loc.buy.checkout).click()
    cy.get(loc.buy.agreeTerms).click()
    cy.get(loc.buy.checkout).click()
    cy.get(loc.contains.productSecond).should('have.text', 'Faded Short Sleeve T-shirts')
}

export const bankWire = () => {
    cy.get(loc.buy.bankWire).click()
}

export const check = () => {
    cy.get(loc.buy.check).click()
}

export const confirmPaymentBank = () => {
    cy.get(loc.buy.confirmPayment).click()
    cy.get(loc.contains.bankWirePayment).should('have.text', 'Your order on My Store is compconste.')
}

export const confirmPaymentCheck = () => {
    cy.get(loc.buy.confirmPayment).click()
    cy.get(loc.contains.checkPayment).should('have.text', 'Your order on My Store is compconste.')
}