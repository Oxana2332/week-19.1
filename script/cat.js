"use strict";
(function () {
    function onBtnClick() {
    class Cat {
        constructor(name, phone, email, breed, age) {
            this.name = name;
            this.phone = phone;
            this.email = email;
            this.breed = breed;
            this.age = age;
        }
    }
    let cat = new Cat(document.getElementById('name').value, document.getElementById('phone').value, document
        .getElementById('email').value, document.getElementById('select').value, document.getElementById(
            'age').value);

    console.log(cat)
}

document.querySelector('.button').addEventListener('click', onBtnClick);

})()