var my_module = (function() {
    let x = event.clientX, y = event.clientY;
    let squarePos = document.getElementById("square");

    function mouse_move(event) {
        squarePos.style.position = "absolute";
        squarePos.style.left = x + 'px';
        squarePos.style.top = y + 'px';
    }

    function screen_limit() {
        let screen_width = document.documentElement.clientWidth,
        screen_height = document.documentElement.clientHeight;
        if (x >= screen_width - 51) {
            squarePos.style.left = (screen_width - 51) + 'px';
        }
        if (y >= screen_height - 51) {
            squarePos.style.top = (screen_height - 51) + 'px';
        }
    }   

        return {
            output:mouse_move(event),
            output:screen_limit()
        };
})
