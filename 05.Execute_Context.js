var name = 'zero';
function wow(word){
    console.log(word + ' ' + name);
}

function say(){
    var name = 'nero';
    console.log(name);
    wow('hello');
}
say();

// Function Hoisting

  
console.log(zero);
sayWow();
sayYap();
function sayWow(){
    console.log('wow');
}
var zero = 'zero';

function sayWow(){
    console.log('wow');
}
function sayYap(){
    console.log('yeah');
}
/*
'전역 컨텍스트': {
    변수객체: {
      arguments: null,
      variable: [{ sayWow: Function }, 'sayYeah'], << --- First
    },
    scopeChain: ['전역 변수객체'],
    this: window,
  }
  */

 var makeClosure = function() {
    var name = 'zero';
    return function () {
      console.log(name);
    }
  };
  var closure = makeClosure(); // function () { console.log(name); }
  closure(); // 'zero';

