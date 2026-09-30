import { FaRocket, FaTrophy, FaHandshake, FaHeart } from "react-icons/fa";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-24">
        {/* Headline */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            About Palate Networks Private Limited
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Since 2017, we’ve been transforming businesses through innovative software solutions. We’re a team
            of passionate developers, designers, and strategists committed to delivering excellence.
          </p>
        </div>

        {/* Rebranding announcement */}
        <div className="mb-16 md:mb-20">
          <div className="relative bg-slate-800 rounded-3xl p-8 md:p-12 lg:p-16 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 -translate-y-12" />
              <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-white rounded-full translate-y-10" />
              <div className="absolute bottom-0 right-1/3 w-16 h-16 bg-white rounded-full translate-y-8" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <span className="font-semibold text-base sm:text-lg">Exciting News!</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Rebranding Announcement
              </h2>

              <div className="space-y-5 text-left md:text-center">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-95">
                  What began as FSOL has now evolved into{" "}
                  <strong>Palate Networks Private Limited</strong>. This transformation represents our
                  commitment to growth, innovation, and delivering greater value to our clients.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-95">
                  Based in Hyderabad, we are a team of passionate developers, designers, and strategists
                  committed to delivering excellence. Founded in 2017 in Hyderabad’s tech corridor, FSOL began
                  with a simple yet powerful mission: to bridge the gap between innovative technology and real
                  business needs.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-95">
                  What started as a small team has grown into a comprehensive software solutions company with
                  over 100 experts. Our journey has been marked by continuous learning, adaptation, and an
                  unwavering commitment to excellence.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-95">
                  We’ve worked with diverse clients across industries, each project strengthening our resolve
                  to deliver exceptional solutions. Today we stand proud with 80+ successful projects in our
                  portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="space-y-20 md:space-y-28">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Our Story</h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg md:text-xl">
              We are excited to announce that FSOL, founded in 2017, has been rebranded as Palate Networks Pvt
              Ltd starting 2026. This change marks a new phase in our journey as we expand our capabilities
              and strengthen our vision for the future, while our commitment to quality and innovation remains
              unchanged. We sincerely thank you for being a part of our journey.
            </p>
          </div>

          {/* Values */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Our Values</h2>
            <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12">
              The principles that guide everything we do and shape our approach to technology and business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <ValueCard
                icon={<FaRocket />}
                title="Innovation"
                description="We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage."
              />
              <ValueCard
                icon={<FaTrophy />}
                title="Quality"
                description="We maintain the highest standards of quality in every project, ensuring robust, scalable, and maintainable solutions."
              />
              <ValueCard
                icon={<FaHandshake />}
                title="Collaboration"
                description="We work closely with our clients, fostering transparent communication and partnership throughout the development process."
              />
              <ValueCard
                icon={<FaHeart />}
                title="Client Success"
                description="Your success is our success. We're committed to delivering solutions that drive real business value and growth."
              />
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Our Journey</h2>
              <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12">
                Key milestones that have shaped our growth and success.
              </p>
            </div>

            <ol className="relative max-w-3xl mx-auto border-l-2 border-slate-300 pl-6 sm:pl-10 space-y-10">
              <TimelineItem year="2017" title="Founded as FSOL" description="Started with a vision to revolutionize software solutions in Hyderabad." icon={<FaRocket />} />
              <TimelineItem year="2018" title="Team Expansion" description="Grew from 5 to 50+ expert professionals across multiple domains." icon={<FaTrophy />} />
              <TimelineItem year="2023" title="80+ Projects Delivered" description="Successfully completed projects across FinTech, Healthcare, and E-commerce sectors." icon={<FaHandshake />} />
              <TimelineItem year="2026" title="Rebranded to Palate Networks Pvt Ltd" description="A new chapter begins with expanded capabilities and strengthened vision." icon={<FaHeart />} />
            </ol>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ValueCard({ icon, title, description }) {
  return (
    <div className="group relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-slate-400 hover:shadow-xl flex flex-col text-left">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-3xl text-slate-700 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm sm:text-base flex-grow">{description}</p>
    </div>
  );
}

function TimelineItem({ year, title, description, icon }) {
  return (
    <li className="relative">
      <span className="absolute -left-[34px] sm:-left-[46px] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-white shadow-md ring-4 ring-white">
        {icon}
      </span>
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow text-left">
        <div className="text-sm font-semibold text-slate-500 mb-1">{year}</div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{description}</p>
      </div>
    </li>
  );
}
