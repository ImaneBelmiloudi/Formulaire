document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.createElement('p');
    const emailError = document.createElement('p');
    const messageError = document.createElement('p');

    nameError.classList.add('error-message');
    emailError.classList.add('error-message');
    messageError.classList.add('error-message');

    nameInput.parentNode.appendChild(nameError);
    emailInput.parentNode.appendChild(emailError);
    messageInput.parentNode.appendChild(messageError);

    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim().length < 3) {
            nameError.textContent = 'Name must be at least 3 characters';
            nameError.style.color = 'red';
        } else {
            nameError.textContent = 'Name looks good!';
            nameError.style.color = 'green';
        }
    });

    emailInput.addEventListener('input', () => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.color = 'red';
        } else {
            emailError.textContent = 'Email looks good!';
            emailError.style.color = 'green';
        }
    });

    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            messageError.style.color = 'red';
        } else {
            messageError.textContent = 'Message looks good!';
            messageError.style.color = 'green';
        }
    });

    form.addEventListener('submit', (e) => {
        let isValid = true;

        if (nameInput.value.trim().length < 3) {
            nameError.textContent = 'Name must be at least 3 characters';
            nameError.style.color = 'red';
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.color = 'red';
            isValid = false;
        }

        if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            messageError.style.color = 'red';
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault(); // Empêche la soumission du formulaire s'il y a des erreurs
        }
    });
});
