const calculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
};

export default calculator;
