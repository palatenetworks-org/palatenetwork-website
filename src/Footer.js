import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="py-14 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/pnpn.png" alt="" className="h-10 w-10 rounded-full object-cover" />
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900">
                Palate Networks
              </span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              Building the Future with Digital Excellence since 2017.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-5">Services</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {[
                "Web Development",
                "Mobile Apps",
                "Cloud Services",
                "Digital Marketing",
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="hover:text-slate-900 transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-5">Company</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><Link to="/about" className="hover:text-slate-900 transition-colors">About Us</Link></li>
              <li><Link to="/foodeez" className="hover:text-slate-900 transition-colors">Foodeez</Link></li>
              <li><Link to="/careers" className="hover:text-slate-900 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-slate-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-5">Connect</h3>
            <div className="flex gap-5">
              <SocialLink href="https://twitter.com" label="Twitter / X"><FaTwitter /></SocialLink>
              <SocialLink href="https://www.linkedin.com/search/results/all/?keywords=Palate%20Networks&origin=RICH_QUERY_TYPEAHEAD_HISTORY&heroEntityKey=urn%3Ali%3Aorganization%3A97454766&position=0" label="LinkedIn"><FaLinkedinIn /></SocialLink>
              <SocialLink href="https://github.com" label="GitHub"><FaGithub /></SocialLink>
              <SocialLink href="mailto:info@palatenetworks.com" label="Email"><FaEnvelope /></SocialLink>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-slate-200 text-center text-xs sm:text-sm text-slate-500">
          © {new Date().getFullYear()} Palate Networks Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      aria-label={label}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className="text-2xl text-slate-600 hover:text-slate-900 transition-transform duration-300 hover:scale-110"
    >
      {children}
    </a>
  );
}
