import React from 'react';
import './Investors.css';

import githubIcon from './assets/github.png';
import linkedinIcon from './assets/linkedin.png';
import mailIcon from './assets/mail.png';
import { EMAIL_URL, GITHUB_PORTFOLIO_URL, LINKEDIN_URL } from './links';

export default function Investors() {
  return (
    <div className="investorsPage">
      <div className="investorsPage__container">
        <div className="investorsPage__title" role="heading" aria-level={1}>
          Join the Revolution
        </div>
        <div className="investorsPage__subtitle">
          Verbll is built. The market is ready. We are raising to scale what works.
        </div>

        <div className="investorsPage__grid">
          <div className="investorsPage__left">
            <div className="investorsPage__section">
              <div className="investorsPage__sectionTitle" role="heading" aria-level={2}>
                Where we are
              </div>

              <p className="investorsPage__text">
                <span className="investorsPage__label">Product:</span> Live and learning. Seven unified tools.
                Personalized AI that adapts to how users think—not generic responses, not borrowed models.
              </p>

              <p className="investorsPage__text">
                <span className="investorsPage__label">Traction:</span> Pre-launch waitlist growing. Early access cohorts
                engaged. The gap we identified is real, and users feel it immediately.
              </p>

              <p className="investorsPage__text">
                <span className="investorsPage__label">The bet:</span> First-mover in truly personalized AI learning. Not
                another chat wrapper. A platform that becomes smarter about the individual with every interaction.
              </p>
            </div>

            <div className="investorsPage__section">
              <div className="investorsPage__sectionTitle" role="heading" aria-level={2}>
                What we need
              </div>
              <p className="investorsPage__text">
                Capital to accelerate. Team to expand. Infrastructure to handle the wave when we open the gates. We are
                not building for a niche. We are building the default workspace for serious learners worldwide.
              </p>
            </div>

            <div className="investorsPage__section">
              <div className="investorsPage__sectionTitle" role="heading" aria-level={2}>
                How to reach us
              </div>
              <p className="investorsPage__text">Deck ready. Demos live. Founder available.</p>
            </div>
          </div>

          <div className="investorsPage__right">
            <a
              className="investorsPage__deckCard"
              href="https://docs.google.com/presentation/d/1yHJnipoO2tFoN8MfzxCCo-Eu_5fdl2AT/edit?usp=sharing&ouid=117549244301655326838&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="investorsPage__deckEyebrow">Pitch Deck</div>
              <div className="investorsPage__deckTitle">Verbll Seed</div>
              <div className="investorsPage__deckCta">Click to open</div>
            </a>

            <div className="investorsPage__iconRow" aria-label="Contact links">
              <a className="investorsPage__iconBtn" href={EMAIL_URL}>
                <img className="investorsPage__icon" src={mailIcon} alt="Email" />
                <span className="investorsPage__iconText">Email</span>
              </a>
              <a
                className="investorsPage__iconBtn"
                href={GITHUB_PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="investorsPage__icon" src={githubIcon} alt="GitHub" />
                <span className="investorsPage__iconText">GitHub</span>
              </a>
              <a
                className="investorsPage__iconBtn"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="investorsPage__icon" src={linkedinIcon} alt="LinkedIn" />
                <span className="investorsPage__iconText">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

