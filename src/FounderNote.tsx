import React from 'react';
import './FounderNote.css';

export default function FounderNote() {
  return (
    <article className="founderNotePage">
      <div className="founderNotePage__container">
        <header className="founderNotePage__header">
          <div className="founderNotePage__title" role="heading" aria-level={1}>
            A Note from Our Founder,
          </div>
          <div className="founderNotePage__subtitle" role="heading" aria-level={2}>
            Sumedh Patil
          </div>
        </header>

        <div className="founderNotePage__body">
          <p className="founderNotePage__text">
            When the AI race began, I did not watch from the sidelines—I started building. I hold an MSc in Business
            Analytics and a BEng in Mechanical Engineering. But degrees did not teach me what I needed. So I taught
            myself web development and machine learning from scratch. Open-sourced projects on GitHub. Shipped my first
            SaaS in under three months. I was hungry to learn faster, work smarter, and keep up with a world that was
            accelerating overnight.
          </p>

          <p className="founderNotePage__text">
            Every time I built to learn better, I found myself switching between five tools to finish one task—and
            paying for inference I did not control. Chat here. Research there. Courses somewhere else. Image drafts in
            another tab. Five logins. Five bills. Zero memory of yesterday. Platforms wrapped a few models, marked up
            every token, and called it personalisation. It was not. It was a playlist with my name on it—and a tax on
            curiosity.
          </p>

          <p className="founderNotePage__text">I was not just annoyed. I was living inside the gap.</p>

          <div className="founderNotePage__sectionTitle" role="heading" aria-level={3}>
            Own the key. Own the experience.
          </div>
          <p className="founderNotePage__text">
            That is why Verbll ships as a BYOK OpenRouter product. You bring your API key. We provide the workspace—
            Chat, Deep Research, Course Designer, Image Generation, and dashboards—wired for 400+ models. You keep
            cost transparency and model choice. We keep building product. Roughly 10× lower cost and far higher usable
            capacity for the same spend, because we are not skimming your inference. Usage stays compliant with how
            OpenRouter expects keys to be used: yours, routed through them, accountable to you.
          </p>

          <div className="founderNotePage__sectionTitle" role="heading" aria-level={3}>
            What comes after the workspace
          </div>
          <p className="founderNotePage__text">
            Effectt is next—a mobile companion that learns how you think, reads patterns in your choices, and helps you
            predict your next steps. We do not take your decisions. We help you make them. A digital angel for clarity,
            not a replacement for judgment.
          </p>

          <p className="founderNotePage__text">
            People fear AI will replace them. That fear is almost justified—because AI will replace the ones who ignore
            it. Those who join the revolution multiply. Learn with AI. Excel with AI. What used to take a month can take
            a week—if the tools are precise, personal, and priced like partners instead of toll booths.
          </p>

          <p className="founderNotePage__text">
            Aipresso is not a declaration of forever. It is a commitment to earning every day—one adaptive tool, one
            transparent bill, one person multiplied by AI at a time.
          </p>

          <p className="founderNotePage__text">Verbll is live. Effectt is coming. We are just getting started.</p>

          <div className="founderNotePage__signature">
            <div className="founderNotePage__sigName">Sumedh Patil</div>
            <div className="founderNotePage__sigTitle">Founder, Aipresso</div>
          </div>
        </div>
      </div>
    </article>
  );
}
