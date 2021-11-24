const svg = document.getElementById("svg_field");
const line = document.getElementById("line");
const path = document.querySelector ("path");
const point = svg.createSVGPoint();
const arrayCordinate = [];
let button = true;
let color;

click.addEventListener("click", function() {
    button = !button;
  })

function drawLine() {

    if (button == true) {
        const cordLine = `M${arrayCordinate[0]} ${arrayCordinate[1]} ` + `L${arrayCordinate[2]} ${arrayCordinate[3]} ` + `L${arrayCordinate[4]} ${arrayCordinate[5]} ` + `Z`;
        line.setAttribute("d", cordLine)
    } else if (button == false) {
        const cordLine = `M${arrayCordinate[0]} ${arrayCordinate[1]} ` + `L${arrayCordinate[2]} ${arrayCordinate[3]} ` + `L${arrayCordinate[4]} ${arrayCordinate[5]}` + `L${arrayCordinate[6]} ${arrayCordinate[7]} `;
        line.setAttribute("d", cordLine)
    }
}

function Color () {
    if (color == black) {
        const colorLine = `stroke:${black}`;
        line.setAttribute("style", colorLine)
    } else if (color == green) {
        const colorLine = `stroke:${green}`;
        line.setAttribute("style", colorLine)
    } else if (color == blue) {
        const colorLine = `stroke:${blue}`;
        line.setAttribute("style", colorLine)
    }
}

// function buttonZ () {
//     const cord = (+ `M${arrayCordinate[0]} ${arrayCordinate[1]} `);
//     if (1) {
//         console.log(cord)
//         return cord;
//     }
// }

    function Search() {

        svg.addEventListener('mousedown', mousedown)
    
        function mousedown(event) {
            point.x = event.clientX;
            point.y = event.clientY;
    
            x=point.x;
            y=point.y;
    
            arrayCordinate.push(x, y)
            drawLine()
 
            console.log(x, y)
    
            return x, y;
        }
    
        console.log(arrayCordinate)
    
    }

    Search()



    // function plusOne () {
    //     const arrayLength = Math.ceil(arrayCordinate.length/2)
    //     for (let i=arrayLength; i=arrayLength;i++) {
    //         let one = i+1
    //         let two = i+2
    //         console.log(one)
    //         console.log(two)
    //     }
    // }
    // plusOne ()




// function getControlPoint(circle) {

//     return {
//       x: Math.round(),
//       y: Math.round()
//     }
  
//   }

//   console.log(getControlPoint()) //Object { x: NaN, y: NaN }

// function drawLine() {

//     const
//         m1 = getControlPoint(node.m1),
//         m2 = getControlPoint(node.m2),
//         l1 = getControlPoint(node.l1),
//         l2 = getControlPoint(node.l2);

//         function updateElement() {
//             line,
//             {
//               x1: m1,
//               y1: m2,
//               x2: l1,
//               y2: l2
//             }
//           };

// 'm1,m2,l1,l2,line,path'.split(',').map(s => {
//     node[s] = document.getElementById(s);
//   });

//   const
// cordLine = `M${m1.x} ${m2.y}` + `L${l1.x} ${l2.y}` +
// (line.classList.contains('fill') ? ' Z' : '');

// updateElement( line,{cordLine} );

// path.textContent = `<path d="${cordLine}" />`;

// }

// drawLine()