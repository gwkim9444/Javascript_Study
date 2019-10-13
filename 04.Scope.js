var x = 'global';

function ex() {
   // var x = 'local';
    x = 'change';
}

ex();
console.log(x);

var name = 'zero';
function log() {
  console.log(name); 
}

function wrapper() {
  name = 'nero';
  log(); 
}

wrapper(); // nero

// 구조체 설계를 할 때는 항상 이런 식으로 하기를 권장함.
var newScope = (function () {
    var x = 'local';
    return {
      y: function() {
        console.log(x);
      }
    };
  })();

console.log(newScope.x);
  newScope.x = 'change';
  newScope.y();
