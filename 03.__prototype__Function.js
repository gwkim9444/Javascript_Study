var obj = { a : 'hi', b : 'zero'};
obj.toString();
Math.toString();
obj.toString = function(){
    return this.a + ' ' + this.b;
};

obj.toString();
obj + ' cho';