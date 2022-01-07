let a : string = 'wellcome to ts';


//타입지정 = 변수에 쉴드를 씌우는것임
let 이름 :string = 'kim'
let 나이 : number = 50;
let 결혼했니 : boolean = false;
let 사람이니 : undefined;
let 사람이니2 : any = 123;

let 내친구들 :string[] = ['수만' , '나비' , '누둑']
let bitPosition :number[] = [1 , 3 , 5]



let 합치기1 : { 내친구들 : string[] , bitPosition : number[] , prt :boolean} = 
    { 
        내친구들 : ['수만','나비','누둑'] ,
        bitPosition : [1 , 3 , 5],
        prt : true
    }
    console.log(합치기1.내친구들)

//자연스럽게 너무 길다보니깐 type alias ! 타입을 변수에 담아서 쓰게됩니다.
type myinfo = { 내친구들 : string[] , bitPosition : number[] , prt :boolean}

let 합치기 : myinfo = { 내친구들 : ['수만','나비','누둑'] ,
            bitPosition : [1 , 3 , 5],
            prt : true
    }

    console.log(합치기.내친구들)



    console.log('===========================숙제=========================================')
    
    //Q1
    let myinfobox : {name :string , age:number, 출생 : string} = {
        name : '김병민',
        age : 28,
        출생 : '창원',
    }
    console.log("Q1")
    console.log(myinfobox)

    //Q2
    let myFavBox : {제목 : string , 가수 : string} = {
        제목 : '너무 아픈 사랑은 사랑이 아니였음을',
        가수 : '김필'        
    }
    console.log("Q2")
    console.log(myFavBox)

    //Q3

    let project :{member : string[], days:number, started:boolean} = {
        member : ['kim', 'park'],
        days : 30,
        started : true,
      }
      console.log("Q3")
      console.log(project)




