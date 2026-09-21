import Image from "next/image";
import Link from "next/link";

const features = [["Make", "Add photos, PNGs, and little ideas."], ["Play", "Move, resize, rotate, and layer them."], ["Share", "Export a collage when it feels right."]];
const publicAsset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export default function Home() {
  return <main>
    <nav className="nav" aria-label="Primary navigation"><Link href="/" className="brand" aria-label="Piengee home"><Image src={publicAsset("/icon.png")} alt="" width={34} height={34} priority /><span>Piengee</span></Link><div className="nav-links"><Link href="/privacy/">Privacy</Link><Link href="/terms-and-conditions/">Terms</Link><Link href="/support/">Support</Link></div></nav>
    <section className="hero"><div className="hero-copy"><Image className="hero-icon" src={publicAsset("/icon.png")} alt="Piengee app icon" width={144} height={144} priority /><p className="eyebrow">A LITTLE COLLAGE MAKER</p><h1>Make it yours.</h1><p className="lede">A playful space for making small collages from the photos and bits you love.</p><div className="hero-actions"><a className="app-store-button" href="#app-store" aria-label="Get Piengee on the App Store"><span>Get it on the</span><strong>App Store</strong></a><Link className="text-link" href="#privacy">Made for you <span aria-hidden="true">→</span></Link></div></div></section>
    <section className="features" aria-labelledby="features-title"><div className="section-heading"><p className="eyebrow">SIMPLE BY DESIGN</p><h2 id="features-title">Just add, arrange, and share.</h2></div><div className="feature-grid">{features.map(([title, detail], index) => <article className="feature" key={title}><span className="feature-number">0{index + 1} /</span><h3>{title}</h3><p>{detail}</p></article>)}</div></section>
    <section className="privacy-callout" id="privacy"><div><p className="eyebrow">PRIVATE, TOO</p><h2>Your photos stay yours.</h2></div><p>No account and no cloud. Everything lives on your device.</p><Link className="text-link" href="/privacy/">Privacy <span aria-hidden="true">→</span></Link></section>
    <footer><span>© 2026 Kenatsumu Studio</span><div><Link href="/privacy/">Privacy</Link><Link href="/terms-and-conditions/">Terms</Link><Link href="/support/">Support</Link><a href="mailto:support@kenatsumu.studio">support@kenatsumu.studio</a></div></footer>
  </main>;
}
