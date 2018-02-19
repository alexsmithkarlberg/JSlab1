var zippat = /^\d{3}\s?\d{2}$/;
var phonepat = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/;
var namepat = /^[A-Za-z\s]+$/;
var mailpat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

var zipcode = document.querySelector('#zipcode');
var firstname = document.querySelector('#firstname');
var lastname = document.querySelector('#lastname');
var city = document.querySelector('#city');
var email = document.querySelector('#email');
var phonenumber = document.querySelector('#phonenumber');
var inputs = document.querySelectorAll('.myInputs');
var errors = document.querySelectorAll('.error');



var bool = true;

document.querySelector('button[type="button"]').addEventListener('click', function(){
    bool = true;
    for (var i =0; i<inputs.length; i++) {
        console.log(i);
       for (var j=0; j<errors.length; j++) {
           errors[i].innerHTML = "";
           errors[i].style.color = "red";
       }

        if (!mailpat.test(inputs[2].value)) {
            document.querySelector('#mailerror').innerHTML = "Use correct mail pattern";
            bool = false;
        }
        if (!phonepat.test(inputs[3].value)) {
            document.querySelector('#phoneerror').innerHTML = "use swedish mobile format ex. xxxxxxxxxx";
            bool = false;
        }
        if (!zippat.test(inputs[5].value)) {
            document.querySelector('#ziperror').innerHTML = "Use correct zip pattern";
            bool = false;
        }
        if (i===0 || i===1 || i===6) {
           if (!namepat.test(inputs[i].value)) {
               errors[i].innerHTML = "Use correct format";
               bool = false;
           }
        }
}
    if (bool === true) {
        document.querySelector('#checkOutForm').submit();
    }});