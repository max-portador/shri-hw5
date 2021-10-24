describe("Корзина", async function() {
    it("Проверка очищения", async function() {
        await this.browser.url('/hw/store/cart');
        await this.browser.assertView("startScreen",  '.Cart', {
            compositeImage: true
        })
        const fakeData = JSON.stringify({0: {name: "Fake data", count: 7, price: 108}})
        this.browser.execute(
            function(fakeData) {
                this.localStorage.setItem("example-store-cart", fakeData)
            }, fakeData)

        await this.browser.url('/hw/store/cart');
        await this.browser.pause(500);
        await this.browser.assertView("cart-with-things",  '.Cart', {
            compositeImage: true
        })
        await this.browser.$(".Cart-Clear").click();
        await this.browser.assertView("clearing-cart", ".Cart", {
            compositeImage: true,
        });
        await this.browser.pause(500);
    })
})