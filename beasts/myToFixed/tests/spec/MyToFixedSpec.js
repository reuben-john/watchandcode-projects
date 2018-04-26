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

  it("should default to a precision of zero when no precision is included ", function() {
    expect(toFixedString(10.12)).toBe("10.");
  });

  it("should shift the decimal of an int over by the precision amount", function() {
    expect(toFixedString(10, 4)).toBe("10.0000");
  });

  it("should correctly round based on the precision value", function() {
    expect(toFixedString(0.615, 2)).toBe("0.62");
    expect(toFixedString(10.235, 2)).toBe("10.24");
    expect(toFixedString(1.005, 2)).toBe("1.01");
  });

  it("should append extra zeros to floats based on precision", function() {
    expect(toFixedString(0.615, 4)).toBe("0.6150");
  });

  it("it should work with negative numbers", function() {
    expect(toFixedString(-0.615, 4)).toBe("-0.6150");
    expect(toFixedString(-22, 2)).toBe("-22.00");
  });
});
