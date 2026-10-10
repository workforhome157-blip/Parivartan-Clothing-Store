import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Clock3, MapPin, Menu, Phone, ShoppingBag, Star, X } from 'lucide-react';

const phone = '093143 44509';
const tel = 'tel:+919314344509';
const address = 'Plot No 9-F-17 Rangbari Road, 3rd, opposite Police Thana, Mahaveer Nagar, Kota, Rajasthan 324005';
const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="page-shell">
      <div className="topline">
        <span>YOUR NEIGHBOURHOOD CLOTHING STORE</span>
        <span className="topline-right"><MapPin size={13} /> MAHAVEER NAGAR, KOTA</span>
      </div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Parivartan home" onClick={closeMenu}>
          <span className="brand-mark">प</span>
          <span className="brand-name">PARIVARTAN<small>परिवर्तन · KOTA</small></span>
        </a>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#discover" onClick={closeMenu}>Discover</a>
          <a href="#visit" onClick={closeMenu}>Visit us</a>
          <a href="#services" onClick={closeMenu}>Shopping options</a>
          <a href="#contact" className="nav-call" onClick={closeMenu}><Phone size={15} /> Call the store</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> A LITTLE STYLE, A LOT OF HEART</div>
          <h1 className="serif reveal">Good days<br />look <em>good</em> on you.</h1>
          <p className="hero-deck reveal reveal-delay">A friendly place in Kota to find something that feels like you. Come in, take your time, and discover ready-to-wear for the everyday and the in-between.</p>
          <div className="hero-actions reveal reveal-late">
            <a className="button button-dark" href={directions} target="_blank" rel="noreferrer">Find our store <ArrowUpRight size={17} /></a>
            <a className="text-link" href={tel}><Phone size={16} /> {phone}</a>
          </div>
          <div className="hero-note"><span className="hindi">परिवर्तन</span><span>New looks. Familiar warmth.</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image photo-hover"><img src="/parivartan-editorial.jpg" alt="Contemporary Indian clothing in warm rust and teal tones" /></div>
          <div className="hero-stamp"><span className="hindi">अपना अंदाज़</span><span>YOUR STYLE<br />YOUR WAY</span></div>
          <div className="hero-caption"><span>MADE FOR REAL DAYS</span><span>01 — KOTA</span></div>
          <div className="sun-disc" aria-hidden="true" />
        </div>
        <a href="#discover" className="scroll-cue"><ArrowDown size={15} /> SCROLL A LITTLE</a>
      </section>

      <div className="ticker" aria-label="Parivartan clothing store in Kota">
        <div className="marquee-track">
          {[0, 1, 2, 3].map((item) => <span className="ticker-unit" key={item}>A GOOD FIND IS A GOOD FEELING <i>✳</i> PARIVARTAN, KOTA <i>✳</i> COME AS YOU ARE <i>✳</i></span>)}
        </div>
      </div>

      <section className="discover section-pad" id="discover">
        <div className="section-kicker"><span>01 / WHAT YOU'LL FIND</span><span>THE LITTLE DETAILS MATTER</span></div>
        <div className="discover-grid">
          <div className="discover-intro">
            <h2 className="serif">A wardrobe<br />with <em>room</em><br />for everyone.</h2>
            <p>Parivartan is an independent family clothing store, here in the neighbourhood and ready to welcome you in.</p>
            <a className="under-link" href={tel}>Ask us what’s in store <ArrowRight size={16} /></a>
          </div>
          <div className="feature-stack">
            <article className="feature-card rust-card">
              <div className="feature-number">01</div>
              <div><span className="feature-label">A LITTLE LAYER, A LOT OF LOOK</span><h3>Women's<br /><em>jackets</em></h3></div>
              <span className="feature-mark">✳</span>
            </article>
            <article className="feature-card cream-card">
              <div className="feature-number">02</div>
              <div><span className="feature-label">AN EASY YES FOR THE DAY</span><h3>Kurti<br /><em>sets</em></h3></div>
              <span className="feature-mark">❋</span>
            </article>
          </div>
          <div className="discover-aside">
            <div className="aside-topline">GOOD TO KNOW</div>
            <p>These are a couple of the looks people have mentioned. The best way to see what’s here today? Drop by or give us a call.</p>
            <div className="rating-box">
              <div className="stars" aria-label="4.7 out of 5 stars"><Star /><Star /><Star /><Star /><Star /></div>
              <div className="rating-score">4.7 <span>/ 5</span></div>
              <p>From 60 reviews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-pattern" aria-hidden="true" />
        <div className="manifesto-inner">
          <span className="manifesto-label">THE PARIVARTAN FEELING</span>
          <h2 className="serif">Not a scroll.<br />A <em>real</em> good find.</h2>
          <p>See the colour in daylight. Find your fit. Take a moment. There's something special about choosing your next favourite in person.</p>
          <a className="button button-light" href="#visit">Come say hello <ArrowRight size={17} /></a>
          <span className="manifesto-flower">✳</span>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-kicker"><span>02 / MAKE IT YOUR WAY</span><span>HERE WHEN YOU NEED US</span></div>
        <div className="services-heading">
          <h2 className="serif">Shopping that<br /><em>fits your day.</em></h2>
          <p>Whether you’re popping in nearby or planning ahead, there are a few ways to shop with Parivartan.</p>
        </div>
        <div className="service-list">
          <article className="service-row">
            <span className="service-index">A</span><div className="service-icon"><ShoppingBag /></div>
            <div className="service-text"><h3>In-store shopping</h3><p>Visit us in Mahaveer Nagar and browse in person.</p></div>
            <a href={directions} target="_blank" rel="noreferrer" aria-label="Get directions to shop in store"><ArrowUpRight /></a>
          </article>
          <article className="service-row">
            <span className="service-index">B</span><div className="service-icon"><MapPin /></div>
            <div className="service-text"><h3>In-store pickup</h3><p>Pickup is available from the store. Call us to ask about an item.</p></div>
            <a href={tel} aria-label="Call about in-store pickup"><Phone /></a>
          </article>
          <article className="service-row">
            <span className="service-index">C</span><div className="service-icon"><ArrowRight /></div>
            <div className="service-text"><h3>Delivery</h3><p>Delivery is available. Please call the store to discuss the details.</p></div>
            <a href={tel} aria-label="Call to ask about delivery"><Phone /></a>
          </article>
        </div>
        <p className="service-footnote">For availability and details, give the store a call. We’ll be glad to help.</p>
      </section>

      <section className="editorial">
        <div className="editorial-image photo-hover"><img src="/parivartan-editorial.jpg" alt="A glimpse of contemporary women's clothing at Parivartan" /></div>
        <div className="editorial-copy">
          <span className="editorial-kicker">A PLACE TO FIND YOUR NEXT FAVOURITE</span>
          <h2 className="serif">Come for a look.<br /><em>Leave feeling good.</em></h2>
          <p>There's no catalogue to scroll through here. Just a welcoming store, ready-to-wear clothing, and a chance to find something that feels right when you see it.</p>
          <a className="button button-dark" href={directions} target="_blank" rel="noreferrer">Plan your visit <ArrowUpRight size={17} /></a>
          <span className="editorial-scribble hindi">आपका स्वागत है</span>
        </div>
      </section>

      <section className="visit section-pad" id="visit">
        <div className="section-kicker"><span>03 / RIGHT HERE IN KOTA</span><span>COME ON OVER</span></div>
        <div className="visit-grid">
          <div className="visit-copy">
            <span className="visit-label">FIND PARIVARTAN</span>
            <h2 className="serif">Just around<br />the <em>corner.</em></h2>
            <p>We’re on Rangbari Road, opposite Police Thana in Mahaveer Nagar. Find us at Plot No 9-F-17, 3rd.</p>
            <a className="button button-dark" href={directions} target="_blank" rel="noreferrer"><MapPin size={17} /> Get directions <ArrowUpRight size={16} /></a>
          </div>
          <div className="visit-details">
            <div className="address-card">
              <div className="map-art" aria-hidden="true">
                <div className="map-road road-one" /><div className="map-road road-two" /><div className="map-road road-three" />
                <div className="map-plot"><span className="map-pin"><MapPin size={20} /></span><span>PARIVARTAN</span></div>
                <span className="map-label map-label-one">RANGBARI ROAD</span><span className="map-label map-label-two">MAHAVEER NAGAR</span>
                <span className="map-landmark">POLICE THANA</span>
              </div>
              <div className="address-content">
                <span className="address-overline">COME FIND US</span>
                <p>{address}</p>
                <div className="address-actions"><a href={directions} target="_blank" rel="noreferrer">Open in Maps <ArrowUpRight size={15} /></a><span><Clock3 size={14} /> Closes at 10 pm</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="last-word" id="contact">
        <div className="last-word-inner">
          <span className="eyebrow"><span className="eyebrow-line" /> GOOD THINGS ARE CLOSER THAN YOU THINK</span>
          <h2 className="serif">Your next good<br /><em>find starts here.</em></h2>
          <div className="last-actions">
            <a className="button button-light" href={tel}><Phone size={16} /> Call {phone}</a>
            <a className="last-map" href={directions} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a>
          </div>
          <span className="last-hindi hindi">मिलते हैं!</span>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">प</span><span className="brand-name">PARIVARTAN<small>परिवर्तन · KOTA</small></span>
        </a>
        <div className="footer-address"><MapPin size={15} /><span>Plot No 9-F-17, Rangbari Road, Mahaveer Nagar, Kota</span></div>
        <a className="footer-phone" href={tel}><Phone size={15} /> {phone}</a>
        <span className="footer-note">A local store. A warm welcome.</span>
      </footer>
      <div className="mobile-quick"><a href={tel}><Phone size={17} /> Call store</a><a href={directions} target="_blank" rel="noreferrer"><MapPin size={17} /> Directions</a></div>
    </main>
  );
}

export default App;
