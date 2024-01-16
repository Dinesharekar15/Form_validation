var nameerror=document.getElementById("name-error");
var emailerror=document.getElementById("email-error")
var phoneerror=document.getElementById("phone-error")
var msgerror=document.getElementById("msg-error")
var mainerror=document.querySelector(".main-error")

let nameinput=document.getElementById("name")
let emailinput=document.getElementById("email")
let phoneinput=document.getElementById("phone")
let msginput=document.getElementById("text")


let submitbtn=document.querySelector(".btn1")



nameinput.addEventListener("keyup", validatename);

function validatename(){
    var name=nameinput.value;
    if(name.length==0){
        nameerror.innerHTML='Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML="Write full name";
        return false;

    }
    nameerror.innerHTML="<p>valid</p>";
    return true;

}

phoneinput.addEventListener("keyup",validatephone);


function validatephone(){
    var phone=phoneinput.value;
    if(phone.length==0){
        phoneerror.innerHTML="Phone No.is required";
        return false;
    }
    if(!phone.match(/^\d{10}\s*$/)){
        phoneerror.innerHTML="Enter valid Phone No.";
        return false;

    }
    phoneerror.innerHTML="<p>valid</p>";
    return true;
}

emailinput.addEventListener("keyup",validateemail);


function validateemail(){
    var email=emailinput.value;
    if(email.length==0){
        emailerror.innerHTML="Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,5}$/)){
        emailerror.innerHTML="Enter valid Email";
        return false;

    }
    emailerror.innerHTML="<p>valid</p>";
    return true;
}

msginput.addEventListener("keyup",validatemsg);


function validatemsg(){
    var msg=msginput.value;
    if(msg.length==0){
        msgerror.innerHTML="Message is required";
        return false
    }
    if(!msg.match(/^(\S+\s*){20,}$/))
    {
        msgerror.innerHTML="Enter at least 20 words.";
        return false;
    }
    msgerror.innerHTML="<p>valid</p> ";
    return true;
}

submitbtn.addEventListener("click",function(event){
    if(!(validatename()&&validateemail()&&validatemsg()&&validatephone())){
        mainerror.innerHTML="Please fill all the Fields correctly"
        event.preventDefault();
    }
    else{
        mainerror.innerHTML='<p>Form Submitted Successfully</p>';
    }
})



