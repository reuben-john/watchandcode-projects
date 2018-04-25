// This is an example of a library that keeps the global namespace clean
// by storing modules to a librarySystem

// should allow items to be added in any order, library first or dependency first, doesn't matter
// callback should only run once

// Needs a rewrite to fit
//
// Should check for number of arguments
// If just a library name, it should fetch that library and return
// If it has 3 arguments, it should write to the storage
// Needs to be able to store dependencies in a way that you can call them the fact

(function() {
  var libraryStorage = {};

  function librarySystem(libraryName, dependencies, callback) {
    if (arguments.length > 1) {
      mappedDependencies = [];
      if (dependencies.length > 0) {
        mappedDependencies = dependencies.map(function(dependency) {
          return libraryStorage[dependency];
        });
      }
      libraryStorage[libraryName] = callback.apply(null, mappedDependencies);
    } else {
      return libraryStorage[libraryName];
    }
  }

  window.librarySystem = librarySystem;
})();
