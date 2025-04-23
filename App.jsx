import React from 'react';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>RuppeeCoin</h1>
        <p>Empowering SME IPOs Across India</p>
      </header>
      <section className="section about">
        <h2>About Us</h2>
        <p>RuppeeCoin helps small and medium-sized businesses access growth capital through SME IPOs, enhancing visibility and creating promoter wealth.</p>
      </section>
      <section className="section benefits">
        <h2>Benefits of SME IPO</h2>
        <ul>
          <li>✔ Access to growth capital without debt</li>
          <li>✔ Enhanced brand visibility & credibility</li>
          <li>✔ Unlock valuation and liquidity</li>
          <li>✔ Tax-efficient wealth creation for promoters</li>
          <li>✔ Regulatory requirement for certain scale-ups</li>
        </ul>
      </section>
      <section className="section contact">
        <h2>Contact Us</h2>
        <p>Email: info@ruppeecoin.in</p>
        <p>Phone: +91-98765-43210</p>
      </section>
    </div>
  );
}

export default App;