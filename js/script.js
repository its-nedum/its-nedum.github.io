const mailer = () =>{

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

Email.send({
    Host : "smtp.gmail.com",
    Username : "itsnedum",
    Password : "2013224326Ec!",
    To : 'emesuechinedu@gmail.com',
    From : `${name} - ${email}`,
    Subject : "Hire Me Mail",
    Body : `${message}`
}).then(
  message => alert(message)
);

}

// Email.send({
//     SecureToken : "3cd899bb-9b1d-4b92-a34a-b97d0bfc184f",
//     To : 'emesuechinedu@gmail.com',
//     From : `${name} - ${email}`,
//     Subject : "Hire Me Mail",
//     Body : `${message}`
// }).then(
//   message => alert(message)
// );