// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
  e.preventDefault();
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  if (username.value === "") {
    alert("Please enter your username.");
    username.focus();
    return false;
  }
    
  if (email.value === "") {
    alert("Please enter your email address.");
    emailAddress.focus();
    return false;
  }

  if (!emailIsValid(email.value)) {
    alert("Please enter a valid email address.");
    emailAddress.focus();
    return false;
  }
  if (subject.value === "") {
    alert("Please enter your subject.");
    username.focus();
    return false;
  }
  if (message.value === "") {
    alert("Please enter your message.");
    username.focus();
    return false;
  }
  
  return true; // Can submit the form data to the server
}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);

var app = document.getElementById('app');
var Typewriter = new Typewriter(app, {
    loop: true
});
Typewriter.typeString('Web Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Web Designer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('FrontEnd Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Freelancer')
    .pauseFor(2500)
    .deleteAll()
    .pauseFor(2500)
    .start();

    
      document.getElementById("downloadButtons").addEventListener("click", function() {
      // Replace 'your_resume.pdf' with the actual path to your resume file
      var resumePath = "resume.pdf";

      var link = document.createElement('a');
      link.href = resumePath;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
 // Get all skill items
const skillItems = document.querySelectorAll('.skills-row .skill-item');



