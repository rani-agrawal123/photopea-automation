import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // await page.goto('https://www.photopea.com/');
  // await page.getByRole('button', { name: 'Start using Photopea' }).first().click();
  // await page.getByRole('button', { name: 'File' }).click();
  // await page.getByText('New...').click();
  // await page.getByRole('textbox', { name: 'Name' }).click();
  // await page.getByRole('textbox', { name: 'Name' }).fill('ABCD');
  // await page.getByRole('textbox', { name: 'Height' }).click();
  // await page.getByRole('textbox', { name: 'Height' }).fill('960');
  // await page.getByLabel('Background').selectOption('2');
  // await page.locator('#dd470').selectOption('2');
  // await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Rectangle (U)' }).click();
  await page.getByRole('button', { name: 'Rectangle (U)' }).click({
    button: 'right'
  });
  await page.getByText('RectangleU').click();
  await page.locator('span').nth(1).click();
  await page.locator('canvas').nth(4).click({
    position: {
      x: 56,
      y: 178
    }
  });
  await page.getByRole('textbox', { name: 'Width:' }).click();
  await page.getByRole('textbox', { name: 'Width:' }).fill('600');
  await page.getByRole('textbox', { name: 'Height:' }).click();
  await page.getByRole('textbox', { name: 'Height:' }).fill('600');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('canvas').first().click({
    position: {
      x: 19,
      y: 8
    }
  });
  await page.locator('span').nth(5).click();
  await page.getByRole('button', { name: 'Move Tool (V)' }).click({
    button: 'right'
  });
  await page.getByText('Move Tool').click();
  await page.locator('canvas').nth(1).click({
    position: {
      x: 195,
      y: 302
    }
  });
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');


  // Triangle
  await page.getByRole('button', { name: 'Rectangle (U)' }).click({
    button: 'right'
  });
  await page.getByText('Parametric Shape').click();

  await page.getByRole('textbox', { name: 'Sides:' }).click();
  await page.getByRole('textbox', { name: 'Sides:' }).fill('3');
  await page.getByRole('textbox', { name: 'Sides:' }).press('Enter');
  await page.locator('canvas').nth(4).click({
    position: {
      x: 208,
      y: 301
    }
  });
  await page.getByRole('textbox', { name: 'Width:' }).click();
  await page.getByRole('textbox', { name: 'Width:' }).fill('100');
  await page.getByRole('textbox', { name: 'Height:' }).click();
  await page.getByRole('textbox', { name: 'Height:' }).fill('10');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('div').filter({ hasText: /^Shape 1$/ }).nth(1).click();
  await page.locator('canvas').nth(4).click({
    position: {
      x: 258,
      y: 326
    }
  });
  await page.getByRole('textbox', { name: 'Width:' }).click();
  await page.getByRole('textbox', { name: 'Width:' }).fill('400');
  await page.getByRole('textbox', { name: 'Height:' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('canvas').first().click({
    position: {
      x: 10,
      y: 13
    }
  });
  await page.locator('.fitem.cswatch > span:nth-child(2)').click();
  await page.getByText('Shape 1').click();
  await page.locator('canvas').first().click({
    position: {
      x: 14,
      y: 8
    }
  });
  await page.locator('canvas').nth(4).click({
    position: {
      x: 282,
      y: 307
    }
  });
  await page.getByRole('textbox', { name: 'Width:' }).click();
  await page.getByRole('textbox', { name: 'Width:' }).fill('200');
  await page.getByRole('textbox', { name: 'Height:' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('canvas').first().click({
    position: {
      x: 15,
      y: 9
    }
  });
  await page.locator('.fitem.cswatch > span:nth-child(2)').click();
  await page.getByRole('button', { name: 'Move Tool (V)' }).click();
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.getByRole('button', { name: 'Parametric Shape (U)' }).click();
  await page.getByRole('button', { name: 'Parametric Shape (U)' }).click({
    button: 'right'
  });
  await page.getByText('Ellipse').click();
  await page.locator('canvas').nth(4).click({
    modifiers: ['Shift'],
    position: {
      x: 95,
      y: 364
    }
  });
  await page.getByRole('textbox', { name: 'Width:' }).click();
  await page.getByRole('textbox', { name: 'Width:' }).fill('250');
  await page.getByRole('textbox', { name: 'Height:' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('canvas').first().click({
    position: {
      x: 24,
      y: 11
    }
  });
  await page.locator('span:nth-child(3)').first().click();
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.getByRole('button', { name: 'Move Tool (V)' }).click();
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');


  
  await page.getByRole('button', { name: 'File' }).click();
  await page.getByText('Open & Place...').click();
  await page.getByRole('textbox', { name: 'W:' }).click();
  await page.getByRole('textbox', { name: 'W:' }).fill('20%');
  await page.getByRole('textbox', { name: 'H:', exact: true }).click();
  await page.getByRole('textbox', { name: 'H:', exact: true }).fill('20%');
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByText('pexels-pixabay-').click();
  await page.locator('.eye').first().click();
  await page.locator('.eye').click();
  await page.locator('.clipp').click();
  await page.locator('canvas').nth(1).click({
    position: {
      x: 390,
      y: 267
    }
  });
  await page.locator('body').press('ControlOrMeta+z');
  await page.getByText('pexels-pixabay-45201', { exact: true }).click();
  await page.getByText('pexels-pixabay-45201 copy').click();
  await page.locator('body').press('ControlOrMeta+z');
  await page.locator('body').press('ControlOrMeta+z');
  await page.getByRole('button', { name: 'Move Tool (V)' }).click({
    button: 'right'
  });
  await page.locator('canvas').nth(1).click({
    position: {
      x: 369,
      y: 257
    }
  });
  await page.locator('body').press('ControlOrMeta+z');
  await page.getByText('pexels-pixabay-45201', { exact: true }).click();
});