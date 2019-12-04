# Javascript Issue 정리 모음(개인용)

### JavaScript에서 NULL 또는 undefined를 해결하는 방안  
```Javascript
let value = ""   
if(!value)  
  { 
      console.log("비어 있음");  
  }
else{ console.log("값이 있음"); }  
```  

### Javascript Local Storage 사용방법 정리  
```Javascript
let json_data = { 
              a : 1,
              b : 2, 
              c : function()
              {
                console.log("good");
               };
//localStorage에 저장할 요소
localStorage.setItem('json_data',JSON.stringify(json_data));
//localStorage에 꺼낼 요소
let local_data = localStorage.getItem('json_data');
console.log(JSON.parse(local_data));
```

### Javascript 삼항연산자 정리
Javascript 내 if 문은 다음과 같은 형태로 짜여진다.
```Javascript
if(조건){
  console.log("조건충족");
  }
else {
  console.log("만족못함");
   }
```
이를 간소화 하여 정리 할 경우 다음과 같은 삼항연산으로 정리 할 수 있다.

```Javascript
(조건)?console.log("조건이 참일 경우 실행"):console.log("조건이 거짓일 경우 실행");
```

더 짧은 조건문은 하기와 같이 정리 할 수 있다.

```Javascript
     //<조건문> || 은 조건문이 거짓일 때 실행된다.
      true || alert('실행A');
     false || alert('실행B');
     //이럴 경우 false 인 '실행B'만 수행
     
    //<조건문> && 은 조건문이 참일 때 실행된다.
      true && alert('실행A');
     false && alert('실행B');
     //이럴 경우 false 인 '실행A'만 수행
```
