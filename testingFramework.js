// Wrapping tests in module pattern
(function(exports) {

    var assert = {
        isTrue: function(assertionToCheck) {
          if (!assertionToCheck) {
            testResult("❌ Assertion failed: " + assertionToCheck + " is not truthy");
            //throw new Error("❌ Assertion failed: " + assertionToCheck + " is not truthy");
          } else {
            testResult("✅ Assertion passed: ");
            //console.log("✅ Assertion passed: ");
          }
        },
    
        isEqual: function(a, b) {
          if ( a !== b ) {
            testResult("❌ Assertion failed: " + a + " is not equal to" + b);
            //throw new Error("❌ Assertion failed: " + a + " is not equal to" + b);
            } else {
              testResult("✅ Assertion passed: ");
              //console.log("✅ Assertion passed: " );
            }
        }
    
      };

      function testResult(result) {
        page.innerHTML += `<p>${result}</p>`
      }
    
    exports.assert = assert;
    
})(this);