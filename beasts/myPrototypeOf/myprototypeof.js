var canine = {
  bark: function() {
    console.log("bark");
  }
};

var dog = Object.create(canine);
dog.fetch = function() {
  console.log("fetch");
};

var myDog = Object.create(dog);
var empty = Object.create(null);

function isPrototypeOf(prototype, object) {
  var objectPrototype = Object.getPrototypeOf(object);

  if (prototype === undefined || prototype == null) {
    return new TypeError("Cannot be undefined or null");
  }

  if (objectPrototype === undefined || objectPrototype == null) {
    return false;
  }
  if (prototype === objectPrototype) {
    return true;
  } else {
    return isPrototypeOf(prototype, objectPrototype);
  }
}

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
