import React from "react";
import "../footer.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div>
          <div className="footer_desc">
            <h3>N.C. Alvan</h3>
            <p>Alvan &#169; {new Date().getFullYear()} All rights reserved.</p>
            <div className="social_icons">
              <a href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="/" target="_blank" aria-label="LInkedIn">
                <FaLinkedin />
              </a>
              <a href="/" target="_blank" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
