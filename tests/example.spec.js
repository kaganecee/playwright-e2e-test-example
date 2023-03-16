const { test, expect } = require('@playwright/test');
const { default: PlaywrightDevPage } = require('./utils/playwright-dev-page');

test('test', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);

  await page.goto('localhost:3000');

  await page.locator('#book-name').fill('Martin Eden');
  await page.locator('#author-name').fill('Jack London');
  await page.locator('#page-number').fill('520000');

  const maxlength = await page.locator('#page-number').getAttribute('maxlength');
  expect(maxlength).toBe('3');

  await page.locator('#genre').selectOption('Classic');
  await page.locator('#subject').fill('Biography');

  await page.getByRole('button', { name: 'Submit' }).click();

  const isRecordVisible = await page.locator('#record').isVisible();
  expect(isRecordVisible).toBe(false);

  await page.locator('.card').nth(0).click();

  playwrightDev.checkLocatorValue('#author-name', 'Jack London');
  playwrightDev.checkLocatorValue('#book-name', 'Martin Eden');
  playwrightDev.checkLocatorValue('#page-number', '520');
  playwrightDev.checkLocatorValue('#genre', 'Classic');
  playwrightDev.checkLocatorValue('#subject', 'bio');

  await page.locator('#home-link').click();
});
