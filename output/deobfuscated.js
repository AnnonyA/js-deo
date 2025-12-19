function greet(name) {
  function breet(name) {
    let output = "Hello " + name + "!";
    console.log(output);
  }
  let output = "Hello " + name + "!";
  console.log(output);
  breet(output);
}
greet("Internet User");