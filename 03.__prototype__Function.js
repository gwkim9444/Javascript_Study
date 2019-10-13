var obj = { a : 'hi', b : 'zero'};
obj.toString();
Math.toString();
obj.toString = function(){
    return this.a + ' ' + this.b;
};

console.log(obj.toString());
console.log(obj + ' cho');

var obj = {
    example : 'yes'
}

console.log(obj.example);
console.log(obj.hasOwnProperty('example')); // Has OwnProperty Fucntion means to check the key
console.log(obj.toString);
console.log(obj.hasOwnProperty('toString'));
var GrandParent = function() { };

var Parent = function() { };
Parent.prototype = new GrandParent();
Parent.prototype.constructor = Parent;

var Child = function() { };
Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child = new Child();
console.log(Parent.prototype.isPrototypeOf(child)); // true
console.log(GrandParent.prototype.isPrototypeOf(child)); // true

console.log(Object.getPrototypeOf(child));

var obj = {}
var obj2 = Object.create(null,{
    a : {
        writable : false,// 속성의 값을 바꿀 수 있음?
        configurable : false, // 속성의 설명을 바꿀 수 있음?
        enumerable : false, // 반복문에서 사용가능함?
        value : 5
    },
    b : {
        get : function(){
            return 'zero'
        },
        set : function(value){
            console.log(this,'you set the value : '+value);
            this.a = value;
        }
    }
});

console.log(obj2.a);
obj2.a = 4;
console.log(obj2.a);
obj2.b = 5;
console.log(obj2.b);
console.log(Object.getOwnPropertyDescriptor(obj2,'b'));

delete obj2.b;

console.log(obj2.b);