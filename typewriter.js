let string = "hello there from lighthouse labs";

let slowWriter = (string) => {
  let seconds = 1000;
  string += "\n";
  for (let element of string) {
    setTimeout(() => {
      process.stdout.write(element);
    }, seconds);
    seconds += 50;
  }
};

slowWriter(string);
