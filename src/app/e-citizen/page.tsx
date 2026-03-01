import Link from 'next/link'

const services = [
  {
    title: 'Passport Services',
    items: [
      'New passport application',
      'Renewal',
      'Replacement (lost/damaged)',
      'Name change',
      'Tracking assistance',
    ],
    timeline: 'Estimated 10–30 working days (varies by queue)',
    fee: 'Quote on request',
  },
  {
    title: 'Good Conduct Certificate',
    items: ['Application assistance', 'Biometrics guidance', 'Tracking updates'],
    timeline: 'Estimated 7–21 working days',
    fee: 'Quote on request',
  },
  {
    title: 'NTSA Services',
    items: ['Driving license renewal', 'Smart DL assistance', 'Logbook transfer', 'Vehicle search'],
    timeline: 'Estimated 1–14 working days depending on service',
    fee: 'Quote on request',
  },
  {
    title: 'Business Registration',
    items: ['Sole proprietorship', 'Limited company registration', 'Name search', 'CR12 assistance'],
    timeline: 'Estimated 3–14 working days',
    fee: 'Quote on request',
  },
  {
    title: 'Birth Certificate Services',
    items: ['New application', 'Replacement', 'Corrections'],
    timeline: 'Estimated 14–60 working days (depends on records)',
    fee: 'Quote on request',
  },
  {
    title: 'Work Permit Support',
    items: ['Application preparation support', 'Document checklist guidance', 'Follow-up and tracking support'],
    timeline: 'Estimated 21–90 working days',
    fee: 'Quote on request',
  },
]

const processSteps = [
  'Submit Request',
  'Upload Documents',
  'We Review & Prepare',
  'You Attend Biometrics (if required)',
  'We Track & Notify',
]

const pricingRows = [
  { service: 'Passport assistance', fee: 'Quote on request', note: 'Final quote shared after service scope confirmation' },
  { service: 'Good conduct assistance', fee: 'Quote on request', note: 'Quote depends on required support level' },
  { service: 'NTSA service assistance', fee: 'Quote on request', note: 'Varies by selected NTSA workflow' },
  { service: 'Business registration support', fee: 'Quote on request', note: 'Depends on registration structure and documents' },
  { service: 'Birth certificate support', fee: 'Quote on request', note: 'Quote shared after document assessment' },
]

const faqs = [
  {
    q: 'Is this the official government portal?',
    a: 'No. We are an independent facilitation service provider that helps you prepare, submit, and track your applications correctly.',
  },
  {
    q: 'How long does processing take?',
    a: 'Timelines vary by service and current government queues. We provide realistic estimates and updates throughout your case.',
  },
  {
    q: 'Do you guarantee approval?',
    a: 'No. Approval decisions are made by relevant government agencies. We improve readiness by reducing application errors.',
  },
  {
    q: 'Can you fast-track applications?',
    a: 'We cannot bypass official procedures. We can help you submit correctly and promptly to avoid avoidable delays.',
  },
  {
    q: 'Do I need to visit physically?',
    a: 'Some services require in-person biometrics or verification. We guide you on exactly when physical attendance is required.',
  },
]

