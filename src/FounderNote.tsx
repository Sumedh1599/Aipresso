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
            Analytics and a BEng in Mechanical Engineering. But degrees did not teach me what I needed to know. So I
            taught myself web development and machine learning from scratch. Open-sourced projects on GitHub. Shipped my
            first SaaS product in under three months. I was hungry to learn faster, work smarter, and keep up with a
            world that was accelerating overnight.
          </p>

          <p className="founderNotePage__text">
            But every time I built something to learn better, I found myself switching between five different tools just
            to complete one task. ChatGPT for answers. Notion for notes. YouTube for tutorials. A code editor for
            practice. A course platform for structure. Five logins. Five interfaces. Zero memory of what I did yesterday.
            No platform connected them. No platform adapted to me. A $29 billion market was selling the same generic
            content to every unique individual on the planet—and calling it education.
          </p>

          <p className="founderNotePage__text">I was not just annoyed. I was living inside the gap.</p>

          <div className="founderNotePage__sectionTitle" role="heading" aria-level={3}>
            The fear is real. The future is not.
          </div>
          <p className="founderNotePage__text">
            People fear AI will replace them. That fear is almost justified—because AI will replace the ones who ignore
            it. But those who join the revolution? They will not just survive. They will multiply. Learn with AI. Excel
            with AI. What used to take a month to master can now take a week—if the tools are precise, personal, and
            built around how you actually think. AI does not flatten knowledge. It deepens it. It does not make humans
            obsolete. It makes them unstoppable.
          </p>

          <p className="founderNotePage__text">
            When I started, working as a data analyst, I saw what others missed. AI was not a bubble. It was an economic
            plateau—a permanent shift in how value is created, how work is done, how potential is unlocked. I bet my
            nights and weekends on that conviction. I was right. Now I am betting Aipresso on it.
          </p>

          <div className="founderNotePage__sectionTitle" role="heading" aria-level={3}>
            The future belongs to the builders, not the bystanders.
          </div>
          <p className="founderNotePage__text">
            I have always believed that technology amplifies intent. When the printing press arrived, it did not replace
            writers—it multiplied them. When the internet connected the world, it did not replace thinkers—it unleashed
            them. AI is no different. It is the next lever. The next multiplier. The next wave that will separate those
            who adapt from those who fade.
          </p>

          <p className="founderNotePage__text">
            This belief was forged in the work of pioneers who saw around corners. Alan Turing, who asked if machines
            could think before anyone knew what thinking meant. Geoffrey Hinton, who spent decades on neural networks when
            the world called them science fiction. Andrew Ng, who taught millions to code the future while others debated
            if the future would come. They did not wait for permission. They built. They shipped. They learned in public.
          </p>

          <p className="founderNotePage__text">That is the practice I am following.</p>

          <p className="founderNotePage__text">
            Aipresso is not a declaration of forever. It is a commitment to earning every day.
          </p>

          <p className="founderNotePage__text">
            We will not last because we say we will. We will last because we get there—one adaptive tool, one
            personalized experience, one learner multiplied by AI at a time. Quality over quantity. Impact over noise.
            Humans and machines, rising together.
          </p>

          <p className="founderNotePage__text">Verbll is the first answer. It will not be the last.</p>

          <p className="founderNotePage__text">
            We are not building AI that replaces humans. We are building AI that reveals what humans can become when they
            stop fighting the future and start riding it. This is Day 1. The tools are live. The revolution is open. And
            we are just getting started.
          </p>

          <div className="founderNotePage__signature">
            <div className="founderNotePage__sigName">Sumedh Patil</div>
            <div className="founderNotePage__sigTitle">Founder, Aipresso</div>
          </div>
        </div>
      </div>
    </article>
  );
}

