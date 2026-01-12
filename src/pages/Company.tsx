import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; 
import { Phone, Mail, MapPin, ArrowRight, Download, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aitLogo from '@/assets/AitLogo.png';

const Company = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);
  
  // EmailJS State & Ref
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('idle'); 

  const sections = ['about', 'careers', 'press', 'partners', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Email Sending
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    
    const SERVICE_ID = "service_rxnuwhp";   
    const TEMPLATE_ID = "template_a1xi6y7"; 
    const PUBLIC_KEY = "A-4qaqDNVNz9nFeRz"; 
    

    if (form.current) {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            setStatus('success');
            form.current?.reset();
            // Reset button after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        }, (error) => {
            console.log(error.text);
            setStatus('error');
        });
    }
  };

  
  const footerElement = document.querySelector('footer');
  const shouldHideSidebar = footerElement 
    ? scrollY + window.innerHeight > footerElement.offsetTop - 200
    : false;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Sticky Sidebar Navigation */}
      <div className={`fixed left-0 top-32 hidden lg:flex flex-col gap-2 p-8 z-30 transition-all duration-300 ${
        shouldHideSidebar ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`py-2 px-4 rounded-lg text-sm font-semibold transition-all capitalize ${
              activeSection === section
                ? 'bg-teampulse-purple text-white shadow-md'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-24 left-0 right-0 bg-background/95 border-b z-40 overflow-x-auto">
        <div className="container mx-auto px-6 flex gap-2 py-3">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`py-1 px-3 rounded-lg text-xs font-semibold transition-all capitalize whitespace-nowrap ${
                activeSection === section
                  ? 'bg-teampulse-purple text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      <main className="pt-16 lg:pt-0">
        {/* Hero Section */}
        <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 bg-gradient-to-b from-background via-background to-secondary/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Building the Operating System for <span className="gradient-text">Agencies.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Our mission is to help teams work smarter, not harder.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 scroll-mt-20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-6">
                  Who We <span className="gradient-text">Are.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  TeamPulse is dedicated to solving the efficiency crisis in modern agencies. We believe that every team should have access to
                  powerful, intuitive tools that help them focus on what matters most delivering exceptional work. Founded on the principle that
                  technology should simplify, not complicate, TeamPulse brings clarity to chaos.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { stat: '500+', label: 'Agencies' },
                  { stat: '1M+', label: 'Tasks Completed' },
                  { stat: '99.9%', label: 'Uptime' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-2xl border border-border p-8 text-center"
                  >
                    <div className="text-4xl md:text-5xl font-black text-teampulse-purple mb-2">
                      {item.stat}
                    </div>
                    <p className="text-muted-foreground font-semibold">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Careers Section */}
        <section id="careers" className="py-24 px-6 bg-secondary/40 scroll-mt-20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-4">
                  Join the <span className="gradient-text">Mission.</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  We are always looking for talented individuals who are passionate about building the future of work.
                </p>
              </div>

              {/* No Open Roles - Coming Soon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl border border-border p-12 md:p-16 text-center space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teampulse-purple/30 to-teampulse-pink/30 flex items-center justify-center mx-auto border border-teampulse-purple/20">
                    <span className="text-3xl">💼</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">No Open Positions Right Now</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We're currently building an amazing team! Exciting opportunities will be opening soon. <br />
                    <span className="font-semibold text-teampulse-purple">Let us know if you'd like to hear first.</span>
                  </p>
                </div>

                <div className="pt-4">
                  <a href="mailto:careers@teampulse.app">
                    <Button size="lg" className="group">
                      Notify Me When Hiring
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>

                <p className="text-sm text-muted-foreground pt-4">
                  In the meantime, feel free to{' '}
                  <a href="mailto:careers@teampulse.app" className="text-teampulse-purple font-semibold hover:underline">
                    send us your resume
                  </a>{' '}
                  – we'd love to keep it on file!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Press Section */}
        <section id="press" className="py-24 px-6 scroll-mt-20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-4">
                  In the <span className="gradient-text">News.</span>
                </h2>
                <p className="text-lg text-muted-foreground">Recent updates and recognition for TeamPulse.</p>
              </div>

              {/* News Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'TeamPulse Launches Desktop Agent v2.4',
                    date: 'Jan 2026',
                    description: 'Introducing offline mode and native OS integration for faster time tracking on Windows and Mac.',
                  },
                  {
                    title: 'Top 10 Agency Tools 2026',
                    date: 'Dec 2025',
                    description: 'Recognized as one of the most innovative solutions for modern agencies.',
                  },
                  {
                    title: 'Enterprise Launch',
                    date: 'Nov 2025',
                    description: 'Introducing enterprise-grade security and advanced compliance features.',
                  },
                ].map((news, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-2xl border border-border p-6 space-y-3 hover:shadow-card transition-shadow"
                  >
                    <p className="text-xs text-teampulse-purple font-semibold uppercase tracking-wide">
                      {news.date}
                    </p>
                    <h3 className="text-xl font-bold">{news.title}</h3>
                    <p className="text-muted-foreground text-sm">{news.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Media Kit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl border border-border p-8 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-2">Brand Assets & Logos</h3>
                  <p className="text-muted-foreground">Download our official brand kit for press and media use.</p>
                </div>
                <a href="https://drive.google.com/drive/folders/1srbkR7LQLinjC9PFaj4Uf7_hemPvkyok?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button className="group">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="py-24 px-6 bg-secondary/40 scroll-mt-20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-4">
                  Our Strategic <span className="gradient-text">Partners.</span>
                </h2>
              </div>

              {/* AIT Services Premium Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teampulse-purple/20 to-teampulse-pink/20 blur-2xl rounded-3xl" />
                <div className="relative glass-card rounded-3xl border border-teampulse-purple/40 bg-gradient-to-br from-white/10 to-white/5 p-12 space-y-6">
                  {/* Gold Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 px-4 py-2 border border-amber-500/30">
                    <span className="text-xs font-semibold text-amber-600">★ STRATEGIC PARTNER</span>
                  </div>

                  {/* Logo */}
                  <div className="w-56 h-32 rounded-2xl bg-white/90 flex items-center justify-center border border-white/20 shadow-xl">
                    <img
                      src={aitLogo}
                      alt="AIT Services Australia Logo"
                      className="w-auto h-24 object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-black">
                      Powered by <span className="gradient-text">AIT Services Australia</span>
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      TeamPulse is architected and built by the engineering experts at AIT Services Australia, ensuring enterprise-grade security
                      and scalability. Our partnership guarantees world-class infrastructure and continuous innovation.
                    </p>
                  </div>

                  {/* CTA */}
                  <a href="https://www.aitservices.com.au" target="_blank" rel="noopener noreferrer">
                    <Button className="group">
                      Visit AIT Services
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section - WITH EMAILJS */}
        <section id="contact" className="py-24 px-6 scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-4">
                  Get in <span className="gradient-text">Touch.</span>
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-3xl border border-border p-8 space-y-6"
                >
                  <h3 className="text-2xl font-bold">Send us a Message</h3>
                  
                  <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Name</label>
                      <input
                        type="text"
                        name="user_name" // REQUIRED for EmailJS
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-border bg-background/50 px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teampulse-purple"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Email</label>
                      <input
                        type="email"
                        name="user_email" 
                        required
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-border bg-background/50 px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teampulse-purple"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Message</label>
                      <textarea
                        name="message" 
                        placeholder="Tell us how we can help"
                        required
                        rows={4}
                        className="w-full rounded-xl border border-border bg-background/50 px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teampulse-purple"
                      />
                    </div>
                    
                    <Button 
                      size="lg" 
                      className={`w-full transition-all duration-200 ${
                        status === 'success' ? 'bg-green-600 hover:bg-green-700' : 
                        status === 'error' ? 'bg-red-600 hover:bg-red-700' : ''
                      }`}
                      disabled={status === 'sending' || status === 'success'}
                    >
                      {status === 'idle' && <>Send Message <Send className="w-4 h-4 ml-2" /></>}
                      {status === 'sending' && <>Sending... <Loader2 className="w-4 h-4 ml-2 animate-spin" /></>}
                      {status === 'success' && <>Sent Successfully <CheckCircle className="w-4 h-4 ml-2" /></>}
                      {status === 'error' && <>Failed. Try Again <AlertCircle className="w-4 h-4 ml-2" /></>}
                    </Button>
                  </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  </div>

                  {[
                    {
                      icon: Phone,
                      label: 'Call Us',
                      value: '+61 4820 43151',
                      href: 'tel:+61482043151',
                    },
                    {
                      icon: Mail,
                      label: 'Email Us',
                      value: 'contact@aitservices.com.au',
                      href: 'mailto:contact@aitservices.com.au',
                    },
                    {
                      icon: MapPin,
                      label: 'Office',
                      value: 'Canberra, Australia',
                      href: '#',
                    },
                  ].map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <motion.a
                        key={index}
                        href={contact.href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card rounded-2xl border border-border p-6 flex items-start gap-4 hover:shadow-card transition-shadow group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teampulse-purple/30 to-teampulse-pink/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-teampulse-purple" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide">{contact.label}</p>
                          <p className="text-lg font-semibold group-hover:text-teampulse-purple transition-colors">
                            {contact.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Company;