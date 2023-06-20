document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve username and password values
    var username = document.getElementsByName('username')[0].value;
    var password = document.getElementsByName('password')[0].value;

    // Define the user credentials
    var users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        { username: 'user3', password: 'password3' },
        { username: 'user4', password: 'password4' },
        { username: 'user5', password: 'password5' }
    ];

    // Check if the entered credentials match any user
    var matchedUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (matchedUser) {
        // Set the logged-in user in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));

        // Redirect to the dashboard or desired page
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password');
    }
});