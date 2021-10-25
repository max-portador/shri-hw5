/**
 * @jest-environment jsdom
 */


import {Provider} from "react-redux";
import * as React from "react";
import {BrowserRouter} from "react-router-dom";
import {expect} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {CartApi} from "../../src/client/api";
import {initStore} from "../../src/client/store";
import {Cart} from "../../src/client/pages/Cart";
import {CartState} from "../../src/common/types";
import {StoreFakeApi} from "./StubStore/stubs";

const cartData = {
    0: {
        name: 'FAKE',
        price: 1010,
        count: 10
    }
}

function renderer(initialState: CartState) {
    const api = new StoreFakeApi('/hw/store');
    const cart = new CartApi();
    cart.setState(initialState)
    const store = initStore(api, cart)
    const app = (
        <Provider store={store}>
            <BrowserRouter>
                <Cart/>
            </BrowserRouter>
        </Provider>
    )
    return app
}

describe('Корзина', () => {
    it('ПУСТАЯ', () => {
        const app = renderer({});
        const {container, getByRole, getByText} = render(app);
        expect(getByText(/Cart is empty/)).toBeInTheDocument();

    })
    it('НЕ ПУСТАЯ', () => {
        const app = renderer(cartData);
        const {getByText} = render(app);
        expect(getByText(/FAKE/)).toBeInTheDocument();

    })})