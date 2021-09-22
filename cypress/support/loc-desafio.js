const locators = {
    visit: {
        site: 'http://automationpractice.com/',
    },

    buy: {
        selectProduct: '#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > h5 > .product-name',
        addProduct: '.exclusive > span',
        buyProduct: '.button-medium > span',
        checkout: '.cart_navigation > .button > span',
        agreeTerms: '#cgv',
        bankWire: '.bankwire',
        check: '.cheque',
        confirmPayment: '#cart_navigation > .button > span',
    },

    contains: {
        productFirst: 'h1',
        productSecond: '.cart_description > .product-name > a',
        bankWirePayment: '.cheque-indent > .dark',
        checkPayment: '.alert'
    },

    loginData: {
        email: '#email',
        password: '#passwd',
        confirmLogin: '#SubmitLogin > span',
    },

    updateAddress: {
        deliveryAddress: '#address_delivery > .address_update > .button > span',
        billingAddress: '#address_invoice > .address_update > .button > span',
        newAddress: '#address1',
        newCity: '#city',
        newState: '#id_state',
        confirmAddress: '#submitAddress > span',
    },
}

export default locators