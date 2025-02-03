let total = 0;
let newNumber = [];
let isFirstNumber = false;
let hasDecimal = false;
const numbArray = [];

const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
    btn.addEventListener('click', function(e){
        e.target.style.background = 'black';
    });
});

const topScreen = document.querySelector('.top-screen')
topScreen.textContent = '';

const botScreen = document.querySelector('.bot-screen');
botScreen.textContent = '0';

const btnOne = document.querySelector('.btn-one');
btnOne.addEventListener('click', function(){
    newNumber.push('1');
    console.log(newNumber);
});
const btnTwo = document.querySelector('.btn-two');
btnTwo.addEventListener('click', function(){
    newNumber.push('2');
    console.log(newNumber);
});
const btnThree = document.querySelector('.btn-three');
btnThree.addEventListener('click', function(){
    newNumber.push('3');
    console.log(newNumber);
});
const btnFour = document.querySelector('.btn-four');
btnFour.addEventListener('click', function(){
    newNumber.push('4');
    console.log(newNumber);
});
const btnFive = document.querySelector('.btn-five');
btnFive.addEventListener('click', function(){
    newNumber.push('5');
    console.log(newNumber);
});
const btnSix = document.querySelector('.btn-six');
btnSix.addEventListener('click', function(){
    newNumber.push('6');
    console.log(newNumber);
});
const btnSeven = document.querySelector('.btn-seven');
btnSeven.addEventListener('click', function(){
    newNumber.push('7');
    console.log(newNumber);
});
const btnEight = document.querySelector('.btn-eight');
btnEight.addEventListener('click', function(){
    newNumber.push('8');
    console.log(newNumber);
});
const btnNine = document.querySelector('.btn-nine');
btnNine.addEventListener('click', function(){
    newNumber.push('9');
    console.log(newNumber);
})
const btnZero = document.querySelector('.btn-zero');
btnZero.addEventListener('click', function(){
    newNumber.push('0');
    console.log(newNumber);
});

const btnAdd = document.querySelector('.btn-add');
btnAdd.addEventListener('click', function(){
    console.log('+');
});
const btnSubtract = document.querySelector('.btn-subtract');
btnSubtract.addEventListener('click', function(){
    console.log('-');
});
const btnMultiply = document.querySelector('.btn-multiply');
btnMultiply.addEventListener('click', function(){
    console.log('*');
});
const btnDivide =  document.querySelector('.btn-divide');
btnDivide.addEventListener('click', function(){
    console.log('/');
});
const btnEqual = document.querySelector('.btn-equal');
btnEqual.addEventListener('click', function(){
    console.log('=');
});
const btnDecimal = document.querySelector('.btn-decimal');
btnDecimal.addEventListener('click', function(){
    if(!hasDecimal){
        newNumber.push('.');
        console.log(newNumber);
        hasDecimal = true;
    }
});

function add(number){
    //adds number to total
}

function subtract(number){
    //subtracts number from total
}

function multiply(number){
    //multiplies total by number
}

function divide(number){
    //divides total by number
}

function clear(total){
    //clears total
    total = 0;
}


// if(numbArray.length == 0){
//     console.log(numbArray.length);
//     numbArray.push(number)
// }
// else{
    
// }