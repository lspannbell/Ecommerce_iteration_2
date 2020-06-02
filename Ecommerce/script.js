/*CONTACT PAGE*/
function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 2){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  // if(subject.length < 5){
  //   text = "Please Enter Correct Subject";
  //   error_message.innerHTML = text;
  //   return false;
  // }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  // if(message.length <= 140){
  //   text = "Please Enter More Than 140 Characters";
  //   error_message.innerHTML = text;
  //   return false;
  // }
  alert("Form Submitted Successfully!");
  return true;
}




import express from 'express';
import data from './data'

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
})

function toDataURL(src, callback) {
  var xhttp = new XMLHttpRequest();

  xhttp.onload = function() {
    var fileReader = new FileReader();
    fileReeader.readAsDataURL(xhttp.respose);
  };

  xhttp.responseType = 'blob';
  xhttp.open('GET', src, true);
  xhttp.send();

  toDataURL('', function(dataURL){
    document.getElementById('result').innerHTML = dataURL
  })

}