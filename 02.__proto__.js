function person(name){
    this.name = name;
}
person.prototype.sayHello = function(){
    console.log(this.name);
};

var zero = new person('zero');

zero.__proto__;
zero.__proto__.__proto__;
