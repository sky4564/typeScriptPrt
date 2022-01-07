let a = 'wellcome to function type apply';
console.log(a);
console.log('======================================== 함수정의법에 대해 알아보자');
test1('test text');
//test1Let('test text')
console.log('===함수표현식은 위에서 안불러진다.======');
//함수선언문 //실행전 모두 파악된뒤 실행 //호이스팅
function test1(x) {
    console.log('함수선언문');
    return 1;
}
//함수표현식 // 순차적으로 실행 (위에서 아래)
let test1Let = function (x) {
    console.log('함수표현식');
    return 1;
};
// 함수선언문 with arrow function
// 가능하지 않다.. ! arrowFunction은 이름이 없어서
const 이름이있어야쓸수있어ㅠㅠ = () => {
    console.log('이름줘~');
};
// arrowfunction 이 없는 3가지 이름 , 
// 함수표현식 with arrow function
let testArrow = (x) => { };
test1('test text');
test1Let('test text');
console.log('======================================== 타입적용 해보자');
console.log('=========================숙제================================');
console.log('Q1');
function h1(x) {
    console.log('안녕하세요' + x);
}
h1('zed');
console.log('=========================숙제================================');
console.log('Q2');
//쌔가 빠지게 코딩하면서 느낀점 = 아키텍쳐들이 잘만들어 놓은 기능을 잘 활용하자 .. 
//잘보고 활용하쟈...
function h2(x) {
    if (typeof (x) == 'string') {
        console.log('삐빅 문자열입니다.');
        return (x.length);
    }
    if (typeof (x) == 'number') {
        console.log('삐빅 숫자입니다' + ' tostring 으로 문자열로 변환합니다.');
        return (x.toString().length);
    }
}
console.log(h2(12345));
console.log(h2('12345'));
console.log('=========================숙제================================');
console.log('Q3');
function 장가가자(돈, 집, 매력) {
    let score = 0;
    let 집점수 = 0;
    let 매력포인트 = 0;
    score += 돈;
    if (집 == true) {
        let 집점수 = 500;
    }
    score += 집점수;
    if (매력 == '상') {
        let 매력포인트 = 100;
    }
    score += 매력포인트;
    console.log(score);
    if (score >= 600) {
        return '결혼가능';
    }
}
console.log(장가가자(100, false, '상'));
console.log(장가가자(700, false, '중'));
//# sourceMappingURL=index.js.map