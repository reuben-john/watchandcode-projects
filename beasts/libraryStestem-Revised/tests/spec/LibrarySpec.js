describe("librarySystem Tests", function() {
  it("should be able to create a library with zero dependencies", function() {
    librarySystem("newDependency", [], function() {
      return "loaded dependency";
    });
    expect(librarySystem("newDependency")).toBe("loaded dependency");
  });

  it("should be able to create a library with one dependency", function() {
    librarySystem("dependency", [], function() {
      return "loaded dependency";
    });
    librarySystem("app", ["dependency"], function(dependency) {
      return "app with " + dependency;
    });
    expect(librarySystem("app")).toBe("app with loaded dependency");
  });

  it("should be able to create a library with two or more dependencies", function() {
    librarySystem("name", [], function() {
      return "Gordon";
    });
    librarySystem("company", [], function() {
      return "Watch and Code";
    });
    librarySystem("workBlurb", ["name", "company"], function(name, company) {
      return name + " works at " + company;
    });
    expect(librarySystem("workBlurb")).toBe("Gordon works at Watch and Code");
  });

  it("should load a library even when loaded out of order", function() {
    librarySystem("cheeseBurger", ["cheese", "burger"], function(
      cheese,
      burger
    ) {
      return "Here, have a " + cheese + burger;
    });
    librarySystem("cheese", [], function() {
      return "cheese";
    });
    librarySystem("burger", [], function() {
      return "burger";
    });
    expect(librarySystem("cheeseBurger")).toBe("Here, have a cheeseburger");
  });

  it("should only run the callback function once", function() {
    var timesRun = 0;
    librarySystem("counter", [], function(cheese, burger) {
      timesRun++;
    });
    librarySystem("counter");
    librarySystem("counter");
    expect(timesRun).toBe(1);
  });
});
