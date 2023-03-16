import { expect } from '@playwright/test';

export default class PlaywrightDevPage {
  constructor(page) {
    this.page = page;
  }

  async checkLocatorValue(selector, expectedValue) {
    const locator = await this.page.locator(selector);
    expect(locator).toContainText(expectedValue);
  }
}
