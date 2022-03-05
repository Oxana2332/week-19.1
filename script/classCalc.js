"use strict";
(function () {
    class Calculator {
        constructor(a, b) {
            this.a = a;
            this.b = b;
        }
        static getSum(a, b) {
            let sum = Number(a) + Number(b);
            document.getElementById('result').innerHTML = sum;
        }
    
        static getMinus(a, b) {
            let minus = Number(a) - Number(b);
            document.getElementById('result').innerHTML = minus;
        }
    
        static getMultiply(a, b) {
            let multiply = Number(a) * Number(b);
            document.getElementById('result').innerHTML = multiply;
        }
    
        static getDivision(a, b) {
            let division = Number(a) / Number(b);
            document.getElementById('result').innerHTML = division;
        }
    }
    
    let a = document.getElementById('firstNumber');
    let b = document.getElementById('secondNumber');

    function onBtnClickSum() {
        Calculator.getSum(a.value, b.value)
    }

    function onBtnClickMinus(){
        Calculator.getMinus(a.value, b.value)
    }
    
    function onBtnClickMulti(){
        Calculator.getMultiply(a.value, b.value)
    }
    
    function onBtnClickDivide(){
        if(document.getElementById('secondNumber').value === "0"){
            alert("На ноль делить нельзя!");
            } else {
                Calculator.getDivision(a.value, b.value)
            }
    }
    
document.querySelector('#sum').addEventListener("click", onBtnClickSum);
document.querySelector('#minus').addEventListener("click", onBtnClickMinus);
document.querySelector('#multi').addEventListener("click", onBtnClickMulti);
document.querySelector('#divide').addEventListener("click", onBtnClickDivide);
    })()