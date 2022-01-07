import { isArrayBindingPattern } from "typescript"

console.log('=========================narrowing==============================')

let quizFunction = (x:string | number) : void => {
    console.log('this is quizFunc')
    
    
    //narrowing을 하지 않으면 x 는 union type 이기 떄문에 작동하지않는다.

    // 엄격하게 잡는것이 typeScript !

    //console.log(x+1)
    
    // 타입별 처리 = narrowing
    if(typeof(x) == 'number'){
        console.log(x+1)
    }
    else if(typeof(x) == 'string'){
        console.log(x+1)
    }
}

quizFunction(1)
quizFunction('good text')

console.log('=================================================================')

function assertion(x:number | string){
    
    return <number>x + 1
}

//assertion 사용시 타입스크립트의 본질과는 역주행 하는거임
// 다만 사용하는 시기는 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로
// 내가 어떤 타입이 들어올지 정확히 알고있는데 컴파일 에러가 방해할떄


//이렇게 하면 둘다 되는데 as number 이 함수블럭에서 눈속임으로 내려온거라 결과값이 이렇게 나옴
console.log(assertion(123))

console.log(assertion('123'))


console.log('=================================================================')
console.log('>>>>>>>>>>>> return x as number + 1 현재문법' + '\n' + '>>>>>>>>>>>> return <number>x + 1 옛날문법')

// return (x as number) + 1 현재문법
// return <number>x + 1     옛날문법


console.log('=================================================================')

//활용

type Person = {
    name : string
}

function 변환기<T>(data: string): T {
    return JSON.parse(data) as T;
}

const jake = 변환기<Person>('{"name":"kim"}');


console.log('============================숙제==============================')

function cleaning(a : (number | string)[]){

    let 클리닝완료된거 : number[] = [];
    
    a.forEach( (b) =>{
        if(typeof(b) == 'string'){
            클리닝완료된거.push(parseFloat(b))
        }else {
            클리닝완료된거.push(b)
        }
    })
    return 클리닝완료된거
}

console.log(cleaning([123,'3',23,'244']))


console.log('============================숙제2==============================');
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function choice(x:{subject : string|string[]}) :string{
    if(typeof(x.subject) == 'string'){
        return  x.subject
    }
    else if(Array.isArray(x.subject)){
        return x.subject[x.subject.length-1]
    }
    else{
        return '없음'
    }

}
// 배열한테 typeof 쓰면 'objcet'로 나오니깐 typeof 말고 Array.isArray(판단하고자하는것) 써야함
console.log(choice( { subject : 'math' } ))  //이 경우 'math'를 return
console.log(choice( { subject : ['science', 'art', 'korean'] } )) //이 경우 'korean'을 return
console.log(choice( { subject : ['science', 'art', 'korean', 'good job'] } )) //이 경우 'korean'을 return







