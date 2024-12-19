import { newE2EPage } from '@stencil/core/testing';

describe('pc-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<pc-button></pc-button>');
    const element = await page.find('pc-button');
    expect(element).toHaveClass('pc-button');
  });
});
