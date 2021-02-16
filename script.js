class Square_run {
    
    constructor() {
        this.square_el = document.querySelector(".square");
        this.box = document.querySelector(".box");
        this.box_width = this.box.offsetWidth;
        this.margin_top = this.box.offsetTop;
        this.margin_bottom = this.margin_top + this.box.offsetHeight;
        this.margin_left =  (window.innerWidth - this.box_width) / 2;
        this.margin_right = window.innerWidth - this.margin_left;
        this.mouse_x = document.querySelector(".square").offsetLeft;
        this.mouse_y = document.querySelector(".square").offsetTop;
        this.mouse_in = false;
        this.speed = 2.5;
        this.add_event();
    }
    
    // Event Listener
    add_event() {
        this.box.addEventListener("mousemove",this.get_coords.bind(this));
        this.box.addEventListener("mouseout", this.mouse_out.bind(this));
        setInterval(this.speed_accelerator.bind(this), 500);
    }
    
    // Update new coordinates to the square
    update() {
        this.square_el.style.left =  this.mouse_x + 'px',
        this.square_el.style.top =  this.mouse_y + 'px';
        this.square_el.style.transition = `all ${this.speed}s linear`;
        this.id = window.requestAnimationFrame(this.update.bind(this));
    }
    
    // Get coordinates from mousemove event, call box delimiter function, 
    // and update coords with interval
    get_coords(event) {
        this.mouse_x = event.clientX;
        this.mouse_y = event.clientY;
        this.mouse_in = true;
        this.box_delimiter();
        this.id = window.requestAnimationFrame(this.update.bind(this));
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

    // On "mouseout" start decreasing the speed
    mouse_out() {
        this.mouse_in = false;
    }
    
    // If square is in the box increase speed up to 5s, 
    // else decrease it to minimum 0s
    speed_accelerator() {
        if (!this.mouse_in && this.speed < 5) {
            window.cancelAnimationFrame(this.id);
            this.speed+=0.1;
            
        } 
        if (this.mouse_in && this.speed > 0){
            this.speed-=0.1;
        }
    }
    
}

new Square_run();

