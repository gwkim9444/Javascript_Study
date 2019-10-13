function Vehicle(name,speed){
    this.name = name;
    this.speed = speed;
}

Vehicle.prototype.drive = function(){
    console.log(this.name + ' runs at ' + this.speed);
}

//분리 설계를 위해 스파게티 코드를 줄이고 해당 부분을 객체화 시켜 관리할것
var tico = new Vehicle('tico',50);
tico.drive();

function sedan(name,speed,maxSpeed){
    Vehicle.apply(this,arguments)
    this.maxSpeed = maxSpeed;
}

sedan.prototype = Object.create(Vehicle.prototype);
sedan.prototype.contructor = sedan;
sedan.prototype.boost = function(){
    console.log(this.name + ' boost its spped at ' + this.maxSpeed);
}

var sonata = new sedan('sonata',100,200);

sonata.drive();
sonata.boost();