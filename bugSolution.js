function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.error("Invalid input types: a=", typeof a, ", b=", typeof b);
    return NaN; // Or handle it in a more appropriate way for your application
  }
}

console.log(foo(1, 2)); // 3
console.log(foo(1, "2")); // Error message
console.log(foo([1], [2])); // Error message