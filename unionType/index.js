//========================================================
//유니온 타입인데요 타입을 여러개 지정할수있어요
console.log('=======================================================');
let customer = [1, '2', 3, true];
let obj = { a: 123 };
console.log(customer);
console.log(obj);
console.log('=======================================================');
//유니온 타입과 비슷한 기능을 하는게 있는데요 파라미터옆에? 입니다. ?를 붙이면 undefined도 들어올수있어요 
//즉 파라미터가 옵션인경우에 ! x가 들어 오거나 말거나 ~ 
// undefined도 들어올수있으니깐 값이 없는 경우에도 에러가 안생기죠 
function testFunc(x) {
    console.log(x);
    console.log('test work');
}
//같은 기능을 합니다 ! 
function sameTestFunc(x) {
    console.log(x);
    console.log('test work');
}
let testFuncAR = (x) => { console.log('testAR work'); };
testFunc();
testFunc(123);
testFuncAR();
console.log('=========================quiz==============================');
let quizFunction = (x) => {
    console.log('this is quizFunc');
    // x+1 은 x가 number 일때만 number + number 로 유효한데
    //narrowing을 하지 않으면 x 는 union type 이기 떄문에 작동하지않는다.
    //console.log(x+1)
    // 타입별 처리 = narrowing
    if (typeof (x) == 'number') {
        console.log(x + 1);
    }
    else if (typeof (x) == 'string') {
        console.log(x + 1);
    }
};
quizFunction(1);
quizFunction('good text');
//# sourceMappingURL=index.js.map