// =========================================================================
let me;
// 밑에 함수는 파라미터에 리터럴 타입과 123 number 를 타입으로 지정한것.
// 리턴값에도 타입을 지정할수있다.
function 함수(a, b) {
    return 1;
}
console.log(함수('hello', 123));
// 배열이 타입이 된 경우 배열에 들어가는것을 지정할수있다.
function act(a) {
    return ['가위'];
}
console.log(act('가위'));
console.log(act('바위'));
console.log(act('보'));
// =========================================================================
var 자료 = {
    name: 'kim'
};
function 내함수(a) {
    return 1;
}
console.log(자료.name);
console.log(내함수(자료.name));
//# sourceMappingURL=index.js.map