/**
 * Very simple in-browser unit-test library, with zero deps.
 *
 * Background turns green if all tests pass, otherwise red.
 * View the JavaScript console to see failure reasons.
 *
 * Example:
 *
 *   adder.js (code under test)
 *
 *     function add(a, b) {
 *       return a + b;
 *     }
 *
 *   adder-test.html (tests - just open a browser to see results)
 *
 *     <script src="tinytest.js"></script>
 *     <script src="adder.js"></script>
 *     <script>
 *
 *     tests({
 *
 *       'adds numbers': function() {
 *         eq(6, add(2, 4));
 *         eq(6.6, add(2.6, 4));
 *       },
 *
 *       'subtracts numbers': function() {
 *         eq(-2, add(2, -4));
 *       },
 *
 *     });
 *     </script>
 *
 * That's it. Stop using over complicated frameworks that get in your way.
 *
 * -Joe Walnes
 * MIT License. See https://github.com/joewalnes/jstinytest/
 */

var TintyTestHelper = {
  renderStats: function (tests, failures) {
    let numberOfTests = Object.keys(tests).length
    let successes = numberOfTests - failures
    let summaryMessage = ('Ran ' + numberOfTests + ' tests: ' + successes + ' successes, ' + failures + ' failures')
    let summaryElement = document.createElement('h1')
    summaryElement.textContent = summaryMessage
    document.body.appendChild(summaryElement)
  }
}

const TinyTest = {

  run: function (tests) {
    let failures = 0

    for (let testName in tests) {
      let testAction = tests[testName]
      try {
        testAction()
        console.log('%c%s', 'color:green; font-weight:bold', testName)
      } catch (e) {
        failures++
        console.groupCollapsed('%c%s', 'color:red; font-weight:bold', testName)
        console.error(e.stack)
        console.groupEnd()
      }
    }
    setTimeout(function () { // Give document a chance to complete
      if (window.document && document.body) {
        document.body.style.backgroundColor = (failures == 0 ? '#99ff99' : '#ff9999')
        TintyTestHelper.renderStats(tests, failures)
      }
    }, 0)
  },

  fail: function (msg) {
    throw new Error('fail(): ' + msg)
  },

  assert: function (value, msg) {
    if (!value) {
      throw new Error('assert(): ' + msg)
    }
  },

  assertEquals: function (expected, actual) {
    if (expected != actual) {
      throw new Error('assertEquals() "' + expected + '" != "' + actual + '"')
    }
  },

  assertStrictEquals: function (expected, actual) {
    if (expected !== actual) {
      throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"')
    }
  }

}

const fail = TinyTest.fail
const assert = TinyTest.assert
const assertEquals = TinyTest.assertEquals
const eq = TinyTest.assertEquals // alias for assertEquals
const assertStrictEquals = TinyTest.assertStrictEquals
const tests = TinyTest.run
