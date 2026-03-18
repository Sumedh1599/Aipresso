import React from 'react';
import './Careers.css';

export default function Careers() {
  return (
    <div className="careersPage">
      <div className="careersPage__container">
        <div className="careersPage__title" role="heading" aria-level={1}>
          Careers
        </div>
        <div className="careersPage__subtitle">We are not hiring yet. But we are always watching.</div>

        <div className="careersPage__section">
          <div className="careersPage__sectionTitle" role="heading" aria-level={2}>
            The future team is being built in public
          </div>
          <p className="careersPage__text">
            Right now, Aipresso is one person with a mission and a machine. That changes soon. When we open our doors,
            we will not post generic job descriptions. We will post challenges. Problems that need solving. Gaps that
            need closing. You will apply not with a resume, but with proof—what you have built, what you have broken,
            what you have learned.
          </p>
        </div>

        <div className="careersPage__section">
          <div className="careersPage__sectionTitle" role="heading" aria-level={2}>
            What we will look for
          </div>
          <p className="careersPage__text">
            People who treat AI as a native language, not a translation layer. Who have shipped something imperfect
            rather than planned something perfect. Who can move between strategy and execution in the same hour. Who
            read our culture page and felt something click—either excitement or discomfort. Both are correct signals.
          </p>
        </div>

        <div className="careersPage__section">
          <div className="careersPage__sectionTitle" role="heading" aria-level={2}>
            Until then
          </div>
          <p className="careersPage__text">
            Follow the journey. Watch what we build. If Verbll resonates, if the 50/50 revolution sounds like the place
            you belong, send us what you are working on now. Not for a job. For a conversation that might turn into
            one.
          </p>
        </div>
      </div>
    </div>
  );
}

