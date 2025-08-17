import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-24">
        <section className="max-w-4xl mx-auto px-4">
          <h1 className="ryx-heading text-4xl md:text-5xl mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: Aug 08, 2025</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              RYX respects your privacy. This Privacy Policy explains how we collect, use, and protect your
              information when you use our website and services.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>Contact information (name, email) when you submit forms</li>
              <li>Project details you provide for consultations</li>
              <li>Usage data and analytics (pages visited, device, referrer)</li>
            </ul>

            <h2>How We Use Information</h2>
            <ul>
              <li>To respond to inquiries and provide proposals</li>
              <li>To improve site performance and user experience</li>
              <li>To send important updates if you opt in</li>
            </ul>

            <h2>Data Retention</h2>
            <p>We retain personal data only as long as needed for the purposes described, or as required by law.</p>

            <h2>Sharing</h2>
            <p>
              We do not sell personal data. We may share limited data with trusted processors (e.g., analytics)
              bound by data processing agreements.
            </p>

            <h2>Your Rights</h2>
            <p>
              You may request access, correction, deletion, or export of your personal data. Contact us at
              <a href="mailto:hello@ryx.dev"> hello@ryx.dev</a>.
            </p>

            <h2>Security</h2>
            <p>We use encryption in transit (HTTPS), restricted access, and routine backups to protect data.</p>

            <h2>International Transfers</h2>
            <p>
              Data may be processed in jurisdictions with different data protection laws. We use appropriate
              safeguards where required.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about this policy, email <a href="mailto:hello@ryx.dev">hello@ryx.dev</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


