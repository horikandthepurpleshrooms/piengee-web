import Link from "next/link";

export const metadata = { title: "Terms and Conditions — Piengee" };

export default function TermsAndConditionsPage() {
  return (
    <main className="legal-page">
      <header className="legal-nav"><Link href="/" className="brand">← Piengee</Link><div><Link href="/privacy/">Privacy</Link><Link href="/support/">Support</Link></div></header>
      <article>
        <p className="eyebrow">TERMS AND CONDITIONS</p>
        <h1>Use Piengee responsibly.</h1>
        <p className="updated">Last updated: September 19, 2026</p>
        <section><h2>Acceptance</h2><p>By downloading or using Piengee, you agree to these Terms and Conditions. If you do not agree, do not use the app.</p></section>
        <section><h2>License to use Piengee</h2><p>We grant you a personal, non-exclusive, non-transferable, revocable license to use Piengee in accordance with these terms and the Apple Media Services Terms and Conditions that apply to your download.</p></section>
        <section><h2>Your content and responsibility</h2><p>You are responsible for every photo, PNG, document, image, idea, or other material you add to, process in, export from, or share using Piengee. You must own that content or have all necessary rights and permission to use it. Do not use Piengee for unlawful, infringing, harmful, or abusive activity.</p></section>
        <section><h2>Ownership</h2><p>You retain ownership of your content. Piengee does not claim ownership of the materials you add to your boards. We retain all rights in Piengee, including its software, design, name, and branding.</p></section>
        <section><h2>Piengee Pro</h2><p>Piengee Pro is a one-time purchase that unlocks the Pro features shown in the app. Purchases, billing, refunds, and restoration are handled under Apple’s applicable terms and policies.</p></section>
        <section><h2>Availability and changes</h2><p>We may update, change, suspend, or discontinue parts of Piengee when needed. We may also update these terms. Continued use after an updated version is posted means you accept the updated terms.</p></section>
        <section><h2>Disclaimers and limits of liability</h2><p>Piengee is provided on an “as is” and “as available” basis. You are solely responsible for how you use the app and for the content and data you choose to add, process, export, or share. To the maximum extent permitted by law, Kenatsumu Studio is not responsible for your use of Piengee, your content, the loss or disclosure of your content, or any consequences arising from material you create, process, export, or share. Nothing in these terms limits rights that cannot be excluded under applicable law.</p></section>
        <section><h2>Contact</h2><p>For questions about these terms, contact <a href="mailto:support@kenatsumu.studio">support@kenatsumu.studio</a>.</p></section>
      </article>
    </main>
  );
}
