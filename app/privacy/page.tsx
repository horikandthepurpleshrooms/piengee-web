import Link from "next/link";

export const metadata = { title: "Privacy — Piengee" };

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-nav"><Link href="/" className="brand">← Piengee</Link><Link href="/support/">Support</Link></header>
      <article>
        <p className="eyebrow">PRIVACY POLICY</p>
        <h1>Your work stays on your device.</h1>
        <p className="updated">Last updated: September 19, 2026</p>
        <section><h2>What Piengee stores</h2><p>Piengee saves your boards and the images you add to them locally on your device. We do not operate an account system or a cloud service for your board data.</p></section>
        <section><h2>Photos</h2><p>When you choose an image to import, Piengee uses it only to create or update your board. When you choose to save an export, Piengee asks for permission to add that image to your photo library.</p></section>
        <section><h2>Purchases</h2><p>Piengee Pro purchases are processed by Apple. We do not receive or store your payment details.</p></section>
        <section><h2>Support</h2><p>If you contact support, we receive the information you include in your email and use it only to respond to your request.</p></section>
        <section><h2>Contact</h2><p>Questions about this policy can be sent to <a href="mailto:support@kenatsumu.studio">support@kenatsumu.studio</a>.</p></section>
      </article>
    </main>
  );
}
