import { useActionState } from 'react'
import { motion } from 'motion/react'
import saiLogo from '../assets/sai_logo.png'
import heroPhoto from '../assets/WhatsApp Image 2026-08-22 at 18.36.04 (1).jpeg'
import projectPhotoOne from '../assets/WhatsApp Image 2026-08-22 at 18.36.04 (1).jpeg'
import projectPhotoTwo from '../assets/WhatsApp Image 2026-08-22 at 18.36.05 (1).jpeg'
import projectPhotoThree from '../assets/WhatsApp Image 2026-08-22 at 18.36.07 (1).jpeg'
import projectPhotoFour from '../assets/WhatsApp Image 2026-08-22 at 18.36.01.jpeg'
import projectPhotoFive from '../assets/WhatsApp Image 2026-08-22 at 18.36.02.jpeg'
import projectPhotoSix from '../assets/WhatsApp Image 2026-08-22 at 18.36.03.jpeg'
import projectPhotoSeven from '../assets/WhatsApp Image 2026-08-22 at 18.36.04.jpeg'

const services = [
  ['01', 'RVI Projects', 'Retail visual identity, signage, lighting and facade upgrades delivered to approved site standards.'],
  ['02', 'Integrated Projects', 'Civil, structural, electrical and branding execution brought together by one accountable team.'],
  ['03', 'Erection Work', 'Precise installation of canopies, signage, columns and essential site infrastructure with safety first.'],
  ['04', 'Solar Site Projects', 'Solar panel installation and integration that helps fuel sites operate more efficiently.'],
  ['05', 'Canopies, All Types', 'Fabrication, supply and installation of durable canopy systems for fuel stations and industrial sites.'],
]

const process = [
  ['01', 'Understand the site', 'We review the location, scope, brand standards and delivery priorities before work begins.'],
  ['02', 'Plan the execution', 'Our team coordinates drawings, materials, fabrication, site access and installation schedules.'],
  ['03', 'Build with control', 'Skilled teams execute on site with clear supervision, quality checks and regular updates.'],
  ['04', 'Hand over ready', 'Every detail is checked, finished and handed over as a dependable working environment.'],
]

