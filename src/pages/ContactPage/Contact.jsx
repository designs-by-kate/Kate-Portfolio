import React from 'react';
import './contact.css';

const Contact = () => {
  // Dummy contact information
  const contactInfo = {
    name: 'Kate Pospiech',
    email: 'katepospiech@hotmail.com',
    address: 'UK, Hampshire',
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission here
    console.log('Form submitted!');
  };

  return (
    <div className="container contact-page">
      <div class="contact-section p-5" id="contact">
        <h2 class="mb-5 text-center"> Contact </h2>
        <div class="container">

          <div class="row d-flex justify-content-center">

            <div class="card m-3 col-12" id="email">
              <h4 class="text-uppercase m-0 text-center text-success pt-2"><i className="fa fa-user"></i> Name</h4>
              <div class="small text-black-50 m-2 text-center">
                <a href="#!">{contactInfo.name}</a>
              </div>
            </div>

            <div class="card m-3 col-12" id="address">
              <h4 class="text-uppercase m-0 text-center text-success pt-2"><i className="fa fa-map-marker"></i> address</h4>
              <div class="small text-black-50 m-2 text-center">
                <a href="#!">{contactInfo.address}</a>
              </div>
            </div>

            <div class="card m-3 col-12" id="phone">
              <h4 class="text-uppercase m-0 text-center text-success pt-2"><i className="fa fa-envelope"></i> email</h4>
              <div class="small text-black-50 m-2 text-center">
                <a href="#!"> {contactInfo.email}</a>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div className="contact-form">
            <h3>Contact Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        );
};

        export default Contact;
