import { Page, Locator } from '@playwright/test';

export class FlightSearchPage {
  private readonly page: Page;
  private readonly departureDropdown: Locator;
  private readonly destinationDropdown: Locator;
  private readonly findFlightsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Using robust element attributes ideal for dynamic test environments
    this.departureDropdown = page.locator('select[name="fromPort"]');
    this.destinationDropdown = page.locator('select[name="toPort"]');
    this.findFlightsButton = page.locator('input[type="submit"]');
  }

  async navigateToPortal(): Promise<void> {
    await this.page.goto('https://blazedemo.com');
  }

  async searchForFlights(fromCity: string, toCity: string): Promise<void> {
    await this.departureDropdown.selectOption(fromCity);
    await this.destinationDropdown.selectOption(toCity);
    await this.findFlightsButton.click();
  }
}
