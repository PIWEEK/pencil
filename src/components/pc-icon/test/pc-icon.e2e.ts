import { newE2EPage } from '@stencil/core/testing';

describe('pc-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<pc-icon name="icon"></pc-icon>');
    const element = await page.find('pc-icon');
    expect(element).toHaveClass('hydrated');
  });
});
