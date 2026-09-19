import Link from "next/link";

export const metadata = { title: "Support — Piengee" };

export default function SupportPage() {
  return (
    <main className="legal-page">
      <header className="legal-nav"><Link href="/" className="brand">← Piengee</Link><div><Link href="/privacy/">Privacy</Link><Link href="/terms-and-conditions/">Terms</Link></div></header>
      <article>
        <p className="eyebrow">SUPPORT</p>
        <h1>How can we help?</h1>
        <p className="intro">For help with Piengee, email us at <a href="mailto:support@kenatsumu.studio">support@kenatsumu.studio</a>.</p>
        <section><h2>Include a few details</h2><p>Please include your Piengee version, iOS or iPadOS version, and a short description of what happened. Screenshots are helpful when possible.</p></section>
        <section><h2>Piengee Pro</h2><p>If a purchase does not appear, open Piengee Pro and choose Restore Purchases. If it still does not unlock, contact us with the Apple ID country or region used for the purchase.</p></section>
      </article>
    </main>
  );
}
