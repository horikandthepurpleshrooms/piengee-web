import Link from "next/link";

export const metadata = { title: "Privacy — Piengee" };

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-nav"><Link href="/" className="brand">← Piengee</Link><div><Link href="/terms-and-conditions/">Terms</Link><Link href="/support/">Support</Link></div></header>
      <article>
        <p className="eyebrow">PRIVACY POLICY</p>
        <h1>Your work stays on your device.</h1>
        <p className="updated">Last updated: September 19, 2026</p>
        <section><h2>Summary</h2><p>Piengee is designed to work without an account. We do not collect, sell, rent, share, or track personal data through the app. Your boards and imported images remain on your device.</p></section>
        <section><h2>Data stored on your device</h2><p>Piengee stores board names, board layout information, imported photos and PNG files, and generated thumbnails locally in the app’s private storage. This data is used only to display and save your boards. We do not receive a copy of it.</p></section>
        <section><h2>Photos and exports</h2><p>When you choose an image to import, Piengee reads the image you select so it can be added to your board. When you choose to save an export, Piengee asks for permission to add the exported image to your photo library. You choose whether to grant that permission.</p></section>
        <section><h2>Purchases</h2><p>Piengee Pro is a one-time in-app purchase handled by Apple. Apple processes payment and purchase restoration. We do not receive or store your payment information.</p></section>
        <section><h2>Support email</h2><p>If you contact us at support@kenatsumu.studio, we receive the information you include in your message, such as your email address and a description of the issue. We use it only to respond to your support request.</p></section>
        <section><h2>Data sharing and tracking</h2><p>Piengee contains no advertising, analytics, account, or cloud-sync service. We do not use third-party tracking technology, and we do not disclose your board content to third parties.</p></section>
        <section><h2>Your choices</h2><p>You can delete a board from within Piengee. Deleting the app removes its locally stored data from that device, subject to the normal behavior of your device backups. You can manage photo-library permission in iOS or iPadOS Settings.</p></section>
        <section><h2>Changes and contact</h2><p>We may update this policy when Piengee changes. The current version will always be posted here. Questions can be sent to <a href="mailto:support@kenatsumu.studio">support@kenatsumu.studio</a>.</p></section>
      </article>
    </main>
  );
}
