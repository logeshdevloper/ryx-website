import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-24">
        <section className="max-w-4xl mx-auto px-4">
          <h1 className="ryx-heading text-4xl md:text-5xl mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: Aug 08, 2025</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2>Agreement</h2>
            <p>By accessing our website, you agree to these Terms of Service and our Privacy Policy.</p>

            <h2>Use of Services</h2>
            <ul>
              <li>You will not misuse or attempt to disrupt the website or services.</li>
              <li>You are responsible for the accuracy of information you provide.</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>All content, trademarks, and logos on this site are the property of RYX or its licensors.</p>

            <h2>Warranties & Liability</h2>
            <p>The website is provided “as is.” We disclaim all warranties to the fullest extent permitted by law.</p>
            <p>RYX is not liable for indirect or consequential damages arising from use of the site.</p>

            <h2>Changes</h2>
            <p>We may update these terms at any time. Continued use implies acceptance of changes.</p>

            <h2>Contact</h2>
            <p>Questions? Email <a href="mailto:hello@ryx.dev">hello@ryx.dev</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


