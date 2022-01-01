let counter = 0;

function clunk(times) {
  let num = times;
  while (num < 0) {
    console.log("clunk");
    num = num - 1;
  }
}

function thing(size) {
  let facky = 1;
  counter = 0;
  if (size == 0) {
    console.log("clank");
  } else if (size == 1) {
    console.log("thunk");
  } else {
    while (size > 1) {
      facky = facky + size;
      size = size - 1;
    }
  }
  clunk(facky);
}

function display(output) {
  console.log(output);
  counter = counter + 1;
}

thing(1);
console.log(counter);
