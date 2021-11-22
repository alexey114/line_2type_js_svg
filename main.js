const svg = document.querySelector("svg");
const point = svg.createSVGPoint();


function Search() {
    
    svg.addEventListener('mousemove', mousemove)
    
    function mousemove(event) {
        point.x = event.clientX; 
        point.y = event.clientY;

        console.log(point.x), console.log(point.y)
    }
}

var box = svg.getBoundingClientRect();

Search()

// function cursorPoint(event){

    
//     const point = svg.createSVGPoint();

//     point.x = event.clientX; 
//     point.y = event.clientY;

//     const points = point.matrixTransform(svg.getScreenCTM().inverse());

//     const matrix = panzoomContainer.panzoom("getMatrix");

//     return {
//         x: points.x * (1 / matrix[0]),
//         y: points.y * (1 / matrix[3])
//     };
   
//   }

// cursorPoint()


//   cursorPoint()

//   svg.addEventListener('mousemove',function(svg){
//     var loc = cursorPoint(svg);

//   },false);




// const widthField = document.querySelector('#field').offsetWidth;
// const heightField = document.querySelector('#field').offsetHeight;
// const colors = ['#992828'];

// draw = false;

// function numberDiv () {
//     const PIXEL = Math.ceil(Math.ceil(widthField * heightField)/25)
//     return PIXEL
// }
// numberDiv ()

// const PIXEL_ITEMS = numberDiv ();

// function setColor (element) {
//     element.style.backgroundColor = colors
// }

//     for(let i=0; i < PIXEL_ITEMS; i++) {

//             let pixel = document.createElement('div')
//             pixel.classList.add('pixel_div')

//             pixel.addEventListener('mousedown', mousedown)
//             pixel.addEventListener('mouseover', mouseover)
//             pixel.addEventListener('mouseup', mouseup)

//             function mousedown (event) {
//                 draw = true
//                 setColor(pixel)
//             }

//             function mouseover() {
//                 if(draw == true) {
//                     setColor(pixel)
//                 }
//             }

//             function mouseup () {
//                 draw = false;
//             }

//             fieldDrawing.append(pixel)
//     }



//Нашу запись в примере выше можно немного сократить , используя команду "Закрыть путь", Z. 
//Эта команда рисует прямую линию от текущего положения обратно к первой точке пути. 
//Она часто встречается в конце узла пути, хотя и не всегда. Для неё регистр буквы не важен.