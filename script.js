let coordinates_module = (function() {  
  let squarePos = document.getElementById("square");
  let mouse_on = false, x = 0, y = 0;
  const space = document.getElementsByTagName("body");
  
  function mouse_down(event) {
    x = event.clientX;
    y = event.clientY;
    mouse_on = true;
    console.log("DETECTED", mouse_on);
  }
  
  function mouse_move() {
  }
  
  function mouse_up() {
  }
  
  return {
    movement: function() {
      space.addEventListener("mouseover", mouse_down());
    }
  }
  
})();
