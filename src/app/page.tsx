import { categories, events } from "@/lib/events";

function Logo() {
  return (
    <a className="logo" href="#" aria-label="EXPER home">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M1 1l12 12M13 1L1 13" />
      </svg>
      EXPER
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <Logo />
        <nav className="nav-mid" aria-label="Primary">
          <a href="#events" className="active">Explore</a>
          <a href="#search">Search events</a>
        </nav>
        <div className="nav-right">
          <a href="#">Log in</a>
          <a className="btn-outline" href="#app">App coming soon</a>
        </div>
      </header>

      <main>
        <section className="hero wrap">
          <div className="meta-row">
            <span className="tag">EXPER / Go be part of it</span>
            <span className="tag muted">Launching soon · London</span>
          </div>
          <div className="hero-grid">
            <h1>Life isn&apos;t a spectator sport.</h1>
            <div className="hero-side">
              <p>Find the nights, sounds and people that move you. Discover experiences. Then become part of them.</p>
              <a className="btn" href="#events">Explore experiences</a>
            </div>
          </div>
          <figure className="hero-img photo photo-crowd" role="img" aria-label="Crowd with hands raised under red stage light" />
          <div className="meta-row small">
            <span className="muted">In the room. Not on the sidelines.</span>
            <a className="lime" href="#events">Discover</a>
          </div>
        </section>

        <section className="search wrap" id="search">
          <h2 className="h-md">What are you getting into?</h2>
          <form className="search-row" role="search">
            <label className="search-box">
              <span className="sr-only">Search artists, events, places</span>
              <input type="search" placeholder="Search artists, events, places" />
            </label>
            <button type="button" className="pill">London</button>
            <button type="button" className="pill">Any date</button>
          </form>
          <div className="chips" role="group" aria-label="Categories">
            {categories.map((c, i) => (
              <button key={c} className={i === 0 ? "chip on" : "chip"}>{c}</button>
            ))}
          </div>
          <p className="tiny muted">A preview of what&apos;s coming. Sample events, dates and prices. Tickets aren&apos;t on sale yet.</p>
        </section>

        <section className="wrap events" id="events">
          <div className="meta-row">
            <span className="tag">Coming soon · On the horizon</span>
            <a className="tiny lime" href="#">Explore all events</a>
          </div>
          <h2 className="h-lg">A good place to start.</h2>
          <div className="cards">
            {events.map((e) => (
              <article className="card" key={e.slug}>
                <div className={`photo photo-${e.tone}`}>
                  <div className="plate">
                    <small>{e.kicker}</small>
                    <b>{e.title.toUpperCase()}</b>
                    <small>{e.day} / London</small>
                  </div>
                </div>
                <p className="tiny muted">{e.day} · {e.time}</p>
                <h3>{e.title}</h3>
                <p className="tiny muted">{e.venue}<br />{e.genre}</p>
                <p className="tiny">{e.price} + {e.fee} fee</p>
                <p className="tiny lime">Tickets soon · preview</p>
              </article>
            ))}
          </div>
        </section>

        <section className="focus">
          <div className="wrap focus-grid">
            <div className="photo photo-mono">
              <div className="plate">
                <small>A night in motion</small>
                <b>SAMM HENSHAW</b>
                <small>Sat 5 Dec / London</small>
              </div>
            </div>
            <div className="focus-copy">
              <span className="tag">In focus</span>
              <h2 className="h-lg">Samm Henshaw&apos;s Live in Lagos.</h2>
              <p className="muted">A night where left-field electronics meet the dance floor. Three fictional selectors. One room. A sound that stays with you.</p>
              <hr />
              <p className="tiny">Sat 5 Dec 2026 · 19:00–01:00 GMT<br /><span className="muted">The Relay Hall · London</span></p>
              <p className="tiny muted">Sera Vale · Onda Index · Low Assembly<br />General admission £28.00 + £2.80 fee · sample</p>
              <a className="btn" href="#">Discover Afterimage</a>
            </div>
          </div>
        </section>

        <section className="band photo photo-party">
          <p>There&apos;s going. Then there&apos;s being there.</p>
        </section>

        <section className="wrap appsec" id="app">
          <span className="tag">What&apos;s coming</span>
          <div className="app-card">
            <div>
              <span className="status"><i aria-hidden="true" />Coming soon</span>
              <h2 className="h-lg">Don&apos;t just go.<br />Get into it.</h2>
              <p className="muted small-p">The EXPER app is on its way. Join the room with prompts, live reactions and small missions, then keep the memories after the lights come up.</p>
              <div className="stores">
                <span className="store-soon" aria-disabled="true">App Store <small>Coming soon</small></span>
                <span className="store-soon" aria-disabled="true">Google Play <small>Coming soon</small></span>
              </div>
              <p className="tiny muted">Events and tickets on the web arrive first. The app follows.</p>
            </div>
            <div className="phone" role="img" aria-label="Preview of the EXPER app showing a live prompt and a mission">
              <div className="phone-screen">
                <small className="tag">In the room · Preview</small>
                <b>What&apos;s tonight&apos;s headline?</b>
                <span className="phone-opt">Sera Vale</span>
                <span className="phone-opt on">Onda Index</span>
                <span className="phone-opt">Low Assembly</span>
                <small className="tiny muted">Mission 1 of 3 · Find a new corner of the room</small>
              </div>
            </div>
          </div>
          <ol className="roadmap" aria-label="App roadmap">
            <li className="now"><span className="tag">Next up</span><p>Discover events and buy tickets on the web.</p></li>
            <li><span className="tag">Then</span><p>The app, with prompts and live reactions in the room.</p></li>
            <li><span className="tag">After that</span><p>Missions, then memories you keep after the night.</p></li>
          </ol>
        </section>

        <section className="wrap organisers">
          <span className="tag">For the people who make it happen</span>
          <div className="org-row">
            <h2 className="h-lg">Make room for something different.</h2>
            <a className="btn-outline" href="#">Organiser Access</a>
          </div>
          <p className="tiny muted">Bring your next experience to EXPER. Start with Organiser Access.</p>
        </section>
      </main>

      <footer className="footer wrap">
        <div className="foot-grid">
          <div>
            <Logo />
            <p className="tiny muted">Find your people. Be part of the moment.</p>
          </div>
          <ul><li><a href="#">Help</a></li><li><a href="#">About</a></li><li><a href="#">Organiser Access</a></li></ul>
          <ul><li><a href="#">Terms</a></li><li><a href="#">Privacy</a></li><li><a href="#">Refund policy</a></li></ul>
          <ul><li><a href="#">Instagram</a></li><li><a href="#">TikTok</a></li><li><a href="#">YouTube</a></li></ul>
        </div>
        <p className="tiny muted">© 2026 EXPER. Public website concept. All events, venues and organisers shown are fictional.</p>
      </footer>
    </>
  );
}
