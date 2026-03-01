export default function TermsPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="bg-linear-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Please review these terms before using our visa, travel, and advisory services.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        <article>
          <h2 className="text-2xl font-semibold mb-3">1. Service Scope</h2>
          <p className="text-gray-700 leading-relaxed">
            Winca Travel provides travel advisory, document guidance, booking assistance, and visa processing support.
            Final approval decisions are made by the relevant embassy, immigration authority, or service provider.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">2. Client Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed">
            You are responsible for submitting accurate information and authentic documents. Delays or rejections caused
            by incomplete, inaccurate, or misleading submissions are outside our control.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">3. Fees & Payments</h2>
          <p className="text-gray-700 leading-relaxed">
            Service quotations are shared after assessment. Government, embassy, airline, hotel, and third-party fees
            may change without notice and are billed according to current provider rates.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">4. Cancellations & Refunds</h2>
          <p className="text-gray-700 leading-relaxed">
            Refund eligibility depends on work already performed and third-party policies. Non-refundable provider charges
            (such as embassy fees) remain non-refundable once processed.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">5. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            We are not liable for losses arising from embassy decisions, flight schedule changes, policy updates, or force
            majeure events beyond reasonable control.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">6. Updates to These Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            These terms may be updated from time to time. Continued use of our services indicates acceptance of the latest
            version.
          </p>
        </article>
      </section>
    </main>
  )
}
