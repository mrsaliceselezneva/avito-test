// global.XMLHttpRequest = "http://127.0.0.1:3010/__mocks__/categoriestMock.js";
const xhrMockClass = () => ({
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn(),
});

window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
