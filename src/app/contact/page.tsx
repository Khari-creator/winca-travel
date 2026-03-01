export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/85 max-w-2xl mx-auto">
            We’re here to help with visas, tours, flights, hotels, and e-citizen services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-red-600 focus:ring-3 focus:ring-red-600/15"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-red-600 focus:ring-3 focus:ring-red-600/15"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-red-600 focus:ring-3 focus:ring-red-600/15"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-red-600 focus:ring-3 focus:ring-red-600/15"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Contact Details</h2>

            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Phone:</span> +254 743095927
              </p>
              <p>
                <span className="font-semibold text-gray-900">Email:</span> info@wincatravel.com
              </p>
              <p>
                <span className="font-semibold text-gray-900">Office:</span> Hurligham, Nairobi.
              </p>
              <p>
                <span className="font-semibold text-gray-900">Working Hours:</span> Mon – Sat, 8:00 AM – 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
