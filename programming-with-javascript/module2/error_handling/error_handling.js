try {
  //console.log(a + b);
  throw new ReferenceError();
} catch (err) {
  console.log("############ this is the error #######");
  console.log(err);
}

console.log("my code does not stop");
