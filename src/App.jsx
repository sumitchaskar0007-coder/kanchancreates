import { useActionState } from 'react'
import { motion } from 'motion/react'
import kanchanLogo from '../logo.png'
import heroPhoto from '../assets/WhatsApp Image 2026-08-22 at 18.36.07.jpeg'
import projectPhotoOne from '../assets/WhatsApp Image 2026-08-22 at 18.36.04 (1).jpeg'
import projectPhotoTwo from '../assets/WhatsApp Image 2026-08-22 at 18.36.05 (1).jpeg'
import projectPhotoThree from '../assets/WhatsApp Image 2026-08-22 at 18.36.07 (1).jpeg'
import projectPhotoFour from '../assets/WhatsApp Image 2026-08-22 at 18.36.01.jpeg'
import projectPhotoFive from '../assets/WhatsApp Image 2026-08-22 at 18.36.02.jpeg'
import projectPhotoSix from '../assets/WhatsApp Image 2026-08-22 at 18.36.03.jpeg'
import projectPhotoSeven from '../assets/WhatsApp Image 2026-08-22 at 18.36.04.jpeg'

const services = [
  ['01', 'Home & Flat Interiors', 'Personal, functional interiors shaped around the way you live.'],
  ['02', 'Office Interiors', 'Clear, comfortable workspaces designed for focus and flow.'],
  ['03', 'Room & Bedroom Design', 'Warm, considered rooms with the right balance of light, colour and detail.'],
  ['04', 'Modular Kitchens', 'Practical kitchen layouts with smart storage and a clean finish.'],
  ['05', 'Garden & Renovation', 'Thoughtful upgrades that bring new life and character to existing spaces.'],
]

const projects = [
  ['01', 'Warm modern residence', 'Residential interiors', projectPhotoOne],
  ['02', 'Contemporary family home', 'Architecture & interiors', projectPhotoTwo],
  ['03', 'Light-filled living spaces', 'Interior design', projectPhotoThree],
  ['04', 'A calm retreat', 'Residential architecture', projectPhotoFour],
  ['05', 'Material-led details', 'Custom interiors', projectPhotoFive],
  ['06', 'Everyday, elevated', 'Turnkey execution', projectPhotoSix],
  ['07', 'A home with character', 'Architecture & styling', projectPhotoSeven],
]

function submitContact(previousState, formData) {
  const name = formData.get('name')?.trim()
  const email = formData.get('email')?.trim()
  if (!name || !email) return { error: 'Please add your name and email.' }
  return { success: `Thanks, ${name}. We will be in touch shortly.` }
}

