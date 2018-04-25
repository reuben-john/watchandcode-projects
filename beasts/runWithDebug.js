function sayHi(first, last) {
  console.log("hi " + first + " " + last);
}

function runWithDebug(callback, keys) {
  debugger;
  return callback.apply(this, keys);
}
