function authenticate(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the values from the form fields
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;

    // Hardcoded email and password for authentication
    var validEmail = 'suliyat@gmail.com';
    var validPassword = 'suliyat';

    // Check if email and password are not empty
    if (email.trim() === '' || password.trim() === '') {
        alert('Please enter both email and password.');
        return;
    }

    //  authentication logic
    if (email === validEmail && password === validPassword) {
        // 
        alert('You have Succesfully login');
        window.location.href = 'dist/decision.html';
    } else {
        // If authentication fails, display an error message
        alert('Invalid email or password. Please try again.');
    }
}