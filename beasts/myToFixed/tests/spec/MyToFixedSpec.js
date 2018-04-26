describe("My isPrototypeOf Tests", function() {
  it("should return a TypeError when the value is not a number", function() {
    expect(toFixedString([], 0).toString()).toBe(
      "TypeError: Please use a float or integer for the first argument"
    );
    expect(toFixedString("10", 0).toString()).toBe(
      "TypeError: Please use a float or integer for the first argument"
    );
  });

  it("should return a TypeError when the precision is not a positive integer", function() {
    expect(toFixedString(10, -1).toString()).toBe(
      "TypeError: Please use a positive integer for the second argument"
    );
    expect(toFixedString(10, "1").toString()).toBe(
      "TypeError: Please use a positive integer for the second argument"
    );
  });

  it("should shift the decimal of an int over by the precision amount", function() {
    expect(toFixedString(10, 1)).toBe(10.0);
  });
});
