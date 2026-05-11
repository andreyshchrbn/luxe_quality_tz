import { loginActions } from '../pages/login/login.actions';
import { cartActions } from '../pages/shop/cart/cart.actions';
import { checkoutCompleteActions } from '../pages/shop/checkout-complete/checkout-complete.actions';
import { checkoutInformationActions } from '../pages/shop/checkout-information/checkout-information.actions';
import { checkoutOverviewActions } from '../pages/shop/checkout-overview/checkout-overview.actions';
import { inventoryActions } from '../pages/shop/inventory/inventory.actions';
import { loginToInventory } from '../utils/auth.utils';
import { generateCheckoutData } from '../utils/dataGenerate';
import { resetAppState } from '../utils/state.utils';
import productsData from '../data/product.data.json';
import { sidebarActions } from '../components/sidebar/sidebar.actions';

describe('Checkout Flow', () => {
    beforeEach(async () => {
        await loginToInventory();
        await resetAppState();
    });

    it('TC-8: Valid Checkout - e2e', async () => {
        const randomUser = generateCheckoutData();

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
        await checkoutOverviewActions.verifyOverviewPrice(productsData.bikeLight.price);

        await checkoutOverviewActions.finishOrder(/.*checkout-complete.html/);
        await checkoutCompleteActions.verifyOrderComplete('Thank you for your order!');
        await checkoutCompleteActions.returnToHome(/.*inventory.html/);
        await inventoryActions.verifyEmptyCart();
    });

});

describe('Cart Persistence Flow', () => {
    beforeEach(async () => {
        await loginToInventory();
    });

    it('TC-5: Added product is kept in cart after logout and login', async () => {
        await inventoryActions.addBikeLightToCart();
        await inventoryActions.verifyCartCounter('1');

        await sidebarActions.openMenu();
        await sidebarActions.verifyMenuItems([
            'All Items',
            'About',
            'Logout',
            'Reset App State',
        ]);
        await sidebarActions.logout(/.*\/$/);
        await loginActions.verifyLoginFormIsEmpty();

        await loginToInventory();
        await inventoryActions.verifyCartCounter('1');

        await inventoryActions.openCart();
        await cartActions.verifyCartContent(productsData.bikeLight.name);
    });
})
    describe.only('Sorting Flow', () => {
        beforeEach(async () => {
            await loginToInventory();
        });
        it('TC-6: Products can be sorted by price from low to high', async () => {
            await inventoryActions.sortByPriceLowToHigh();
            await inventoryActions.verifySelectedSortOption('Price (low to high)');
            await inventoryActions.verifyProductsAreSortedByPriceLowToHigh();
        });
    });

