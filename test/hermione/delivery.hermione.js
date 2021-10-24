const { assert } = require("chai");

describe("Доставка", async function () {
    it("Сравнение", async function () {
        await this.browser.url("/hw/store/delivery");
        await this.browser.assertView("delivery-page", ".Delivery", {
            compositeImage: true,
        });
    });
});