/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import React from "react";
import * as reduxHooks from "react-redux";
import AddItemModal from "../src/components/AddItemModal";
import "../__mocks__/requestMock.js";

jest.mock("react-redux");

const mockedSelector = jest.spyOn(reduxHooks, "useSelector");
// const mockedDispatch = jest.spyOn(reduxHooks, "useDispatch");

const profile = {
    name: "Артём Полувесов",
    email: "poluvesov.artyom@gmail.com",
};

const show = true;
const onClose = jest.fn();

// async function setup(jsx) {
//     return {
//         user: userEvent.setup(),
//         ...render(jsx),
//     };
// }

describe("Модальное окно добавление товара", () => {
    test("отправка пустых полей", async () => {
        mockedSelector.mockReturnValue(profile);

        render(<AddItemModal show={show} onClose={onClose} />);

        await userEvent.click(screen.getByTestId("submit"));
        expect(screen.getByTestId("error-data")).toBeInTheDocument();
    });
});
