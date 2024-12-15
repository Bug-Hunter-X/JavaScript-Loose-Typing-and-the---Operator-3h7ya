# JavaScript Loose Typing and the + Operator

This repository demonstrates a common JavaScript error stemming from its loose typing system and the behavior of the `+` operator.  The `+` operator will perform string concatenation if either operand is a string, and array concatenation if both operands are arrays. This can lead to unexpected results if not handled properly. The `bug.js` file shows the error, and `bugSolution.js` demonstrates a solution.

## Bug

The core issue is the implicit type coercion performed by the `+` operator.  The `bug.js` file shows examples of this unexpected behavior:

* Adding a number and a string results in string concatenation.
* Adding two arrays results in array concatenation.

## Solution

The `bugSolution.js` file provides a solution by explicitly checking the types of the inputs using `typeof` or utilizing a more robust numerical comparison or addition method to avoid unexpected type coercion.