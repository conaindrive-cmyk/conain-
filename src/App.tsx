import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { 
  Camera, 
  Instagram, 
  Mail, 
  Phone, 
  ChevronRight, 
  Menu, 
  X,
  Heart,
  User,
  Calendar,
  Sun
} from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const galleryItems = [
  { 
    title: "Wedding Story", 
    category: "Love & Union", 
    icon: Heart, 
    color: "bg-zinc-800",
    image: "/gallery/000A5651.jpg"
  },
  { 
    title: "Classic Portrait", 
    category: "Essence of Self", 
    icon: User, 
    color: "bg-zinc-700",
    image: "/gallery/1U1A7868.JPG"
  },
  { 
    title: "Vibrant Event", 
    category: "Moments Captured", 
    icon: Calendar, 
    color: "bg-zinc-800",
    image: "/gallery/IMG_4572.jpg"
  },
  { 
    title: "Nature's Calm", 
    category: "Outdoor", 
    icon: Sun, 
    color: "bg-zinc-700",
    image: "/gallery/IMG_8577.JPG"
  },
  { 
    title: "Wedding Bliss", 
    category: "Celebration", 
    icon: Heart, 
    color: "bg-zinc-800",
    image: "/gallery/IMG_8898.JPG"
  },
  { 
    title: "Elegant Portrait", 
    category: "Studio", 
    icon: User, 
    color: "bg-zinc-700",
    image: "/gallery/IMG_8997.jpg"
  },
  { 
    title: "Dynamic Moment", 
    category: "Activity", 
    icon: Camera, 
    color: "bg-zinc-800",
    image: "/gallery/whatsapp_1.jpeg"
  },
  { 
    title: "Golden Hour", 
    category: "Landscape", 
    icon: Sun, 
    color: "bg-zinc-700",
    image: "/gallery/whatsapp_2.jpeg"
  },
];

