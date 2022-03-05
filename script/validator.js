class Validator {

    isEmail(email) {
        let regexpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexpEmail.test(email) === true) {
            return true;
        } else {
            return false;
        }
    }

    isDomain(domain) {
        let regexpDomain = /[a-z0-9\-\_]{2,64}\.[a-z]{2,6}/;
        if (regexpDomain.test(domain) === true) {
            return true;
        } else {
            return false;
        }
    }

    isDate(date) {
        let regexpDate = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
        if (regexpDate.test(date) === true) {
            return true;
        } else {
            return false;
        }
    }

    isPhone(phone) {
        let regexpPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (regexpPhone.test(phone) === true) {
            return true;
        } else {
            return false;
        }
    }
}

let validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));
