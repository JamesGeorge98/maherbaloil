import { useEffect, useRef } from "react";

const ingredients = [
  "Hibiscus Flower",
  "Henna",
  "Rose Flowers",
  "Curry Leaves",
  "Neem",
  "Amla",
  "Ashwagandha Root",
  "Kalmegh",
  "Bhringraj",
  "Tulsi",
  "Fenugreek",
  "Black Cumin",
  "Cherry Flower",
  "Vetiver",
  "White Turmeric",
  "Ajwain",
  "Sandal",
  "Guava Leaves",
  "Aloe Vera",
  "+ 15 More Herbs"
];

const benefits = [
  {
    icon: "🌿",
    title: "Restricts Hair Fall",
    desc: "Deep root nourishment locks hair firmly and dramatically cuts breakage and shedding."
  },
  {
    icon: "🌱",
    title: "Enhances Hair Growth",
    desc: "36+ actives stimulate dormant follicles, accelerating visible new growth."
  },
  {
    icon: "⚫",
    title: "Prevents Premature Greying",
    desc: "Melanin-supporting botanicals preserve your hair's natural colour longer."
  },
  {
    icon: "💧",
    title: "Thickness & Volume",
    desc: "Each strand is fortified from within for a visibly fuller, denser mane."
  },
  {
    icon: "🛡️",
    title: "Scalp Protection",
    desc: "Neem, Tulsi and Sandal create an antimicrobial shield for a healthy scalp."
  },
  {
    icon: "✨",
    title: "Lustrous Shine",
    desc: "Amla and Rose restore natural gloss and silkiness with every application."
  }
];

const testimonials = [
  {
    name: "Priya R.",
    city: "Mumbai",
    rating: 5,
    text: "After just 3 weeks my hair fall reduced so much. Friends keep asking what I changed!"
  },
  {
    name: "Kavitha M.",
    city: "Chennai",
    rating: 5,
    text: "The herbal scent is so soothing and my grey hairs are definitely slowing down."
  },
  {
    name: "Anita S.",
    city: "Pune",
    rating: 5,
    text: "My hair is visibly thicker. Best oil I've tried and completely natural."
  }
];

const Stars = ({ count }: { count: number }) => (
  <span
    style={{
      color: "#D4A017",
      fontSize: "1.1rem",
      letterSpacing: "2px",
      display: "block",
      marginBottom: "14px"
    }}
  >
    {"★".repeat(count)}
    {"☆".repeat(5 - count)}
  </span>
);

