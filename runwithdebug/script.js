function sayHi(first, last) {
  console.log("hi " + first + " " + last);
}

function runWithDebugger(callback, keys) {
  debugger;
  return callback.apply(this, keys);
}
