import React, { useState } from 'react';
import './App.css';
import founderImage from './assets/fouder.png';
import coffeeBeansImage from './assets/coffeebeans.png';
import verbllLogo from './assets/logo.png';
import Culture from './Culture';
import Careers from './Careers';
import Blog from './Blog';
import Contact from './Contact';
import FounderNote from './FounderNote';
import Footer from './Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const showPage = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <header className="titlebar">
        <h1 className="title">AIpresso</h1>
        <nav className="nav-buttons">
          <button
            className="nav-btn"
            onClick={() => showPage('home')}
            style={{
              borderBottom: currentPage === 'home' ? '3px solid #4A90E2' : '3px solid transparent',
              paddingBottom: '6px',
            }}
          >
            Home
          </button>
          <button
            className="nav-btn"
            onClick={() => showPage('culture')}
            style={{
              borderBottom: currentPage === 'culture' ? '3px solid #4A90E2' : '3px solid transparent',
              paddingBottom: '6px',
            }}
          >
            Culture
          </button>
          <button
            className="nav-btn"
            onClick={() => showPage('careers')}
            style={{
              borderBottom: currentPage === 'careers' ? '3px solid #4A90E2' : '3px solid transparent',
              paddingBottom: '6px',
            }}
          >
            Careers
          </button>
          <button
            className="nav-btn"
            onClick={() => showPage('blog')}
            style={{
              borderBottom: currentPage === 'blog' ? '3px solid #4A90E2' : '3px solid transparent',
              paddingBottom: '6px',
            }}
          >
            Blog
          </button>
          <button
            className="nav-btn"
            onClick={() => showPage('contact')}
            style={{
              borderBottom: currentPage === 'contact' ? '3px solid #4A90E2' : '3px solid transparent',
              paddingBottom: '6px',
            }}
          >
            Contact
          </button>
        </nav>
      </header>
      <main className="content">
        {currentPage === 'home' && (
          <div>
            <div className="home-card">
              <div className="home-text">
                <div className="text-row">We brew AI</div>
                <div className="text-row">that works for you</div>
              </div>
              <div className="founder-image">
                <img src={founderImage} alt="Founder" className="founder-img" />
              </div>
              <div className="founder-note">
                <div className="founder-title">A note from our Founder,<br />Sumedh Patil</div>
                <button className="read-more-btn" onClick={() => showPage('founder-note')}>
                  Read More
                </button>
              </div>
            </div>
            <div className="intro-card">
              <div className="intro-content">
                <div className="intro-left">
                  <img src={coffeeBeansImage} alt="Coffee Beans" className="intro-image" />
                </div>
                <div className="intro-right">
                  <div className="intro-title">Vision</div>
                  <div className="chalk-line"></div>
                  <div className="intro-text">AI that is personal, affordable, and under your control. Bring your own keys, pick from hundreds of models, and use platforms that learn how you think—without locking you into a single vendor bill.</div>
                  <div className="intro-title" style={{ width: '100%' }}>Mission</div>
                  <div className="chalk-line"></div>
                  <div className="intro-text">Build platforms that unify powerful AI tools—chat, research, course design, image generation, and decision support—while you keep ownership of your OpenRouter API key. We provide the workspace; you bring the models. Lower cost. Higher usage. Experiences shaped by the person behind the screen.</div>
                </div>
              </div>
            </div>
            <div className="culture-card">
              <div className="culture-content">
                <div className="culture-title">Working at AIpresso</div>
                <div className="culture-text-row">One of the few places in the world where we hire</div>
                <div className="culture-text-row"><span className="text-blue">50% human</span> and <span className="text-red">50% AI</span> working professionals</div>
                <button className="culture-btn" type="button" onClick={() => showPage('culture')}>Learn more about our culture</button>
              </div>
            </div>
            <div className="products-card">
              <div className="products-header">
                <h2 className="products-title">Our Platforms</h2>
              </div>
              <div className="products-content">
                <div className="platform-columns-scroll">
                  <div className="platform-columns">
                    <div className="platform-column">
                      <div className="mini-card">
                        <img src={verbllLogo} alt="Verbll" className="mini-card-logo" />
                      </div>
                      <div className="product-info">
                        <h3 className="product-subtitle">BYOK. OpenRouter. One workspace.</h3>
                        <p className="product-description">
                          Verbll is live. Bring your own OpenRouter API key and unlock Chat, Deep Research, Course Designer, and Image Generation—plus dashboards that keep everything in one place. Access 400+ models without paying a platform markup on inference. Roughly 10× lower cost and up to 100× more usable capacity, because you pay the model provider directly while we deliver the product.
                        </p>
                        <button type="button" className="read-more-product" onClick={() => window.open('https://www.verbll.com', '_blank')}>Visit Verbll</button>
                      </div>
                    </div>
                    <div className="platform-column">
                      <div className="mini-card mini-card--effectt">
                        <div className="mini-card-text">EFFECTT</div>
                        <div className="mini-card-coming-soon">Coming soon</div>
                      </div>
                      <div className="product-info">
                        <h3 className="product-subtitle">Your digital angel for every decision</h3>
                        <p className="product-description">
                          Chat with Effectt on mobile. We learn how you think, read the patterns in your choices, and help you anticipate your next steps—flawlessly. We do not take your decisions; we help you make them. Get what you need when you need it, and bring more clarity to the choices that shape your future.
                        </p>
                      </div>
                    </div>
                    <div className="platform-column">
                      <div className="mini-card">
                        <div className="mini-card-text">More Apps</div>
                        <div className="mini-card-desc">Coming soon</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opensource-card">
              <div className="opensource-content">
                <div className="opensource-title">Open Source Roots</div>
                <div className="opensource-description">We do not just use AI. We build it. Our founder open-sourced EST, a morphology-guided English-to-Sanskrit tokenizer achieving 55%+ token compression with 95% context retrieval, now published on PyPI and submitted to JOSS. We also built MCP server generators and input analyzers for Claude ecosystem. Every tool we ship is backed by code we have written, tested, and shared.</div>
                <button className="read-more-opensource" type="button" onClick={() => showPage('blog')}>Read more</button>
              </div>
            </div>
            <div className="why-card">
              <div className="why-content">
                <div className="why-title">Why I Built AIpresso</div>
                <div className="why-description">When the AI race began, I did not watch from the sidelines—I started building. Self-taught developer, first SaaS shipped in three months, open-sourced tools on GitHub. But every time I tried to learn faster, I switched between five tools and paid for inference I could not control. No platform connected chat, research, courses, and creation. No platform let me bring my own key and choose from hundreds of models. Aipresso is my answer: products that respect how you think and how you pay. Verbll is live on OpenRouter BYOK. Effectt is next.</div>
                <div className="why-signature">
                  <div className="why-name">- Sumedh Patil</div>
                  <div className="why-title-small">Founder</div>
                </div>
              </div>
            </div>
          </div>
        )}
        {currentPage === 'culture' && <Culture />}
        {currentPage === 'careers' && <Careers />}
        {currentPage === 'blog' && <Blog />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'founder-note' && <FounderNote />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
