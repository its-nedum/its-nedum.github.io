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
