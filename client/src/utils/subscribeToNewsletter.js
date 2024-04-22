// src/utils/subscribeToNewsletter.js
import { BACKEND_URL } from '../constants'

const subscribeToNewsletter = (email, callback) => {
    fetch(BACKEND_URL+"/api/newsletter/subscribe", { // Replace with your actual backend URL
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
