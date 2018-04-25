describe("My isPrototypeOf Tests", function() {
  it("should be able to create a library with zero dependencies", function() {
    librarySystem("newDependency", [], function() {
      return "loaded dependency";
    });
    expect(librarySystem("newDependency")).toBe("loaded dependency");
  });
});
