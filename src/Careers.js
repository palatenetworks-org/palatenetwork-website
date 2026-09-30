import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const culture = [
  { title: "Innovation First", desc: "We embrace new technologies and encourage creative problem-solving." },
  { title: "Team Collaboration", desc: "We believe in transparent communication and cross-functional teamwork." },
  { title: "Excellence", desc: "We strive for superior outcomes in everything we do and celebrate achievements." },
  { title: "Work-Life Balance", desc: "We support flexible schedules and a healthy, sustainable work environment." },
];

const benefits = [
  { title: "Competitive Salary", desc: "Industry-leading compensation packages with performance bonuses." },
  { title: "Health Insurance", desc: "Comprehensive medical coverage for you and your family." },
  { title: "Flexible Hours", desc: "Work-life balance with flexible hours and remote options." },
  { title: "Learning & Development", desc: "Continuous learning opportunities and professional growth programs." },
  { title: "Great Work Environment", desc: "Modern office with restful facilities and team activities." },
  { title: "Global Exposure", desc: "Work with international clients and cutting-edge technologies." },
];

const jobs = [
  {
    role: "Senior Full Stack Developer",
    team: "Engineering",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "5+ years",
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    description: "Experienced full-stack developer to lead web app development projects.",
    responsibilities: [
      "Design and develop scalable web applications using React and Node.js",
      "Lead technical architecture and code reviews for the engineering team",
      "Collaborate with product teams to translate requirements into technical solutions",
      "Mentor junior developers and contribute to team growth",
    ],
    requirements: [
      "5+ years of professional experience in full-stack development",
      "Strong proficiency in React, Node.js, and TypeScript",
      "Experience with AWS cloud platforms",
      "Database design and optimization (MongoDB, PostgreSQL)",
    ],
  },
  {
    role: "Mobile App Developer",
    team: "Engineering",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "3+ years",
    skills: ["React Native", "Flutter", "iOS", "Android", "Redux"],
    description: "Build cross-platform mobile applications for global clients.",
    responsibilities: [
      "Develop and maintain mobile applications using React Native or Flutter",
      "Implement native modules and optimize application performance",
      "Collaborate with designers to create intuitive user interfaces",
    ],
    requirements: [
      "3+ years of experience in mobile app development",
      "Proficiency in React Native or Flutter",
      "Understanding of iOS and Android ecosystems",
    ],
  },
  {
    role: "UI/UX Designer",
    team: "Design",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Figma", "Adobe XD", "Wireframing", "User Research", "Design Systems"],
    description: "Create user-centric interfaces for web and mobile products.",
    responsibilities: [
      "Design intuitive user interfaces for web and mobile applications",
      "Conduct user research and gather requirements for design projects",
      "Create wireframes, prototypes, and high-fidelity mockups",
    ],
    requirements: [
      "3+ years of experience in UI/UX design",
      "Proficiency in design tools (Figma, Adobe XD, Sketch)",
      "Strong understanding of user-centered design principles",
    ],
  },
  {
    role: "DevOps Engineer",
    team: "Engineering",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "4+ years",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    description: "Manage cloud infrastructure and deployment pipelines for scalable apps.",
    responsibilities: [
      "Design and manage cloud infrastructure on AWS platforms",
      "Implement and maintain CI/CD pipelines for application deployment",
      "Containerize applications using Docker and manage Kubernetes clusters",
    ],
    requirements: [
      "4+ years of experience in DevOps and infrastructure management",
      "Strong knowledge of AWS services and cloud architecture",
      "Proficiency with Docker, Kubernetes, and containerization",
    ],
  },
  {
    role: "Digital Marketing Specialist",
    team: "Marketing",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "2+ years",
    skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content Strategy"],
    description: "Drive online marketing campaigns and help clients achieve branding goals.",
    responsibilities: [
      "Develop and execute digital marketing strategies across channels",
      "Manage Google Ads, Facebook Ads, and other PPC campaigns",
      "Optimize website SEO and drive organic traffic growth",
    ],
    requirements: [
      "2+ years of experience in digital marketing",
      "Proficiency in Google Analytics, Google Ads, and Facebook Ads Manager",
      "Strong SEO knowledge and on-page optimization skills",
    ],
  },
  {
    role: "Quality Assurance Engineer",
    team: "Engineering",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Selenium", "Cypress", "API Testing", "Test Automation", "Agile"],
    description: "Ensure quality of software products through thorough testing strategies.",
    responsibilities: [
      "Develop and execute comprehensive test plans and test cases",
      "Perform manual and automated testing of web and mobile applications",
      "Test REST APIs and ensure data integrity",
    ],
    requirements: [
      "2+ years of QA testing experience",
      "Proficiency in test automation tools (Selenium, Cypress, Appium)",
      "Strong understanding of manual testing methodologies",
    ],
  },
];

export default function Careers() {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <section className="min-h-screen bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-14">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">Join Our Team</h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Be part of a team transforming businesses through innovative technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-14">
            {culture.map((item) => (
              <div
                key={item.title}
                className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Benefits & Perks</h2>
            <p className="text-slate-600 mb-8 text-sm sm:text-base">
              We invest in our team’s growth, health, and happiness.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition"
                >
                  <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">Open Positions</h2>
            <div className="space-y-4">
              {jobs.map((job) => (
                <article
                  key={job.role}
                  className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-slate-50 shadow-sm hover:shadow-md transition"
                >
                  <div className="md:flex md:justify-between md:items-start gap-4 mb-3">
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{job.role}</h3>
                      <p className="text-slate-600 text-sm mt-2">{job.description}</p>
                      <div className="mt-2 text-slate-500 text-xs flex flex-wrap gap-x-2 gap-y-1">
                        <span>{job.team}</span><span>•</span>
                        <span>{job.location}</span><span>•</span>
                        <span>{job.type}</span><span>•</span>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4 md:mt-0 shrink-0">
                      <button
                        onClick={() => navigate("/contact")}
                        className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition"
                      >
                        Apply Now
                      </button>
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm hover:border-slate-500 hover:bg-white transition"
                      >
                        More Info
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-3 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedJob && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="job-title"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 p-6 sm:p-8 border-b border-slate-200 bg-white rounded-t-3xl flex justify-between items-start gap-4">
              <div>
                <h2 id="job-title" className="text-2xl sm:text-3xl font-bold text-slate-900">{selectedJob.role}</h2>
                <p className="text-slate-600 mt-1 text-sm sm:text-base">
                  {selectedJob.team} • {selectedJob.location}
                </p>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                aria-label="Close"
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  ["Experience", selectedJob.experience],
                  ["Type", selectedJob.type],
                  ["Location", selectedJob.location],
                ].map(([k, v]) => (
                  <div key={k} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="text-xs text-slate-600 font-semibold uppercase">{k}</p>
                    <p className="text-base font-bold text-slate-900 mt-1">{v}</p>
                  </div>
                ))}
              </div>

              <Section title="Key Responsibilities" items={selectedJob.responsibilities} />
              <Section title="Required Skills & Experience" items={selectedJob.requirements} />

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 bg-slate-100 text-slate-800 font-semibold rounded-full text-xs sm:text-sm border border-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedJob(null);
                  navigate("/contact");
                }}
                className="w-full px-6 py-3 bg-slate-900 hover:bg-slate-700 text-white font-semibold rounded-xl transition"
              >
                Apply for this position
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

function Section({ title, items }) {
  return (
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it} className="flex gap-3 items-start">
            <span className="text-slate-700 font-bold mt-1 flex-shrink-0">✓</span>
            <span className="text-slate-600 text-sm sm:text-base">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
