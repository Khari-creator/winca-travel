import Link from "next/link"

const faqs = [
  {
    question: "How long does visa processing take?",
    answer:
      "Processing timelines depend on destination and embassy workload. We share an estimated timeline after your document review.",
  },
  {
    question: "Do you guarantee visa approval?",
    answer:
      "No agency can guarantee approval. Final decisions are made by embassies or immigration authorities.",
  },
  {
    question: "Can you help with incomplete documents?",
    answer:
      "Yes. We guide you on required documents and help you prepare a complete submission before filing.",
  },
  {
    question: "Do you handle flight and hotel bookings too?",
    answer:
      "Yes. We support visa processing together with flights, hotels, and tour planning when needed.",
  },
  {
    question: "How do I start an application?",
    answer:
      "Use the contact page to share your travel plan. Our team will respond with next steps and required documents.",
  },
]

export default function FAQPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="bg-linear-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Quick answers to common questions about visas, travel planning, and our support process.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border p-6 bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h2>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a personalized answer for your travel case?</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  )
}
