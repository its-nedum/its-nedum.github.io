const mailer = () =>{

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

Email.send({
    SecureToken : "87228b4b-3b54-490d-86ac-d61a76a7ae15",
    To : 'emesuechinedu@gmail.com',
    From : `${name} - ${email}`,
    Subject : "Hire Me Mail",
    Body : `${message}`
}).then(
  message => alert(message)
);

}

