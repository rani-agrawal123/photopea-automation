const { test, expect } = require('@playwright/test');

test('Photopea Complete Automation', async ({ page }) => {

  // Open Photopea
  await page.goto('https://www.photopea.com/');
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Start using Photopea' }).click();

  await page.waitForTimeout(4000);

  // New Project
  await page.getByText('New Project').click();

  await page.getByRole('textbox', { name: 'Name' }).fill('Assignment');

  await page.getByRole('textbox', { name: 'Width' }).fill('1280');

  await page.getByRole('textbox', { name: 'Height' }).fill('960');

  await page.getByRole('textbox', { name: 'DPI' }).fill('72');

  await page.getByLabel('Background').selectOption('2');

  await page.getByRole('button', { name: 'Create' }).click();

  await page.waitForTimeout(4000);

  // Rectangle
  await page.getByRole('button', { name: 'Rectangle (U)' }).click();

  await page.locator('canvas').nth(4).click({
    position: { x: 88, y: 255 }
  });

  await page.getByRole('textbox', { name: 'Width:' }).fill('600');

  await page.getByRole('textbox', { name: 'Height:' }).fill('600');

  await page.getByRole('button', { name: 'OK' }).click();

  await page.waitForTimeout(2000);

  // Triangle
  await page.getByRole('button', { name: 'Rectangle (U)' }).click({ button: 'right' });

  await page.getByText('Parametric Shape').click();

  await page.getByRole('textbox', { name: 'Sides:' }).fill('3');

  await page.keyboard.press('Enter');

  await page.locator('canvas').nth(4).click({
    position: { x: 208, y: 301 }
  });

  await page.getByRole('textbox', { name: 'Width:' }).fill('200');

  await page.getByRole('textbox', { name: 'Height:' }).fill('200');

  await page.getByRole('button', { name: 'OK' }).click();

  await page.waitForTimeout(2000);

  // Circle
  await page.getByRole('button', { name: 'Parametric Shape (U)' }).click({ button: 'right' });

  await page.getByText('Ellipse').click();

  await page.locator('canvas').nth(4).click({
    modifiers: ['Shift'],
    position: { x: 95, y: 364 }
  });

  await page.getByRole('textbox', { name: 'Width:' }).fill('250');

  await page.getByRole('textbox', { name: 'Height:' }).fill('250');

  await page.getByRole('button', { name: 'OK' }).click();

  await page.waitForTimeout(2000);

  // Export PNG
  const downloadPromise = page.waitForEvent('download');

  await page.getByRole('button', { name: 'File' }).click();

  await page.getByText('Export as').hover();

  await page.getByText('PNG').click();

  const download = await downloadPromise;

  await download.saveAs('downloads/design.png');

});