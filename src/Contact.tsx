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
          Verbll is at the threshold of launch — the product is built, the market is ready, and we are looking for the
          right partners to scale it. If you are an investor, accelerator, or strategic partner who believes
          personalised AI learning is the future, we would like to hear from you.
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