function App() {
  const [formState, formAction, isPending] = useActionState(submitContact, {})

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Kanchan Architect and Interior Designers home"><img src={kanchanLogo} alt="Kanchan Architect and Interior Designers" /></a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a><a href="#services">Services</a><a href="#clients">Clients</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <a className="button button-small" href="#contact">Start a project <span>↗</span></a>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-gridline" />
          <div className="hero-content">
            <p className="eyebrow"><span /> Architecture / Interiors / India</p>
            <h1>Spaces with <em>meaning.</em></h1>
            <p className="hero-copy">Kanchan creates considered homes and interiors where material, light and everyday life come together beautifully.</p>
            <div className="hero-actions"><a className="button" href="#services">Explore services <span>↘</span></a><a className="text-link" href="#about">Our story <span>→</span></a></div>
          </div>
          <div className="hero-visual" aria-label="Fuel retail infrastructure visual">
            <img className="hero-photo" src={heroPhoto} alt="Kanchan residential interior project" />
          </div>
          <div className="hero-foot"><span>Scroll to explore</span><span className="scroll-line" /><span>06° 54′ 12″ N / 79° 51′ 13″ E</span></div>
        </section>

        <section id="services" className="services section-pad section-light">
          <div className="section-heading"><div><p className="eyebrow"><span /> What we do</p><h2>Designed for<br /><em>living well.</em></h2></div><p className="section-intro">We bring an architectural eye and an interior designer's sensitivity to every project, from first line to final layer.</p></div>
          <div className="service-grid">{services.map(([, title, text], index) => <motion.article className={`service-card service-${index + 1}`} key={title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}><h3>{title}</h3><p>{text}</p></motion.article>)}</div>
        </section>

        <section className="stats"><div className="stat-lead">Spaces we shape<br /><em>with purpose.</em></div><div className="stat"><strong>01</strong><small>Homes &amp; apartments</small></div><div className="stat"><strong>02</strong><small>Offices &amp; workspaces</small></div><div className="stat"><strong>03</strong><small>Kitchens &amp; rooms</small></div></section>

        <section id="clients" className="clients section-pad"><div className="section-heading compact"><div><p className="eyebrow"><span /> In good company</p><h2>Made with<br /><em>trust.</em></h2></div><p className="section-intro">Every project is a collaboration. We listen closely, communicate clearly and stay with you through every decision.</p></div><div className="client-grid">{['RESIDENTIAL', 'HOSPITALITY', 'RETAIL', 'WORKSPACES', 'RENOVATION', 'BESPOKE'].map((client) => <div className="client-logo" key={client}><span>{client}</span><small>Kanchan studio</small></div>)}</div></section>

        <section className="projects section-pad section-dark"><div className="section-heading compact"><div><p className="eyebrow light"><span /> Selected work</p><h2>Made to be<br /><em>noticed.</em></h2></div><p className="section-intro">A glimpse at the homes, rooms and details we help bring to life.</p></div><div className="project-grid">{projects.map(([number, title, type, image], index) => <article className={`project project-${index + 1}`} key={title}><div className="project-art"><img src={image} alt={`${title} architecture and interior project`} /><span className="project-number">{number}</span><span className="project-shape" /></div><div className="project-meta"><div><small>{type}</small><h3>{title}</h3></div><span>↗</span></div></article>)}</div></section>

        <section id="about" className="about section-pad"><div className="about-aside"><p className="eyebrow"><span /> Who we are</p><img className="about-logo" src={kanchanLogo} alt="Kanchan Architect and Interior Designers" /></div><div className="about-copy"><h2>Design that feels<br /><em>like you.</em></h2><p>Kanchan Architect and Interior Designs is an architecture and interior design practice. We create tailored spaces for homes, offices, rooms, gardens and modular kitchens, balancing beauty with everyday function.</p><div className="about-columns"><div><small>Our approach</small><p>Listen closely, plan clearly and shape every detail around the people who use the space.</p></div><div><small>Our promise</small><p>Practical guidance, thoughtful design and a finished space that feels entirely yours.</p></div></div></div></section>

        <section id="contact" className="contact section-pad"><div className="contact-intro"><p className="eyebrow light"><span /> Start a conversation</p><h2>Have a space<br /><em>in mind?</em></h2><p>Tell us a little about your project. We’ll bring the right people to the table.</p><div className="contact-details"><img className="contact-logo" src={kanchanLogo} alt="Kanchan Architect and Interior Designers" /><span>MHADA Building 303 &amp; 304, opposite Shell Petrol Pump<br />Near Dange Estate, Vadgaon Khurd, Nanded Fata<br />Pandurang Industrial Area, Pune, Maharashtra 411068</span></div></div><form className="contact-form" action={formAction}><label>Name<input name="name" type="text" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@company.com" required /></label><label>Phone<input name="phone" type="tel" placeholder="+91" /></label><label>Tell us about the project<textarea name="message" rows="3" placeholder="A few words about your requirement..." /></label><button className="button button-light" type="submit" disabled={isPending}>{isPending ? 'Sending...' : 'Send enquiry ↗'}</button>{formState.error && <p className="form-message error">{formState.error}</p>}{formState.success && <p className="form-message">{formState.success}</p>}</form></section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><img src={kanchanLogo} alt="Kanchan Architect and Interior Designers" /></a><p>Spaces made to feel like home.</p><div><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div><small>© 2026 Kanchan Architects</small></footer>
    </div>
  )
}

export default App
