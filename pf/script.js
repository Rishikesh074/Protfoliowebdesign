let firstName = document.getElementById('firstName');
let email = document.getElementById('email');
let msg = document.getElementById('msg');

let submitBtn = document.getElementById('btn');

submitBtn.onclick = () => {
    let user = {
        first_name: firstName.value,
        email: email.value,
        msg: msg.value,
    }

    console.log(user);
    localStorage.setItem('user', JSON.stringify(user))
}