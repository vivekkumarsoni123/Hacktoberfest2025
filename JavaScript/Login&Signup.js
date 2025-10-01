<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Sign Up</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;
        }

        .hidden {
            display: none;
        }

        h2 {
            margin-bottom: 20px;
            color: #333;
        }

        input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #5cb85c;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover {
            background-color: #4cae4c;
        }

        p {
            margin-top: 15px;
        }

        a {
            color: #5cb85c;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container" id="loginContainer">
        <h2>Login</h2>
        <form id="loginForm">
            <input type="text" id="loginUsername" placeholder="Username" required>
            <input type="password" id="loginPassword" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="#" id="showSignup">Sign Up</a></p>
    </div>

    <div class="container hidden" id="signupContainer">
        <h2>Sign Up</h2>
        <form id="signupForm">
            <input type="text" id="signupUsername" placeholder="Username" required>
            <input type="password" id="signupPassword" placeholder="Password" required>
            <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="#" id="showLogin">Login</a></p>
    </div>
    
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const loginContainer = document.getElementById('loginContainer');
            const signupContainer = document.getElementById('signupContainer');
            const showSignupLink = document.getElementById('showSignup');
            const showLoginLink = document.getElementById('showLogin');

            const signupForm = document.getElementById('signupForm');
            const loginForm = document.getElementById('loginForm');

            // Function to switch to the signup view
            showSignupLink.addEventListener('click', (e) => {
                e.preventDefault();
                loginContainer.classList.add('hidden');
                signupContainer.classList.remove('hidden');
            });

            // Function to switch to the login view
            showLoginLink.addEventListener('click', (e) => {
                e.preventDefault();
                signupContainer.classList.add('hidden');
                loginContainer.classList.remove('hidden');
            });

            // Handle Signup Form Submission
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const username = document.getElementById('signupUsername').value;
                const password = document.getElementById('signupPassword').value;
                const users = JSON.parse(localStorage.getItem('users')) || [];

                // Check if the username already exists
                const userExists = users.some(user => user.username === username);
                if (userExists) {
                    alert('Username already exists! Please choose another one.');
                } else {
                    // Add the new user to the list
                    users.push({ username, password });
                    localStorage.setItem('users', JSON.stringify(users));
                    alert('Sign Up Successful! You can now log in.');
                    // Switch back to the login view
                    signupContainer.classList.add('hidden');
                    loginContainer.classList.remove('hidden');
                }
            });

            // Handle Login Form Submission
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const username = document.getElementById('loginUsername').value;
                const password = document.getElementById('loginPassword').value;
                const users = JSON.parse(localStorage.getItem('users')) || [];

                // Find the user with matching credentials
                const user = users.find(u => u.username === username && u.password === password);

                if (user) {
                    alert('Login Successful!');
                    // You can add logic here to redirect to another page
                } else {
                    alert('Invalid username or password.');
                }
            });
        });
    </script>
</body>
</html>
