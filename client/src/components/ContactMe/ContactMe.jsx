const ContactMe = () => {
    return (
      <section id="contact" className="bg-zinc-100 py-10">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl bg-violet-100 inline-block p-4 font-bold text-violet-600">Contact Me</h2>
            <p className="text-lg text-zinc-600 mt-4">
              Got a question or proposal? Feel free to reach out to me.
            </p>
          </div>
  
          {/* Contact Form & Info */}
          <div className="flex flex-col lg:flex-row gap-12 justify-between">
            {/* Form Section */}
            <div className="w-full lg:w-2/3">
              <form className="bg-white shadow-lg rounded-lg p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-zinc-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                    placeholder="Your Name"
                    required
                  />
                </div>
  
                <div className="mb-6">
                  <label htmlFor="email" className="block text-zinc-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                    placeholder="Your Email"
                    required
                  />
                </div>
  
                <div className="mb-6">
                  <label htmlFor="message" className="block text-zinc-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                    rows="6"
                    placeholder="Your Message"
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
                Feel free to contact me via email or phone. I’ll get back to you as soon as I can!
              </p>
              <ul className="space-y-4">
                <li>
                  <span className="font-semibold">Email: </span>
                  <a href="mailto:youremail@example.com" className="text-violet-400 hover:underline">
                    youremail@example.com
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Phone: </span>
                  <a href="tel:+123456789" className="text-violet-400 hover:underline">
                    +123 456 789
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Location: </span>
                  Your City, Country
                </li>
              </ul>
  
              {/* Social Media Icons */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-violet-400">
                    <img src="assets/linkedin.svg" alt="LinkedIn" className="w-6 h-6"/>
                  </a>
                  <a href="https://github.com" aria-label="GitHub" className="hover:text-violet-400">
                    <img src="assets/github.svg" alt="GitHub" className="w-6 h-6"/>
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
  