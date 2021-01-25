var my_module = (function() {
    function mouse_move(event) {
        let squarePos = document.getElementById("square");
        const space = document.getElementsByTagName("body");
        let x = event.clientX, y = event.clientY;
        squarePos.style.position = "absolute";
        squarePos.style.left = x + 'px';
        squarePos.style.top = y + 'px';
        console.log("Detected");
        }

        return {
            output:mouse_move(event)
        };
})
