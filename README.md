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
     // 따라서 상기의 삼항연산은 더 짧은 조건문으로 다음과 같이 축약 될 수 있다.
     (조건) && console.log("참 일때 실행") || console.log("거짓일 때 실행")
```


### Javascript Array 안 항목마다 새로운 조건을 return 하고 싶을때  
Javascript 함수 Array.prototype.map() 함수를 활용한다.
```Javascript
  const array1 = [1, 4, 9, 16];
  // pass a function to map
  const map1 = array1.map(x => x * 2);
  console.log(map1);
  // expected output: Array [2, 8, 18, 32]
```

### Javascript For문에 Continue 한번 써먹어 본 경험
```javascript
 for (let parse of JSON.parse(text).colum) {
   if(str_column.includes(parse.COLUMN_NAME))
   {
      continue;
    }
     else
     {
        let worker = document.getElementById("List_column");
        let opt = document.createElement('option');
        worker.value = parse.COLUMN_NAME;
        opt.innerHTML = parse.COLUMN_NAME;
        worker.appendChild(opt);
     }
}
```
  자바스크립트는 하나의 스레드로 단 1개의 동시성만 다루는 언어
  → 자바스크립트가 한 번에 1개의 작업만 다룰 수 있다는 얘기
  
  자바스크립트는 힙, 큐와 함께 구성하는 단일 콜스택을 갖는다.
  → 콜스택: 함수의 호출을 기록하는 자료구조
  
  크롬 브라우저는 16000 프레임의 제한된 스택을 가지고 있다.
  → 힙: 오브젝트(객체)들은 힙 내부에 할당됩니다. 힙은 거의 구조화되지 않은 영역(unstructured)의 메모리 

# 2. 힙
>오브젝트(객체)들은 힙 내부에 할당됩니다. 힙은 거의 구조화되지 않은 영역(unstructured)의 메모리입니다. 변수와 객체들의 모든 메모리 할당이 여기서 일어나게 됩니다.  
  
# 3. 큐
>자바스크립트 런타임은 메시지 큐를 갖고 있습니다. 메시지 큐는 실행될 콜백함수나 실행될 메시지들에 대한 리스트입니다. 스택이 충분한 공간(capacity)을 갖고 있을 때, 메시지는 큐 밖으로 나오게 되고 메시지가 가지고 있던 함수 목록들이 실행됩니다. 이렇게 초기 스택 프레임이 만들어집니다. 스택이 다시 빌 때 메시지 수행도 끝나게 됩니다. 이벤트들에 대한 콜백 함수가 제공되었다고 가정했을 때 이 메시지들은 외부 비동기 이벤트들에 대한 응답으로 큐에 쌓입니다. 여기서 외부 비동기 이벤트들이란 마우스 클릭, HTTP 요청 등을 말합니다. 하지만 만일 한 사용자가 버튼을 눌렀는데 아무런 콜백함수도 등록되어 있지 않다면 어떠한 메시지도 큐에 들어가지 않을 것입니다.

https://velog.io/@jakeseo_me/자바스크립트-개발자라면-알아야-할-33가지-개념-2-자바스크립트의-원시-타입Primitive-Type-번역
