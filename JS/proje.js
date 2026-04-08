        function togglePassword() {
            const passwordInput = document.getElementById('password');
            const toggleIcon = document.getElementById('toggleIcon');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleIcon.classList.remove('fa-eye');
                toggleIcon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                toggleIcon.classList.remove('fa-eye-slash');
                toggleIcon.classList.add('fa-eye');
            }
        }

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // Simple validation
            if (email && password) {
                // Show success message
                alert('Login successful! Welcome back to Prac2learn.');
                // Here you would typically send the data to your server
                console.log('Login attempt:', { email, remember });
            } else {
                alert('Please fill in all fields');
            }
        });

        function socialLogin(provider) {
           function socialLogin(provider) {
             alert(`Redirecting to ${provider} login...`);
           }
            // Here you would implement OAuth logic
        }

        function showSignup() {
            alert('Redirecting to sign up page...');
            // Here you would redirect to signup page
            // window.location.href = '/signup';
        }

        // Add input animation
        const inputs = document.querySelectorAll('.input-field');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
                this.parentElement.style.transition = 'transform 0.2s ease';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });

        // Forgot password handler
        // document.getElementById('forgot-password').addEventListener('click', function(e) {
        //     e.preventDefault();
        //     alert('Password reset link will be sent to your email');
        // });