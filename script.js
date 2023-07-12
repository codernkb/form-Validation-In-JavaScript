let Namex = /^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/
let Emailx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
let Mobilex = /^[0-9]*$/
let Messagex = /^[a-zA-Z0-9\s,.'-]{3,}$/

function formValidation() {

    //Name validation

    var x = document.getElementById("name").value;
    if (x ==""){
        document.getElementById('nameerror').style="color:white; text-shadow: 3px 3px 5px red; font-size:18px;"
        document.getElementById('nameerror').innerHTML="*Please Enter Your Full Name"
        document.getElementById('name').focus()
        return false
    } else if (!x.match(Namex)) {
        document.getElementById('nameerror').style="color:white; text-shadow: 3px 3px 5px red; font-size:18px;"
        document.getElementById('nameerror').innerHTML="*Please Enter Character only"
        document.getElementById('name').focus()
        return false
    } else {
        document.getElementById('nameerror').innerHTML=""
    }

    // Email Validation

    var x = document.getElementById("email").value;
    if (x ==""){
        document.getElementById('emailerror').style="color:white; text-shadow: 3px 3px 5px red; font-size:18px;"
        document.getElementById('emailerror').innerHTML="*Please select Email Id"
        document.getElementById('email').focus()
        return false
    } else if (!x.match(Emailx)) {
        document.getElementById('emailerror').style="color:white; text-shadow: 3px 3px 5px red; font-size:18px;"
        document.getElementById('emailerror').innerHTML="*Your Email should be Valid."
        document.getElementById('email').focus()
        return false
    } else {
        document.getElementById('emailerror').innerHTML=""
    }

    // Mobile Number Validation

    var x = document.getElementById("mobile").value;
    if (x ==""){
        document.getElementById('numbererror').style="color:white; text-shadow: 3px 3px 5px red; font-size:18px;"
        document.getElementById('numbererror').innerHTML="*Please Enter Mobile Number"
        document.getElementById('mobile').focus()
        return false
    } else if (!x.match(Mobilex)) {
        document.getElementById('numbererror').style="color:white; text-shadow: 3px 3px 5px red; font-size:18px;"
        document.getElementById('numbererror').innerHTML="*Your Mobile Number should be Numeric"
        document.getElementById('mobile').focus()
        return false
    } else if( x.length<10 || x.length>12) {
        document.getElementById('numbererror').style="color:white; text-shadow: 3px 3px 5px red; font-size:18px;"
        document.getElementById('numbererror').innerHTML="*Your Mobile Number should be between 10 to 12 in length"
        document.getElementById('mobile').focus()
        return false
    } else {
        document.getElementById('numbererror').innerHTML=""
    }

    // Message Validation


    var x = document.getElementById("message").value;
    if (x ==""){
        document.getElementById('messageerror').style="color:white; text-shadow: 3px 3px 5px red; font-size:18px;"
        document.getElementById('messageerror').innerHTML="*Please type a Message"
        document.getElementById('message').focus()
        return false
    } else if( x.length<25 || x.length>500) {
        document.getElementById('messageerror').style="color:white; text-shadow: 3px 3px 5px red; font-size:18px;"
        document.getElementById('messageerror').innerHTML="*Your Message should be more than 25 and less than 500 words."
        document.getElementById('message').focus()
        return false
    }
    else if (!x.match(Messagex)) {
        document.getElementById('messageerror').style="color:white; text-shadow: 3px 3px 5px red; font-size:18px;"
        document.getElementById('messageerror').innerHTML="*Your Message should be Valid."
        document.getElementById('message').focus()
        return false
    } else {
        document.getElementById('messageerror').innerHTML=""
    }
}
