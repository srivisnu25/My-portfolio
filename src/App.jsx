import React, { useState, useEffect } from 'react';

// Reusable Stats Card Component - Black & White Theme
const StatsCard = ({ label, value }) => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 hover:border-white hover:bg-white hover:text-black shadow-lg hover:-translate-y-1 group">
    <span className="text-4xl md:text-5xl font-bold text-white group-hover:text-black mb-1">{value}</span>
    <span className="text-white/50 text-sm font-medium uppercase tracking-wider group-hover:text-black/70">{label}</span>
  </div>
);

// Modern Skill Card - Black & White Theme
const TechnicalSkillCard = ({ title, technologies }) => (
  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl transition-all duration-300 border-l-4 border-l-white shadow-lg hover:scale-[1.02] hover:-translate-y-2 hover:bg-white/10 hover:shadow-white/5 cursor-default">
    <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span key={tech} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-black text-white border border-white/20 rounded-md">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certification', href: '#certification', id: 'certification' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl tracking-tighter text-white font-bold uppercase">
            Srivisnu S
          </div>

          <div className="hidden md:flex space-x-6 h-full items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`relative text-white/50 hover:text-white transition-colors font-medium h-full flex items-center group`}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-transform duration-300 origin-left 
                  ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                ></span>
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md ${activeSection === link.id ? 'text-black bg-white font-bold' : 'text-white/70'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />

      <main className="max-w-7xl mx-auto px-8">
        
        {/* Section: Home */}
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between pt-24 md:pt-16 gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-6xl md:text-8xl font-black leading-tight text-white uppercase tracking-tighter">
                Hi, I'm <span className="text-white underline decoration-white/20 underline-offset-8">Srivisnu S</span>
            </h1>
            <p className="text-white/60 mt-6 text-xl md:text-2xl max-w-lg leading-relaxed font-light italic">
              Third-year CSE Student at PEC. Passionate about crafting digital experiences through Web Development and complex logic in Java.
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-all duration-500 ease-in-out hover:-translate-y-4 hover:scale-[1.05] group">
              <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white transition-colors"></div>
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src="/Formal.png" 
                  alt="Srivisnu S" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section: About */}
        <section id="about" className="py-24 border-t border-white/10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-8 uppercase tracking-widest">About <span className="border-b-4 border-white pb-1">Me</span></h2>
              <div className="max-w-2xl">
                <p className="text-white/80 text-lg leading-relaxed mb-8 font-light">
                  I’m a B.E. Computer Science and Engineering student at PEC, currently in my third year. 
                  I have a strong interest in Web Development and Java programming, and I enjoy building efficient, 
                  user-friendly applications while continuously improving my technical skills.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-4">
                    <div className="text-white mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase text-xs tracking-widest">Education</h4>
                      <p className="text-white/60 text-sm">B.E. CSE, Pondicherry Engineering College</p>
                      <p className="text-white text-xs font-medium mt-1">2023 — 2027</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-4">
                    <div className="text-white mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase text-xs tracking-widest">Location</h4>
                      <p className="text-white/60 text-sm">Mannargudi, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>

                <p className="text-white/40 font-light">
                  Seeking a challenging role where I can apply my technical skills and grow in a dynamic environment.
                </p>
              </div>
            </div>

            <div className="flex-1 w-full grid grid-cols-2 gap-4 lg:mt-16">
              <StatsCard label="CGPA" value="8.45" />
              <StatsCard label="Internships" value="2" />
              <StatsCard label="Certifications" value="3+" />
              <StatsCard label="Projects" value="3" />
            </div>
          </div>
        </section>

        {/* Section: Skills */}
        <section id="skills" className="py-20 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 uppercase tracking-tighter">
                <span className="w-8 h-1 bg-white inline-block"></span>
                Hard Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TechnicalSkillCard 
                  title="Frontend" 
                  technologies={['React', 'Tailwind CSS', 'JavaScript']} 
                />
                <TechnicalSkillCard 
                  title="Backend" 
                  technologies={['Node.js','Firebase']} 
                />
                <TechnicalSkillCard 
                  title="Programming" 
                  technologies={['Java', 'Python']} 
                />
                <TechnicalSkillCard 
                  title="Database" 
                  technologies={['SQL']} 
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 uppercase tracking-tighter">
                <span className="w-8 h-1 bg-white inline-block"></span>
                Soft Skills
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Time Management', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                  { name: 'Leadership', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
                  { name: 'Collaborative', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                  { name: 'Problem Solving', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z' }
                ].map((softSkill) => (
                  <div key={softSkill.name} className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center gap-3 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-default group">
                    <svg className="w-6 h-6 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={softSkill.icon}></path>
                    </svg>
                    <span className="text-white/60 group-hover:text-black text-[10px] font-bold text-center uppercase tracking-widest">{softSkill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Projects */}
        <section id="projects" className="py-20 border-t border-white/10">
          <h2 className="text-3xl font-bold mb-10 pb-2 border-b border-white/10 uppercase tracking-tighter">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-2 hover:scale-[1.02] shadow-lg group">
              <h3 className="text-xl font-bold group-hover:text-black transition-colors underline underline-offset-4 decoration-white/20 group-hover:decoration-black/20">Fraudulent Job Detection</h3>
              <p className="text-white/50 group-hover:text-black/70 mt-2 text-sm">A CLI based system using Multi-Model detection for job postings.</p>
              <div className="mt-4 flex gap-2">
                <span className="bg-white/10 group-hover:bg-black/10 px-2 py-1 text-xs rounded border border-white/20 font-bold">Node.js</span>
                <span className="bg-white/10 group-hover:bg-black/10 px-2 py-1 text-xs rounded border border-white/20 font-bold">ML</span>
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-2 hover:scale-[1.02] shadow-lg group">
              <h3 className="text-xl font-bold group-hover:text-black transition-colors underline underline-offset-4 decoration-white/20 group-hover:decoration-black/20">AROKYA SAHAYAK</h3>
              <p className="text-white/50 group-hover:text-black/70 mt-2 text-sm">A comprehensive health application for student wellness.</p>
              <div className="mt-4 flex gap-2">
                <span className="bg-white/10 group-hover:bg-black/10 px-2 py-1 text-xs rounded border border-white/20 font-bold">React</span>
                <span className="bg-white/10 group-hover:bg-black/10 px-2 py-1 text-xs rounded border border-white/20 font-bold">Firebase</span>
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-2 hover:scale-[1.02] shadow-lg group">
              <h3 className="text-xl font-bold group-hover:text-black transition-colors underline decoration-white/20 group-hover:decoration-black/20 underline-offset-4">My Portfolio</h3>
              <p className="text-white/50 group-hover:text-black/70 mt-2 text-sm">A personal portfolio website showcasing my skills, projects, and certifications.</p>
              <div className="mt-4 flex gap-2">
                <span className="bg-white/10 group-hover:bg-black/10 px-2 py-1 text-xs rounded border border-white/20 font-bold">React</span>
                <span className="bg-white/10 group-hover:bg-black/10 px-2 py-1 text-xs rounded border border-white/20 font-bold">Tailwind</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Certification */}
        <section id="certification" className="py-20 border-t border-white/10">
          <h2 className="text-3xl font-bold mb-10 pb-2 border-b border-white/10 uppercase tracking-tighter">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-white/5 p-6 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-2 hover:scale-[1.02] shadow-lg group">
               <h3 className="text-xl font-bold group-hover:text-black transition-colors underline underline-offset-4 decoration-white/20 group-hover:decoration-black/20 uppercase tracking-tighter">UiPath RPA Associate</h3>
               <p className="text-white/50 group-hover:text-black/70 mt-2 text-sm">Official certification in Robotic Process Automation.</p>
             </div>
             <div className="bg-white/5 p-6 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-2 hover:scale-[1.02] shadow-lg group">
               <h3 className="text-xl font-bold group-hover:text-black transition-colors underline underline-offset-4 decoration-white/20 group-hover:decoration-black/20 uppercase tracking-tighter">NASSCOM (GOLD-74%)</h3>
               <p className="text-white/50 group-hover:text-black/70 mt-2 text-sm">Data Science for Beginners Certification.</p>
             </div>
             <div className="bg-white/5 p-6 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-2 hover:scale-[1.02] shadow-lg group">
               <h3 className="text-xl font-bold group-hover:text-black transition-colors underline underline-offset-4 decoration-white/20 group-hover:decoration-black/20 uppercase tracking-tighter text-white">Intro to Machine Learning</h3>
               <p className="text-white/50 group-hover:text-black/70 mt-2 text-sm font-bold tracking-widest">NPTEL (IIT Madras) 2025</p>
             </div>
          </div>
        </section>

        {/* Section: Contact - UPDATED WITH PHONE, LINKEDIN, GITHUB */}
        <section id="contact" className="py-32 border-t border-white/10 text-center">
          <h2 className="text-5xl font-black mb-12 uppercase tracking-tighter">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Email */}
            <a href="mailto:srivisnu25@gmail.com" className="bg-white/5 border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:text-black group shadow-lg">
              <svg className="w-8 h-8 mx-auto mb-4 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h4 className="font-bold text-sm uppercase tracking-widest">Email</h4>
              <p className="text-[10px] mt-2 opacity-60">srivisnu25@gmail.com</p>
            </a>

            {/* Phone */}
            <a href="tel:+918248231261" className="bg-white/5 border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:text-black group shadow-lg">
              <svg className="w-8 h-8 mx-auto mb-4 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h4 className="font-bold text-sm uppercase tracking-widest">Phone</h4>
              <p className="text-[10px] mt-2 opacity-60">+91 8667005255</p>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/srivisnus/" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:text-black group shadow-lg">
              <svg className="w-8 h-8 mx-auto mb-4 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <h4 className="font-bold text-sm uppercase tracking-widest">LinkedIn</h4>
              <p className="text-[10px] mt-2 opacity-60">www.linkedin.com/in/s-srivisnu</p>
            </a>

            {/* GitHub */}
            <a href="https://github.com/Srivisnu25" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:text-black group shadow-lg">
              <svg className="w-8 h-8 mx-auto mb-4 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <h4 className="font-bold text-sm uppercase tracking-widest">GitHub</h4>
              <p className="text-[10px] mt-2 opacity-60">https://github.com/srivisnu25</p>
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;