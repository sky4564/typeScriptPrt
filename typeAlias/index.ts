//함수에서 type alias 설정
type fnType = (a :string) => void





//함수선언식 에는 ailas 지정불가
function work(){
     console.log("work")
 }

//함수표현식에만 선언가능
let fnWork = () => {
    console.log("fnwork")
}

//함수표현식은 arrowFunc && 기본함수형 둘다 가능
//기본함수형에도 alias 지정이 가능하다. 결국 함수를 할당할 변수만 있으면 ok 라는 소리
let test :fnType = function(){
    console.log("test func")
}

//함수 표현식에 alias 설정을 넣는다.
let AliasFnWork : fnType = () => {
    console.log("fnwork")
}

work()
fnWork()
test("any key")
AliasFnWork('asd')

console.log('=================================================')
//=====================================================================================================
console.log('오브젝트에 적용해보자')




//오브젝트에서 함수를 사용하고 그 전체 함수에대해서 alias 설정을 하는것. 한번에 할수있으니깐 보기편함
// 그렇지 않으면 사용되는 함수마다 type 지정을 해줘야함  반복되는 일에는 적당하지 않음
//  또한 많이쓰는걸 만들어 놓고  alias type 을 지정함으로써 다수의 함수값 에러를 줄일수 있다.
type vip ={
    name : string,
    age : number,
    objFunc : () => any,
    funccan : (a : string) => number,
    funccan2 : (a : string) => number,
    funccan3 : (a : string) => number,

}    


let obj :vip = {
    name : "tom",
    age : 23,
    
    //함수 자체를 오브젝트에 추가한것.  alias 설정이 어렵다.
    objFunc(){
        console.log("obj work")
    },
    
    
    //함수를 담을 변수를 추가한것. 변수에 alias 설정을 해주면 가능하다.
    //각각 설정이 가능하지만 그걸 하지 않기 위해서 alias type을 만들어서 obj에 타입을 지정해준거임 
    
    funccan : function(){
        console.log("obj func work1111")
        return 0
    },
    
    
    funccan2 : () => {
        console.log("obj func work2222")
        return 0 
    },
    funccan3 : () => {
        console.log("obj func work3333")
        return 0 
    }

}

obj.objFunc()
obj.funccan("ant text")
obj.funccan2('any text')
obj.funccan3('any text')




