// This is an example of a library that keeps the global namespace clean
// by storing modules to a librarySystem

// window.sandwichJS has an original value
window.sandwichLibrary = "Library with books and sandwiches";

//SandwichJS loads'
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
    // Handle librarySystem case
    librarySystem("sandwichLibrary", function() {
      return sandwichLibrary;
    });
  } else {
    // Handle window case
    var oldSandwichLibrary = window.sandwichLibrary;

    sandwichLibrary.noConflict = function() {};
    window.sandwichLibrary = oldSandwichLibrary;
    return sandwichLibrary;

    window.sandwichLibrary = sandwichLibrary;
  }
})();

var sandwichJS = sandwichLibrary.noConflict();
