document.addEventListener("DOMContentLoaded", function() {
    function validatePasswords() {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm_password');
        if (password.value !== confirmPassword.value) {
            alert('Passwords do not match. Please try again.');
            password.value = '';
            confirmPassword.value = '';
            password.focus();
            return false;
        }
        return true;
    }
    
    function updateRangeValue(val) {
        document.getElementById('rangeValue').textContent = val;
    }
});