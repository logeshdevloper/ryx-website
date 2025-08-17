import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function CookiesPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-24">
        <section className="max-w-4xl mx-auto px-4">
          <h1 className="ryx-heading text-4xl md:text-5xl mb-6">Cookies Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: Aug 08, 2025</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              We use cookies and similar technologies to improve your experience, analyze traffic, and remember your
              preferences. You can manage cookies through your browser settings.
            </p>

            <h2>Types of Cookies</h2>
            <ul>
              <li>Essential: Required for core functionality</li>
              <li>Analytics: Understand usage and performance</li>
              <li>Preference: Remember choices like theme</li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>
              Most browsers allow control of cookies via settings. Disabling some cookies may affect site functionality.
            </p>

            <h2>Contact</h2>
            <p>Questions about cookies? Email <a href="mailto:hello@ryx.dev">hello@ryx.dev</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


