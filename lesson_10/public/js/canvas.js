// Элемент HTML <canvas> используется для рисования графики с помощью JavaScript. 
// Элемент <canvas> является только контейнером для графики. 
// В Canvas есть несколько методов для рисования контуров, полей, кругов, текста и добавления изображений.

var canvas = document.getElementById("myCanvas");
// getContext() - метод возвращает объект, который предоставляет методы и свойства для рисования на canvas
// 2d - объект, представляющий контекст двумерного рендеринга
// webgl - объект, представляющий контекст трехмерного рендеринга
var ctx = canvas.getContext("2d");

// нарисовать квадрат
// ctx.fillStyle = "#FF0000";
// // fillRect(x,y,width,height)
// ctx.fillRect(0, 0, 150, 75);

// // нарисовать линию
// // moveTo(x,y) - определяет начальную точку линии
ctx.moveTo(0, 0);
// lineTo(x,y) - определяет конечную точку линии
ctx.lineTo(200, 100);
ctx.stroke();

// // нарисовать круг
// // beginPath() - начинается путь
// ctx.beginPath();
// // arc(x,y,r,startangle,endangle)
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();

// // градиент

// // createLinearGradient(x,y,x1,y1)
// var grd = ctx.createLinearGradient(0,0,200,0);
// // Метод addColorStop () определяет цветовые остановки
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"white");

// // залить градиентом
// ctx.fillStyle = grd;
// ctx.fillRect(10,10,150,80);

// // текст
// ctx.font = "30px Arial";
// // fillText (text, x, y) - рисует «заполненный» текст на холсте
// ctx.fillText("Hello World", 10, 50);
// // strokeText (text, x, y) - рисует текст на холсте (без заливки)
// ctx.strokeText("Hello World",10,50);