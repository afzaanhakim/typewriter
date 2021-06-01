
let string = "hello there from lighthouse labs";
let slowWriter = (string) => {
  let seconds = 1000;
  let element;
  for (element of string) {
    let x = element;
    setTimeout (()=> {
      process.stdout.write([x] + '\n' )
    }, seconds)  
    seconds += 50;
  }
};

slowWriter(string);