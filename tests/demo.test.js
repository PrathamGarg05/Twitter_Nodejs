function sum (a,b) {
    return a+b;
}

describe("Summation Tests", () => {
    test('sum test', () => { 
        expect(sum(1,2)).toBe(3);
    });

    test('sum test fail', () => { 
        expect(sum(1,2)).not.toBe(4);
    });
})

