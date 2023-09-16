const container = document.querySelector(".container");

//origin canvas
for (let j = 0; j < 16; j++) {
  const column = document.createElement("div");
  column.classList.add("column");
  container.appendChild(column);
  //make box in row
  for (let i = 0; i < 16; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    column.appendChild(box);
  }
}
makeCanvas();

//buttons
const button = document.querySelector(".ye");
button.addEventListener("click", newCanvas);
let randomColor = Math.floor(Math.random() * 16777215).toString(16);
const button1 = document.querySelector(".ye1");
button1.addEventListener("click", () => rainbow());
const button2 = document.querySelector(".ye2");
button2.addEventListener("click", clear);
const button3 = document.querySelector(".ye3");
button3.addEventListener("click", () => eraser("white"));

function makeCanvas() {
  let isMouseDown = false;

  const boxes = document.querySelectorAll(".box");
  const body = document.querySelector("body");

  boxes.forEach((box) => {
    box.addEventListener("mousedown", () => {
      isMouseDown = true;
      box.setAttribute("style", `background-color: ${chooseColor()}`);
      console.log(isMouseDown);
    });
    box.addEventListener("mousemove", () => {
      if (isMouseDown) {
        //do stuff
        box.setAttribute("style", `background-color: ${chooseColor()}`);
      }
    });
  });

  //mouseup over all of body. removes case of leaving canvas and being stuck drawing
  body.addEventListener("mouseup", () => {
    isMouseDown = false;
    console.log(isMouseDown);
  });

  //no dragging of canvas
  body.ondragstart = function () {
    return false;
  };
}

function newCanvas() {
  container.replaceChildren();
  let gridSize = prompt("what number per side?");
  for (let j = 0; j < gridSize; j++) {
    const column = document.createElement("div");
    column.classList.add("column");
    container.appendChild(column);
    //make box in row
    for (let i = 0; i < gridSize; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      column.appendChild(box);
    }
  }
  makeCanvas();
  button3.removeAttribute("style", "background-color: none");
  button1.removeAttribute("style", "background-color: none");
}

function clear() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.setAttribute("style", "background-color:white;");
  });
}

function eraser(color) {
  baseMethod(color);
  button3.setAttribute("style", "background-color:yellow;");
  button1.removeAttribute("style", "background-color: none");
}

function rainbow() {
  let isMouseDown = false;

  const boxes = document.querySelectorAll(".box");
  const body = document.querySelector("body");

  boxes.forEach((box) => {
    box.addEventListener("mousedown", () => {
      isMouseDown = true;
      box.setAttribute("style", `background-color: #${randomColor}`);
      console.log(isMouseDown);
    });
    box.addEventListener("mousemove", () => {
      if (isMouseDown) {
        //do stuff
        box.setAttribute("style", `background-color: #${randomColor}`);
      }
    });
    box.addEventListener("mouseover", () => {
      randomColor = Math.floor(Math.random() * 16777215).toString(16);
      if (isMouseDown) {
        //do stuff
        box.setAttribute("style", `background-color: #${randomColor}`);
      }
    });
  });

  //mouseup over all of body. removes case of leaving canvas and being stuck drawing
  body.addEventListener("mouseup", () => {
    isMouseDown = false;
    console.log(isMouseDown);
  });

  //no dragging of canvas
  body.ondragstart = function () {
    return false;
  };
  button1.setAttribute(
    "style",
    "background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);"
  );
  button3.removeAttribute("style", "background-color: none");
}

function chooseColor() {
  const color = document.querySelector("input").value;
  return color;
}

function closeEraser() {
  const color = document.querySelector("input");
  color.addEventListener("click", () => {
    makeCanvas();
    button3.removeAttribute("style", "background-color: none");
    button1.removeAttribute("style", "background-color: none");
  });
}

function baseMethod(color) {
  let isMouseDown = false;

  const boxes = document.querySelectorAll(".box");
  const body = document.querySelector("body");

  boxes.forEach((box) => {
    box.addEventListener("mousedown", () => {
      isMouseDown = true;
      box.setAttribute("style", `background-color: ${color}`);
      console.log(isMouseDown);
    });
    box.addEventListener("mousemove", () => {
      if (isMouseDown) {
        //do stuff
        box.setAttribute("style", `background-color: ${color}`);
      }
    });
  });

  //mouseup over all of body. removes case of leaving canvas and being stuck drawing
  body.addEventListener("mouseup", () => {
    isMouseDown = false;
    console.log(isMouseDown);
  });

  //no dragging of canvas
  body.ondragstart = function () {
    return false;
  };
}

closeEraser();

//color palette
Coloris({
  themeMode: "dark",
  alpha: false,
  swatches: [
    "#264653",
    "#2a9d8f",
    "#e9c46a",
    "rgb(244,162,97)",
    "#e76f51",
    "#d62828",
    "navy",
    "#07b",
    "#0096c7",
    "#00b4d880",
    "rgba(0,119,182,0.8)",
  ],
  clearButton: true,
});
