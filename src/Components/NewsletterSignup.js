import React, { useState } from 'react';
import '../Styles/NewsletterSignup.css'; // Make sure to create the CSS file for styling

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setMessage("Please enter a valid email.");
            return;
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/newsletter/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            // Log the status and response headers for debugging
            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            // Fetch and log the raw response text for debugging
            const responseText = await response.text();
            console.log('Raw response:', responseText);

            // Attempt to parse the response as JSON
            try {
                const data = JSON.parse(responseText);
                if (response.ok) {
                    setMessage(data.message); // Display the success message from the backend
                    setEmail(''); // Clear the email input field
                } else {
                    setMessage(data.error || "Failed to sign up. Please try again.");
                }
            } catch (parseError) {
                console.error('JSON parse error:', parseError);
                setMessage("An error occurred. Please try again later.");
            }

        } catch (error) {
            console.error('Error during signup:', error);
            setMessage("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="cta-container">
            <h2>Survive the Darkness. Be the First to Know!</h2>
            <p>Get exclusive updates, early access to new features, and behind-the-scenes content from the D.A.W.N development team.</p>
            <form className="cta-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Join the Fight</button>
            </form>
            {message && <p className="cta-message">{message}</p>}
        </div>
    );
};

export default NewsletterSignup;
