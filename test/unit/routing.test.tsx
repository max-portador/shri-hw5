/**
 * @jest-environment jsdom
 */



import { it, expect } from '@jest/globals'
import * as React from "react";
import {Provider} from "react-redux";
import '@testing-library/jest-dom'
import { createMemoryHistory } from 'history';
import userEvent from "@testing-library/user-event";
import { render, screen } from '@testing-library/react'
import {BrowserRouter} from "react-router-dom";
import {CartApi, ExampleApi} from "../../src/client/api";
import {initStore} from "../../src/client/store";
import {Application} from "../../src/client/Application";



describe('Router check', () => {
    it('CATALOG link', () => {
        const history = createMemoryHistory({
            initialEntries: ['/catalog'],
            initialIndex: 0
        });
        const basename = '/hw/store';

        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);

        const application = (
            <BrowserRouter basename={basename}>
                <Provider store={store}>
                    <Application/>
                </Provider>
            </BrowserRouter>
        );

        const {getByRole} = render(application);
        userEvent.click(getByRole('link', {name: /catalog/i}))
        const heading  = getByRole('heading', {name: /Catalog/i});
        expect(heading).toBeInTheDocument();
    })
    it('DELIVERY link', () => {
        const history = createMemoryHistory({
            initialEntries: ['/catalog'],
            initialIndex: 0
        });
        const basename = '/hw/store';

        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);

        const application = (
            <BrowserRouter basename={basename}>
                <Provider store={store}>
                    <Application/>
                </Provider>
            </BrowserRouter>
        );

        const {getByTestId, getByRole} = render(application);
        userEvent.click(getByRole('link', {name: /delivery/i}))
        const heading  = getByRole('heading', {name: /Delivery/i});
        expect(heading).toBeInTheDocument();
    })
    it('CONTACTS link', () => {
        const history = createMemoryHistory({
            initialEntries: ['/catalog'],
            initialIndex: 0
        });
        const basename = '/hw/store';

        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);

        const application = (
            <BrowserRouter basename={basename}>
                <Provider store={store}>
                    <Application/>
                </Provider>
            </BrowserRouter>
        );

        const {getByTestId, getByRole} = render(application);
        userEvent.click(getByRole('link', {name: /contacts/i}))
        const heading  = getByRole('heading', {name: /Contacts/i});
        expect(heading).toBeInTheDocument();
    })
    it('CART link', () => {
        const history = createMemoryHistory({
            initialEntries: ['/catalog'],
            initialIndex: 0
        });
        const basename = '/hw/store';

        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);

        const application = (
            <BrowserRouter basename={basename}>
                <Provider store={store}>
                    <Application/>
                </Provider>
            </BrowserRouter>
        );

        const {getByTestId, getByRole} = render(application);
        userEvent.click(getByRole('link', {name: /cart/i}))
        const heading  = getByRole('heading', {name: /Shopping Cart/i});
        expect(heading).toBeInTheDocument();
    })
})