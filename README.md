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
