//========================================================

//유니온 타입인데요 타입을 여러개 지정할수있어요
console.log('=======================================================')

let customer : (number | string |boolean)[] = [1,'2',3 , true]
let obj : { a: string | number} = { a : 123}
console.log(customer)
console.log(obj)



console.log('=======================================================')

//유니온 타입과 비슷한 기능을 하는게 있는데요 파라미터옆에? 입니다. ?를 붙이면 undefined도 들어올수있어요 
//즉 파라미터가 옵션인경우에 ! x가 들어 오거나 말거나 ~ 

// undefined도 들어올수있으니깐 값이 없는 경우에도 에러가 안생기죠 


function testFunc(x? :number) :void {
    console.log(x);
    console.log('test work')
}

//같은 기능을 합니다 ! 
function sameTestFunc(x :number | undefined) :void {
    console.log(x);
    console.log('test work')
}

let testFuncAR = (x?:number) :void => {console.log('testAR work')}

testFunc()
testFunc(123)
testFuncAR()

console.log('=========================quiz==============================')

let quizFunction = (x:string | number) : void => {
    console.log('this is quizFunc')
    
    
    //narrowing을 하지 않으면 x 는 union type 이기 떄문에 작동하지않는다.

    // 엄격하게 잡는것이 typeScript ! 

    //console.log(x+1)
    
    // 타입별 처리 = narrowing
    // 종류는 뭐가있나 !
    // typeof 변수
    // 속성명 in 오브젝트자료
    // 인스턴스 instanceof 부모

    if(typeof(x) == 'number'){
        console.log(x+1)
    }
    else if(typeof(x) == 'string'){
        console.log(x+1)
    }
}

quizFunction(1)
quizFunction('good text')

console.log('=========================숙제==============================')
console.log("Q1")

let 숙제1
:{
    user:string,
    age:undefined,
    age2:number|undefined,
    married:boolean,
    
}
=
{
    user:  'KIM BYOUNG MIN',
    age:  undefined,
    age2: 23,
    married:false,
}


console.log(숙제1)



console.log('=========================숙제==============================')
console.log("Q2")
let 학교 
:{
    score : (number | boolean)[],
    teacher : string,
    friend : string[]
}
= 
{
    score : [100,89,77],
    teacher :'tom',
    friend : ['john']
}
학교.score[4] = false;
학교.friend = ['lee', 학교.teacher]

console.log(학교)









