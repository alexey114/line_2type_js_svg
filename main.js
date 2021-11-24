const svg = document.getElementById("svg_field");
const line = document.getElementById("line");
const path = document.querySelector ("path");
const point = svg.createSVGPoint();
const arrayCordinate = [];
const new_array = [];
let colors = ['#000000', '#008000','#0000ff']
let button = true;
let black = false;
let green = false;
let blue = false;

//DRAW LINE

function drawLine() {

    const new_array = Array.from(arrayCordinate);
        new_array.reverse()

        console.log(new_array[1])
        console.log(new_array[0])

        const newLine_L = `L${new_array[1]} ${new_array[0]} `

    if (button == true) {
        const cordLine = `M${arrayCordinate[0]} ${arrayCordinate[1]} ` + `L${arrayCordinate[2]} ${arrayCordinate[3]} ` + `L${arrayCordinate[4]} ${arrayCordinate[5]} ` + `Z`;
        
        line.setAttribute("d", cordLine)
    } else if (button == false) {
        const cordLine = `M${arrayCordinate[0]} ${arrayCordinate[1]} ` + `L${arrayCordinate[2]} ${arrayCordinate[3]} ` + `L${arrayCordinate[4]} ${arrayCordinate[5]} ` +  `${newLine_L} `;

        line.setAttribute("d", cordLine)


        
    }

}

function Cordinate() {

    svg.addEventListener('mousedown', mousedown)
    
    function mousedown(event) {
        point.x = event.clientX;
        point.y = event.clientY;

        x=point.x;
        y=point.y;

        arrayCordinate.push(x, y)

        drawLine()
        Color()

        console.log(x, y)

        return x, y;
    }
}

Cordinate()

    //COLOR

    function Color() {
        if (black === true) {
            const colorLine = `stroke:${colors[0]}`;
            line.setAttribute("style", colorLine)
        } else if (green === true) {
            const colorLine = `stroke:${colors[1]}`;
            line.setAttribute("style", colorLine)
        } else if (blue === true) {
            const colorLine = `stroke:${colors[2]}`;
            line.setAttribute("style", colorLine)
        }
    }

    //BUTTON

    click.addEventListener("click", function() {
        yes_no.innerHTML = !button;
        button = !button;
      })
    
      function ClearGreen() {
        color_green_yes_no.innerHTML = !green;    
        green = false;
      }
    
      function ClearBlack () {
        color_black_yes_no.innerHTML = !black;
        black = false;
      }
    
      function ClearBlue () {
        color_blue_yes_no.innerHTML = !blue;
        blue = false;
      }
    
      color_black.addEventListener("click", function() {
        color_black_yes_no.innerHTML = !black;
        if(green === true && blue === true) {
            ClearBlue ()
            ClearGreen()
        } else if (green === true) {
            ClearGreen ()
        } else if (blue === true) {
            ClearBlue ()
        }
        black = !black;
      })
    
      color_green.addEventListener("click", function() {
        color_green_yes_no.innerHTML = !green;
        if(black === true && blue === true) {
            ClearBlack ()
            ClearBlue()
        } else if (black === true) {
            ClearBlack ()
        } else if (blue === true) {
            ClearBlue ()
        }
        green = !green;
      })
    
      color_blue.addEventListener("click", function() {
        color_blue_yes_no.innerHTML = !blue;
        if(black === true && green === true) {
            ClearBlack ()
            ClearGreen()
        } else if (black === true) {
            ClearBlack ()
        } else if (green === true) {
            ClearGreen ()
        }
        blue = !blue;
      })

    //Получение данных по файлу с SVG в консоль

    function getSvg () {
        var my_svg_field = document.getElementById("svg_field");
        var my_svg_line = document.getElementById("line");
        my_svg_field.outerHTML;
        my_svg_line.outerHTML;
        console.log(my_svg_field)
        console.log(my_svg_line)
    }

    getSvg ()

    