const projects = [
  ['01', 'RVI site upgrade', 'Retail visual identity', projectPhotoOne],
  ['02', 'Integrated fuel site', 'Turnkey execution', projectPhotoTwo],
  ['03', 'Canopy fabrication', 'Fabrication & erection', projectPhotoThree],
  ['04', 'Solar site project', 'Solar integration', projectPhotoFour],
  ['05', 'Retail identity rollout', 'RVI projects', projectPhotoFive],
  ['06', 'Complete canopy system', 'Canopies, all types', projectPhotoSix],
  ['07', 'Fuel-retail infrastructure', 'Integrated projects', projectPhotoSeven],
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
        <a className="brand" href="#home" aria-label="Sai Associates home"><img src={saiLogo} alt="Sai Associates fuel-retail infrastructure" /></a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a><a href="#services">Services</a><a href="#clients">Clients</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <a className="button button-small" href="#contact">Start a project <span>↗</span></a>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-gridline" />
          <div className="hero-content">
            <p className="eyebrow"><span /> RVI / Fuel retail / India</p>
            <h1>Built for the <em>road ahead.</em></h1>
            <p className="hero-copy">Sai Associates delivers dependable fuel-retail infrastructure, from RVI projects and integrated sites to fabrication, erection and solar solutions.</p>
            <div className="hero-actions"><a className="button" href="#services">Explore services <span>↘</span></a><a className="text-link" href="#about">Our story <span>→</span></a></div>
          </div>
          <div className="hero-visual" aria-label="Fuel retail infrastructure visual">
            <img className="hero-photo" src={heroPhoto} alt="IndianOil fuel-retail infrastructure project" />
          </div>
          <div className="hero-foot"><span>Scroll to explore</span><span className="scroll-line" /><span>06° 54′ 12″ N / 79° 51′ 13″ E</span></div>
        </section>

        <section id="services" className="services section-pad section-light">
          <div className="section-heading"><div><p className="eyebrow"><span /> What we do</p><h2>Ready for<br /><em>every detail.</em></h2></div><p className="section-intro">We bring one accountable team to the work, coordinating identity, fabrication, erection and site infrastructure from first plan to final handover.</p></div>
          <div className="service-grid">{services.map(([, title, text], index) => <motion.article className={`service-card service-${index + 1}`} key={title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}><h3>{title}</h3><p>{text}</p></motion.article>)}</div>
        </section>

        <section className="process section-pad"><div className="section-heading compact"><div><p className="eyebrow"><span /> How we work</p><h2>Clear from<br /><em>start to finish.</em></h2></div><p className="section-intro">Good infrastructure depends on good coordination. Our process keeps every decision visible and every handover accountable.</p></div><div className="process-grid">{process.map(([number, title, text]) => <article className="process-item" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="stats"><div className="stat-lead">The work behind<br /><em>every site.</em></div><div className="stat"><strong>01</strong><small>RVI projects</small></div><div className="stat"><strong>02</strong><small>Integrated projects</small></div><div className="stat"><strong>03</strong><small>Canopies &amp; solar</small></div></section>

        <section id="clients" className="clients section-pad"><div className="section-heading compact"><div><p className="eyebrow"><span /> Our clients</p><h2>Trusted by<br /><em>leading names.</em></h2></div><p className="section-intro">We support fuel-retail teams with dependable execution, clear coordination and infrastructure built to last.</p></div><div className="client-grid">{['INDIAN OIL', 'BPCL', 'IOCL', 'NAYARA', 'JIO-BP', 'RELIANCE'].map((client) => <div className="client-logo" key={client}><span>{client}</span><small>Client</small></div>)}</div></section>

        <section className="projects section-pad section-dark"><div className="section-heading compact"><div><p className="eyebrow light"><span /> Selected work</p><h2>Made to be<br /><em>noticed.</em></h2></div><p className="section-intro">A glimpse at the fuel sites, canopies and retail identities we help bring to life.</p></div><div className="project-grid">{projects.map(([number, title, type, image], index) => <article className={`project project-${index + 1}`} key={title}><div className="project-art"><img src={image} alt={`${title} fuel-retail infrastructure project`} /><span className="project-number">{number}</span><span className="project-shape" /></div><div className="project-meta"><div><small>{type}</small><h3>{title}</h3></div><span>↗</span></div></article>)}</div></section>

        <section id="about" className="about section-pad"><div className="about-aside"><p className="eyebrow"><span /> Who we are</p><img className="about-logo" src={saiLogo} alt="Sai Associates fuel-retail infrastructure" /></div><div className="about-copy"><h2>Infrastructure<br /><em>you can trust.</em></h2><p>Sai Associates is a fuel-retail infrastructure partner serving oil marketing companies, developers and site owners across India. We bring practical engineering, branded execution and disciplined project coordination to every location.</p><p>From a focused RVI upgrade to a complete site build, our teams understand the pace, safety requirements and finish expected in a live fuel-retail environment.</p><div className="about-columns"><div><small>Our approach</small><p>Coordinate every moving part clearly, from site identity and fabrication to installation and handover.</p></div><div><small>Our promise</small><p>Dependable execution, practical solutions and infrastructure built to perform for the long road ahead.</p></div></div></div></section>

        <section id="contact" className="contact section-pad"><div className="contact-intro"><p className="eyebrow light"><span /> Start a conversation</p><h2>Have a site<br /><em>in mind?</em></h2><p>Tell us a little about your requirement. We’ll bring the right people to the table.</p><div className="contact-details"><img className="contact-logo" src={saiLogo} alt="Sai Associates fuel-retail infrastructure" /><span>MHADA Building 303 &amp; 304, opposite Shell Petrol Pump<br />Near Dange Estate, Vadgaon Khurd, Nanded Fata<br />Pandurang Industrial Area, Pune, Maharashtra 411068</span></div></div><form className="contact-form" action={formAction}><label>Name<input name="name" type="text" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@company.com" required /></label><label>Phone<input name="phone" type="tel" placeholder="+91" /></label><label>Tell us about the project<textarea name="message" rows="3" placeholder="A few words about your requirement..." /></label><button className="button button-light" type="submit" disabled={isPending}>{isPending ? 'Sending...' : 'Send enquiry ↗'}</button>{formState.error && <p className="form-message error">{formState.error}</p>}{formState.success && <p className="form-message">{formState.success}</p>}</form></section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><img src={saiLogo} alt="Sai Associates fuel-retail infrastructure" /></a><p>Fuel-retail infrastructure made to last.</p><div><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div><small>© 2026 Sai Associates</small></footer>
    </div>
  )
}

export default App
