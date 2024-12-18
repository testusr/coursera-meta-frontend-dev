function addTwoNums(a, b) {
  if (!(typeof b === "number") || !(typeof a === "number")) {
    throw ReferenceError();
  }

  console.log(a + b);
}

try {
  addTwoNums(5, 5);
} catch (err) {
  console.log("Error!", err);
}

console.log("It still works");
