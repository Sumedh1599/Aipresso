import React from 'react';
import './Contact.css';

import githubIcon from './assets/github.png';
import linkedinIcon from './assets/linkedin.png';
import mailIcon from './assets/mail.png';
import { EMAIL_URL, GITHUB_PORTFOLIO_URL, LINKEDIN_URL } from './links';

export default function Contact() {
  return (
    <div className="contactPage">
      <div className="contactPage__container">
        <div className="contactPage__title" role="heading" aria-level={1}>
          Interested in Being Part of What Comes Next?
        </div>
        <p className="contactPage__text">
          Verbll is live—BYOK OpenRouter, 400+ models, and a workspace built for Chat, Deep Research, Course Designer,
          and Image Generation. Effectt is on the way. If you want to collaborate, try the product, share feedback, or
          build with us, we would like to hear from you.
        </p>

        <div className="contactPage__iconRow" aria-label="Contact links">
          <a className="contactPage__iconBtn" href={EMAIL_URL}>
            <img className="contactPage__icon" src={mailIcon} alt="Email" />
            <span className="contactPage__iconText">Email</span>
          </a>
          <a
            className="contactPage__iconBtn"
            href={GITHUB_PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="contactPage__icon" src={githubIcon} alt="GitHub" />
            <span className="contactPage__iconText">GitHub</span>
          </a>
          <a
            className="contactPage__iconBtn"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="contactPage__icon" src={linkedinIcon} alt="LinkedIn" />
            <span className="contactPage__iconText">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
