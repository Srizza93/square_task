class MyClass {

    constructor() {
        this.coords = document.addEventListener("mousemove", function() {
            document.getElementById("square").style.position = "absolute",
            document.getElementById("square").style.left = event.clientX + 'px',
            document.getElementById("square").style.top = event.clientY + 'px';
            if (event.clientX >= document.documentElement.clientWidth- 51) 
                document.getElementById("square").style.left = (document.documentElement.clientWidth - 51) + 'px';
            if (event.clientY >= document.documentElement.clientHeight - 51) 
                document.getElementById("square").style.top = (document.documentElement.clientHeight - 51) + 'px';
        });
    }
    
    method() {
        
    } 
}

const action = new MyClass(); 
