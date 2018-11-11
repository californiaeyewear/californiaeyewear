// Initialize Firebase
var config = {
  apiKey: "AIzaSyAeXxNbX5oKj_A8BL9qnXVMZop-gBpnBFo",
  authDomain: "cal-eyewear-contact-form.firebaseapp.com",
  databaseURL: "https://cal-eyewear-contact-form.firebaseio.com",
  projectId: "cal-eyewear-contact-form",
  storageBucket: "cal-eyewear-contact-form.appspot.com",
  messagingSenderId: "541783645130"
};
firebase.initializeApp(config);

// Reference messages Collection
var messagesRef = firebase.database().ref('messages');

//Listen for Form Submit
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
  e.preventDefault();


      //Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  //Save Message
  saveMessage(name, email, subject, message);

  //Show alert
  document.querySelector('.alert').style.display = "block";
  setTimeout(function(){
    document.querySelector('.alert').style.display = "none";
  }, 3000);

  contactForm.reset();
}

//Function to get form values

function getInputVal(id){
  return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, email, subject, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
}



//
