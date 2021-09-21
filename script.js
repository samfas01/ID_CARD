submit.addEventListener('submit', function(e){
    e.preventDefault();
var fnamevalue=submit.fname.value;
var lnamevalue=submit.lname.value;
var emailvalue=submit.email.value;
var numbervalue=submit.number.value;
var agevalue=submit.age.value;
var addressvalue=submit.address.value;
var error=false;
function validate(name,fnamevalue,namea){
    if(fnamevalue=="" || fnamevalue==null){
        document.getElementById(namea).innerHTML="Your"+" "+ name + " "+ "is required";
        error=true;
    }
}
    if(!error){
        document.querySelector('#formvalue1').innerHTML=""+ fnamevalue + " " +  lnamevalue;
        document.querySelector('#formvalue2').innerHTML="" + emailvalue;
        document.querySelector('#formvalue3').innerHTML=""+ numbervalue;
        document.querySelector('#formvalue4').innerHTML=""+ agevalue;
        document.querySelector('#formvalue5').innerHTML="" + addressvalue;
    }
validate("First Name",fnamevalue,"namea");
validate("Last Name",lnamevalue,"nameb");
validate("Email",emailvalue,"namec");
validate("Phone Number",numbervalue,"named");
validate("Age",agevalue,"namee");
validate("Address",addressvalue,"namef");
});

   














//     document.querySelector('#formvalue1').innerHTML=""+ fname + " " +  lname;
    //     document.querySelector('#formvalue2').innerHTML="" + email;
    //     document.querySelector('#formvalue3').innerHTML=""+ number;
    //     document.querySelector('#formvalue4').innerHTML=""+ age;
    //     document.querySelector('#formvalue5').innerHTML="" + address;
    // }


// submit.addEventListener('submit',
// function(e){
//     e.preventDefault();
//     var fname=submit.fname.value;
//     var lname=submit.lname.value;
//     var email=submit.email.value;
//     var number=submit.number.value;
//     var age=submit.age.value;
//     var address=submit.address.value;
//     var errors=true;
    // if (fname =="" || fname==null){
    //     var nameaerrorid= document.getElementById("namea");
    //     nameaerrorid.innerHTML="Your First Name is Required";
    //     nameaerrorid.style.color="red";
    //     errors=true;
    // }
    // if (lname=="" || lname==null){
    //     var nameberrorid= document.getElementById("nameb");
    //     nameberrorid.innerHTML="Your Last Name is Required";
    //     nameberrorid.style.color="red";
    //     errors=true;
    // }
    // if (email=="" || email==null){
    //     var namecerrorid= document.getElementById("namec");
    //     namecerrorid.innerHTML="Your Email is Required";
    //     namecerrorid.style.color="red";
    //     errors=true;
    // }
    // if (number=="" || number==null){
    //     var namederrorid= document.getElementById("named");
    //     namederrorid.innerHTML="Your Phone Number is Required";
    //     namederrorid.style.color="red";
    //     errors=true;
    // }
    // if (age=="" || age==null){
    //     var nameeerrorid= document.getElementById("namee");
    //     nameeerrorid.innerHTML="Your Age is Required";
    //     nameeerrorid.style.color="red";
    //     errors=true;
    // }
    // if (address=="" || address==null){
    //     var nameferrorid= document.getElementById("namef");
    //     nameferrorid.innerHTML="Your Address is Required";
    //     nameferrorid.style.color="red";
    //     errors=true;
    // }
    // if(errors){
    //     alert("Something went wrong. Fill the form Properly.");
        // document.getElementById('error').innerHTML="<span style='color:red'>Something went wrong</span>";
    // }
//     else{
//              document.querySelector('#formvalue1').innerHTML=""+ fname + " " +  lname;
//              document.querySelector('#formvalue2').innerHTML="" + email;
//              document.querySelector('#formvalue3').innerHTML=""+ number;
//              document.querySelector('#formvalue4').innerHTML=""+ age;
//              document.querySelector('#formvalue5').innerHTML="" + address;
//          }
// });






//     if(fname=="" && lname=="" && email=="" && number=="" && age=="" && address==""){
//         document.getElementById('namea').innerHTML="Fill in your First Name.";
//         document.getElementById("namea").style.color="red";
//         document.getElementById('nameb').innerHTML="Fill in your Last Name.";
//         document.getElementById("nameb").style.color="red";
//         document.getElementById('namec').innerHTML="Fill in your E-mail.";
//         document.getElementById("namec").style.color="red";
//         document.getElementById('named').innerHTML="Fill in your Phone Number";
//         document.getElementById("named").style.color="red";
//         document.getElementById('namee').innerHTML="You are not eligible";
//         document.getElementById("namee").style.color="red";
//         document.getElementById('namef').innerHTML="Fill in your address";
//         document.getElementById("namef").style.color="red";
//     }
//     else if(fname==""){
//         document.getElementById('namea').innerHTML="Fill in your First Name.";
//         document.getElementById("namea").style.color="red";
//     }
//     else if(lname==""){
//         document.getElementById('nameb').innerHTML="Fill in your Last Name.";
//         document.getElementById("nameb").style.color="red";
//     }
//     else if(email==""){
//         document.getElementById('namec').innerHTML="Fill in your E-mail.";
//         document.getElementById("namec").style.color="red";
//     }
//     else if(number<11||number==""){
//         document.getElementById('named').innerHTML="Fill in your Phone Number";
//         document.getElementById("named").style.color="red";
//     }
//     else if(age=="" || age<18){
//         document.getElementById('namee').innerHTML="You are not eligible";
//         document.getElementById("namee").style.color="red";
//     }
//     else if(address==""){
//         document.getElementById('namef').innerHTML="Fill in your address";
//         document.getElementById("namef").style.color="red";
//     }
//     else{
//     document.querySelector('#formvalue1').innerHTML=""+ fname + " " +  lname;
//     document.querySelector('#formvalue2').innerHTML="" + email;
//     document.querySelector('#formvalue3').innerHTML=""+ number;
//     document.querySelector('#formvalue4').innerHTML=""+ age ;
//     document.querySelector('#formvalue5').innerHTML="" + address;
// }