// librarySystem("dependency", [], function() {
//   return "loaded dependency";
// });

// librarySystem("app", ["dependency"], function(dependency) {
//   return "app with " + dependency;
// });

// librarySystem("app"); // 'app with loaded dependency'

// librarySystem("name", [], function() {
//   return "Gordon";
// });

// librarySystem("company", [], function() {
//   return "Watch and Code";
// });

// librarySystem("workBlurb", ["name", "company"], function(name, company) {
//   return name + " works at " + company;
// });

// librarySystem("workBlurb"); // 'Gordon works at Watch and Code'

describe("librarySystem Tests", function() {
  it("should be able to create a library with zero dependencies", function() {
    librarySystem("dependency", [], function() {
      return "test";
    });
    expect(librarySystem("dependency")).toBe("test");
  });
});
