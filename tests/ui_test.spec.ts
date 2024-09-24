import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
   await page.goto('https://otus.ru',{ waitUntil: "domcontentloaded" } );
});
test.describe("Исследование сайта Otus", async () => {

 await test('Проверка заголовков', async ({ page }) => {
   await expect(page).toHaveTitle(/Онлайн‑курсы для профессионалов, дистанционное обучение современным профессиям/);
   const titleH2 = page.locator('h2').nth(0);
   await expect(titleH2).toHaveText('Авторские онлайн‑курсы для профессионалов')
  });
  
  await test('Выбор курса', async ({ page }) => {
    const element = page.locator('.sc-1pljn7g-1.hvCeDA').nth(0);
    await expect(element).toHaveText('Криптографическая защита информации');
    const link = page.locator('.sc-1pljn7g-6.kbUYTE a').nth(0);
    link.click();
    await expect(page).toHaveTitle(/Курс по криптографической защите информации/);
  });

  await test('Выбор специализации', async ({ page }) => {
    const element = page.locator('.sc-1ftuaec-3.djURED').nth(5);
    await expect(element).toHaveText('Специализация Python');
    const link = page.locator('.sc-12yergf-11.fgNPoG a').nth(5);
    link.click();
    await expect(page).toHaveTitle(/Специализация Python Developer. Все, что нужно знать о разработке на Python: с нуля до Middle Developer/);
  });

  await test('Попытка авторизации', async ({ page }) => {
    const button = page.locator('sc-mrx253-0.enxKCy.sc-945rct-0.iOoJwQ');
    button.click();
    await expect(page.locator('.sc-10p60tv-2.bQGCmu')).toBeVisible();
    const inputLogin = page.locator('.sc-rq8xzv-4.gmIHwJ').nth(0);
    const inputPassword = page.locator('.sc-rq8xzv-4.gmIHwJ').nth(1);
    inputLogin.fill('dhfjkjh');
    inputPassword.fill('kjhs');
    const buttonClic = page.locator('.sc-9a4spb-0.eQlGvH.sc-11ptd2v-2-Component.cElCrZ');
    buttonClic.click();
    await expect(page.locator('.sc-i28ik1-1.blZNhu')).toBeVisible();
  });

});