const services = [
  { 
    title: "Wedding Photography", 
    desc: "Capturing the magic and emotion of your most special day with a blend of candid shots and timeless portraits.",
    price: "From $1,200"
  },
  { 
    title: "Portrait Sessions", 
    desc: "Professional portraits that reflect your unique personality. Perfect for individuals, couples, or families.",
    price: "From $300"
  },
  { 
    title: "Event Coverage", 
    desc: "Comprehensive coverage for corporate events, parties, and celebrations. Fast delivery and professional quality.",
    price: "From $500"
  },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-red selection:text-white">
      {/* Header Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6 ${
          isScrolled ? "bg-brand-black/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-red">Est. 2024</span>
            <span className="text-sm font-medium tracking-tighter uppercase">Conain Hassan</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10">
            {navigation.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-[10px] uppercase tracking-[0.2em] font-medium transition-colors hover:text-brand-red"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center pt-20"
          >
            {navigation.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl uppercase tracking-[0.3em] font-bold py-4 hover:text-brand-red transition-colors"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/gallery/IMG_8898.JPG" 
              className="w-full h-full object-cover opacity-50"
              alt="Hero Background"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black"></div>
          </div>
          
          {/* Abstract Lens Graphic */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-white rounded-full flex items-center justify-center"
            >
              <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] border border-brand-red rounded-full"></div>
            </motion.div>
          </div>

          <div className="text-center z-10">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-8xl font-serif italic mb-4 tracking-tighter"
            >
              Conain Hassan <span className="text-brand-red not-italic font-sans font-bold block md:inline-block">Photographer</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[10px] md:text-sm uppercase tracking-[0.5em] text-white/50 mb-10 max-w-xl mx-auto leading-relaxed"
            >
              Capturing Moments Through a Professional Lens
            </motion.p>
            <motion.a 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              href="#gallery"
              className="inline-flex items-center gap-4 px-12 py-5 bg-brand-red hover:bg-red-700 text-white text-[10px] uppercase tracking-[0.3em] font-bold transition-all border border-brand-red group"
            >
              View My Work
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-24 px-6 md:px-12 bg-white/5 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/5] bg-zinc-800 border border-white/10 relative overflow-hidden group">
                  <img 
                    src="/gallery/1U1A7868.JPG" 
                    alt="Conain Hassan" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle placeholder icon representing a portrait */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none transition-opacity group-hover:opacity-40">
                    <Camera size={120} strokeWidth={0.5} />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <span className="text-[10px] text-brand-red uppercase tracking-[0.4em] font-bold">The Visionary</span>
                <h2 className="text-4xl font-serif italic tracking-tighter">About Me</h2>
                <div className="h-[1px] w-20 bg-brand-red"></div>
                <p className="text-white/70 leading-relaxed font-light">
                  I am Conain Hassan, a passionate photographer dedicated to freezing time and capturing the essence of human emotion. With a keen eye for detail and a love for storytelling, I transform ordinary moments into extraordinary memories.
                </p>
                <p className="text-white/70 leading-relaxed font-light">
                  My work is characterized by its clean aesthetic, bold use of shadow and light, and a commitment to authenticity. Whether it's a grand wedding or an intimate portrait, my goal is always the same: to tell a story that resonates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-16 space-y-4">
              <span className="text-[10px] text-brand-red uppercase tracking-[0.4em] font-bold">Portfolio</span>
              <h2 className="text-5xl font-serif italic tracking-tighter">My Work</h2>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Curated collections of visual stories</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryItems.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative aspect-[3/4] group overflow-hidden border border-white/5 cursor-pointer ${item.color}`}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-500"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <item.icon className="text-brand-red mb-4 opacity-40 group-hover:opacity-100 transition-opacity" size={32} />
                    <span className="text-xl font-serif italic mb-1">{item.title}</span>
                    <span className="text-[9px] uppercase tracking-widest text-white/60 font-bold">{item.category}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 md:px-12 bg-white/5">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col items-center mb-16 space-y-4 text-center">
              <span className="text-[10px] text-brand-red uppercase tracking-[0.4em] font-bold">Expertise</span>
              <h2 className="text-5xl font-serif italic tracking-tighter">Services</h2>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Professional photography solutions tailored to your needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="space-y-4 p-8 border border-white/10 hover:border-brand-red/30 transition-colors"
                >
                  <span className="text-brand-red font-mono text-xs">0{index + 1} /</span>
                  <h3 className="text-2xl font-serif italic">{service.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed font-light">{service.desc}</p>
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest font-bold text-white/80">{service.price}</span>
                    <button className="text-brand-red hover:translate-x-1 transition-transform">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-[10px] text-brand-red uppercase tracking-[0.4em] font-bold">Get In Touch</span>
                  <h2 className="text-5xl font-serif italic tracking-tighter">Let's Create Together</h2>
                  <p className="text-white/60 leading-relaxed font-light">
                    Have a project in mind? Reach out today and let's discuss how we can bring your vision to life through my lens.
                  </p>
                </div>

                <div className="space-y-6">
                  <a href="tel:+923152469120" className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-red transition-colors">
                      <Phone size={18} className="text-white/60 group-hover:text-brand-red transition-colors" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Call Me</p>
                      <p className="text-sm font-medium transition-colors group-hover:text-brand-red">+92 315 2469120</p>
                    </div>
                  </a>

                  <a href="mailto:Conainhassan1@gmail.com" className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-red transition-colors">
                      <Mail size={18} className="text-white/60 group-hover:text-brand-red transition-colors" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Email Me</p>
                      <p className="text-sm font-medium transition-colors group-hover:text-brand-red">Conainhassan1@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.instagram.com/photography_by_conain.hassan?igsh=MTM4emtwdWY3YzRnNQ==" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-red transition-colors">
                      <Instagram size={18} className="text-white/60 group-hover:text-brand-red transition-colors" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Follow Me</p>
                      <p className="text-sm font-medium transition-colors group-hover:text-brand-red">@photography_by_conain.hassan</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white/5 p-8 border border-white/10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/40">First Name</label>
                      <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-brand-red transition-colors text-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/40">Last Name</label>
                      <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-brand-red transition-colors text-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-brand-red transition-colors text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-brand-red transition-colors text-sm resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-brand-red hover:bg-red-700 text-white text-[10px] uppercase tracking-[0.3em] font-bold transition-all">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-red mb-1">Conain Hassan</span>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">© 2024 All Rights Reserved</p>
          </div>
          
          <div className="flex items-center gap-6">
             <a href="#" className="p-3 border border-white/10 rounded-full hover:border-brand-red transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="p-3 border border-white/10 rounded-full hover:border-brand-red transition-colors">
              <Mail size={16} />
            </a>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[10px] uppercase tracking-widest font-bold text-white/60 hover:text-brand-red transition-colors"
          >
            Back to Top
          </button>
        </div>
      </footer>
    </div>
  );
}
