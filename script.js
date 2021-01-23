var coordinates_module = (function() {  
  let squarePos = document.getElementById("square");
  
  
  function in_mouse(event) {
    let x = event.clientX;
    let y = event.clientY;
    squarePos.style.position = "absolute";
    squarePos.style.left = x + "px";
    squarePos.style.top = y + "px";
    squarePos.style.width = "100px";
    squarePos.style.height = "100px";
  }
  
  function outFunction() {
    squarePos.style.width = "50px";
    squarePos.style.height = "50px";
  }
  
  return {
    movement: function() {
      document.addEventListener("mouseover", in_mouse());
      document.addEventListener("mouseout", outFunction());
    }
  }
  
})();

coordinates_module.movement();
