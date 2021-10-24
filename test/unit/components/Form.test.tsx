/**
 * @jest-environment jsdom
 */


import * as React from "react";
import {CheckoutFormData} from "../../../src/common/types";
import {render, screen} from "@testing-library/react";
import {Form} from "../../../src/client/components/Form";
import userEvent from "@testing-library/user-event";
import {expect} from "@jest/globals";

const initForm = () => {
    const onSubmit = jest.fn((data: CheckoutFormData) => {});
    const {getByRole} = render(<Form onSubmit={onSubmit} />);
    const Name = getByRole('textbox', { name: /name/i });
    const Phone = getByRole('textbox', { name: /phone/i });
    const Address = getByRole('textbox', { name: /address/i });
    const Button = getByRole('button', { name: /checkout/i })

    return { Name, Phone, Address, Button, onSubmit};
}

describe("Проверяем форму", () => {
    it("Должна быть пустая форма", () => {
            const {Button, onSubmit} = initForm();
            Button.click();
            expect(onSubmit.mock.calls.length).toBe(0);
            screen.logTestingPlaygroundURL();
        }
    )
    it("Неправильный телефон", () => {
        const {Name, Phone, Address, Button, onSubmit} = initForm();
        userEvent.type(Name, 'Румата');
        userEvent.type(Phone, "1111");
        userEvent.type(Address, "Арканар");
        Button.click();
        expect(onSubmit.mock.calls.length).toBe(0);
    })
    it("Правильный телефон", () => {
        const {Name, Phone, Address, Button, onSubmit} = initForm();
        userEvent.type(Name, 'Румата');
        userEvent.type(Phone, " 74957397000");
        userEvent.type(Address, "Арканар");
        Button.click();
        expect(onSubmit.mock.calls.length).toBe(1);
    })
})