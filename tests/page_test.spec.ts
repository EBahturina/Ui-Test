import { test } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test("Исследование сайта", async ({page}) => {
 test.setTimeout(90000);
 const main = new MainPage(page);

 await main.goto();
 await main.visibleElement();
 await main.preOrder();
 await main.goto();
 await main.visitInCatalog();
 
});
