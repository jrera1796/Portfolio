import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Mailer } from '../../utils/email';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { name, email, message } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!name) {
      setErrorMessage('Name is required.');
      return;
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setErrorMessage('Your email is invalid.');
      return;
    }

    if (!message) {
      setErrorMessage('Message is required.');
      return;
    }

    // Clear any previous error or success messages
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Send the form data to the server (adjust the URL accordingly)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Submit Form', formState);
      Mailer(formState);
      // Log the captured data in JSON format
      console.log('Captured Data:', JSON.stringify(formState, null, 2));
     
      // Form submitted successfully, show success message
      setSuccessMessage('Thank you! Your message has been sent.');

      // Clear the form
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setErrorMessage('Error sending the form. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className='flex-name-email'>
          <div className='name-email'>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={name} onChange={handleChange} />
          </div>
          <div className='name-email'>
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" value={email} onChange={handleChange} />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea className="contact-text" name="message" rows="5" value={message} onChange={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        {successMessage && ( // Display success message when it's not empty
          <div>
            <p className="success-text">{successMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
