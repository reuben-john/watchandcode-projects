// Rewrite accounting.toFixed to use string manipulation to move the decimal place and round.

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
  var strValue = value.toString();
  // Use variable to allow for comma decimals
  var decimal = ".";

  if (!precision) {
    precision = 0;
  }

  // Check if value is NaN and spit back an error
  if (typeof value !== "number") {
    return new TypeError(
      "Please use a float or integer for the first argument"
    );
  } else if (!Number.isInteger(precision) || precision < 0) {
    return new TypeError(
      "Please use a positive integer for the second argument"
    );
  }

  var negative = "";
  if (Boolean(!strValue.indexOf("-"))) {
    negative = "-";
    strValue = strValue.substring(1);
  }

  if (Number.isInteger(value)) {
    // If value is int, append decimal and zeros
    strValue += decimal;
    for (var i = 0; i < precision; i++) {
      strValue += "0";
    }
    return negative + strValue;
  }

  // Split the string at the decimal place
  // insert decimal in 2nd string based on precision
  // recombine to one string
  // convert number, round, then convert back to string
  // shift decimal back
  // recombine and return number

  function shiftDecimal(strValue, precision) {
    var decimalIndex = strValue.indexOf(decimal);
    var lengthCheck = strValue.substring(decimalIndex + 1).length;
    if (lengthCheck < precision) {
      var addZerosToBack = precision - lengthCheck;
      for (var j = 0; j < addZerosToBack; j++) {
        strValue += "0";
      }
    }

    lengthCheck = strValue.substring(0, decimalIndex);
    if (lengthCheck == 0) {
      var addZerosToFront = lengthCheck;
    }
    strValue =
      strValue.substring(0, decimalIndex) +
      strValue.substring(decimalIndex + 1);
    // Increase this by how many places to the right you wish to move. 2 is equal to value * 100
    decimalIndex += precision;
    strValue =
      strValue.substring(0, decimalIndex) +
      decimal +
      strValue.substring(decimalIndex);

    var roundedValue = Math.round(parseFloat(strValue)).toString();
    if (addZerosToFront) {
      roundedValue = addZerosToFront + roundedValue;
    }
    strValue = roundedValue;
    decimalIndex -= precision;
    strValue =
      strValue.substring(0, decimalIndex) +
      decimal +
      strValue.substring(decimalIndex);

    strValue = negative + strValue;

    return strValue;
  }

  return shiftDecimal(strValue, precision);
}
