describe("Контактные данные", async function () {
    it("Сравнение", async function () {
        await this.browser.url("/hw/store/contacts");
        await this.browser.assertView("contacts-page", ".Contacts", {
            compositeImage: true,
        });
    });
});