import React from 'react';
import '../assets/style/ContactForm.css';

const ContactForm = () => (
  <form className="contact-form">
    <label>
      Nama:
      <input type="text" name="name" />
    </label>
    <label>
      Email:
      <input type="email" name="email" />
    </label>
    <label>
      Pesan:
      <textarea name="message"></textarea>
    </label>
    <button type="submit">Kirim</button>
  </form>
);

export default ContactForm;
