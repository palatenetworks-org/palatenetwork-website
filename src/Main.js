import { useNavigate, Link } from "react-router-dom";
import {
  FaCode,
  FaMobileAlt,
  FaTools,
  FaBug,
  FaCloud,
  FaChartLine,
  FaReact,
  FaServer,
  FaPaintBrush,
  FaSearch,
} from "react-icons/fa";
import Footer from "./Footer";

const services = [
  {
    icon: <FaCode className="text-5xl text-slate-700" />,
    title: "Web Application Development",
    desc: "Transform your business with powerful, scalable web applications built using cutting-edge technologies and best practices.",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-slate-700" />,
    title: "Mobile Application Development",
    desc: "Create engaging mobile experiences that connect with your audience across iOS and Android platforms.",
  },
  {
    icon: <FaTools className="text-5xl text-slate-700" />,
    title: "Custom Software Development",
    desc: "Tailored software solutions designed specifically for your business processes and unique requirements.",
  },
  {
    icon: <FaBug className="text-5xl text-slate-700" />,
    title: "Testing Services",
    desc: "Comprehensive testing solutions to ensure your software meets the highest standards of quality and reliability.",
  },
  {
    icon: <FaCloud className="text-5xl text-slate-700" />,
    title: "Cloud Services",
    desc: "Scale your business with cloud migration, deployment, and management services on leading platforms.",
  },
  {
    icon: <FaChartLine className="text-5xl text-slate-700" />,
    title: "Digital Marketing",
    desc: "Strategic digital marketing services to boost your online presence and drive sustainable business growth.",
  },
];

const techStack = [
  {
    icon: <FaReact className="text-6xl text-slate-700" />,
    title: "React & Next.js",
    desc: "Building fast, SEO-friendly, and highly interactive web applications with modern React ecosystem.",
  },
  {
    icon: <FaServer className="text-6xl text-slate-700" />,
    title: "Backend Development",
    desc: "Robust APIs and scalable server-side solutions using Node.js, Python, databases, and microservices.",
  },
  {
    icon: <FaPaintBrush className="text-6xl text-slate-700" />,
    title: "UI/UX Design",
    desc: "User-centered interfaces with modern design systems, wireframing, prototyping, and smooth experiences.",
  },
  {
    icon: <FaSearch className="text-6xl text-slate-700" />,
    title: "SEO & Marketing",
    desc: "Data-driven strategies including on-page SEO, content marketing, link building, and performance tracking.",
  },
];

export default function Main() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden flex items-center bg-slate-900">
        {/* Background image with subtle zoom */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-bgZoomOut"
          style={{ backgroundImage: "url('/mainpagebg.jpg')" }}
          aria-hidden="true"
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full">
          <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
              Building the Future{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-orange-200 to-pink-200 bg-clip-text text-transparent">
                with Digital Excellence
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-10">
              At <span className="font-bold">Palate Networks</span>, we transform visionary ideas into scalable,
              high-performance digital solutions. We combine technology, strategy, and creativity to deliver
              measurable business impact and long-term growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-semibold px-6 py-3 rounded-xl text-base sm:text-lg shadow-lg transition-all duration-200 hover:scale-[1.02]"
              >
                Start Your Project Now
              </button>
              <button
                onClick={() => navigate("/services")}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/80 text-white hover:bg-white/10 font-semibold rounded-xl text-base sm:text-lg transition-all duration-200 hover:scale-[1.02]"
              >
                Discover Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 md:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Our Expert Services
          </h2>
          <p className="text-center text-slate-500 text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to accelerate your business growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-center text-center bg-white border border-slate-200 shadow-sm rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                {service.icon}
                <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2 text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foodeez teaser */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6">
            <img
              src="/foodeez.png"
              alt="Foodeez Logo"
              className="h-24 sm:h-28 md:h-32 object-contain"
              loading="lazy"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Foodeez — Flavorful Digital Presence
            </h2>
            <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              Foodeez is a technology-driven food delivery platform. Visit the dedicated Foodeez page to learn
              more about our revolutionary platform.
            </p>
            <Link
              to="/foodeez"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Explore Foodeez →
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Technology Stack
          </h2>
          <p className="text-center text-slate-500 text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Powerful tools and frameworks we use to build modern, scalable solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {techStack.map((tech) => (
              <div
                key={tech.title}
                className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-slate-400 hover:shadow-xl flex flex-col items-center text-center"
              >
                <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">{tech.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 md:p-14 text-center shadow-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Ready to Build</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Your Next Project?
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
              Join 80+ satisfied clients who trust us for software development and digital solutions. Let’s
              turn your vision into reality.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-700 transition shadow-lg"
            >
              Contact Us →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
