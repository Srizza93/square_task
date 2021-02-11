class Square_run {
    
    constructor() {
        this.square_el = document.querySelector(".square");
        this.box = document.querySelector(".box");
        this.box_width = this.box.offsetWidth;
        this.margin_top = this.box.offsetTop;
        this.margin_bottom = this.margin_top + this.box.offsetHeight;
        this.margin_left =  (window.innerWidth - this.box_width) / 2;
        this.margin_right = window.innerWidth - this.margin_left;
        this.mouse_x = document.querySelector(".square").style.left;
        this.mouse_y = document.querySelector(".square").style.top;
        this.add_event();
    }
    
    // Event Listener
    add_event() {
        this.box.addEventListener("mousemove", this.get_coords.bind(this));
    }

    // Block mouse coordinates in each direction
    box_delimiter() {
        // Right
        if (this.mouse_x >= this.margin_left + this.box_width - this.square_el.offsetWidth) {
            this.mouse_x = this.margin_left + this.box_width - this.square_el.offsetWidth;
        }
        // Left
        else if (this.mouse_x <= this.margin_left) {
            this.mouse_x = this.margin_left;
        }
        // Bottom
        if (this.mouse_y >= this.margin_bottom - this.square_el.offsetHeight) {
            this.mouse_y = this.margin_bottom - this.square_el.offsetHeight;
        }
        // Top
        else if (this.mouse_y <= this.margin_top) {
            this.mouse_y = this.margin_top;
        }
    }
    
    // update new coordinates to the square
    update() {
        this.square_el.style.position = "absolute";
        this.square_el.style.left =  this.mouse_x + 'px',
        this.square_el.style.top =  this.mouse_y + 'px';
        this.square_el.style.transition = "2s";
    }
    
    // Get coordinates from mousemove event, call box delimiter function, 
    // and update coords with interval
    get_coords(event) {
        this.mouse_x = event.clientX;
        this.mouse_y = event.clientY;
        this.box_delimiter();
        this.update();
    } 

      
}

new Square_run();