export default function ECitizenPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-28">
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold bg-white/10 text-red-200">
            E-Citizen Services
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional E-Citizen Application Assistance
          </h1>

          <p className="max-w-3xl text-white/85 text-lg leading-relaxed mb-10">
            Fast, accurate, and guided support to help you avoid mistakes and delays in sensitive government service applications.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#application-form"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-semibold transition"
            >
              Start Application
            </a>
            <a
              href="#services-grid"
              className="inline-flex items-center justify-center border border-white/40 hover:border-red-300 px-8 py-3.5 rounded-lg font-semibold transition"
            >
              Get Assistance
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/40 hover:border-red-300 px-8 py-3.5 rounded-lg font-semibold transition"
            >
              Request Support
            </Link>
          </div>

          <p className="text-sm text-white/75 border border-white/20 rounded-lg px-4 py-3 inline-block">
            Disclaimer: We are an independent facilitation service provider.
          </p>
        </div>
      </section>

      <section id="services-grid" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services Grid</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

                <ul className="space-y-2 text-sm text-gray-700 mb-5">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold text-gray-800">Processing time:</span> {service.timeline}
                </p>
                <p className="text-sm text-gray-600 mb-5">
                  <span className="font-semibold text-gray-800">Service fee:</span> {service.fee}
                </p>

                <a
                  href="#application-form"
                  className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition"
                >
                  Apply Now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Clear process, predictable support, and regular updates at each stage.
          </p>

          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-xl border bg-gray-50 p-5 text-center">
                <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold text-gray-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Required Documents</h2>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="rounded-xl border bg-white p-5">
              <summary className="font-semibold cursor-pointer">Passport Renewal Requires</summary>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>Old passport</li>
                <li>ID copy</li>
                <li>Passport photos (where required)</li>
              </ul>
            </details>

            <details className="rounded-xl border bg-white p-5">
              <summary className="font-semibold cursor-pointer">Good Conduct Requires</summary>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>ID copy</li>
                <li>Fingerprint capture at DCI</li>
                <li>Application reference details</li>
              </ul>
            </details>

            <details className="rounded-xl border bg-white p-5">
              <summary className="font-semibold cursor-pointer">Business Registration Common Requirements</summary>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>Preferred business names for search</li>
                <li>Director/owner ID details</li>
                <li>KRA PIN and contact details</li>
              </ul>
            </details>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Service Quotation</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We provide open-ended quotes based on your exact service needs. Government charges remain separate where applicable.
          </p>

          <div className="rounded-2xl border overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 px-5 py-4 text-sm font-semibold text-gray-700">
              <div>Service</div>
              <div>Quotation</div>
              <div>Notes</div>
            </div>

            {pricingRows.map((row) => (
              <div key={row.service} className="grid grid-cols-3 px-5 py-4 text-sm border-t">
                <div className="font-medium text-gray-800">{row.service}</div>
                <div className="text-red-700 font-semibold">{row.fee}</div>
                <div className="text-gray-600">{row.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQs</h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-xl border bg-white p-5">
                <summary className="font-semibold cursor-pointer">{item.q}</summary>
                <p className="mt-4 text-sm text-gray-700 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="application-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact / Application Form</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Submit your request and we’ll guide you step by step based on your service type and urgency.
            </p>

            <div className="space-y-3 text-gray-700">
              <div className="rounded-lg border px-4 py-3">Office: Nairobi, Kenya</div>
              <div className="rounded-lg border px-4 py-3">Contact: +254 114 274647</div>
              <div className="rounded-lg border px-4 py-3">Business Registration: Available on request</div>
              <div className="rounded-lg border px-4 py-3">Experience: 5+ years facilitation support</div>
              <div className="rounded-lg border px-4 py-3">Client feedback: Verified testimonials available</div>
            </div>
          </div>

          <form action="/contact" method="get" className="rounded-2xl border bg-gray-50 p-6 md:p-8 space-y-4">
            <Field label="Full Name">
              <input name="name" required className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-red-600 focus:ring-3 focus:ring-red-600/15" />
            </Field>

            <Field label="Phone Number">
              <input name="phone" required className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-red-600 focus:ring-3 focus:ring-red-600/15" />
            </Field>

            <Field label="Email Address">
              <input type="email" name="email" className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-red-600 focus:ring-3 focus:ring-red-600/15" />
            </Field>

            <Field label="Service Needed">
              <select name="service" required className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-red-600 focus:ring-3 focus:ring-red-600/15">
                <option value="">Select service</option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Message">
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us your request details and deadlines."
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-red-600 focus:ring-3 focus:ring-red-600/15"
              />
            </Field>

            <button
              type="submit"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-gray-700 mb-2">{label}</span>
      {children}
    </label>
  )
}
