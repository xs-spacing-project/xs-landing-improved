import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  // Placeholder icons
  const SocialIcon = ({ children }: { children: React.ReactNode }) => (
    <a
      href="#"
      className="text-brand-secondary hover:text-brand-light transition-colors duration-300"
    >
      {children}
    </a>
  );

  return (
    <footer className="bg-brand-dark text-brand-light">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-3xl font-extrabold italic text-white">Xs</h2>
            <p className="mt-2 text-sm text-brand-secondary">
              Parking, Solved.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="#about"
                  className="text-base text-brand-secondary hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#features"
                  className="text-base text-brand-secondary hover:text-white"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="#careers"
                  className="text-base text-brand-secondary hover:text-white"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-base text-brand-secondary hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-base text-brand-secondary hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-base text-brand-secondary hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Connect
            </h3>
            <div className="flex mt-4 space-x-6">
              <SocialIcon>
                {/* Placeholder for Twitter/X Icon */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon>
                {/* Placeholder for Instagram Icon */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.153 6.953a3.394 3.394 0 00-3.394 3.394 3.394 3.394 0 003.394 3.394 3.394 3.394 0 003.394-3.394 3.394 3.394 0 00-3.394-3.394zm1.942 3.394a1.942 1.942 0 11-3.884 0 1.942 1.942 0 013.884 0zM18.065 7.152a1.182 1.182 0 100-2.364 1.182 1.182 0 000 2.364z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </SocialIcon>
              <SocialIcon>
                {/* Placeholder for Facebook Icon */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-brand-secondary">
            &copy; {new Date().getFullYear()} Xs Technologies Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
