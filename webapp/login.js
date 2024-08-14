document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Mock login validation - normally, you'd authenticate with an API here
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'test@example.com' && password === 'password') {
      window.location.href = '/google-login.html'; // Redirect to onebox screen
  } else {
      alert('Invalid credentials');
  }
});
