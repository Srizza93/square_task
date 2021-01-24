var myModule = (function() {
  function mouse_move(e) {
  let squarePos = document.getElementById("square");
  const space = document.getElementsByTagName("body");
  let x = e.clientX, y = e.clientY;
  squarePos.style.position = "absolute";
  squarePos.style.left = x + 'px';
  squarePos.style.top = y + 'px';
  console.log("Detected");
  }
  
  return mouse_move(e);
  
});
  
 
