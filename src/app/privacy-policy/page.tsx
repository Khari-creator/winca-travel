export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="bg-linear-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            This policy explains how Winca Travel collects, uses, and protects your personal information.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        <article>
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect contact details, passport/travel information, booking preferences, and communication records
            needed to provide requested services.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            Your data is used to prepare applications, coordinate bookings, communicate updates, and improve service quality.
            We only process information necessary for legitimate service delivery.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">3. Data Sharing</h2>
          <p className="text-gray-700 leading-relaxed">
            We may share required information with embassies, airlines, hotels, payment processors, and technology providers
            strictly for service execution and compliance obligations.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We apply reasonable administrative and technical safeguards to protect personal information from unauthorized
            access, alteration, disclosure, or loss.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">5. Data Retention</h2>
          <p className="text-gray-700 leading-relaxed">
            We retain personal data only as long as necessary for service delivery, legal compliance, dispute resolution,
            and record-keeping requirements.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">6. Contact for Privacy Requests</h2>
          <p className="text-gray-700 leading-relaxed">
            For privacy-related questions or data requests, contact us at info@wincatravel.com.
          </p>
        </article>
      </section>
    </main>
  )
}
