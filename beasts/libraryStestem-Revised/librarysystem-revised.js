// This is an example of a library that keeps the global namespace clean
// by storing modules to a librarySystem

(function() {
  var libraryStorage = {};

  //
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
