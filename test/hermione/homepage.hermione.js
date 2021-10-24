describe("Начальная страница", async function () {
    it("Сравнение", async function () {
        await this.browser.url("/hw/store/");
        await this.browser.assertView("main-page", ".Home", {
            compositeImage: true,
        });
        await this.browser.getWindowSize();
        await this.browser.setWindowSize(500, 2048);
        await this.browser.assertView("mobile-main", "#root", {
            compositeImage: true,
        });
        await this.browser.pause(1000);
        await this.browser.$('.navbar-toggler').click();
        await this.browser.pause(1000);
        await this.browser.$('.navbar-nav').$('.nav-link').click();
        await this.browser.pause(1000);
        await this.browser.assertView("mobile-main-closed-nav-bar", "#root", {
            compositeImage: false,
            allowViewportOverflow: true
        });
    });
});