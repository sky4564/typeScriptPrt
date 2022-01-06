
//narrowing 이란
//union 타입이라는게 있으니 여러종류의 type 중에서 어떤 type을 쓸지 결정하는것


console.log('=========================quiz==============================');
let quizFunction = (x) => {
    console.log('this is quizFunc');
    // x+1 은 x가 number 일때만 number + number 로 유효한데
    //narrowing을 하지 않으면 x 는 union type 이기 떄문에 작동하지않는다.
    //console.log(x+1)


    // 타입별 처리 = script 
    // 타입을 하나로 지정 = narrowing
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