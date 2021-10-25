describe("Корзина", async function() {
    it("Проверка очищения", async function() {
        await this.browser.url('/hw/store/cart');
        await this.browser.assertView("startScreen",  '.Cart', {
            compositeImage: true
        })
        const fakeData = JSON.stringify({0: {name: "Plumbus", count: 7, price: 1800}})
        this.browser.execute(
            function(fakeData) {
                this.localStorage.setItem("example-store-cart", fakeData)
            }, fakeData)

        await this.browser.url('/hw/store/cart');
        await this.browser.pause(3500);
        await this.browser.assertView("cartWithItem",  '.Cart', {
            compositeImage: true
        })
        const clearButton = await this.browser.$(".Cart-Clear")
        clearButton.click()

        await this.browser.pause(500);
        await this.browser.assertView("clearingCart", ".Cart", {
            compositeImage: true,
        });
    })
})