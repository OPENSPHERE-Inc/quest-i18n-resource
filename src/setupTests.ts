// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { Crypto } from "@peculiar/webcrypto";
import { TextEncoder, TextDecoder } from 'util'

// Polyfill missing Browser APIs

Object.defineProperty(global.self, 'crypto', {
    value: new Crypto(),
});

Object.defineProperty(global.self, 'TextEncoder', {
    value: TextEncoder,
})

Object.defineProperty(global.self, 'TextDecoder', {
    value: TextDecoder,
})
