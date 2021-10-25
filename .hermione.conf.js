module.exports = {
    baseUrl: "https://shri.yandex/hw/store",
    gridUrl: "http://192.168.56.1:4444",

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',

            },
            retry: 2
        }
    },
    sets: {
        common: {
            files: [
                // "./test/hermione/example.hermione.js",
                "./test/hermione/cart.hermione.js"
            ],
            browsers: ['chrome']
        }
    },
}