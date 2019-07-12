
describe("JS extending", function () {


    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });

    describe("string class", function () {

        it("should parse int", function () {
            var integerString = "123";
            expect(integerString.toType()).toBe(123);
        });

        it("should parse float", function () {
            var floatString = "123.45";
            expect(floatString.toType()).toBe(123.45);
        });

        it("should parse yes as true", function () {
            var yesString = "yes";
            expect(yesString.toType()).toBe(true);
        });

        it("should parse no as false", function () {
            var noString = "no";
            expect(noString.toType()).toBe(false);
        });

        it("should parse true as true", function () {
            var trueString = "true";
            expect(trueString.toType()).toBe(true);
        });

        it("should parse false as false", function () {
            var falseString = "false";
            expect(falseString.toType()).toBe(false);
        });

        it("should not parse ordinary text", function () {
            var text = "Hello World 123.45";
            expect(text.toType()).toBe('Hello World 123.45');
        });
    });
    describe("array class", function () {

        it("should clear array", function () {
            var array = ["a", "b", "c"];
            expect(array).toEqual(["a", "b", "c"]);
        });

        it("should clear array", function () {
            var array = ["a", "b", "c"];
            array.clear();
            expect(array.length).toBe(0);
            expect(array).toEqual([]);
        });

        it("should insert another arry in the begining", function () {
            var array = ["a", "b", "c"];
            var another = ["0", "1"];
            array.insertAt(0, another);
            expect(array).toEqual(["0", "1", "a", "b", "c"]);
        });

        it("should insert another arry in the end", function () {
            var array = ["a", "b", "c"];
            var another = ["0", "1"];
            array.insertAt(3, another);
            expect(array).toEqual(["a", "b", "c", "0", "1"]);
        });

        it("should insert another arry in the middle", function () {
            var array = ["a", "b", "c"];
            var another = ["0", "1"];
            array.insertAt(2, another);
            expect(array).toEqual(["a", "b", "0", "1", "c"]);
        });

        it("should insert another element in the middle", function () {
            var array = ["a", "b", "c"];
            var another = "x";
            array.insertAt(2, another);
            expect(array).toEqual(["a", "b", "x", "c"]);
        });
    });

});
