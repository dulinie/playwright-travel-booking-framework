import { Page, Locator } from '@playwright/test';

export class FlightPurchasePage {
  private readonly page: Page;
  private readonly chooseFlightButton: Locator;
  private readonly nameInput: Locator;
  private readonly purchaseFlightButton: Locator;
  public readonly confirmationHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    // Dynamically targeting the first flight option in the table rows
    this.chooseFlightButton = page.locator('input[type="submit"]').first();
    this.nameInput = page.locator('#inputName');
    this.purchaseFlightButton = page.locator('text=Purchase Flight');
    this.confirmationHeader = page.locator('h1');
  }

  async selectFirstAvailableFlight(): Promise<void> {
    await this.chooseFlightButton.click();
  }

  async completePurchaseForm(passengerName: string): Promise<void> {
    await this.nameInput.fill(passengerName);
    await this.purchaseFlightButton.click();
  }
}
