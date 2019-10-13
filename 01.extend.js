function Vehicle(name,speed){
    this.name = name;
    this.speed = speed;
}

Vehicle.prototype.drive = function(){
    console.log(this.name + ' runs at ' + this.speed);
}

var tico = new Vehicle('tico',50);
tico.drive();