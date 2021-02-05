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
    
    screen() {
        let space = document.getElementsByClassName("box")[0];
        let margin_top = window.getComputedStyle(space).marginTop;
        let margin_top_round = Math.round(Number(margin_top.substring(0,margin_top.indexOf("p"))));
        if (Number(square_pos.style.left.substring(0,square_pos.style.left.indexOf("p"))) >= (window.innerWidth - screen_width) / 2 + screen_width - square_pos.offsetWidth)
        square_pos.style.left = (window.innerWidth - screen_width) / 2 + screen_width - square_pos.offsetWidth + 'px';
        if (Number(square_pos.style.left.substring(0,square_pos.style.left.indexOf("p"))) <= (window.innerWidth - screen_width) / 2) 
        square_pos.style.left = (window.innerWidth - screen_width) / 2 + 'px';
        if (Number(square_pos.style.top.substring(0,square_pos.style.top.indexOf("p"))) >= margin_top_round + space.offsetHeight - square_pos.offsetHeight)
        square_pos.style.top = margin_top_round + space.offsetHeight - square_pos.offsetHeight + 'px';
        if (Number(square_pos.style.top.substring(0,square_pos.style.top.indexOf("p"))) <= margin_top_round)
        square_pos.style.top = margin_top_round + 'px';
    }

}

let square_pos = document.getElementById("square");
let space = document.getElementsByClassName("box")[0];
screen_width = space.offsetWidth,
screen_height = space.offsetHeight;
let action = new MyClass(square_pos, screen_width, screen_height);
space.addEventListener("mousemove", () => {
    action.coords(event),
    action.screen()
});



