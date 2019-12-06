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
                            if(str_column.includes(parse.COLUMN_NAME)){
                                continue;
                            }
                            else{
                            let worker = document.getElementById("List_column");
                            let opt = document.createElement('option');
                            worker.value = parse.COLUMN_NAME;
                            opt.innerHTML = parse.COLUMN_NAME;
                            worker.appendChild(opt);
                            }
                        }
```
