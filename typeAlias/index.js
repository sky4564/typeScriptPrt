//함수선언식 에는 ailas 지정불가
function work() {
    console.log("work");
}
//함수표현식에만 선언가능
let fnWork = () => {
    console.log("fnwork");
};
//함수표현식은 arrowFunc && 기본함수형 둘다 가능
//기본함수형에도 alias 지정이 가능하다. 결국 함수를 할당할 변수만 있으면 ok 라는 소리
let test = function () {
    console.log("test func");
};
//함수 표현식에 alias 설정을 넣는다.
let AliasFnWork = () => {
    console.log("fnwork");
};
work();
fnWork();
test("any key");
AliasFnWork('asd');
console.log('=================================================');
//=====================================================================================================
console.log('오브젝트에 적용해보자');
let obj = {
    name: "tom",
    age: 23,
    //함수 자체를 오브젝트에 추가한것.  alias 설정이 어렵다.
    objFunc() {
        console.log("obj work");
    },
    //함수를 담을 변수를 추가한것. 변수에 alias 설정을 해주면 가능하다.
    funccan: function () {
        console.log("obj func work1111");
        return 0;
    },
    funccan2: () => {
        console.log("obj func work2222");
        return 0;
    },
    funccan3: () => {
        console.log("obj func work3333");
        return 0;
    }
};
obj.objFunc();
obj.funccan("ant text");
obj.funccan2('any text');
obj.funccan3('any text');
//# sourceMappingURL=index.js.map