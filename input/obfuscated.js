function greet(name, output, breet) {
  if (!breet) {
    breet = function (name, output) {
      output = "Hello " + name + "!";
      console.log(output);
    };
  }
  output = "Hello " + name + "!";
  console.log(output);
  breet(output);
}
greet("Internet User");