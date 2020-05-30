# 순수함수

-  입력값이 같다면, 출력값도 같다
-  부수작용이 없다.
-  출력에 영향을 주는 모든 변동사항은 입력으로
-  입력된 값을 절대 바꾸지 않는다.

순수한수의 장점: 예측가능하다.

```javascript
//아래는 순수함수가 아니다.
let c =0;
function add(a,b){
   return a + b + c;
}


//이유는 아래
add(1,2);
c=3;
add(1,2)



//순수하게 바꾼다면
function add(a,b,c){
   return a+b+c;
}

add(1,2,3);
add(1,2,4);
add(1,2,3);


```


```javascript
let count = 0;
function add(a,b){
   count++;
   return a+b
}

add(1,2)
add(1,2)
//입력이 같을때 출력이같다는 만족시키나, 부수작용(count)가 있다.



function add(a,b,callback){
   callback();
   return a+b;
}

let count = 0;
add(1,2,()=>{
   count++
}) //3

//부수작용을 밖으로 뺐다.  함수 실행을 사용하는입장에서는 예측 가능.


```
