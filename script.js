class Square_run {
    
    constructor() {
        this.square_el = document.querySelector(".square");
        this.box = document.querySelector(".box");
        this.box_width = this.box.offsetWidth;
        this.window_width = screen.width || document.documentElement.clientWidth || document.body.clientWidth;
        this.margin_top = this.box.offsetTop;
        this.margin_bottom = this.margin_top + this.box.offsetHeight;
        this.margin_left =  (this.window_width - this.box_width) / 2;
        this.margin_right = this.window_width - this.margin_left;
        this.mouse_x = document.querySelector(".square").offsetLeft;
        this.mouse_y = document.querySelector(".square").offsetTop;
        this.mouse_in = false;
        this.speed = 2.5;
        this.distance = 0;
        this.size = 50;
        this.raf = null;
        this.add_event();
        this.speed_accelerator();
        this.get_distance();
    }
    
    // Event Listener
    add_event() {
        this.box.addEventListener("mouseover", this.mouse_is_in.bind(this));
        this.box.addEventListener("mousemove",this.get_coords.bind(this));
        this.box.addEventListener("mouseleave", this.mouse_out.bind(this));
    }
    
    // Get coordinates from mousemove event, call box delimiter function, 
    // and update coords with interval
    get_coords(event) {
        this.mouse_x = event.clientX;
        this.mouse_y = event.clientY;
        this.raf = window.requestAnimationFrame(this.rendering.bind(this));
        this.box_delimiter();
    }
    
    // Update new coordinates to the square
    rendering() {
        this.square_el.style.left =  this.mouse_x + 'px',
        this.square_el.style.top =  this.mouse_y + 'px';
        this.square_el.style.width = this.size + 'px';
        this.square_el.style.height = this.size + 'px';
        this.square_el.style.transition = `all ${this.speed}s linear`;
    }

    // Detect mouse when it is in of the box
    mouse_is_in() {
        this.mouse_in = true;
    }

    // Detect mouse when it is out of the box
    mouse_out() {
        this.mouse_in = false;
        this.size = 50;
        this.raf = window.requestAnimationFrame(this.rendering.bind(this));
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

    // If square is in the box increase speed up to 5s, 
    // else decrease it to minimum 0s
    speed_accelerator() {
        setInterval(() => {
            if (!this.mouse_in && this.speed < 5) {
                window.cancelAnimationFrame(this.raf);
                this.speed += 0.02;
            } 
            if (this.mouse_in && this.speed > 0){
                this.speed -= 0.02;
            }
        }, 100);
    }
    
    // Get distance between mouse and square coordinates
    get_distance() {
        setInterval(() => {
            let dist_x = this.mouse_x - this.square_el.offsetLeft;
            let dist_y = this.mouse_y - this.square_el.offsetTop;
            this.distance = Math.sqrt(dist_x * dist_x + dist_y * dist_y);
            if (this.mouse_in && this.distance < 500) {
                this.size = 100 - (this.distance / 10);
            }
        }, 100);
    }

}

new Square_run();

