import React, { useState } from 'react';
import './App.css';
import founderImage from './assets/fouder.png';
import coffeeBeansImage from './assets/coffeebeans.png';
import Culture from './Culture';
import Careers from './Careers';
import Investors from './Investors';
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
            onClick={() => showPage('investors')}
            style={{
              borderBottom: currentPage === 'investors' ? '3px solid #4A90E2' : '3px solid transparent',
              paddingBottom: '6px',
            }}
          >
            Investors
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
                  <div className="intro-text">AI becomes truly personal, built around individual rather than average. Every tool adapts to you, learning how you work and what you need, until technology feels less like software and more like intuition.</div>
                  <div className="intro-title" style={{ width: '100%' }}>Mission</div>
                  <div className="chalk-line"></div>
                  <div className="intro-text">Build platforms and apps that bring advanced tools and AI models together, working in sync to deliver experiences shaped by each user. No generic outputs, no one size fits all, just systems that understand context and respond to person behind the screen.</div>
                </div>
              </div>
            </div>
            <div className="culture-card">
              <div className="culture-content">
                <div className="culture-title">Working at AIpresso</div>
                <div className="culture-text-row">One of the few places in the world where we hire</div>
                <div className="culture-text-row"><span className="text-blue">50% human</span> and <span className="text-red">50% AI</span> working professionals</div>
                <button className="culture-btn">Learn more about our culture</button>
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
                        <div className="mini-card-text">VERBLL</div>
                      </div>
                      <div className="product-info">
                        <h3 className="product-subtitle">One Workspace. Every Tool. Built Around You.</h3>
                        <p className="product-description">AI tools that multiply unified in one workspace, personalized to how you think, and built to grow with you.</p>
                        <button type="button" className="read-more-product" onClick={() => window.open('https://www.verbll.com', '_blank')}>Read more</button>
                      </div>
                    </div>
                    <div className="platform-column">
                      <div className="mini-card mini-card--effectt">
                        <div className="mini-card-text">EFFECTT</div>
                      </div>
                      <div className="product-info">
                        <h3 className="product-subtitle">One Mirror. Every Decision. Finally Making Sense</h3>
                        <p className="product-description">The App that studies how you think, traces what shapes your choices, and reflects back the patterns you&apos;ve been living inside — without ever knowing it.</p>
                        <button type="button" className="read-more-product" onClick={() => window.open('https://effectt.aipresso.uk/', '_blank')}>Read more</button>
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
                <button className="read-more-opensource">Read more</button>
              </div>
            </div>
            <div className="why-card">
              <div className="why-content">
                <div className="why-title">Why I Built AIpresso</div>
                <div className="why-description">When AI race began, I did not watch from the sidelines—I started building. Self-taught developer, first SaaS shipped in three months, open-sourced tools on GitHub. But every time I built to learn faster, I switched between five tools to finish one task. No platform connected them. No platform adapted to me. A $29 billion market selling generic content to every unique individual—and calling it progress. I was living inside the gap. Aipresso is my answer: a company built to join the AI revolution with products that actually learn how you think. Verbll is the first. More are coming.</div>
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
        {currentPage === 'investors' && <Investors />}
        {currentPage === 'blog' && <Blog />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'founder-note' && <FounderNote />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
