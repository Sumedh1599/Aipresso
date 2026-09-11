import React from 'react';
import './Footer.css';

import githubIcon from './assets/github.png';
import linkedinIcon from './assets/linkedin.png';
import mailIcon from './assets/mail.png';
import { EMAIL_URL, GITHUB_PORTFOLIO_URL, LINKEDIN_URL } from './links';

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="siteFooter__container">
        <div className="siteFooter__title">Interested in Being Part of What Comes Next?</div>
        <p className="siteFooter__text">
          Verbll is live with OpenRouter BYOK—bring your key, pick from 400+ models, and use Chat, Deep Research, Course
          Designer, and Image Generation in one workspace. Effectt is coming soon. Reach out if you want to try the
          products, share ideas, or collaborate.
        </p>

        <div className="siteFooter__ctaRow" aria-label="Contact links">
          <a className="siteFooter__cta" href={EMAIL_URL}>
            <img className="siteFooter__ctaIcon" src={mailIcon} alt="Email" />
            <span className="siteFooter__ctaText">Mail</span>
          </a>
          <a
            className="siteFooter__cta"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="siteFooter__ctaIcon" src={linkedinIcon} alt="LinkedIn" />
            <span className="siteFooter__ctaText">LinkedIn</span>
          </a>
          <a
            className="siteFooter__cta"
            href={GITHUB_PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="siteFooter__ctaIcon" src={githubIcon} alt="GitHub" />
            <span className="siteFooter__ctaText">GitHub</span>
          </a>
        </div>

        <div className="siteFooter__divider" />

        <div className="siteFooter__company">
          <div className="siteFooter__companyName">Aipresso Private Limited</div>
          <div className="siteFooter__companyLine">Registered in England &amp; Wales | Company No. 16218778</div>
          <div className="siteFooter__companyLine">
            Unit 13 Freeland Park, Wareham Road, Lytchett Matravers, Poole, England, BH16 6FA
          </div>
          <div className="siteFooter__companyLine">Incorporated 30 January 2025</div>
        </div>
      </div>
    </footer>
  );
}
