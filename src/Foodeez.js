import Footer from "./Footer";

const features = [
  {
    title: "Seamless Food Ordering Experience",
    desc: "Browse thousands of restaurants, customize your orders with precision, and track your meal from kitchen to doorstep.",
  },
  {
    title: "Real-Time Order Tracking",
    desc: "Live GPS tracking shows you exactly where your delivery partner is, estimated arrival time, and order status updates.",
  },
  {
    title: "Efficient Delivery Management",
    desc: "Optimized routing algorithms ensure your food arrives hot and fresh, with professional, courteous service.",
  },
  {
    title: "Restaurant & Vendor Integration",
    desc: "Restaurants manage their menu, orders, and analytics from a powerful dashboard with rich customer insights.",
  },
];

export default function Foodeez() {
  return (
    <>
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-blue-100/50 rounded-full blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-100/50 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-16">
          {/* Hero */}
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <img
                src="/foodeez.png"
                alt="Foodeez Logo"
                className="h-28 sm:h-32 md:h-40 object-contain drop-shadow-xl"
              />
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-800 font-semibold max-w-3xl mx-auto leading-snug">
              Your Digital Gateway to Culinary Excellence
            </p>
            <div className="h-1.5 w-20 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto rounded-full" />
          </div>

          {/* Description + Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="space-y-5">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Foodeez is a revolutionary, technology-driven food delivery platform developed by Palate
                Networks Pvt Ltd, designed to transform how people discover, order, and receive their favorite
                meals.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Our platform combines intuitive user interfaces with intelligent backend systems, offering a
                seamless journey whether customers are craving a quick lunch, planning dinner, or ordering
                catering. With real-time tracking and efficient delivery management, Foodeez ensures a smooth
                experience for both customers and restaurant partners.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                We understand that customers demand more than just food delivery—they want convenience,
                transparency, and trust. Our ecosystem connects restaurants, delivery partners, and customers
                in a single, powerful platform that grows with your needs.
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((f, idx) => (
                <li
                  key={f.title}
                  className="group bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50/60 transition-all duration-300"
                >
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition">
                    {idx + 1}. {f.title}
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{f.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Technology Excellence",
                desc: "Built on scalable cloud infrastructure, Foodeez leverages AI and machine learning for personalized recommendations and intelligent delivery optimization.",
              },
              {
                title: "Customer Security",
                desc: "Industry-standard encryption, secure payment gateways, and strict data protection protocols. Every transaction is protected with the latest security standards.",
              },
              {
                title: "Sustainable Growth",
                desc: "Committed to sustainable practices, supporting local restaurants, and reducing our carbon footprint through optimized routes and eco-friendly packaging.",
              },
            ].map((p) => (
              <div key={p.title} className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{p.title}</h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 md:p-12 text-center space-y-5">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              Experience Foodeez Today
            </h3>
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
              Join thousands of satisfied customers and discover a new way to order food. Visit Foodeez now to
              get started with exclusive welcome offers.
            </p>
            <div className="flex justify-center pt-2">
              <a
                href="https://www.foodeez.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 hover:bg-slate-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                Visit www.foodeez.in →
              </a>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 pt-2">
              Available on iOS, Android, and Web • Delivering Excellence Since 2026
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
