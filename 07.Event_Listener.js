//example of event listener --> 해당 이벤트가 발생할때 까지 대기한다.
window.onload = function(){
    alert('I\'m loaded'); //  onload callback came from browser
}

window.onblur = function(){

} // 해당 객체가 focus를 잃었을경우 

window.onchange = function(){

} // 해당 객체 내용이 바뀌고 focus를 잃었을떄

window.onclick = function(){

}// 해당 객체를 눌렀을때

window.onkeypress = function(){

} // 키를 누르고 있을 때

window.onkeyup = function(){

}//  키를 눌렀다 뗏을 때

window.onmouseover = funcion(){

} // 마우스가 위로 올라 왔을 때

window.onmouseout = function(){

}// 마우스가 객체 바깥으로 나갔을때

window.onreset = function(){

}// RESET 버튼을 눌렀을 때

window.onresize = function(){

}//객체의 크기가 바뀌었을 때

window.onscroll = function(){

} // 스크롤바를 조작 할 때

window.onsubmit = function(){

}// 폼이 전송 될 때

document.getElementById('clickme').onclick = function(){
    alert("asdasdasd");
} // DOM 객체의 이벤트 리스너 설정

function onclickEvent(){
    alert("listen the Event listener");
}

document.getElementById('clickme').addEventListener('click',onclickEvent);
// 해당 DOM 객체에 대하여 Event Listener 를 추가해 해당 이벤트를 추가 할 수 있음
document.getElementById('clickme').removeEventListener('click',onclickEvent);
// 해당 DOM 객체에 대한 Event Listener 를 삭제 할 수 있음




