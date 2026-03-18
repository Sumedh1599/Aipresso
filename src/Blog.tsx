import React from 'react';
import './Blog.css';

const EARLY_ACCESS_URL = 'https://www.verbll.com';

export default function Blog() {
  return (
    <article className="blogPage">
      <div className="blogPage__container">
        <header className="blogPage__header">
          <div className="blogPage__title" role="heading" aria-level={1}>
            Why I Built 7 AI Tools Instead of Buying One
          </div>
          <p className="blogPage__meta">Aipresso Blog</p>
        </header>

        <div className="blogPage__body">
          <p className="blogPage__lead">
            I was switching between five apps to finish one task. ChatGPT for answers. Notion for notes. YouTube for
            tutorials. A code editor for practice. A course platform for structure. Five logins. Five interfaces. Zero
            memory of what I did yesterday.
          </p>
          <p className="blogPage__text">
            Every tool treated me like a stranger. Every session started from zero. I was paying for premium AI and
            getting generic output because none of these platforms knew how I think, what I already knew, or how I learned
            best.
          </p>
          <p className="blogPage__text">So I stopped complaining and started building.</p>

          <div className="blogPage__sectionTitle" role="heading" aria-level={2}>
            The gap nobody is closing
          </div>
          <p className="blogPage__text">
            The AI race is obsessed with bigger models. More parameters. Faster tokens. But the real problem is not
            intelligence—it is context. A $29 billion edtech market sells the same content to every unique individual
            and calls it personalized learning. It is not. It is a playlist with your name on it.
          </p>
          <p className="blogPage__text">
            I wanted a workspace that learned me. Not a chatbot that forgot me. Not a course that assumed my starting
            point. One system where AI chat, research, coding, notes, and course creation talk to each other and adapt to
            the same profile.
          </p>
          <p className="blogPage__text">That system did not exist. So I built it in 90 days.</p>

          <div className="blogPage__sectionTitle" role="heading" aria-level={2}>
            What Verbll actually is
          </div>
          <p className="blogPage__text">Seven tools unified into one intelligent workspace:</p>
          <ul className="blogPage__list">
            <li>
              <strong>AI Chat</strong> that remembers full context across sessions
            </li>
            <li>
              <strong>Brainstorm</strong> with four AI agents debating your problem
            </li>
            <li>
              <strong>Code Now</strong> with integrated teaching and debugging
            </li>
            <li>
              <strong>Course Designer</strong> that builds curriculum around your goals
            </li>
            <li>
              <strong>Deep Research</strong> unifying search, PDFs, and knowledge graphs
            </li>
            <li>
              <strong>Video Summarizer</strong> extracting insights without watching hours
            </li>
            <li>
              <strong>My Notes</strong> as persistent second brain across all tools
            </li>
          </ul>
          <p className="blogPage__text">But the tools are not the product. The intelligence underneath is.</p>

          <div className="blogPage__sectionTitle" role="heading" aria-level={2}>
            The 12-challenge engine
          </div>
          <p className="blogPage__text">
            Before you use anything, Verbll maps how you think. Twelve game-based challenges across five cognitive
            dimensions. Not a quiz. A benchmark measuring how you process information, reason under pressure, and where
            your instincts are strong or need support.
          </p>
          <p className="blogPage__text">
            That profile becomes the engine. Your chat responds differently than anyone else&apos;s. Your courses
            structure around your actual learning style. Your research surfaces what you need, not what&apos;s popular.
            The longer you use it, the sharper it gets.
          </p>

          <div className="blogPage__sectionTitle" role="heading" aria-level={2}>
            Built in public, shipped fast
          </div>
          <p className="blogPage__text">
            I open-sourced components along the way. EST tokenizer hitting 55% compression on PyPI. MCP servers for
            the Claude ecosystem. Every tool is backed by code I wrote, tested, and shared—not borrowed demos or black
            boxes.
          </p>
          <p className="blogPage__text">
            Verbll is live now. Early access cohorts are learning with it. The waitlist is growing. And we are just
            starting.
          </p>
          <p className="blogPage__text">
            This is not another AI wrapper. This is where serious learning actually happens.
          </p>

          <p className="blogPage__cta">
            <a className="blogPage__ctaLink" href={EARLY_ACCESS_URL} target="_blank" rel="noopener noreferrer">
              Join the early access list →
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
