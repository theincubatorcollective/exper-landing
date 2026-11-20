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
                <Image src="/moment.jpg" alt="A man in a cap on a sofa, lit warm orange, with his shadow on the wall behind him" fill sizes="(max-width: 860px) 100vw, 430px" />
              </div>
              <figcaption className="tiny muted">In the moment, not at the edge of it.</figcaption>
            </figure>
          </div>
        </section>

        <section className="sec alt">
          <div className="wrap">
            <span className="tag">The idea</span>
            <h2 className="h-xl">A sure way to be part of the moments you belong in.</h2>
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
              </div>
              <div className="stores">
                <span className="store-soon" aria-disabled="true">App Store · soon</span>
                <span className="store-soon" aria-disabled="true">Google Play · soon</span>
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
