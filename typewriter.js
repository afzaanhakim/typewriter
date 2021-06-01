
let string = "hello there from lighthouse labs";
let slowWriter = (string) => {
  let seconds = 1000;

  for (let element of string) {
    setTimeout (()=> {
    process.stdout.write((element) + '\n')
    
    }, seconds) 
    seconds += 50;
  
  }
  
};

slowWriter(string);