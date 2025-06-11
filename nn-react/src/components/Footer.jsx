import React from "react";
import "../Footer.css";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { MdGroup } from "react-icons/md";

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="footer-icons">
      <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer"><SiGooglescholar size={24} /></a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
      <a href="https://beebo.com" target="_blank" rel="noopener noreferrer"><MdGroup size={24} /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
    </div>
    <p className="footer-text">© {new Date().getFullYear()} AIgentSmith Inc. All rights reserved.</p>
  </footer>
);

export default Footer;
