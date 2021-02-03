class MyClass {

    constructor(square_pos, screen_width, screen_height) {
        this.square_pos = square_pos;
        this.screen_width = screen_width;
        this.screen_height = screen_height;
    }
    
    coords(event) {
        square_pos.style.position = "absolute",
        square_pos.style.left = event.clientX + 'px',
        square_pos.style.top = event.clientY + 'px';
    } 
    
}

let square_pos = document.getElementById("square"),
screen_width = document.documentElement.clientWidth,
screen_height = document.documentElement.clientHeight;
let action = new MyClass(square_pos, screen_width, screen_height);
window.onmousemove = action.coords;

