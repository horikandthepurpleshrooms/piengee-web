import Image from "next/image";
import Link from "next/link";

const features = [
  ["Arrange freely", "Move, resize, rotate, layer, and lock every image."],
  ["Keep it yours", "Boards and imported images stay on your device."],
  ["Export cleanly", "Save the finished board at its full canvas size."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <Link href="/" className="brand" aria-label="Piengee home">
          <Image src="/icon.png" alt="" width={34} height={34} priority />
          <span>Piengee</span>
        </Link>
        <div className="nav-links">
          <a href="#features">Features</a>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms-and-conditions/">Terms</Link>
          <Link href="/support/">Support</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <Image className="hero-icon" src="/icon.png" alt="Piengee app icon" width={144} height={144} priority />
          <p className="eyebrow">VISUAL BOARDS, MADE SIMPLE</p>
          <h1>Make space for ideas.</h1>
          <p className="lede">Piengee is a calm canvas for arranging photos, PNGs, references, and whatever you are thinking through.</p>
          <div className="hero-actions">
            <Link className="button" href="/support/">Get support</Link>
            <Link className="text-link" href="/privacy/">Read our privacy policy <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract Piengee canvas preview">
          <div className="grid" />
          <div className="hero-glow" />
          <span className="dot dot-one" />
          <span className="dot dot-two" />
        </div>
      </section>

      <section className="features" id="features" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="eyebrow">THE CANVAS</p>
          <h2 id="features-title">An uncluttered place for visual thinking.</h2>
        </div>
        <div className="feature-grid">
          {features.map(([title, detail], index) => (
            <article className="feature" key={title}>
              <span className="feature-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy-callout">
        <div>
          <p className="eyebrow">PRIVATE BY DESIGN</p>
          <h2>Your boards stay with you.</h2>
        </div>
        <p>Piengee does not require an account. Your boards and imported images are stored on your device.</p>
        <Link className="text-link" href="/privacy/">Privacy details <span aria-hidden="true">→</span></Link>
      </section>

      <footer>
        <span>© 2026 Kenatsumu Studio</span>
        <div>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms-and-conditions/">Terms</Link>
          <Link href="/support/">Support</Link>
          <a href="mailto:support@kenatsumu.studio">support@kenatsumu.studio</a>
        </div>
      </footer>
    </main>
  );
}
