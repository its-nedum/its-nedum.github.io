$(document).ready(function() {
    $('#contact-form').submit(function(e) {
      const name    = document.getElementById('name')
      const email   = document.getElementById('email')
      const message = document.getElementById('message')
  
      if (!name.value || !email.value || !message.value) {
        alert("Please check your entries");
        return false;
      } else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/emesuechinedu@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        alert("Message sent");
      }
    });
  });

// const mailer = () =>{

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

// Email.send({
//     SecureToken : "87228b4b-3b54-490d-86ac-d61a76a7ae15",
//     To : 'emesuechinedu@gmail.com',
//     From : `${name} - ${email}`,
//     Subject : "Hire Me Mail",
//     Body : `${message}`
// }).then(
//   message => alert(message)
// );

// }

