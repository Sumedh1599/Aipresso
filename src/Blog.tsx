import React from 'react';
import './Blog.css';

const VERBLL_URL = 'https://www.verbll.com';

export default function Blog() {
  return (
    <article className="blogPage">
      <div className="blogPage__container">
        <header className="blogPage__header">
          <div className="blogPage__title" role="heading" aria-level={1}>
            Why We Built Verbll on OpenRouter BYOK
          </div>
          <p className="blogPage__meta">Aipresso Blog</p>
        </header>

        <div className="blogPage__body">
          <p className="blogPage__lead">
            I was switching between five apps to finish one task—and paying for AI three different ways. Chat for
            answers. A research tool for depth. A course builder for structure. An image tool for drafts. Each login
            started from zero. Each vendor took a cut on top of the model. I was not just fragmented. I was
            overpaying for less control.
          </p>
          <p className="blogPage__text">
            The gap was obvious: the industry sells &quot;AI platforms&quot; that wrap a few models, mark up inference,
            and lock you into their stack. I wanted the opposite—a serious workspace with dashboards and tools, while
            I keep my own key and pick from hundreds of models.
          </p>
          <p className="blogPage__text">So I stopped complaining and started building Verbll.</p>

          <div className="blogPage__sectionTitle" role="heading" aria-level={2}>
            Bring your own key. Keep the leverage.
          </div>
          <p className="blogPage__text">
            Verbll is live as a BYOK (bring your own key) product integrated with OpenRouter. You add your OpenRouter
            API key. We provide the platform: Chat, Deep Research, Course Designer, Image Generation, and the
            dashboards that tie them together. You get access to 400+ OpenRouter models—the best models for the job,
            not whatever a single vendor decided to bundle.
          </p>
          <p className="blogPage__text">
            That design is why costs drop about 10× and usable capacity can jump toward 100× for the same budget. You
            pay OpenRouter for tokens at transparent rates. You are not subsidising a middleman&apos;s markup on every
            request. We earn by shipping product—not by taxxing your inference.
          </p>

          <div className="blogPage__sectionTitle" role="heading" aria-level={2}>
            Compliant by design, not by brochure
          </div>
          <p className="blogPage__text">
            Using OpenRouter the right way means respecting their terms, routing through their API, and keeping your
            credentials under your control. Verbll does not invent a shadow billing layer on top of your key. Your
            usage lives where it belongs—with you and OpenRouter. That is cleaner for compliance, clearer for
            accounting, and fairer for teams that already manage API spend.
          </p>

          <div className="blogPage__sectionTitle" role="heading" aria-level={2}>
            What ships in the workspace
          </div>
          <p className="blogPage__text">One intelligent workspace, not five tabs:</p>
          <ul className="blogPage__list">
            <li>
              <strong>Chat</strong> — full conversations powered by the models you choose
            </li>
            <li>
              <strong>Deep Research</strong> — structured investigation without bouncing between tools
            </li>
            <li>
              <strong>Course Designer</strong> — curricula built around your goals
            </li>
            <li>
              <strong>Image Generation</strong> — visual drafts in the same place you think
            </li>
            <li>
              <strong>Dashboards</strong> — visibility into how you work and what you use
            </li>
          </ul>
          <p className="blogPage__text">More tools are on the roadmap. The foundation stays the same: your key, our platform, any model.</p>

          <div className="blogPage__sectionTitle" role="heading" aria-level={2}>
            How the idea became a company
          </div>
          <p className="blogPage__text">
            Aipresso started from a personal failure mode: learning and shipping AI while drowning in fragmented tools
            and opaque bills. Verbll is the first product that answers that—live today at{' '}
            <a href={VERBLL_URL} target="_blank" rel="noopener noreferrer">
              verbll.com
            </a>
            . Effectt is next: a companion that studies how you decide and helps you see the next step without taking
            the wheel.
          </p>
          <p className="blogPage__text">
            We still open-source what we can—EST on PyPI, MCP tooling for the Claude ecosystem—because platforms should
            be built in public when it helps the craft. But the product promise is simple: personal AI that does not
            punish you for using it.
          </p>

          <p className="blogPage__cta">
            <a className="blogPage__ctaLink" href={VERBLL_URL} target="_blank" rel="noopener noreferrer">
              Open Verbll →
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
