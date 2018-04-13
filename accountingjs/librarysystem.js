// This is an example of a library that keeps the global namespace clean
// by storing modules to a librarySystem

function librarySystem(libraryName, callback) {
  if (arguments.length > 1) {
    libraryStorage[libraryName] = callback();
  } else {
    return libraryStorage[libraryName];
  }
}

(function() {
  var breads = {
    wheat: "A healthy option",
    white: "An unhealthy option"
  };

  var fillings = {
    turkey: "For boring sandiwches",
    cheese: "For the vegetarians"
  };

  var sandwichLibrary = {
    breads: breads,
    fillings: fillings
  };

  if (typeof librarySystem !== "undefined") {
    librarySystem("sandwichLibrary", function() {
      return sandwichLibrary;
    });
  } else {
    window.sandwichLibrary = sandwichLibrary;
  }
})();
