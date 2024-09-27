import { defineConfig, expect, Locator, Page } from "@playwright/test";
import config from "../playwright.config";

export class MainPage {
    readonly page: Page;
    private readonly catalog: Locator;
    private readonly logo: Locator;
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
        this.logo = page.locator('.header-logo.col-md-3');
        this.block = page.locator('.card.border-primary.border-2');
        this.bunner = page.locator('.mb-4').first();
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
        await expect(this.bunner).toBeVisible();
        await expect(this.logo).toBeVisible();
        await expect(this.block).toBeVisible();
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