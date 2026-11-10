import { test, expect } from '@playwright/test';
import { FlightSearchPage } from '../pages/FlightSearchPage';
import { FlightPurchasePage } from '../pages/FlightPurchasePage';

// A descriptive 'describe' block models real-world regression suite structures
test.describe('Travel Portal - Flight Booking Workflows', () => {
  
  test('Verify user can successfully book a flight from Paris to London', async ({ page }) => {
    const searchPage = new FlightSearchPage(page);
    const purchasePage = new FlightPurchasePage(page);

    // Step 1: Access travel landing page
    await searchPage.navigateToPortal();

    // Step 2: Input search routing constraints
    await searchPage.searchForFlights('Paris', 'London');

    // Step 3: Execute flight selection from results matrix
    await purchasePage.selectFirstAvailableFlight();

    // Step 4: Populate passenger ledger details and finalize order
    await purchasePage.completePurchaseForm('John Doe');

    // Step 5: Assert structural text matches confirmation criteria
    await expect(purchasePage.confirmationHeader).toHaveText('Thank you for your purchase today!');
  });
  
});
