// src/utils/subscribeToNewsletter.js

const subscribeToNewsletter = (email, callback) => {
    fetch('http://localhost:8080/api/newsletter/subscribe', { // Replace with your actual backend URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    })
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
};

export default subscribeToNewsletter;
