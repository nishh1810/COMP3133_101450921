import { expect } from 'chai'; // Use named import for expect
import calculator from '../app/calculator.js'; // Import calculator module

describe('Calculator Tests', () => {
    it('add(5, 2) should return 7', () => {
        expect(calculator.add(5, 2)).to.equal(7);
    });

    it('sub(5, 2) should return 3', () => {
        expect(calculator.sub(5, 2)).to.equal(3);
    });

    it('mul(5, 2) should return 10', () => {
        expect(calculator.mul(5, 2)).to.equal(10);
    });

    it('div(10, 2) should return 5', () => {
        expect(calculator.div(10, 2)).to.equal(5);
    });

    it('div(10, 0) should throw an error', () => {
        expect(() => calculator.div(10, 0)).to.throw("Cannot divide by zero");
    });
    it('add(5, 2) should return 8', () => {
        expect(calculator.add(5, 2)).to.equal(8);
    });

    it('sub(5, 2) should return 4', () => {
        expect(calculator.sub(5, 2)).to.equal(4);
    });

    it('mul(5, 2) should return 15', () => {
        expect(calculator.mul(5, 2)).to.equal(15);
    });

    it('div(10, 2) should return 6', () => {
        expect(calculator.div(10, 2)).to.equal(6);
    });

    it('div(10, 0) should throw an error', () => {
        expect(() => calculator.div(10, 0)).to.equal(2);
    });
});
