import React from 'react';
import './Culture.css';

import image1 from './assets/Culture/image_1.png';
import image2 from './assets/Culture/image_2.png';
import image3 from './assets/Culture/image_3.png';
import image4 from './assets/Culture/image_4.png';

export default function Culture() {
  return (
    <div className="culturePage">
      <div className="culturePage__container">
        <header className="culturePage__header">
          <div className="culturePage__title" role="heading" aria-level={1}>
            The 50/50 Revolution
          </div>
          <p className="culturePage__lede">
            we are building the first company where humans and AI share the wheel—50% human, 50% machine, 100%
            unstoppable. This is not about replacement. It is about multiplication. Every person here operates with
            the leverage of ten, because their tools think, adapt, and execute alongside them. We are not adding AI to
            old workflows. We are architecting a new species of work from the ground up.
          </p>
        </header>

        <section className="cultureBlock cultureBlock--left">
          <div className="cultureBlock__text cultureBlock__text--left">
            <div className="cultureBlock__title" role="heading" aria-level={2}>
              Quality over quantity. Always.
            </div>
            <p className="cultureBlock__desc">
              We do not hire armies. We hire believers. People who see AI as a partner, not a threat. Who measure
              output in impact, not hours. Who know that one human with the right tools can outwork ten without them.
              Our teams are small, sharp, and selective. We would rather wait six months for the right mind than fill a
              seat with the wrong one. Excellence is non-negotiable. Speed is a byproduct of clarity, not headcount.
            </p>
          </div>
          <div className="cultureBlock__media cultureBlock__media--right">
            <img className="cultureBlock__img" src={image1} alt="AIpresso culture section 1" />
          </div>
        </section>

        <section className="cultureBlock cultureBlock--right">
          <div className="cultureBlock__media cultureBlock__media--left">
            <img className="cultureBlock__img" src={image2} alt="AIpresso culture section 2" />
          </div>
          <div className="cultureBlock__text cultureBlock__text--right">
            <div className="cultureBlock__title" role="heading" aria-level={2}>
              We design work that has not existed yet.
            </div>
            <p className="cultureBlock__desc">
              No legacy processes. No &quot;this is how it has always been done.&quot; Every workflow is rebuilt from
              scratch with AI at the center. If a task can be automated, amplified, or reimagined with intelligence, we
              do it. Then we share how with the world. We document everything. Open-source what we can. Teach what we
              learn. The future of work should not be a trade secret—it should be a blueprint.
            </p>
          </div>
        </section>

        <section className="cultureBlock cultureBlock--left">
          <div className="cultureBlock__text cultureBlock__text--left">
            <div className="cultureBlock__title" role="heading" aria-level={2}>
              Efficiency is the baseline. Humanity is the edge.
            </div>
            <p className="cultureBlock__desc">
              We move faster than traditional offices. Ship sooner. Learn quicker. Iterate daily, not quarterly. But we
              never optimize the person out of the process. The human judgment, the creative spark, the ethical pause,
              the gut instinct when data is incomplete—that is what separates tools from transformation. AI handles the
              volume. Humans handle the vision. Together, they handle the impossible.
            </p>
          </div>
          <div className="cultureBlock__media cultureBlock__media--right">
            <img className="cultureBlock__img" src={image3} alt="AIpresso culture section 3" />
          </div>
        </section>

        <section className="cultureBlock cultureBlock--right">
          <div className="cultureBlock__media cultureBlock__media--left">
            <img className="cultureBlock__img" src={image4} alt="AIpresso culture section 4" />
          </div>
          <div className="cultureBlock__text cultureBlock__text--right">
            <div className="cultureBlock__title" role="heading" aria-level={2}>
              This is Day 1 of a new way of working.
            </div>
            <p className="cultureBlock__desc">
              We are not adapting to the future. We are drafting it. One product at a time. One workflow at a time. One
              belief at a time: that the best work happens when humans and AI rise together. If you join us, you are not
              filling a role. You are inventing one. You are not keeping up. You are setting pace. And you are doing it
              alongside machines that finally understand what you need, before you even ask.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

