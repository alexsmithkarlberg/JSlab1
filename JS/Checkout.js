/*patterns*/
var zippat = /^\d{3}\s?\d{2}$/;
var phonepat = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/;
var namepat = /^[A-Za-z\s]+$/;
var mailpat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var addresspat = /^[A-z]+\s\d+/;


/*User-Inputs*/
var inputs = document.querySelectorAll('.myInputs');

/*where to type our error*/
var errors = document.querySelectorAll('.error');

/*bool to check statements & submit form*/
var bool = true;

/*Validation function*/
document.querySelector('button[type="button"]').addEventListener('click', function(){
    bool = true;
    for (var i =0; i<inputs.length; i++) {
       for (var j=0; j<errors.length; j++) {
           errors[i].innerHTML = "";
           errors[i].style.color = "red";
       }
       console.log(inputs[i]);

        if (!mailpat.test(inputs[2].value)) {
            document.querySelector('#mailerror').innerHTML = "Use correct mail pattern";
            bool = false;
        }
        if (!phonepat.test(inputs[3].value)) {
            document.querySelector('#phoneerror').innerHTML = "use swedish mobile format ex. xxxxxxxxxx";
            bool = false;
        }
        if (!addresspat.test(inputs[4].value)) {
            document.querySelector('#adresserror').innerHTML = "use correct street address format, ex. blablabla 24";
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
/*submit form*/
    if (bool === true) {
        document.querySelector('#checkOutForm').submit();
    }});
