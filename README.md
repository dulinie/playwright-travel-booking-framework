# ✈️ Playwright Travel & Airline Automation Framework

An industry-standard, resilient Quality Engineering framework built using **Playwright** and **TypeScript**. This repository models complex end-to-end user journeys within the Travel and Airline domain, utilizing the **Page Object Model (POM)** design pattern to maximize script maintainability and eliminate test flakiness.

## 🌟 Strategic Framework Highlights
* **Domain-Driven Architecture:** Models real-world flight search, selection, ledger entry, and booking purchase flows typical of core airline reservation platforms.
* **Page Object Model (POM):** Enforces a strict separation of concerns, housing web locators and modular business actions independently from the functional test assertions.
* **Cross-Browser Multi-Threading:** Configured to run test suites in parallel across headless **Chromium (Chrome/Edge)**, **Firefox**, and **WebKit (Safari)** engines concurrently.
* **Zero-Maintenance Waiting:** Leverages Playwright's built-in auto-waiting mechanisms, avoiding flaky `Thread.sleep()` or rigid wait patterns.
* **DevOps Ready:** Includes pre-configured workflow triggers (`.github/workflows`) for seamless continuous integration (CI) execution upon code check-in.

## 📂 Repository Blueprint
```text
playwright-travel-booking-framework/
├── .github/workflows/      # Automated CI/CD execution pipeline configurations
├── src/
│   ├── pages/             # Page Object Layer (Locators & Business Workflows)
│   │   ├── FlightSearchPage.ts
│   │   └── FlightPurchasePage.ts
│   └── tests/             # Test Layer (Clean, readable assertions)
│       └── flightBooking.spec.ts
└── playwright.config.ts   # Global Test Engine Control Panel
```

## 🛠️ Local Execution Checklist

### Prerequisites
Ensure you have [Node.js](https://nodejs.org) installed.

### Setup
Clone the repository and install dependencies:
\`\`\`bash
git clone https://github.com
cd playwright-travel-booking-framework
npm install
\`\`\`

### Execution Commands
* **Interactive UI Runner:** `npx playwright test --ui`
* **Headless Cross-Browser Regression:** `npx playwright test`
* **Generate HTML Quality Report:** `npx playwright show-report`
"# playwright-travel-booking-framework" 
