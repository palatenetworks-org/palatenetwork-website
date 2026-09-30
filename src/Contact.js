import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import Footer from "./Footer";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-2xl text-slate-700" />,
    title: "Address",
    details: ["Plot No 5, Inorbit Mall Rd, opposite Durgam Cheruvu, Doctor's Colony, HITEC City, Hyderabad, Telangana 500081"],
  },
  {
    icon: <FaEnvelope className="text-2xl text-slate-700" />,
    title: "Email",
    details: ["info@palatenetworks.in"],
  },
  {
    icon: <FaClock className="text-2xl text-slate-700" />,
    title: "Business Hours",
    details: ["Open 24/7"],
  },
];

const initialForm = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6">
              Get In Touch
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? We’d love to hear from you. Send us a message and we’ll
              respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Send us a Message</h2>

              {submitted && (
                <div
                  role="status"
                  className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800 text-sm"
                >
                  Thank you for your message! We’ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field
                    label="Full Name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>
                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 ..."
                />
                <Field
                  label="Subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                />

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors resize-y"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-700 text-white font-semibold py-3 sm:py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-slate-100 rounded-xl">{info.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 text-slate-900">{info.title}</h3>
                        {info.details.map((d) => (
                          <p key={d} className="leading-relaxed text-slate-600">
                            {d}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 md:p-10 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Why Choose Palate Networks?</h3>
                <ul className="space-y-3 text-slate-300">
                  {[
                    "Expert team with 7+ years of experience",
                    "Agile development methodology",
                    "24/7 support and maintenance",
                    "Competitive pricing with quality guarantee",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Field({ label, name, type, required, value, onChange, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
      />
    </div>
  );
}
