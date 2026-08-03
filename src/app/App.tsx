import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown, ArrowRight, Home as HomeIcon, Hammer, Ruler, Phone, Mail, MapPin, Award, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Layout & Navigation ---

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center bg-primary text-primary-foreground">
              <HomeIcon size={20} />
            </div>
            <Link to="/" className="font-display text-xl font-bold tracking-wider">
              OC <span className="text-primary">SOLID GROUND</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "font-display text-sm font-medium tracking-wide transition-colors hover:text-primary",
                    location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-muted-foreground hover:text-foreground focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-background"
          >
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 font-display text-base font-medium tracking-wide",
                    location.pathname === link.path
                      ? "text-primary bg-muted/50"
                      : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-6 w-6 items-center justify-center bg-primary text-primary-foreground">
                <HomeIcon size={14} />
              </div>
              <span className="font-display text-lg font-bold tracking-wider">OC SOLID GROUND</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building your dreams on solid ground with exceptional craftsmanship, integrity, and a personal touch.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-display text-sm tracking-widest text-muted-foreground">CONTACT</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary"/> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-primary"/> info@ocsolidground.com</li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-primary"/> Orange County, CA</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-display text-sm tracking-widest text-muted-foreground">LEGAL</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary">Contractor License #1049284</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border/50 pt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} OC Solid Ground Construction Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

// --- Pages ---

