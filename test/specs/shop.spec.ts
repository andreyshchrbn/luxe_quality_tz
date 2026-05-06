import { loginActions } from '../pages/login/login.actions';
import { cartActions } from '../pages/shop/cart/cart.actions';
import { checkoutCompleteActions } from '../pages/shop/checkout-complete/checkout-complete.actions';
import { checkoutInformationActions } from '../pages/shop/checkout-information/checkout-information.actions';
import { checkoutOverviewActions } from '../pages/shop/checkout-overview/checkout-overview.actions';
import { inventoryActions } from '../pages/shop/inventory/inventory.actions';
import usersData from '../data/users.json';
import { generateCheckoutData } from '../utils/dataGenerate';
import productsData from '../data/product.data.json';

describe('Shop Functional Tests', () => {
    beforeEach(async () => {
        await loginActions.openPage();
        await loginActions.loginAs(usersData.valid_user);

        await inventoryActions.resetAppStateIfNotEmpty();
    });

    it('TC-8: Valid Checkout - e2e', async () => {
        const randomUser = generateCheckoutData();
        const product = productsData.bikeLight;

        await inventoryActions.addBikeLightToCart();

        await inventoryActions.verifyCartCounter('1');
        await inventoryActions.openCart();
        await cartActions.verifyCartContent('Sauce Labs Bike Light');
        await cartActions.proceedToCheckout();
        await checkoutInformationActions.verifyLoaded(
            /.*checkout-step-one.html/,
            'Checkout: Your Information',
        );

        await checkoutInformationActions.fillCheckoutForm(randomUser);
        await checkoutInformationActions.continueCheckout(/.*checkout-step-two.html/);
        await checkoutOverviewActions.verifyOverviewPrice(product.price);

        await checkoutOverviewActions.finishOrder(/.*checkout-complete.html/);
        await checkoutCompleteActions.verifyOrderComplete('Thank you for your order!');
        await checkoutCompleteActions.returnToHome(/.*inventory.html/);
        await inventoryActions.verifyEmptyCart();
    });
});
