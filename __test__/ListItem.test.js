/* eslint-disable no-undef */
import "@testing-library/jest-dom";

const gridRows = require("../src/components/ListItem/helpers");

describe("Список товаров", () => {
    test("Ширина >= 1400 количество < 5", () => {
        expect(gridRows(1, 1400)).toEqual({ gridTemplateRows: "1fr" });
    });
    test("Ширина >= 1400 количество < 9", () => {
        expect(gridRows(5, 1400)).toEqual({ gridTemplateRows: "1fr 1fr" });
    });
    test("Ширина >= 1400 количество >= 9", () => {
        expect(gridRows(9, 1400)).toEqual(null);
    });

    test("Ширина >= 1120 количество < 4", () => {
        expect(gridRows(1, 1120)).toEqual({ gridTemplateRows: "1fr" });
    });
    test("Ширина >= 1120 количество < 7", () => {
        expect(gridRows(4, 1120)).toEqual({ gridTemplateRows: "1fr 1fr" });
    });
    test("Ширина >= 1120 количество < 10", () => {
        expect(gridRows(9, 1120)).toEqual({ gridTemplateRows: "1fr 1fr 1fr" });
    });
    test("Ширина >= 1120 количество >= 10", () => {
        expect(gridRows(11, 1120)).toEqual(null);
    });

    test("Ширина >= 600 количество < 3", () => {
        expect(gridRows(2, 600)).toEqual({ gridTemplateRows: "1fr" });
    });
    test("Ширина >= 600 количество < 5", () => {
        expect(gridRows(3, 600)).toEqual({ gridTemplateRows: "1fr 1fr" });
    });
    test("Ширина >= 600 количество < 7", () => {
        expect(gridRows(5, 600)).toEqual({ gridTemplateRows: "1fr 1fr 1fr" });
    });
    test("Ширина >= 600 количество < 9", () => {
        expect(gridRows(8, 600)).toEqual({ gridTemplateRows: "1fr 1fr 1fr 1fr" });
    });
    test("Ширина >= 600 количество < 11", () => {
        expect(gridRows(10, 600)).toEqual({ gridTemplateRows: "1fr 1fr 1fr 1fr 1fr" });
    });
    test("Ширина >= 600 количество >= 11", () => {
        expect(gridRows(12, 600)).toEqual(null);
    });

    test("Ширина < 600 количество < 2", () => {
        expect(gridRows(1, 200)).toEqual({ gridTemplateRows: "1fr" });
    });
    test("Ширина < 600 количество < 3", () => {
        expect(gridRows(2, 200)).toEqual({ gridTemplateRows: "1fr 1fr" });
    });
    test("Ширина < 600 количество < 4", () => {
        expect(gridRows(3, 400)).toEqual({ gridTemplateRows: "1fr 1fr 1fr" });
    });
    test("Ширина < 600 количество < 5", () => {
        expect(gridRows(4, 400)).toEqual({ gridTemplateRows: "1fr 1fr 1fr 1fr" });
    });
    test("Ширина < 600 количество < 6", () => {
        expect(gridRows(5, 400)).toEqual({ gridTemplateRows: "1fr 1fr 1fr 1fr 1fr" });
    });
    test("Ширина < 600 количество < 7", () => {
        expect(gridRows(6, 100)).toEqual({ gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr" });
    });
    test("Ширина < 600 количество < 8", () => {
        expect(gridRows(7, 100)).toEqual({ gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr" });
    });
    test("Ширина < 600 количество < 9", () => {
        expect(gridRows(8, 400)).toEqual({ gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr" });
    });
    test("Ширина < 600 количество < 10", () => {
        expect(gridRows(9, 400)).toEqual({
            gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        });
    });
    test("Ширина < 600 количество < 11", () => {
        expect(gridRows(10, 100)).toEqual({
            gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        });
    });
    test("Ширина < 600 количество < 12", () => {
        expect(gridRows(11, 100)).toEqual({
            gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        });
    });
    test("Ширина < 600 количество >= 12", () => {
        expect(gridRows(100, 140)).toEqual(null);
    });
});