function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full bg-card overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Beautiful custom home interior" 
            className="h-full w-full object-cover grayscale"
          />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-4 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-primary"></span>
              <span className="font-display text-sm font-medium tracking-widest text-primary">CUSTOM HOMES & RENOVATIONS</span>
            </div>
            <h1 className="mb-6 text-5xl sm:text-6xl md:text-7xl">
              BUILDING ON <br/> <span className="text-muted-foreground">SOLID GROUND.</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg text-muted-foreground">
              OC Solid Ground Construction Group delivers exceptional craftsmanship for custom homes, high-end renovations, and rural property improvements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="inline-flex h-12 items-center justify-center bg-primary px-8 font-display text-sm font-bold tracking-widest text-primary-foreground transition-transform hover:scale-105">
                VIEW PROJECTS
              </Link>
              <Link to="/services" className="inline-flex h-12 items-center justify-center border border-border bg-background/50 px-8 font-display text-sm font-bold tracking-widest backdrop-blur transition-colors hover:bg-muted">
                OUR SERVICES
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: 'PROJECTS COMPLETED', value: '150+' },
              { label: 'YEARS EXPERIENCE', value: '15+' },
              { label: 'CLIENT SATISFACTION', value: '100%' },
              { label: 'EXPERT CRAFTSMEN', value: '12' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="font-display text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-display text-xs tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Services() {
  const services = [
    {
      id: '01',
      title: 'Custom Homes & Additions',
      description: 'From concept to completion, we build custom homes and seamless additions tailored to your family\'s unique lifestyle and needs. We focus on exceptional craftsmanship, premium materials, and creating living spaces you will cherish for generations.'
    },
    {
      id: '02',
      title: 'Kitchen & Bath Remodeling',
      description: 'Transform your most-used spaces into functional works of art. We deliver high-end finishes, custom cabinetry, modern layouts, and beautiful fixtures to completely revitalize your kitchen and bathroom areas.'
    },
    {
      id: '03',
      title: 'Outdoor Living & Barns',
      description: 'Enhance your property with custom barns, workshops, expansive decking, and beautiful outdoor entertaining areas. We specialize in rural property structures that are as durable as they are visually stunning.'
    },
    {
      id: '04',
      title: 'Civil & Property Improvements',
      description: 'We handle the groundwork. From land grading and excavation to driveway installations and structural renovations, we ensure all your property improvements start on solid ground with proper drainage and stability.'
    }
  ];

  const [openId, setOpenId] = useState<string | null>(services[0].id);

  return (
    <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="mb-4 text-4xl md:text-5xl">Our Services</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Specializing in residential and civil improvements. We bring expertise, transparency, and a relentless work ethic to every home we touch.
        </p>
      </div>

      <div className="border-t border-border">
        {services.map((service) => {
          const isOpen = openId === service.id;
          
          return (
            <div key={service.id} className="border-b border-border">
              <button
                onClick={() => setOpenId(isOpen ? null : service.id)}
                className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
              >
                <div className="flex items-center gap-6">
                  <span className="font-display text-sm text-primary">{service.id}</span>
                  <h3 className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border border-border transition-transform duration-300",
                  isOpen ? "rotate-180 bg-primary border-primary text-primary-foreground" : "group-hover:border-primary group-hover:text-primary"
                )}>
                  <ChevronDown size={16} />
                </div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-10 pr-4 md:pl-12">
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <button className="mt-6 flex items-center gap-2 font-display text-sm tracking-widest text-primary hover:text-foreground transition-colors">
                        REQUEST QUOTE <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Modern Farmhouse Kitchen',
      description: 'Complete teardown and rebuild of a dated kitchen into a modern farmhouse culinary space with custom cabinetry and island.',
      beforeImg: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1200&auto=format&fit=crop', 
      afterImg: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1200&auto=format&fit=crop', 
    },
    {
      id: 2,
      title: 'Custom Rural Barn & Workshop',
      description: 'From an empty lot to a beautiful 2,400 sq ft custom rural workshop with integrated living space.',
      beforeImg: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop', 
    },
    {
      id: 3,
      title: 'Complete Home Renovation',
      description: 'Full structural and aesthetic renovation of a mid-century home, updating it for modern open-concept living.',
      beforeImg: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop', 
      afterImg: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop', 
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 md:text-center">
        <h1 className="mb-4 text-4xl md:text-5xl">Featured Projects</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Scroll through our recent transformations. We measure success by the beauty, durability, and functionality of the homes we improve.
        </p>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <div key={project.id} className="group relative">
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-display text-sm tracking-widest text-primary mb-2 block">PROJECT 0{index + 1}</span>
                <h2 className="text-3xl">{project.title}</h2>
              </div>
              <p className="text-muted-foreground md:max-w-md md:text-right">
                {project.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Before */}
              <div className="relative overflow-hidden bg-card border border-border">
                <div className="absolute top-4 left-4 z-10 bg-background/90 px-3 py-1 font-display text-xs tracking-widest border border-border backdrop-blur">
                  BEFORE
                </div>
                <div className="aspect-[4/3] w-full relative">
                  <img 
                    src={project.beforeImg} 
                    alt={`${project.title} before`}
                    className="absolute inset-0 h-full w-full object-cover grayscale opacity-70"
                  />
                </div>
              </div>
              
              {/* After */}
              <div className="relative overflow-hidden bg-card border border-border">
                <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 font-display text-xs font-bold tracking-widest">
                  AFTER
                </div>
                <div className="aspect-[4/3] w-full relative">
                  <img 
                    src={project.afterImg} 
                    alt={`${project.title} after`}
                    className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
        <div>
          <h1 className="mb-6 text-4xl md:text-5xl">Craftsmanship Rooted in the Community</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Since <strong className="text-foreground">1998</strong>, OC Solid Ground Construction Group has been a dedicated team of craftsmen. We don't just build structures; we create homes and improve properties with a focus on quality, integrity, and a personal touch.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 border border-border bg-card px-4 py-2">
              <ShieldCheck className="text-primary" size={20} />
              <span className="font-display text-sm tracking-widest">FULLY LICENSED & INSURED</span>
            </div>
            <div className="flex items-center gap-2 border border-border bg-card px-4 py-2">
              <Award className="text-primary" size={20} />
              <span className="font-display text-sm tracking-widest">FAMILY OWNED & OPERATED</span>
            </div>
          </div>
        </div>
        
        {/* Team Photo Spot */}
        <div className="relative aspect-[16/9] w-full overflow-hidden border border-border bg-card">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=1200&auto=format&fit=crop" 
            alt="OC Solid Ground team on site" 
            className="absolute inset-0 h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-4 right-4 bg-background px-4 py-2 font-display text-xs tracking-widest border border-border">
            OUR TEAM
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-border pt-16">
        {/* Service Area */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <MapPin className="text-primary" size={24} />
            <h2 className="text-2xl">Service Area</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Based locally, our operational reach extends across Orange County and into surrounding rural communities. We are fully equipped for custom residential builds and civil property improvements throughout the region.
          </p>
          <ul className="space-y-3 font-display text-sm tracking-widest">
            <li className="flex items-center gap-2 text-foreground"><div className="h-1.5 w-1.5 bg-primary rounded-full"/> ORANGE COUNTY</li>
            <li className="flex items-center gap-2 text-muted-foreground"><div className="h-1.5 w-1.5 bg-border rounded-full"/> RURAL COMMUNITIES</li>
            <li className="flex items-center gap-2 text-muted-foreground"><div className="h-1.5 w-1.5 bg-border rounded-full"/> SURROUNDING REGIONS</li>
          </ul>
        </div>

        {/* Contact Area */}
        <div className="bg-card border border-border p-8">
          <h2 className="text-2xl mb-6">Contact Us</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-display text-xs tracking-widest text-muted-foreground">FIRST NAME</label>
                <input type="text" className="w-full bg-input-background border border-border px-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground" />
              </div>
              <div className="space-y-2">
                <label className="font-display text-xs tracking-widest text-muted-foreground">LAST NAME</label>
                <input type="text" className="w-full bg-input-background border border-border px-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-display text-xs tracking-widest text-muted-foreground">EMAIL ADDRESS</label>
              <input type="email" className="w-full bg-input-background border border-border px-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground" />
            </div>
            <div className="space-y-2">
              <label className="font-display text-xs tracking-widest text-muted-foreground">PROJECT DETAILS</label>
              <textarea rows={4} className="w-full bg-input-background border border-border px-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none text-foreground"></textarea>
            </div>
            <button className="w-full bg-primary text-primary-foreground font-display text-sm font-bold tracking-widest py-4 mt-2 hover:bg-primary/90 transition-colors">
              SUBMIT INQUIRY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// --- App Entry ---

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
