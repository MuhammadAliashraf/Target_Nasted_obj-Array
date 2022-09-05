//Pass by Value 
// pass by value is  use for  all types of data-tpye (except ==array and Obje)

let a=9;
    b= a + 1;
    console.log(a)
    console.log(b)


//Pass by Refrence 
// Ais Main Ous ny Mainarray ki value b change ki h ha 
let array=[1,2,3,4,5,6]
let array1 = array;
array1.push(7)
console.log(array)
console.log(array1)

//Spread opetates==> Ya copy karty ha old array ki value ko New array main then agae hm chnage karty ha new array tu main aray change nh hoga 
let array2=[34534,34534,5,567,567,76756,767]
let array3 =[...array2,54645645645656,456,456,45,645,64564645,56,456,456,45,64,56,456,45645,64,5645,6,456,45,645,6,456];

console.log(array2)
console.log(array3)

//Assigments Class 3 Decode nasted array and obj===>

// Nasted Array Target Using Spread Operatos

let mainArray=[
    [
        [
            [
                [
                    "This is Last Array "
                ]
            ]
        ]
    ]
]

let lastNastedArray=[...mainArray[0][0][0][0]]
console.log(lastNastedArray)


let mainObj={
    obj1:{
        obj2:{
            obj3:{
                obj4:{
                    Name:"This is last Object!"
                }
            }
        }
    }
}

let lastNastedobj={...mainObj.obj1.obj2.obj3.obj4}
console.log(lastNastedobj)
