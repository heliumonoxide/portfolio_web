// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using EmailJS
    emailjs.send("service_7z0zj5j","template_i2fxb3k", formData, "7dyI-UahHsi9lg6kD")
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        alert('Message sent successfully!');
        setFormData({name: "", email:"", message:""})
      // eslint-disable-next-line no-unused-vars
      }, (error) => {
        alert('Failed to send message, please try again.');
      });
  };

  return (
    <section id="contact" className="bg-zinc-100 py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl bg-violet-100 inline-block p-4 font-bold text-violet-600">
            Contact Me
          </h2>
          <p className="text-lg text-zinc-600 mt-4">
            Got a question or proposal? Feel free to reach out to me.
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          {/* Form Section */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-zinc-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-zinc-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-zinc-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                  rows="6"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-violet-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-violet-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full lg:w-1/3 flex flex-col bg-zinc-800 text-violet-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="mb-4">
              Feel free to contact me via email or phone. I’ll get back to you
              as soon as I can!
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Email: </span>
                <a
                  href="mailto:bryan.indarto.giovani@gmail.com"
                  className="text-violet-400 hover:underline"
                >
                  bryan.indarto.giovani@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Phone: </span>
                <a
                  href="tel:+6287781767666"
                  className="text-violet-400 hover:underline"
                >
                  +62 877 8176 7666
                </a>
              </li>
              <li>
                <span className="font-semibold">Location: </span>
                Tangerang Selatan, Indonesia
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/bryan-indarto-giovani/"
                  aria-label="LinkedIn"
                  className="hover:text-violet-400"
                >
                  <img
                    src="assets/linkedin.svg"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://github.com/heliumonoxide"
                  aria-label="GitHub"
                  className="hover:text-violet-400"
                >
                  <img
                    src="assets/github.svg"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
