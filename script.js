var coordinates_module = (function() {
  'use strict';
  
  var squarePos = document.getElementById("square");
  var event = this.event;
  
  function myFunction() {
    let x = this.clientX;
    let y = this.clientY;
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
      document.addEventListener("mouseover", myFunction);
      document.addEventListener("mouseout", outFunction);
    }
  }
  
})();

coordinates_module.movement();
