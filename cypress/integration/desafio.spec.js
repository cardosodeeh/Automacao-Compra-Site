import {
    bankWire,
    billingAddress,
    buyProduct,
    check,
    checkout,
    confirmPaymentBank,
    confirmPaymentCheck,
    deliveryAddress,
    updateAddress,
    visit,
} from "../support/desafio";

beforeEach(() => {
    visit();
})

describe('First challenge', () => {
    it('Purchase product and change the shipping address', () => {
        buyProduct();
        deliveryAddress();
        updateAddress();
        checkout();
        bankWire();
        confirmPaymentBank();
    })
})

describe('Second challenge', () => {
    it('Purchase product and change billing address', () => {
        buyProduct();
        billingAddress();
        updateAddress();
        checkout();
        bankWire();
        confirmPaymentBank();
    })
})

describe.only('Third challenge', () => {
    it('Purchase product and pay with check', () => {
        buyProduct();
        checkout();
        check();
        confirmPaymentCheck();
    })
})