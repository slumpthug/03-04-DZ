//Задание 1
//Задание 2
//Задание 3
// const sumNumbers = (a, b) => {
//     if(a % 2 && b % 2) {
//         return a + b;
//     } else if(a % 2 || b % 2) {
//         if(a % 2) {
//             return a;
//         };
//         return b;
//     } else {
//         return a - b;
//     };
// };

// console.log(sumNumbers(2, 3));

//Задание 4
// const getTidyClothes = (color, powder) => {
//     if (color == "black") {
//         return 'Я стираю черное белье порошком ' + powder;
//     } else if (color == "white") {
//         return 'Я стираю белое белье с порошком ' + powder;
//     } else {
//         return 'я стираю цветное белье'; 
//     }
// }

// console.log(getTidyClothes('yellow', 'tide'));

//Задание 5
const arrayNumber = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8, 9, 10];

const arrayNumber2 = [];

arrayNumber[0];

const iterator = (arrayNumber) => {
    for(let i = 0; i < arrayNumber.length; i++) {
        if(arrayNumber[i] % 2 === 0){
            arrayNumber2.push(arrayNumber[i]);
        };
    };
};

iterator(arrayNumber);

console.log(arrayNumber2);

function lol (array){
    const ok = array.map((item)=> {
        return item*2;
    });
    return ok;
};

console.log(lol(arrayNumber2));