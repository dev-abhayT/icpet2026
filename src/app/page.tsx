'use client';

import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Calendar, Mail} from 'lucide-react';
import Image from 'next/image';

export default function ConferencePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logo_w = 125
  const logo_h = 125

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background text-foreground">
      {/* ===== NAVBAR ===== */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className={`${
              isScrolled ? 'text-xl font-montserrat font-bold transition-colors text-accent' : 'text-transparent'
            }`}>
              ICPET 2026
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Events', 'Themes', 'Venue', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className={`${
                    isScrolled
                      ? 'text-sm font-medium transition-colors text-white hover:text-accent'
                      : 'text-transparent'
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={isScrolled ? 'text-white' : 'text-primary'} />
              ) : (
                <Menu className={isScrolled ? 'text-white' : 'text-primary'} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className={`pb-4 md:hidden space-y-2 ${isScrolled ? 'bg-primary' : ''}`}>
              {['Home', 'About', 'Events', 'Themes', 'Venue', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium rounded transition-colors ${
                    isScrolled
                      ? 'text-white hover:bg-primary/80'
                      : 'text-primary hover:bg-accent/10'
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        className="relative min-h-screen bg-primary flex items-center justify-center pt-16"
        
      >
        <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url('/petro_generic.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }} />

        
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="mb-4 inline-block">
            <span className="text-accent font-sans font-bold text-lg tracking-widest uppercase">
              ICPET 2026
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            International Conference 
          </h1>
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">on</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-accent mb-8 leading-tight">
            Petroleum and Energy Transition
          </h1>

          

          {/* Tagline */}
         
              <p className="text-xl sm:text-2xl text-accent italic font-montserrat mb-12 max-w-2xl mx-auto">
            &quot;Bridging Hydrocarbons and Future of Energy&quot;
          </p>
            
            
          
          

          {/* Date & Location Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white">
              <Calendar size={20} />
              <span className="font-montserrat bold text-lg">November 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white">
              <MapPin size={20} />
              <span className="font-montserrat bold text-lg">Dhanbad, Jharkhand, India</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="px-8 py-3 bg-accent text-primary font-sans font-bold rounded hover:bg-accent/90 transition-colors">
              Register Now
            </button>
            
            <button className="px-8 py-3 border-2 border-white text-white font-sans font-bold rounded hover:bg-white/10 transition-colors"
            onClick={() => {scrollToSection("about")}}>
              View Program
            </button>
            
          </div>

          {/* Organizer Strip Preview */}
          <div className="mb-3 border-t border-white"></div>

          <section className="mb-4" >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex-1 flex justify-center mr-36">
            <div className="mt-4 pt-2">
            <p className="text-white/70 text-lg font-sans font-semibold mb-4">Organized By</p>
  
            <p className="text-white text-lg font-montserrat font-extrabold">Department of Petroleum Engineering</p>
            
            <div className="flex justify-center gap-8 flex-wrap mb-8">
              <Image 
              src='/iit_ism.png'
              alt='ICPET 2026'
              width={500}
              height={250}
              />
            </div>
          </div>
          
            </div>
            
            <div className="flex-1 flex justify-center">
            <div className="">
            <p className="text-white/70 text-lg font-sans font-semibold mb-8">In Association With</p>
            <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex-1 flex justify-center">
            <div className="mt-2 pr-2">
              <Image 
              src='/spe_iit_ism_sc_logo.jpeg'
              alt='ICPET 2026'
              width={logo_w}
              height={logo_h}
              />
            </div>
            </div>
            <div className="flex-1 flex justify-center">
            <div className="mt-2 pr-2">
              <Image 
              src='/iadc.jpeg'
              alt='ICPET 2026'
              width={logo_w}
              height={logo_h}
              />
            </div>
            </div>
            <div className="flex-1 flex justify-center">
            <div className="mt-2 pr-2">
              <Image 
              src='/fipi.jpeg'
              alt='ICPET 2026'
              width={logo_w}
              height={logo_h}
              />
            </div>
            </div>
            </div>
            
            
          </div>
          
            </div>
            </div>
            </div>
            </section>
          
          
        </div>
      </section>

      {/* =====Redundant ORGANIZER STRIP ===== */}
      {/* <section className="bg-background border-t-2 border-b-2 border-accent py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <div className="text-accent font-sans font-bold text-sm uppercase tracking-wide">Organized By</div>
              <div className="flex-1 h-12 bg-muted rounded flex items-center justify-center text-muted-foreground font-sans text-sm">
                Department of Petroleum Engineering, IIT Dhanbad
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-accent font-sans font-bold text-sm uppercase tracking-wide">In Association With</div>
              <div className="flex-1 h-12 bg-muted rounded flex items-center justify-center text-muted-foreground font-sans text-sm">
                SPE India, IADC, Industry Partners
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ===== ABOUT THE CONFERENCE ===== */}
      <section id="about" className="py-24 bg-background border-t-2 border-b-2 border-accent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6 text-primary">About the Conference</h2>
              <p className="text-foreground/80 font-sans text-lg leading-relaxed mb-4">
              The International Conference on Petroleum and Energy Transition (ICPET) 2026 welcomes speakers, presenters, and exhibitors from across the globe to gather at IIT(ISM) Dhanbad. It is our utmost pleasure to invite new ideas, methods, and discussions from industry, academia, and students to join us and secure your registration for this conference.              </p>
              <p className="text-foreground/80 font-sans text-lg leading-relaxed mb-4">
                This premier event serves as a platform for knowledge exchange, networking, and advancement of technologies that bridge traditional energy with the future sustainable energy landscape.
              </p>
              <p className="text-foreground/80 font-sans text-lg leading-relaxed">
                Featuring keynote sessions, technical presentations, panel discussions, and industry exhibitions, ICPET 2026 is the definitive gathering for petroleum engineering excellence.
              </p>
            </div>
            <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
              <img
                src="https://placehold.co/500x400/0A1F3B/C9A84C?text=Conference+Overview"
                alt="Conference Overview Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: '500+', value: 'Delegates' },
              { label: '40+', value: 'Speakers' },
              { label: '3', value: 'Days' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-card p-8 rounded-lg border border-border shadow-sm">
                <p className="font-serif text-4xl font-bold text-accent mb-2">{stat.label}</p>
                <p className="font-sans text-sm uppercase tracking-wide text-muted-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT THE INSTITUTE ===== */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg flex items-center justify-center order-2 lg:order-1">
              <Image 
              src='/heritage.jpg'
              alt='ICPET 2026'
              width={500}
              height={300}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl font-bold mb-4 text-primary">Indian Institute of Technology (Indian School of Mines) Dhanbad</h2>
              <p className="text-foreground/80 font-sans text-lg leading-relaxed mb-6">
                IIT Dhanbad (formerly ISM Dhanbad) is a premier institute of national importance recognized for excellence in engineering, science, and technology. Founded in 1926, it has been instrumental in developing skilled professionals and advancing research in petroleum engineering and mineral technology.
              </p>
              <button className="text-accent font-sans font-semibold text-sm uppercase tracking-wide hover:text-primary transition-colors flex items-center gap-2"
              onClick={() => window.open("https://www.iitism.ac.in/")}>
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT THE DEPARTMENT ===== */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-2 text-primary">Department of Petroleum Engineering</h2>
              <p className="text-accent font-sans font-semibold mb-6">Indian Institute of Technology (ISM) Dhanbad</p>
              <p className="text-foreground/80 font-sans text-lg leading-relaxed mb-6">
                The Department of Petroleum Engineering at the Indian Institute of Technology (Indian School of Mines), Dhanbad, was established in 1957 to make its mark in the country&apos;s Oil and Gas Industry. Subsequent developments, under the guidance of distinguished educators, renowned personalities from the oil and gas industry and the scientific community have led the department to the forefront of research and teaching in Petroleum Engineering.
              </p>
              <ul className="space-y-3 font-sans text-foreground/80 mb-6">
                <li className="flex gap-3">
                  <span className="text-accent">●</span>
                  <span>Advanced drilling and well engineering expertise</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">●</span>
                  <span>Reservoir simulation and optimization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">●</span>
                  <span>Carbon capture and storage research</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">●</span>
                  <span>Energy transition and renewable integration</span>
                </li>
              </ul>
              <button className="text-accent font-sans font-semibold text-sm uppercase tracking-wide hover:text-primary transition-colors flex items-center gap-2"
              onClick={() => {window.open("https://www.iitism.ac.in/department-of-petroleum-engineering")}}>
              Learn More →
              </button>
            </div>
            <div className="h-96 rounded-lg flex items-center justify-center">
              <Image 
              src='/petro_dept.png'
              alt='ICPET 2026'
              width={700}
              height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROPOSED CONFERENCE EVENTS ===== */}
      <section id="events" className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-center mb-16 text-primary">Proposed Conference Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Keynote Sessions', desc: 'Visionary speakers from industry and academia' },
              { title: 'Technical Paper Presentations', desc: 'Latest research in petroleum and energy' },
              { title: 'Panel Discussions', desc: 'Expert insights on industry trends' },
              { title: 'Industry Exhibition', desc: 'Technology showcase and vendor displays' },
              { title: 'Workshop & Short Courses', desc: 'Hands-on learning experiences' },
              { title: 'Field Visit / Technical Tour', desc: 'On-site exploration of facilities' },
            ].map((event, idx) => (
              <div
                key={idx}
                className="bg-card p-8 rounded-lg border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-accent text-3xl mb-4">●</div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{event.title}</h3>
                <p className="font-sans text-foreground/70 text-sm">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THEMES ===== */}
      <section id="themes" className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-white">Conference Themes</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Future of Petroleum in a Low-Carbon World',
              'Energy Transition & Decarbonization Pathways',
              'Hydrogen Economy & Alternative Fuels',
              'Digitalization in Oil & Gas',
              'Carbon Capture, Utilization and Storage (CCUS)',
              'Data Analytics and Artificial Intelligence in Energy Industry',
              'Sustainable Production, Storage and Transportation',
              'Energy Security vs Sustainability',
              'Resource and Reserve Management',
              'Youth & Innovation in Energy',
            ].map((theme, idx) => (
              <div
                key={idx}
                className="px-6 py-3 border border-accent rounded-full text-white font-sans text-sm font-medium hover:bg-accent/10 transition-colors cursor-default"
              >
                {theme}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VENUE ===== */}
      <section id="venue" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-4 text-primary">Venue</h2>
              <p className="font-sans font-semibold text-lg text-primary mb-2">Golden Jubilee Lecture Theatre (GJLT)</p>
              <p className="text-foreground/70 font-sans mb-4 leading-relaxed">
                Dhanbad, Jharkhand, India
              </p>
              <p className="text-foreground/80 font-sans text-base leading-relaxed mb-6">
                Located in the heart of the mining and petroleum hub of India, GJLT offers state-of-the-art facilities, comfortable accommodation, and excellent connectivity for all conference delegates and guests.
              </p>

              <h3 className="font-serif text-lg font-bold text-primary mb-4">Amenities</h3>
              <ul className="space-y-2 font-sans text-foreground/70">
                <li>• On-campus conference halls with modern AV systems</li>
                <li>• Comfortable dining facilities</li>
                <li>• High-speed internet and dedicated work spaces</li>
                <li>• Secure parking for all attendees</li>
              </ul>
            </div>

            <div className="h-96 rounded-lg flex items-center justify-center">
              <Image
               src={"/gjlt.jpg"}
               alt='venue map'
               height={300}
               width={500}
                
              />
            </div>
          </div>

          {/* Info Chips */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '🏨', label: 'Accommodation Available', desc: 'On-campus & nearby hotels' },
              { icon: '✈️', label: 'Nearest Airports', desc: 'Durgapur(1.5hr), Ranchi (3.5hr), Kolkata (4.5hr)' },
              { icon: '🚂', label: 'Nearest Railway Station', desc: 'Dhanbad Junction(2.8km)' },
            ].map((chip, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border text-center">
                <p className="text-3xl mb-2">{chip.icon}</p>
                <p className="font-sans font-semibold text-primary mb-1">{chip.label}</p>
                <p className="font-sans text-sm text-foreground/70">{chip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT / CONVENORS ===== */}
      <section id="contact" className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary">Contacts</h2>
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 mb-10 justify-items-center px-4">
            {[
              {
                name: 'Prof. Vikas Mahto',
                title: 'Head of Department & Convenor',
                institute: 'Dept. of Petroleum Enginnering, IIT-ISM',
                email: 'vikas@iitism.ac.in',
                image: "/vikas_mahto.jpg"
              },
            
            ].map((contact, idx) => (
              <div key={idx} className="bg-card p-8 rounded-lg border border-border text-center">
                <div className="w-16 h-16 bg-muted overflow-hidden rounded-full mx-auto mb-4 flex items-center justify-center">
                  {/* <span className="font-serif text-2xl font-bold text-accent">{contact.name.charAt(0)}</span> */}
                  <Image
               src={contact.image}
               alt='hod'
               height={100}
               width={100}
                   />
                </div>
                <p className="font-serif text-lg font-bold text-primary mb-2">{contact.name}</p>
                <p className="font-sans text-sm text-accent font-semibold mb-1">{contact.title}</p>
                <p className="font-sans text-xs text-foreground/70 mb-4">{contact.institute}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 text-accent hover:text-primary font-sans text-sm font-semibold transition-colors"
                >
                  <Mail size={16} />
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'Prof. Tarun Kumar Naiya',
                title: 'Co-Convenor',
                institute: 'Dept. of Petroleum Enginnering, IIT-ISM',
                email: 'tarunnaiya@iitism.ac.in',
                image: "/tarun_naiya.jpg"
              },
              {
                name: 'Prof. Chandan Sahu',
                title: 'Co-Convenor',
                institute: 'Dept. of Petroleum Enginnering, IIT-ISM',
                email: 'chandansahu@iitism.ac.in',
                image: "/chandan_sahu.jpeg"
              },
              {
                name: 'Prof. Hamid Siddique',
                title: 'Co-Convenor',
                institute: 'Dept. of Petroleum Engineering, IIT-ISM',
                email: 'hamid@iitism.ac.in',
                image: "/hamid_siddique.jpg"
              },
            ].map((contact, idx) => (
              <div key={idx} className="bg-card p-8 rounded-lg border border-border text-center">
                <div className="w-16 h-16 bg-muted overflow-hidden rounded-full mx-auto mb-4 flex items-center justify-center">
                  {/* <span className="font-serif text-2xl font-bold text-accent">{contact.name.charAt(0)}</span> */}
                  <Image
               src={contact.image}
               alt='co-convenor'
               height={100}
               width={100}
                   />
                </div>
                <p className="font-serif text-lg font-bold text-primary mb-2">{contact.name}</p>
                <p className="font-sans text-sm text-accent font-semibold mb-1">{contact.title}</p>
                <p className="font-sans text-xs text-foreground/70 mb-4">{contact.institute}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 text-accent hover:text-primary font-sans text-sm font-semibold transition-colors"
                >
                  <Mail size={16} />
                  {contact.email}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-card p-10 rounded-lg border border-border">
            <h3 className="font-serif text-2xl font-bold text-primary mb-8 text-center">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label className="block font-sans font-medium text-foreground mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-border rounded-lg font-sans text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block font-sans font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-border rounded-lg font-sans text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block font-sans font-medium text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Your message here..."
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg font-sans text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-primary font-sans font-bold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* Social Links */}
            {/* <div className="flex justify-center gap-6 mt-10 pt-8 border-t border-border">
              <a href="#" className="p-3 rounded-full bg-muted hover:bg-accent/20 transition-colors">
                <Linkedin size={20} className="text-primary" />
              </a>
              <a href="#" className="p-3 rounded-full bg-muted hover:bg-accent/20 transition-colors">
                <Twitter size={20} className="text-primary" />
              </a>
              <a href="#" className="p-3 rounded-full bg-muted hover:bg-accent/20 transition-colors">
                <Facebook size={20} className="text-primary" />
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-primary text-white py-12 border-t-2 border-accent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-2">ICPET 2026</h3>
              <p className="text-white/70 font-sans text-sm">
                Bridging Hydrocarbons and Future of Energy
              </p>
            </div>
            <div>
              <p className="font-sans text-sm text-white/70 mb-2">Quick Links</p>
              <ul className="space-y-1 font-sans text-sm">
                <li><a href="#about" className="text-white/70 hover:text-accent transition-colors">About</a></li>
                <li><a href="#events" className="text-white/70 hover:text-accent transition-colors">Events</a></li>
                <li><a href="#themes" className="text-white/70 hover:text-accent transition-colors">Themes</a></li>
                <li><a href="#venue" className="text-white/70 hover:text-accent transition-colors">Venue</a></li>
              </ul>
            </div>
            <div>
              <p className="font-sans text-sm text-white/70 mb-2">Contact</p>
              <p className="font-sans text-sm text-white/70">
                Department of Petroleum Engineering<br />
                IIT Dhanbad, Dhanbad 826004, India<br />
                Email: icpet2026@iitdhanbad.ac.in
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-sans text-sm text-white/70 mb-4 md:mb-0">
              © 2026 International Conference on Petroleum and Energy Transition. All rights reserved.
            </p>
            <p className="font-sans text-sm text-white/70">
              Designed with precision for academic excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}





// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
