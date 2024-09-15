function createBlock(x, y){
    const block = document.createElement('div');
    block.style.width = "50px";
    block.style.height = "50px";
    block.style.left = x + "px"; //позиция по y
    block.style.top = y + "px"; // позиция по x
    block.style.background =  "black";
    block.style.position = "absolute";  
    document.body.appendChild(block);
    return block;
}

let snake = []
for (let i=0; i<3; i++){
    snake.push(createBlock(200 + 50 * i, 200)); // позволяет добавлять новые объекты в массив
}
// 200 + 50 * i
// i=0 = 200
// i=1 = 250
// i=3 = 300 - шаг сетки 50

let x = 200
let y = 200

let dx = 0 // перемещение по x
let dy = 0 // перемещение по y

// document - внутренности страницы
// window - окно в котором располагается страница (фокус на этот объект)

window.addEventListener('keydown', (event)=>{  //отслеживаем какую именно кнопку нажали
if (event.key.toLowerCase() == "w"){
    dx = 0;
    dy = -50; // шаг сетки
}
if (event.key.toLowerCase() == "s"){
    dx = 0;
    dy = 50; 
}
if (event.key.toLowerCase() == "a"){
    dx = -50;
    dy = 0; 
}
if (event.key.toLowerCase() == "d"){
    dx = 50;
    dy = 0; 
}
})

// отрисовка кадров
setInterval(() => {

    for (let i = snake.length - 1; i>0; i--){
        snake[i].style.left = snake[i-1].style.left;
        snake[i].style.top = snake[i-1].style.top;
    }

   x = x + dx;
   y = y + dy;
   snake[0].style.left = x + "px"
   snake[0].style.top = y + "px"
   

}, 250);