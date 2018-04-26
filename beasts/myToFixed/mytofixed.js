// Rewrite accounting.toFixed to use string manipulation to move the decimal place and round.

// Current function from account.js
function toFixed(value, precision) {
  precision = checkPrecision(precision, lib.settings.number.precision);

  var exponentialForm = Number(lib.unformat(value) + "e" + precision);
  var rounded = Math.round(exponentialForm);
  var finalResult = Number(rounded + "e-" + precision).toFixed(precision);
  return finalResult;
}

// value: int or float
// precision: int
// If value has less decimals then precision, add 0s. 1.1 with 2 precision = 1.10
// If value is longer, it correctly rounds up the value at that place. 1.115 with 2 precision = 1.12
// Converts using string manipulation instead of multiplication or exponent math.
// Exponent form is the model = 1.115 X 100 = 111.5, then round the result and convert back
// String will shift the decimal place over twice, round, then shift it back to get the same result.

// Check value is int or float
// Check precision is positive int
// Convert value to a string
// If value was an int, add a decimal to the end based on number of precision

function toFixedString(value, precision) {
  var strValue = toString(value);
}
