let square_pos = document.getElementById("square"),
box_space = document.getElementsByClassName("box")[0],
box_width = box_space.offsetWidth,
box_height = box_space.offsetHeight,
mouse_x = square_pos.style.left, 
mouse_y = square_pos.style.top;

class MyClass {
    
    constructor(square_pos, box_width, box_height, mouse_x, mouse_y) {
        this.square_pos = square_pos;
        this.box_width = box_width;
        this.box_height = box_height;
        this.mouse_x = mouse_x;
        this.mouse_y = mouse_y;
    }

    
    box_delimiter() {
        let box_space = document.getElementsByClassName("box")[0];
        let margin_top = window.getComputedStyle(box_space).marginTop;
        let margin_top_round = Math.round(Number(margin_top.substring(0,margin_top.indexOf("p"))));
        if (mouse_x >= (window.innerWidth - box_width) / 2 + box_width - square_pos.offsetWidth)
            mouse_x = (window.innerWidth - box_width) / 2 + box_width - square_pos.offsetWidth + 'px';
        if (mouse_x <= (window.innerWidth - box_width) / 2) 
            mouse_x = (window.innerWidth - box_width) / 2 + 'px';
        if (mouse_y >= margin_top_round + box_space.offsetHeight - square_pos.offsetHeight)
            mouse_y = margin_top_round + box_space.offsetHeight - square_pos.offsetHeight + 'px';
        if (mouse_y <= margin_top_round)
            mouse_y = margin_top_round + 'px';
    }

    get_coords(event) {
        mouse_x = event.clientX;
        mouse_y = event.clientY;
        this.box_delimiter();
    } 
    
    update(event) {
        square_pos.style.position = "absolute";
        square_pos.style.left = mouse_x + 'px',
        square_pos.style.top = mouse_y + 'px';
    }
    
}

let action = new MyClass(square_pos ,box_width, box_height);
box_space.addEventListener("mousemove", () => {
    action.get_coords(event),
    setInterval(() => {
        action.update()
    }, 3000);
});
