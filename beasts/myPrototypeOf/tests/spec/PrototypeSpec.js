// These two lines are equivalent.
dog.isPrototypeOf(myDog); // native function returns true
isPrototypeOf(dog, myDog); // your function does the same

// These two lines, similarly should return the same thing.
dog.isPrototypeOf(empty); // native function returns false
isPrototypeOf(dog, empty); // your function does the same

// This should work too.
Object.prototype.isPrototypeOf(myDog); // native function returns true
isPrototypeOf(Object.prototype, myDog); // your function does the same

// Also make sure that your function will work for any number of prototype links.
isPrototypeOf(canine, myDog); // true

// It should return true when

describe("My isPrototypeOf Tests", function() {
  it("should return true when there is a direct prototype link", function() {
    expect(isPrototypeOf(dog, myDog)).toBe(true);
  });

  it("should return true when there is an indirect prototype link", function() {
    expect(isPrototypeOf(Object.prototype, myDog)).toBe(true);
  });

  it("should return false when there is no prototype link", function() {
    expect(isPrototypeOf(dog, empty)).toBe(false);
  });

  it("should return false when there is no prototype link", function() {
    expect(isPrototypeOf(dog, empty)).toBe(false);
  });

  it("should return true no matter how far apart the link is", function() {
    expect(isPrototypeOf(canine, myDog)).toBe(true);
  });

  it("produce a TypeError when the prototype is undefined or null", function() {
    expect(isPrototypeOf(null, myDog).toString()).toBe(
      "TypeError: Cannot be undefined or null"
    );
    expect(isPrototypeOf(undefined, myDog).toString()).toBe(
      "TypeError: Cannot be undefined or null"
    );
  });
});
