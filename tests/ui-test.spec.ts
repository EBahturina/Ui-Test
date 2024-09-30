import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
   await page.goto('https://otus.ru',{ waitUntil: "domcontentloaded" } );
});
test.describe("Исследование сайта Otus", async () => {

  test('Проверка заголовков', async ({ page }) => {
   await expect(page).toHaveTitle(/Онлайн‑курсы для профессионалов, дистанционное обучение современным профессиям/);
   const titleH2 = page.locator('div.sc-1hmcglv-0.sc-1r3ji37-1.chEWCa.kZhHIz');
   await expect(titleH2).toHaveText(/Авторские онлайн‑курсы для профессионалов/);
  });
  
  test('Выбор курса', async ({ page }) => {
    const element = page.locator('.sc-1ftuaec-2.hABfNo h5').first();
    const link = page.locator('.sc-1pljn7g-6.kbUYTE a').first();
    await expect(element).toHaveText(/Machine Learning. Advanced/);
    await link.click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle(/Machine Learning: продвинутые приемы машинного обучения в курсе по data science/);
  });

   test('Выбор специализации', async ({ page }) => {
    const element = page.locator('div[title="Специализация Android"] h5');
    const link = page.locator('a[href="https://otus.ru/lessons/spec-android"]');
    await expect(element).toHaveText('Специализация Android');
    await link.click();
    await page.waitForTimeout(8000);
    await expect(page).toHaveTitle(/Специальность Android Developer: первые мобильные приложения на Kotlin с нуля/);
  });

  test('Попытка авторизации', async ({ page }) => {
    const button = page.locator('button.sc-mrx253-0.enxKCy.sc-945rct-0.iOoJwQ');
    await button.click();
    await expect(page.locator('.sc-10p60tv-2.bQGCmu')).toBeVisible();
    const inputLogin = page.locator('div.sc-rq8xzv-1.hGvqzc.sc-11ptd2v-1.liHMCp input');
    const inputPassword = page.locator('div.sc-rq8xzv-1.hGvqzc.sc-11ptd2v-1-Component.ciraFX input');
    await inputLogin.fill('dhfjkjh');
    await inputPassword.fill('kjhs');
    const buttonClic = page.locator('.sc-9a4spb-0.eQlGvH.sc-11ptd2v-2-Component.cElCrZ');
    await buttonClic.click();
    await expect(page.locator('div.sc-i28ik1-1.blZNhu circle')).toBeVisible();
  });

});