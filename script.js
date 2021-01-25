var my_module = (function() {
    let x = event.clientX, y = event.clientY;
    let squarePos = document.getElementById("square");

    function mouse_move(event) {
        const space = document.getElementsByTagName("body");
        squarePos.style.position = "absolute";
        squarePos.style.left = x + 'px';
        squarePos.style.top = y + 'px';
        console.log("x " + x,"y " + y);
        }

        function screen_limit() {
            let screen_width = document.documentElement.clientWidth,
            screen_height = document.documentElement.clientHeight;
            console.log("height " + screen_height,"width " + screen_width);
            if (x >= screen_width - 51) {
                squarePos.style.left = (screen_width - 51) + 'px';
                console.log('HERE');
            }
            if (y >= screen_height - 51) {
                squarePos.style.top = (screen_height - 51) + 'px';
                console.log('HERE');
            }
        }

        return {
            output:mouse_move(event),
            output:screen_limit()
        };
})
