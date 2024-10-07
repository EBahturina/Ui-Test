import { defineConfig, expect, Locator, Page } from "@playwright/test";
import config from "../playwright.config";

export class MainPage {
    readonly page: Page;
    private readonly catalog: Locator;
    private readonly block_2: Locator;
    private readonly block_3: Locator;
    private readonly block_4: Locator;
    private readonly block_5: Locator;
    private readonly block_6: Locator;
    private readonly block: Locator;
    private readonly bunner: Locator;
    private readonly product: Locator;
    private readonly title: Locator;
    private readonly button: Locator;
    private readonly modalPopUp: Locator;
    private readonly button_closed: Locator;
    private readonly link: Locator;
    private readonly card: Locator;
    private readonly categories: Locator;
  
    constructor(page: Page) {
        this.page = page;
        this.catalog = page.locator('a[href="/im-velovitrina#katalog"]').first();
        this.block_2 = page.getByRole('heading', { name: 'Бренды' });
        this.block_3 = page.getByRole('heading', { name: 'Специальные предложения' });
        this.block_4 = page.getByRole('heading', { name: 'Новости' }).getByRole('link');
        this.block_5 = page.getByRole('link', { name: 'Полезная информация' });
        this.block_6 = page.getByRole('heading', { name: 'ТРЕБУЕТСЯ ПОМОЩЬ?' });
        this.block = page.getByRole('heading', { name: 'Самое популярное' });
        this.bunner = page.getByRole('banner').getByRole('img', { name: 'Федеральный интернет-магазин' });
        this.link = page.locator('a.treeview-handler').first();
        this.product = page.locator('#tree-category-499 a');
        this.title = page.locator('div.mb-4 h1');
        this.button = page.locator('button.btn.btn-info').first();
        this.modalPopUp = page.locator('div.modal-content');
        this.button_closed = page.locator('button.btn.btn-outline-primary');
        this.card = page.locator('#smallcart');
        this.categories = page.locator('div.row.categories.mb-o5');
    }
    async goto() {
        await this.page.goto(`${config.use?.baseURL}`, { waitUntil: "domcontentloaded" });
        
      }

    async visibleElement() {
      await this.bunner.isVisible();
      await this.block.isVisible();
      await this.block_2.isVisible();
      await this.block_3.isVisible();
      await this.block_4.isVisible();
      await this.block_5.isVisible();
      await this.block_6.isVisible();
      }

    async preOrder() {
      await this.link.click();
      await this.product.click();
      await expect(this.title).toBeVisible();
      await expect(this.title).toHaveText(/Условия предзаказа палаток и шатров RockLand, GreenLand и BTrace на сайте ПИК-99/);
      await this.button.click();
      await this.modalPopUp.isVisible();
      await this.button_closed.click();
      await this.card.isVisible();
    }
    
    async visitInCatalog() {
      await this.catalog.click();
      await expect(this.title).toBeVisible();
      await expect(this.title).toHaveText(/ПИК-99 - производство снаряжения для туризма и активного отдыха. Каталог/);
      await expect(this.categories).toBeVisible();
    }

}