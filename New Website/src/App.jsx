import React from 'react';
import './index.css';
import './App.css';

function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-content">
        <div className="topbar-item">
          <span>📍 9300 Henri Bourassa E, Montréal-East, QC H1E 2S4</span>
        </div>
        <div className="topbar-group">
          <div className="topbar-item"><span>📧 info@garageroberto.com</span></div>
          <div className="topbar-item"><span>📞 514.648.1275</span></div>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="navbar glass-panel">
      <div className="container navbar-content">
        <div className="logo">
          <img src="/logo1.png" alt="Garage Roberto" className="logo-img" />
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
        <div className="nav-actions">
          <button className="btn-primary">Book A Date</button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <p className="hero-subtitle">MONTRÉAL-EST — SINCE THE 1990'S</p>
        <h1 className="hero-title">Your Trusted <span>Family Garage</span><br/>In East Montreal</h1>
        <div className="hero-actions">
          <button className="btn-primary">Book A Date</button>
          <button className="btn-secondary">Our Services</button>
        </div>
      </div>
    </section>
  );
}

function StatsGrid() {
  return (
    <div className="stats-container">
      <div className="container">
        <div className="stats-grid glass-panel">
          <div className="stat-card">
            <div className="stat-icon settings">⚙️</div>
            <h3>Fully Equipped Shop</h3>
            <p>Our garage handles American, European, Asian cars and light trucks — fully equipped for every make and model.</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon check">✅</div>
            <h3>Advanced Diagnostics</h3>
            <p>Using oscilloscopes and specialized analyzers, we track down electrical problems other garages can't find.</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon price">💲</div>
            <h3>Honest & Affordable</h3>
            <p>Transparent pricing, no surprises. Oil changes from $30 and inspections at $75 — your satisfaction is our goal.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NumberStats() {
  return (
    <div className="number-stats">
      <div className="container number-stats-grid">
        <div className="number-card glass-panel">
          <h3>30+</h3>
          <p>Years in East Montreal</p>
        </div>
        <div className="number-card glass-panel">
          <h3>9</h3>
          <p>Services offered</p>
        </div>
        <div className="number-card glass-panel">
          <h3>3</h3>
          <p>Generations of expertise</p>
        </div>
        <div className="number-card glass-panel">
          <h3>3D</h3>
          <p>Wheel alignment technology</p>
        </div>
      </div>
    </div>
  );
}

function HistorySection() {
  return (
    <section className="history-section">
      <div className="container history-flex">
        <div className="history-card glass-panel">
          <p className="section-subtitle">ABOUT US</p>
          <h2>Our History</h2>
          <p>Centre de Mécanique Roberto Inc. is a family-owned garage serving East Montreal since the 1990s. Founded by Roberto himself, the shop grew into a team of three — father and two sons — each bringing their own expertise to the floor.</p>
          <button className="btn-primary outline">Read More</button>
        </div>
        <div className="history-image">
          <img src="/about.png" alt="Mechanic" />
          <div className="play-button">▶</div>
        </div>
        <div className="history-card glass-panel right">
          <p className="section-subtitle">ABOUT US</p>
          <h2>Our Future</h2>
          <p>We invest continuously in the latest diagnostic tools and training so our technicians stay ahead of the curve. Whatever your vehicle needs — electrical, mechanical, or preventive — we're here for the long run.</p>
          <button className="btn-primary outline">Read More</button>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="testimonial-section glass-panel">
      <div className="container testimonial-content">
        <div className="testimonial-author">
          <div className="author-avatar">ML</div>
          <div>
            <p className="section-subtitle">TESTIMONIALS</p>
            <h3>Marc Lévesque</h3>
          </div>
        </div>
        <p className="quote">"Had an electrical issue three other garages couldn't diagnose. Roberto's team found it same day. Fair price, no runaround — just honest work. This is my garage from now on."</p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title text-center">Services</h2>
        <div className="services-grid">
          <div className="service-img-card glass-panel">
            <img src="/service_exterior.png" alt="General Mechanics" />
            <div className="service-content">
              <p className="section-subtitle">SERVICES</p>
              <h3>General Mechanics</h3>
            </div>
          </div>
          <div className="service-img-card glass-panel">
            <img src="/service_interior.png" alt="Electrical Diagnostics" />
            <div className="service-content">
              <p className="section-subtitle">SERVICES</p>
              <h3>Electrical Diagnostics</h3>
            </div>
          </div>
          <div className="service-img-card glass-panel">
            <img src="/service_engine.png" alt="Tires & 3D Alignment" />
            <div className="service-content">
              <p className="section-subtitle">SERVICES</p>
              <h3>Tires & 3D Alignment</h3>
            </div>
          </div>
          <div className="service-img-card glass-panel">
            <img src="/service_sealant.png" alt="Brakes & Suspension" />
            <div className="service-content">
              <p className="section-subtitle">SERVICES</p>
              <h3>Brakes & Suspension</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="section-title text-center">Our Rates</h2>
        <div className="pricing-grid">
          <div className="pricing-card glass-panel">
            <p className="section-subtitle">STANDARD</p>
            <h3>Oil Change</h3>
            <div className="pricing-amount">From $30</div>
            <ul>
              <li>All makes & models</li>
              <li>Fluid level check</li>
              <li>Filter inspection</li>
              <li>Quick turnaround</li>
            </ul>
            <button className="btn-primary">Book Now</button>
          </div>
          <div className="pricing-card glass-panel highlight">
            <p className="section-subtitle">MOST POPULAR</p>
            <h3>Full Inspection</h3>
            <div className="pricing-amount">$75</div>
            <ul>
              <li>Complete vehicle check</li>
              <li>Brakes & suspension</li>
              <li>Fluids & filters</li>
              <li>Written report included</li>
              <li>Hourly rate also $75/hr</li>
            </ul>
            <button className="btn-primary">Book Now</button>
          </div>
          <div className="pricing-card glass-panel">
            <p className="section-subtitle">SPECIALTY</p>
            <h3>Alignment & A/C</h3>
            <div className="pricing-amount">From $70</div>
            <ul>
              <li>3D four-wheel alignment from $70</li>
              <li>A/C recharge & leak check from $110</li>
              <li>Quebec-certified technicians</li>
              <li>New & used tires available</li>
            </ul>
            <button className="btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-card glass-panel">
          <div className="contact-form">
            <h2>Book An Appointment</h2>
            <div className="form-grid">
              <input type="text" placeholder="First Name" className="input-field" />
              <input type="text" placeholder="Last Name" className="input-field" />
              <input type="email" placeholder="Email Address" className="input-field" />
              <input type="tel" placeholder="Phone Number" className="input-field" />
              <input type="text" placeholder="Vehicle (Year, Make, Model)" className="input-field" />
              <select className="input-field">
                <option value="" disabled selected>Select a Service</option>
                <option>General Mechanics</option>
                <option>Electrical Diagnostics & Programming</option>
                <option>Oil Change</option>
                <option>Brake System</option>
                <option>Suspension & Steering</option>
                <option>4-Wheel Alignment</option>
                <option>Air Conditioning</option>
                <option>Exhaust System</option>
                <option>Tune-Up & Injection</option>
                <option>Tires (New or Used)</option>
                <option>Full Vehicle Inspection</option>
              </select>
              <input type="date" className="input-field" />
              <input type="time" className="input-field" />
            </div>
            <button className="btn-primary full-width">Submit Request</button>
          </div>
          <div className="contact-image-wrapper">
            <img src="/slide1.png" alt="Garage Location" className="contact-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:5146481275">514.648.1275</a>
          <a href="mailto:info@garageroberto.com">info@garageroberto.com</a>
          <a href="#">9300 Henri-Bourassa E</a>
          <a href="#">Montréal-Est, QC H1E 2S4</a>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
        </div>
        <div className="footer-col text-col">
          <h4>Centre de Mécanique Roberto</h4>
          <p>A family garage serving East Montreal since the 1990s. Fast, honest, and affordable — we don't start any work without your approval. Come see us.</p>
          <div className="newsletter">
            <input type="email" placeholder="Type email here..." />
            <button className="btn-primary square">→</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <TopBar />
        <NavBar />
      </header>
      <main>
        <Hero />
        <StatsGrid />
        <NumberStats />
        <HistorySection />
        <Testimonial />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
