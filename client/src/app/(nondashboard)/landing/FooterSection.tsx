import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faFacebook,
  // faInstagram,
  // faTwitter,
  // faLinkedin,
  // faYoutube,
  faWhatsapp,
  faTelegram

} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <footer className="border-t border-gray-200 py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4">
            <Link href="/" className="text-xl font-bold" scroll={false}>
              VICTORSPRINGS
            </Link>
          </div>
          <nav className="mb-4">
            <ul className="flex space-x-6">
              {/* <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li> */}
            </ul>
          </nav>
          <div className="flex space-x-4 mb-4">

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=victorspringsltd@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="hover:text-primary-600">
              <FontAwesomeIcon icon={faTelegram} className="h-6 w-6" />
            </a>
    
    
            <a href="https://wa.me/254717849484?text=Hi%2C%20how%20can%20I%20help%20you%3F" target="_blank" aria-label="Whatsapp" className="hover:text-primary-600">
              <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 flex justify-center space-x-4">
          <span>© VICTORSPRINGS. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
