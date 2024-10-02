const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-violet-50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Company Info */}
          <div className="flex flex-col">
            {/* <h3 className="text-2xl font-bold mb-4">My Portfolio</h3> */}
            <img src="assets/Header.png" className="w-32 -ml-5 pb-5"/>
            <p className="text-sm mb-4">
              Empowering Artificial Intelligence as solutions for a better future.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="hover:text-violet-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-violet-400">
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-violet-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-violet-400">
                  Experiences
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
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
                <img src="assets/github.svg" alt="GitHub" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