export default function ProductLanding() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --rose: #C2185B; --rose-mid: #D81B60; --rose-lite: #F48FB1;
          --gold: #D4A017; --gold-lite: #F5D76E;
          --cream: #FFF8F3; --ink: #1A0A10; --muted: #7B4F5E;
          --radius: 18px; --shadow: 0 20px 60px rgba(194,24,91,.18);
        }
        body { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--ink); }

        .reveal { opacity: 0; transform: translateY(36px); transition: opacity .7s ease, transform .7s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal.delay-1 { transition-delay: .1s; }
        .reveal.delay-2 { transition-delay: .22s; }
        .reveal.delay-3 { transition-delay: .34s; }
        .reveal.delay-4 { transition-delay: .46s; }

        nav {
          position: sticky; top: 0; z-index: 100;
          background: rgba(255,248,243,.92); backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(194,24,91,.12);
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 5vw;
        }
        .nav-logo { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--rose); font-weight: 900; }
        .nav-logo span { color: var(--gold); }
        .nav-cta {
          background: var(--rose); color: #fff; padding: 9px 22px; border-radius: 999px;
          font-weight: 600; font-size: .9rem; border: none; cursor: pointer;
          transition: background .2s, transform .15s;
        }
        .nav-cta:hover { background: var(--rose-mid); transform: scale(1.04); }

        .hero {
          min-height: 92vh;
          background: linear-gradient(135deg, #8B0038 0%, #C2185B 45%, #E91E8C 75%, #F06292 100%);
          display: grid; grid-template-columns: 1fr 1fr; align-items: center;
          overflow: hidden; position: relative;
        }
        .hero::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 70% 30%, rgba(255,255,255,.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .hero-text { padding: 60px 5vw 60px 8vw; color: #fff; position: relative; z-index: 2; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,.15); border: 1px solid rgba(255,255,255,.3);
          color: #fff; padding: 6px 16px; border-radius: 999px;
          font-size: .8rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
          margin-bottom: 22px; backdrop-filter: blur(8px);
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          font-weight: 900; line-height: 1.1; margin-bottom: 18px;
        }
        .hero h1 em { color: var(--gold-lite); font-style: italic; }
        .hero-sub { font-size: 1.1rem; opacity: .9; margin-bottom: 28px; font-weight: 300; max-width: 420px; }
        .hero-checks { list-style: none; margin-bottom: 36px; }
        .hero-checks li { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; font-size: 1rem; font-weight: 500; }
        .hero-checks li::before {
          content: '✓'; background: var(--gold); color: #fff;
          width: 22px; height: 22px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: .75rem; font-weight: 900; flex-shrink: 0;
        }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
        .btn-primary {
          background: var(--gold); color: var(--ink); padding: 15px 34px; border-radius: 999px;
          font-weight: 700; font-size: 1rem; border: none; cursor: pointer;
          box-shadow: 0 8px 30px rgba(212,160,23,.45);
          transition: transform .2s, box-shadow .2s;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(212,160,23,.55); }
        .btn-outline {
          background: transparent; color: #fff; padding: 14px 28px; border-radius: 999px;
          font-weight: 600; font-size: .95rem; border: 2px solid rgba(255,255,255,.5); cursor: pointer;
          transition: background .2s;
        }
        .btn-outline:hover { background: rgba(255,255,255,.12); }
        .hero-price-tag { font-size: .9rem; color: rgba(255,255,255,.75); margin-top: 16px; }
        .hero-price-tag strong { color: var(--gold-lite); font-size: 1.3rem; }

        .hero-image-wrap {
          position: relative; display: flex; justify-content: center; align-items: flex-end;
          height: 100%; min-height: 500px; padding-bottom: 0;
        }
        .hero-image-wrap img {
          height: min(80vh, 680px); width: auto; object-fit: contain;
          filter: drop-shadow(-20px 20px 50px rgba(0,0,0,.4));
          animation: float 5s ease-in-out infinite;
        }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        .hero-glow {
          position: absolute; bottom: -40px; left: 50%; transform: translateX(-50%);
          width: 240px; height: 60px; border-radius: 50%;
          background: rgba(0,0,0,.3); filter: blur(24px);
        }

        .trust-bar {
          background: var(--ink); color: #fff;
          display: flex; justify-content: center; gap: 4vw; flex-wrap: wrap;
          padding: 18px 5vw;
        }
        .trust-item { display: flex; align-items: center; gap: 8px; font-size: .9rem; font-weight: 500; }

        .section { padding: 80px 5vw; }
        .section-label {
          display: inline-block; color: var(--rose); font-weight: 700;
          font-size: .78rem; letter-spacing: .14em; text-transform: uppercase; margin-bottom: 12px;
        }
        .section-title {
          font-family: 'Playfair Display', serif; font-size: clamp(1.9rem, 3.5vw, 2.8rem);
          font-weight: 900; line-height: 1.2; margin-bottom: 16px;
        }
        .section-sub { color: var(--muted); max-width: 520px; font-size: 1.05rem; line-height: 1.7; }

        .benefits-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 22px; margin-top: 52px;
        }
        .benefit-card {
          background: #fff; border-radius: var(--radius); padding: 30px 26px;
          border: 1px solid rgba(194,24,91,.1); box-shadow: 0 4px 24px rgba(194,24,91,.07);
          transition: transform .25s, box-shadow .25s;
        }
        .benefit-card:hover { transform: translateY(-6px); box-shadow: var(--shadow); }
        .benefit-icon { font-size: 2rem; margin-bottom: 14px; }
        .benefit-card h3 { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 700; margin-bottom: 8px; }
        .benefit-card p { color: var(--muted); font-size: .95rem; line-height: 1.6; }

        .ingredients-section {
          background: linear-gradient(135deg, #1A0A10 0%, #3D0B22 100%);
          color: #fff; padding: 80px 5vw;
        }
        .ingredients-section .section-label { color: var(--gold-lite); }
        .ingredients-section .section-title { color: #fff; }
        .ingredients-section .section-sub { color: rgba(255,255,255,.65); }
        .ingredient-cloud { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 40px; }
        .ingredient-pill {
          background: rgba(255,255,255,.07); border: 1px solid rgba(212,160,23,.3);
          color: rgba(255,255,255,.9); padding: 9px 20px; border-radius: 999px;
          font-size: .9rem; font-weight: 500; transition: background .2s, border-color .2s; cursor: default;
        }
        .ingredient-pill:hover { background: rgba(212,160,23,.2); border-color: var(--gold); }

        .product-detail {
          display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 60px;
        }
        .product-detail img {
          width: 100%; max-width: 400px; margin: auto; display: block;
          border-radius: 24px; box-shadow: var(--shadow);
        }
        .detail-list { list-style: none; margin: 24px 0 32px; }
        .detail-list li {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 12px 0; border-bottom: 1px solid rgba(194,24,91,.1); font-size: 1rem;
        }
        .detail-list li:last-child { border: none; }
        .detail-list li span:first-child { color: var(--rose); font-size: 1.1rem; flex-shrink: 0; }
        .price-badge {
          display: inline-flex; align-items: baseline; gap: 6px;
          background: linear-gradient(135deg, var(--rose), var(--rose-mid));
          color: #fff; padding: 14px 28px; border-radius: var(--radius); margin-bottom: 24px;
        }
        .price-badge .price { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 900; }
        .price-badge .label { font-size: .85rem; opacity: .85; }

        .shop-buttons { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 10px; }
        .shop-btn {
          display: flex; align-items: center; gap: 10px;
          padding: 13px 26px; border-radius: 999px; font-weight: 700; font-size: .95rem;
          border: none; cursor: pointer; transition: transform .2s, box-shadow .2s; text-decoration: none;
        }
        .shop-btn-meesho { background: #F43262; color: #fff; box-shadow: 0 6px 22px rgba(244,50,98,.35); }
        .shop-btn-amazon { background: #FF9900; color: var(--ink); box-shadow: 0 6px 22px rgba(255,153,0,.35); }
        .shop-btn:hover { transform: translateY(-2px) scale(1.03); }

        .testi-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px; margin-top: 48px;
        }
        .testi-card {
          background: #fff; border-radius: var(--radius); padding: 30px;
          border-left: 4px solid var(--rose); box-shadow: 0 4px 24px rgba(194,24,91,.07);
        }
        .testi-text { color: var(--muted); font-size: .97rem; line-height: 1.7; font-style: italic; margin-bottom: 18px; }
        .testi-author { font-weight: 700; font-size: .95rem; }
        .testi-author span { font-weight: 400; color: var(--muted); }

        .how-section { background: #fff; }
        .steps { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 24px; margin-top: 48px; }
        .step { text-align: center; padding: 30px 20px; }
        .step-num {
          width: 52px; height: 52px; border-radius: 50%;
          background: linear-gradient(135deg, var(--rose), var(--rose-mid));
          color: #fff; font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 900;
          display: flex; align-items: center; justify-content: center; margin: 0 auto 18px;
          box-shadow: 0 6px 20px rgba(194,24,91,.35);
        }
        .step h4 { font-weight: 700; margin-bottom: 8px; font-size: 1rem; }
        .step p { color: var(--muted); font-size: .9rem; line-height: 1.6; }

        .cta-banner {
          background: linear-gradient(135deg, #8B0038, #C2185B 50%, #E91E8C);
          color: #fff; text-align: center; padding: 90px 5vw;
        }
        .cta-banner h2 { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; margin-bottom: 14px; }
        .cta-banner p { font-size: 1.1rem; opacity: .85; margin-bottom: 36px; }
        .cta-banner .shop-buttons { justify-content: center; }

        footer {
          background: var(--ink); color: rgba(255,255,255,.6);
          text-align: center; padding: 32px 5vw; font-size: .9rem;
        }
        footer strong { color: var(--rose-lite); }
        .footer-links { display: flex; justify-content: center; gap: 24px; margin-bottom: 14px; flex-wrap: wrap; }
        .footer-links a { color: rgba(255,255,255,.5); text-decoration: none; font-size: .85rem; }
        .footer-links a:hover { color: var(--rose-lite); }

        @media (max-width: 768px) {
          .hero { grid-template-columns: 1fr; }
          .hero-text { padding: 50px 6vw 30px; text-align: center; }
          .hero-checks li { justify-content: center; }
          .hero-actions { justify-content: center; }
          .hero-image-wrap { min-height: 320px; padding: 0 6vw 30px; }
          .hero-image-wrap img { height: 280px; }
          .product-detail { grid-template-columns: 1fr; }
          .product-detail img { max-width: 280px; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <span className="nav-logo">
          MA <span>Hair Oil</span>
        </span>
        <button
          className="nav-cta"
          onClick={() => window.open("https://www.meesho.com", "_blank")}
        >
          Buy Now ₹399
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero-text">
          <div className="reveal hero-badge">🌿 100% Herbal Formula</div>
          <h1 className="reveal delay-1">
            Grow <em>Thicker,</em>
            <br />
            Stronger Hair
            <br />
            Naturally
          </h1>
          <p className="hero-sub reveal delay-2">
            MA Hair Growth Herbal Oil — crafted from 36+ time-tested botanicals
            for dramatic results.
          </p>
          <ul className="hero-checks reveal delay-3">
            <li>Restricts Hair Fall</li>
            <li>Enhances Hair Growth</li>
            <li>Prevents Premature Greying</li>
          </ul>
          <div className="hero-actions reveal delay-4">
            <button
              className="btn-primary"
              onClick={() => window.open("https://www.meesho.com", "_blank")}
            >
              Shop on Meesho
            </button>
            <button
              className="btn-outline"
              onClick={() =>
                document
                  .getElementById("details")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </button>
          </div>
          <p className="hero-price-tag reveal delay-4">
            MRP <strong>₹399</strong> / 200 ml · All taxes inclusive
          </p>
        </div>
        <div className="hero-image-wrap">
          <img src={`${import.meta.env.BASE_URL}frontimagema.png`} alt="MA Hair Growth Herbal Oil" />
          <div className="hero-glow" />
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        {[
          ["🌿", "36+ Herbal Ingredients"],
          ["✅", "FSSAI Certified"],
          ["💯", "All Hair Types"],
          ["📦", "200ml Bottle"],
          ["⭐", "Trusted by Customers"]
        ].map(([icon, label]) => (
          <div className="trust-item" key={label}>
            <span>{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* BENEFITS */}
      <section className="section">
        <div className="reveal">
          <span className="section-label">Why MA Hair Oil</span>
        </div>
        <h2 className="section-title reveal delay-1">
          Your Hair Deserves
          <br />
          the Best of Nature
        </h2>
        <p className="section-sub reveal delay-2">
          Every drop is packed with traditional herbal wisdom — no harmful
          chemicals, only pure botanical power.
        </p>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div
              className={`benefit-card reveal delay-${(i % 4) + 1}`}
              key={b.title}
            >
              <div className="benefit-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="ingredients-section">
        <div className="reveal">
          <span className="section-label">Pure & Powerful</span>
        </div>
        <h2 className="section-title reveal delay-1">
          36+ Handpicked
          <br />
          Herbal Ingredients
        </h2>
        <p className="section-sub reveal delay-2">
          Each ingredient is selected for its centuries-old role in Ayurvedic
          hair care.
        </p>
        <div className="ingredient-cloud">
          {ingredients.map((ing, i) => (
            <span
              className={`ingredient-pill reveal delay-${(i % 4) + 1}`}
              key={ing}
            >
              {ing}
            </span>
          ))}
        </div>
      </section>

      {/* PRODUCT DETAILS */}
      <section className="section" id="details">
        <div className="product-detail">
          <div className="reveal">
            <img src={`${import.meta.env.BASE_URL}backma.png`} alt="MA Hair Oil Ingredients Label" />
          </div>
          <div>
            <div className="reveal">
              <span className="section-label">Product Details</span>
            </div>
            <h2 className="section-title reveal delay-1">
              Everything You
              <br />
              Need to Know
            </h2>
            <ul className="detail-list reveal delay-2">
              <li>
                <span>📦</span>
                <span>200 ml bottle — rich, deep-coloured herbal oil</span>
              </li>
              <li>
                <span>✅</span>
                <span>FSSAI Certified · No. 21525003001135</span>
              </li>
              <li>
                <span>🌿</span>
                <span>36+ premium herbal ingredients, no harsh chemicals</span>
              </li>
              <li>
                <span>💆</span>
                <span>Suitable for all hair types — dry, oily, normal</span>
              </li>
              <li>
                <span>🏭</span>
                <span>Made in Kanyakumari · Marketed from Mumbai</span>
              </li>
            </ul>
            <div className="price-badge reveal delay-3">
              <span className="label">MRP</span>
              <span className="price">₹399</span>
              <span className="label">· Inclusive of all taxes</span>
            </div>
            <div className="shop-buttons reveal delay-4">
              <a
                className="shop-btn shop-btn-meesho"
                href="https://www.meesho.com"
                target="_blank"
                rel="noreferrer"
              >
                🛍 Buy on Meesho
              </a>
              <a
                className="shop-btn shop-btn-amazon"
                href="https://www.amazon.in"
                target="_blank"
                rel="noreferrer"
              >
                📦 Coming on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="section how-section">
        <div style={{ textAlign: "center" }}>
          <div className="reveal">
            <span className="section-label">How to Use</span>
          </div>
          <h2 className="section-title reveal delay-1">Simple 4-Step Ritual</h2>
        </div>
        <div className="steps">
          {[
            [
              "1",
              "Warm the Oil",
              "Gently warm a small amount between your palms for better absorption."
            ],
            [
              "2",
              "Apply to Scalp",
              "Massage into the scalp using circular fingertip motions."
            ],
            [
              "3",
              "Coat the Strands",
              "Work the oil from roots to tips for full coverage."
            ],
            [
              "4",
              "Leave & Rinse",
              "Leave for 1–2 hours (or overnight) then wash with mild shampoo."
            ]
          ].map(([num, title, desc], i) => (
            <div className={`step reveal delay-${i + 1}`} key={num}>
              <div className="step-num">{num}</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="reveal">
          <span className="section-label">Customer Love</span>
        </div>
        <h2 className="section-title reveal delay-1">
          Real Results,
          <br />
          Real People
        </h2>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div className={`testi-card reveal delay-${i + 1}`} key={t.name}>
              <Stars count={t.rating} />
              <p className="testi-text">"{t.text}"</p>
              <p className="testi-author">
                {t.name} <span>· {t.city}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <h2 className="reveal">
          Start Your Hair Growth
          <br />
          Journey Today
        </h2>
        <p className="reveal delay-1">
          Join thousands who trust MA Hair Oil for thicker, healthier hair.
        </p>
        <div className="shop-buttons reveal delay-2">
          <a
            className="shop-btn shop-btn-meesho"
            href="https://www.meesho.com"
            target="_blank"
            rel="noreferrer"
          >
            🛍 Buy on Meesho — ₹399
          </a>
          <a
            className="shop-btn shop-btn-amazon"
            href="https://www.amazon.in"
            target="_blank"
            rel="noreferrer"
          >
            📦 Coming Soon on Amazon
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
          <a href="mailto:jaya.kala1998@gmail.com">jaya.kala1998@gmail.com</a>
          <a href="tel:9831129915">+91 98311 29915</a>
        </div>
        <p>
          © 2026 <strong>MA Herbal Hair Oil</strong>. Marketed by MA Hair Oil,
          Mulund (West), Mumbai – 400080. All rights reserved.
        </p>
      </footer>
    </>
  );
}
