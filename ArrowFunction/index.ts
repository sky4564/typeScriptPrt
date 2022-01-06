let a : string = 'test';
console.log(a);


function action(){
    console.log('action work');

}

var action2 = function(){
    console.log('action2 work')
}

var actionArrow = () => {
    console.log("actionArrow work")
}

var actionArrowShort = a => console.log(a +10) ;   // 파라미터 1개  && 함수 1개 or 리턴값 한개일 경우 소괄호 중괄호 생략가능 

var actionArrowLong = (a,b,c) => { 
    console.log('=====================================')
    console.log(a+b+c)
    console.log(a*b*c)

}   // 파라미터 2개이상  && 함수 2개이상 or 리턴값 2개이상일 경우 소괄호 중괄호 생략가능 

var actionArrowTest = (a,b) => console.log(a+b) // 파라미터 혹은 스크립트 둘중에 아무거나 Short 의 경우라면 파라미터의 경우 소괄호 스크립트의 경우 중괄호 생략가능

var actionArrowTest2 = a => {
    console.log('=====================================')
    console.log(a+5)
    console.log(a*5)
    console.log('기본기 끝 응용시작')    
}
1234
[1,2,3,4].forEach((function(a){
    console.log(a);
}));






action();
action2();
actionArrow();

actionArrowShort(10);actionArrowLong(6,7,8);

actionArrowTest(6,7);actionArrowTest2(6);





