document.getElementById('signUp').addEventListener('click', function () {
    document.getElementById('container').classList.add("right-panel-active");
});

document.getElementById('signIn').addEventListener('click', function () {
    document.getElementById('container').classList.remove("right-panel-active");
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    // Implement your registration logic here
    console.log("Registered user: ", name, email, password);
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Implement your login logic here
    console.log("Logged in user: ", email, password);
});
