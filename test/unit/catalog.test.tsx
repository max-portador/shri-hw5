
/**
 * @jest-environment jsdom
 */




import * as React from 'react'
import {Provider} from "react-redux";
import {render, screen} from "@testing-library/react";
import {CartApi} from "../../src/client/api";
import {initStore} from "../../src/client/store";
import {ProductDetails} from "../../src/client/components/ProductDetails";
import {StoreFakeApi} from "./StubStore/stubs";


describe('Карточка товара', () => {
    it('Все ли поля на месте', () => {
        const product = {id: 0, name: 'BirdMan', price: 1000, color: 'red', material: 'flesh', description: 'bla-bla-bla'}
        const api = new StoreFakeApi('/');
        const cart = new CartApi();
        const store = initStore(api, cart)
        const app = (
            <Provider store={store}>
                <ProductDetails product={product}/>
            </Provider>
        )
        const {container} = render(app);
        screen.getByText('BirdMan')
        screen.getByText('$1000')
        screen.getByText('red');
        screen.getByText('flesh');
        screen.getByText('bla-bla-bla');
        screen.getByRole('button', { name: /add to cart/i })

    })
})