let squarePos = document.getElementById("square");
const space = document.getElementsByTagName("body");

function mouse_move(e) {
  let x = e.clientX, y = e.clientY;
  squarePos.style.position = "absolute";
  squarePos.style.left = x + 'px';
  squarePos.style.top = y + 'px';
  console.log("Detected");
}
  
function mouse_up(e) {
  console.log("Mouse is up");
}
  
 
