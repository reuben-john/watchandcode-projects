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
    // Create library
    if (arguments.length > 1) {
      libraryStorage[libraryName] = {
        dependency: dependencies,
        callback: callback,
        cached: false
      };
    } else {
      // Retrieve library from storage
      var library = libraryStorage[libraryName];
      if (library === undefined) {
        return " " + libraryName + " library is undefined.";
      }
      if (library.cached === false) {
        // Only runs if callback has not yet been run
        // Recursively works through dependencies in the library, loading each one
        var mappedDependencies = library.dependency.map(function(dependency) {
          return librarySystem(dependency);
        });

        // Records to dataCache to allow for retrieval without running callback again
        library.dataCache = library.callback.apply(null, mappedDependencies);
        // Sets cached status to true to ensure callback is not run again
        library.cached = true;
      }
      // Returns cached data
      return library.dataCache;
    }
  }
  window.librarySystem = librarySystem;
})();
