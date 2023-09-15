const container = document.querySelector(".container");

//make column
for (let j = 0; j < 16; j++) {
  const column = document.createElement("div");
  column.classList.add("row");
  container.appendChild(column);
  //make box in row
  for (let i = 0; i < 16; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    column.appendChild(box);
  }
}
