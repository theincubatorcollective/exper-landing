import Image from "next/image";
import { events } from "@/lib/events";
import { RotatingHeadline } from "./rotating-headline";
import { HowItWorks } from "./how-it-works";
import { TryIt } from "./try-it";

function Logo() {
  return (
    <a className="logo" href="#" aria-label="EXPER home">
      <Image src="/logo.png" alt="" width={24} height={23} priority />
      EXPER
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-in">
          <Logo />
          <nav className="nav-mid" aria-label="Primary">
            <a href="#why">Why</a>
            <a href="#how">How it works</a>
            <a href="#events">Find Events</a>
            <a href="#try">Your Collectibles</a>
            <a href="#organisers">Organisers</a>
          </nav>
          <a className="btn" href="#app">App coming soon</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <Image src="/party.jpg" alt="" fill priority sizes="100vw" />
          <div className="wrap">
            <div className="hero-copy">
              <span className="tag">EXPER / Go be part of it</span>
              <RotatingHeadline />
              <div className="hero-cta">
                <a className="btn" href="#how">See how it works</a>
                <a className="btn-ghost" href="#events">Browse events</a>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="why">
          <div className="wrap why-grid">
            <div className="story">
              <p><b>Picture this.</b> <span className="muted">The family photo album.</span></p>
              <p className="muted">Every event, there you are. In the corner. Half a head. Or behind the camera.</p>
              <p><b>You were there.</b> <span className="muted">You just weren&apos;t in the picture.</span></p>
              <p className="muted">Life does that too. You can be at an experience and still miss the moment.</p>
              <p className="lime">So we made EXPER. To put you in it.</p>
            </div>
            <figure className="moment">
              <div className="moment-img">
                <Image src="/moment-portrait.jpg" alt="A man in a cap sitting back in an armchair in a warm orange room, his shadow on the wall behind him" fill sizes="(max-width: 860px) 100vw, 430px" />
              </div>
              <figcaption className="tiny muted">In the moment, not at the edge of it.</figcaption>
            </figure>
          </div>
        </section>

        <section className="sec alt">
          <div className="wrap">
            <span className="tag">The idea</span>
            <h2 className="h-xl">A sure way to be part of the moments you belong in.</h2>
            <div className="idea-cols">
              <div className="idea-col">
                <span className="tag">01</span>
                <h3>Get in easily</h3>
                <p>Discover events, buy tickets and check in without having to work out how the night goes.</p>
              </div>
              <div className="idea-col">
                <span className="tag">02</span>
                <h3>Join in while you&apos;re there</h3>
                <p>React to the music, answer prompts and take on small challenges with your squad.</p>
              </div>
              <div className="idea-col">
                <span className="tag">03</span>
                <h3>Take something home</h3>
                <p>Your participation becomes a one-of-one generative artwork: your own record of that night.</p>
                <p>Your participation becomes collectibles such as one-of-one generative artwork and all your keepsakes all in one place.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="how">
          <div className="wrap">
            <span className="tag">How it works</span>
            <h2 className="h-lg">Six steps. One night you&apos;ll keep.</h2>
            <p className="tiny muted how-hint">Tap a step.</p>
            <HowItWorks />
          </div>
        </section>

        <section className="sec" id="try">
          <div className="wrap">
            <TryIt />
          </div>
        </section>

        <section className="sec" id="events">
          <div className="wrap">
            <span className="tag">On the horizon</span>
            <h2 className="h-lg">A good place to start.</h2>
            <p className="tiny muted events-note">Preview events. Sample dates and prices. Tickets aren&apos;t on sale yet.</p>
            <div className="cards">
              {events.map((e) => (
                <article className="card" key={e.slug}>
                  <div className="card-img">
                    <Image src={e.image} alt={e.imageAlt} fill sizes="(max-width: 860px) 100vw, 360px" />
                  </div>
                  <h3>{e.title}</h3>
                  <p className="tiny muted">{e.day} · {e.venue} · {e.price} + {e.fee} fee</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="app">
          <div className="wrap">
            <div className="app-card">
              <div>
                <span className="tag">The EXPER app · Coming soon</span>
                <h2 className="h-md">Don&apos;t just go. Get into it.</h2>
                <p className="tiny muted">Tickets on the web first. The app follows.</p>
                <div className="stores">
                  <span className="store-soon" aria-disabled="true">
                    <svg viewBox="0 0 384 512" width="20" height="26" fill="currentColor" aria-hidden="true">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    <span className="store-txt"><small>Coming soon on the</small><b>App Store</b></span>
                  </span>
                  <span className="store-soon" aria-disabled="true">
                    <svg viewBox="0 0 24 26" width="22" height="24" aria-hidden="true">
                      <path d="M2.5 1.2 22 13 2.5 24.8Z" fill="currentColor" />
                      <path d="M2.5 1.2 13.6 13 2.5 24.8M13.6 13 22 13" fill="none" stroke="#0d0d0d" strokeWidth="1.3" />
                    </svg>
                    <span className="store-txt"><small>Coming soon on</small><b>Google Play</b></span>
                  </span>
                </div>
              </div>
              <div className="app-side">
                <div className="iphone">
                  <div className="iphone-screen">
                    <Image src="/app-screen.png" alt="Preview of the EXPER app home screen: a live Neon Solstice night in Lagos, your event pass, and popular events this week" fill sizes="260px" />
                    <span className="iphone-island" aria-hidden="true" />
                    <span className="iphone-bar" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="organisers">
          <div className="wrap org-row">
            <div>
              <span className="tag">For the people who make it happen</span>
              <h2 className="h-lg">Make room for something different.</h2>
            </div>
            <a className="btn" href="#">Get Organiser Access</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap foot">
          <div>
            <Logo />
            <p className="tiny muted">Find your people. Be part of the moment.</p>
            <p className="tiny muted">© 2026 EXPER. Public website concept. All events, venues and organisers shown are fictional.</p>
          </div>
          <ul className="foot-links">
            <li><a href="#">Help</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Refund policy</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
