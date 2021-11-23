const svg = document.getElementById("svg_field");
const line = document.getElementById("line");
const path = document.querySelector ("path");
const point = svg.createSVGPoint();
const arrayCordinate = [];

function drawLine() {
    const cordLine = `M${arrayCordinate[0]} ${arrayCordinate[1]} ` + `L${arrayCordinate[2]} ${arrayCordinate[3]}`
    line.setAttribute("d", cordLine)
}



    function Search() {

        svg.addEventListener('mousedown', mousedown)
    
        function mousedown(event) {
            point.x = event.clientX;
            point.y = event.clientY;
    
            x=point.x;
            y=point.y;
    
            arrayCordinate.push(x, y)
            drawLine()
    
            return x, y;
        }

    
    }

    Search()