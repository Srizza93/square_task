document.addEventListener("mouseover", myFunction);
let event;
let squarePos = document.getElementById("square");
function myFunction(event) {
  let x = event.clientX;
  let y = event.clientY;
  squarePos.style.position = "absolute";
  squarePos.style.left = x + "px";
  squarePos.style.top = y + "px";
  squarePos.style.width = "80px";
  squarePos.style.height = "80px";
}

function mouseOut(event) {
  squarePos.style.width = "50px";
  squarePos.style.height = "50px";
}


