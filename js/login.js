// get user data
document.getElementById('submit-login').addEventListener('click', function(){
    // get user email
    const emailField = document.getElementById('user-email');
    const getUserEmail = emailField.value;
    
    // get user password
    const passwordField = document.getElementById('user-password');
    const getUserPassword = passwordField.value;

    // check email and password
    if(getUserEmail == 'sontan@baap.com' && getUserPassword == 'secret'){
        // redirect to another page
        window.location.href = 'banking.html';
    }
    else{
        console.log('Enter correct username and password!');
    }
});


