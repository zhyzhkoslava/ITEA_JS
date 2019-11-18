/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

var Train = {
	name :'Hyundai',
    speed : 120,
    passengers : 250,
    go : function(){
      console.log(" Поезд " + this.name + " везет " + this.passengers + " со скоростью " + this.speed);
    },
    stop : function(){
      console.log( " Поезд " + this.name + " остановился. Скорость " + this.speed);
    },
    pickUpPassengers :function(x){
      console.log( this.passengers + x);
    }
}
// console.log(Train.passengers);
Train.go();
Train.stop();
Train.pickUpPassengers(10);



