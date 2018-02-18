var zippat = /^\d{3}\s?\d{2}$/;
var phonepat = /^[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}$/;
var namepat = /^[A-Za-z\s]+$/;
var mailpat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

var zipcode = document.querySelector('#zipcode');
var firstname = document.querySelector('#firstname')
var lastname = document.querySelector('#lastname')
var city = document.querySelector('#city')
var email = document.querySelector('#email')
var phonenumber = document.querySelector('#phonenumber')


document.querySelector('button[type="button"]').addEventListener('click', function(){
    var bool = true;
    if (!zippat.test(zipcode.value)) {
        document.querySelector('#ziperror').innerHTML = "Use correct zip pattern";
        bool=false;
    }
    if (!phonepat.test(phonenumber.value)) {
        document.querySelector('#phoneerror').innerHTML = "Only numbers allowed in phonenumber";
        bool=false;
    }
    if (!namepat.test(firstname.value)) {
        document.querySelector('#firstnameerror').innerHTML = "Only letters allowed in Firstname";
        bool=false;
    }
    if (!namepat.test(lastname.value)) {
        document.querySelector('#lastnameerror').innerHTML = "Only letters allowed in Lastname";
        bool=false;
    }
    if (!namepat.test(city.value)) {
        document.querySelector('#cityerror').innerHTML = "Only letters allowed in City";
        bool=false;
    }
    if (!mailpat.test(email.value)) {
        document.querySelector('#mailerror').innerHTML = "Use correct email format";
        bool=false;
    }

    else if (bool === true) {
        document.querySelector('#checkOutForm').submit();
    }
});

