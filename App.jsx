import React from 'react';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>RuppeeCoin</h1>
        <p>Empowering India's SME IPO journey.</p>
      </header>
      <section className="about">
        <h2>About</h2>
        <p>We help small businesses raise growth capital via SME IPOs. Backed by experienced merchant bankers.</p>
      </section>
      <section className="benefits">
        <h2>Why SME IPO?</h2>
        <ul>
          <li>✔ Growth capital without debt</li>
          <li>✔ Brand visibility & credibility</li>
          <li>✔ Liquidity & valuation</li>
          <li>✔ Tax-efficient wealth creation</li>
          <li>✔ Mandatory for scale-ups in some thresholds</li>
        </ul>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: info@ruppeecoin.in</p>
      </section>
    </div>
  );
}

export default App;