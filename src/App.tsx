import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import {
  ArrowUp,
  ArrowUpRight,
  ChevronDown,
  Gamepad2,
  Hash,
  Heart,
  Menu,
  MessageCircle,
  Mic,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import './App.css'

const DISCORD_INVITE = 'https://discord.gg/64U2WPt59a'

const activities = [
  { icon: MessageCircle, title: 'Chat & Hangout', text: 'Meet people and enjoy casual conversations.' },
  { icon: Gamepad2, title: 'Gaming Together', text: 'Play games, share experiences, and have fun.' },
  { icon: Users, title: 'Find New Friends', text: 'Connect with people who share similar interests.' },
  { icon: Sparkles, title: 'Community Events', text: 'Participate in activities and gatherings.' },
]

const highlights = [
  { icon: Heart, title: 'Friendly atmosphere', text: 'A relaxed space where conversations can start naturally.' },
  { icon: ShieldCheck, title: 'Respect comes first', text: 'Different perspectives are welcome here.' },
  { icon: Users, title: 'Everyone belongs', text: 'Come as you are, whether you are new or familiar.' },
  { icon: Gamepad2, title: 'Shared interests', text: 'Find your next game, hobby, or rabbit hole.' },
]

const faqs = [
  ['What is Titik Temu?', 'Titik Temu is a social Discord community for people who want to connect, meet new friends, share interests, and enjoy time together.'],
  ['Is joining the community free?', 'Yes. Joining Titik Temu is free. You only need a Discord account to take part.'],
  ['Do I need to be active every day?', 'Not at all. Drop in whenever you feel like chatting or joining an activity.'],
  ['Can I join just to make new friends?', 'Absolutely. Making new connections is one of the main reasons this community exists.'],
  ['How do I join the Discord server?', 'Use any Join Discord button on this page to open the invitation link, then follow Discord’s join flow.'],
]

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

function Logo() {
  return (
    <a className="brand" href="#home" aria-label="Titik Temu home">
      <img className="brand-mark" src="/favicon.svg" alt="" width="25" height="25" />
      <span>Titik Temu</span>
    </a>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [['About', '#about'], ['Activities', '#activities'], ['Community', '#community'], ['FAQ', '#faq']]
  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="button button-small nav-cta" href={DISCORD_INVITE} target="_blank" rel="noreferrer">Join Discord <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && <motion.nav className="mobile-nav glass-blur" aria-label="Mobile navigation" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="button" href={DISCORD_INVITE} target="_blank" rel="noreferrer">Join Discord <ArrowUpRight size={16} /></a>
        </motion.nav>}
      </AnimatePresence>
    </header>
  )
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-glow" aria-hidden="true" />
    <div className="container hero-grid">
      <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.09 } } }}>
        <motion.div className="availability" variants={reveal}><span className="status-dot" /> A place to meet, anytime</motion.div>
        <motion.h1 variants={reveal}>Find Your People,<br /><em>Find Your Place.</em></motion.h1>
        <motion.p variants={reveal}>A little corner of the internet where conversations begin, friendships grow, and everyone has a place to belong.</motion.p>
        <motion.div className="hero-actions" variants={reveal}>
          <a className="button" href={DISCORD_INVITE} target="_blank" rel="noreferrer">Join Our Discord <ArrowUpRight size={17} /></a>
          <a className="text-link" href="#community">Explore community <span>↓</span></a>
        </motion.div>
      </motion.div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="hero-note note-one"><span className="note-avatar">A</span><span><b>someone new</b><small>just joined the conversation</small></span></div>
        <div className="hero-note note-two"><span className="note-icon"><Heart size={14} fill="currentColor" /></span><span><b>good energy here</b><small>the middle is a nice place to be</small></span></div>
        <div className="centerpiece"><span className="centerpiece-line" /><span className="centerpiece-text">meet<br /><strong>in the middle</strong></span><span className="centerpiece-line" /></div>
      </motion.div>
    </div>
    <div className="hero-footer container"><span>Scroll to wander</span><span className="scroll-line" /></div>
  </section>
}

function About() {
  return <section className="section about-section" id="about">
    <div className="container about-grid">
      <SectionHeading eyebrow="01 / The idea" title="More Than Just a Discord Server." />
      <div className="about-copy"><p className="large-copy">Titik Temu is a social community built for people who want to connect, meet new friends, share experiences, and enjoy their time together.</p><p>There is no pressure to be the loudest in the room. Just a welcoming place to show up as yourself and see where a conversation takes you.</p><a className="text-link" href="#activities">See what happens here <ArrowUpRight size={16} /></a></div>
    </div>
  </section>
}

function Activities() {
  const reduceMotion = useReducedMotion()
  return <section className="section activities-section" id="activities">
    <div className="container"><SectionHeading eyebrow="02 / Your kind of time" title="There's Always Something to Do." copy="Some days it is a long conversation. Other days it is a quick game and a laugh. Both belong here." />
      <div className="activity-grid">{activities.map(({ icon: Icon, title, text }, index) => <motion.article className={`activity-card ${index === 0 ? 'activity-featured' : ''}`} key={title} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={reveal} transition={reduceMotion ? { duration: 0 } : { delay: index * 0.06 }}>
        <div className="card-top"><span className="icon-box"><Icon size={20} /></span><span className="card-index">0{index + 1}</span></div><h3>{title}</h3><p>{text}</p><span className="card-corner" aria-hidden="true">↗</span>
      </motion.article>)}</div>
    </div>
  </section>
}

function DiscordPreview() {
  return <section className="section preview-section" id="community">
    <div className="container preview-grid"><div className="preview-intro"><SectionHeading eyebrow="03 / Inside the room" title="Take a Look Inside." copy="A small preview of the places conversations can begin. Illustrative channels, real possibility." /><div className="preview-caption"><span className="caption-line" /> <span>Illustrative preview</span></div></div>
      <div className="discord-window" aria-label="Illustrative Discord server preview">
        <div className="discord-sidebar"><div className="server-name"><span className="server-avatar">TT</span><b>Titik Temu</b><ChevronDown size={14} /></div><div className="channel-group"><span>WELCOME</span><p><Hash size={14} /> general</p><p><Hash size={14} /> introductions</p></div><div className="channel-group"><span>HANGOUT</span><p><Hash size={14} /> gaming</p><p><Hash size={14} /> media</p><p className="voice"><Mic size={14} /> ruang santai</p></div></div>
        <div className="discord-chat"><div className="chat-head"><Hash size={18} /><b>general</b><span>Where the small talk starts.</span></div><div className="chat-messages"><div className="chat-message"><span className="chat-avatar avatar-amber">R</span><div><b>raka <small>today at 18:20</small></b><p>what's everyone up to this evening?</p></div></div><div className="chat-message"><span className="chat-avatar avatar-blue">N</span><div><b>naya <small>today at 18:22</small></b><p>just found a new game. anyone wants to try?</p></div></div><div className="chat-message muted-message"><span className="chat-avatar avatar-pink">T</span><div><b>tama <small>today at 18:24</small></b><p>sounds like a plan 🎮</p></div></div></div><div className="chat-input">Message #general</div></div>
      </div>
    </div>
  </section>
}

function Highlights() {
  return <section className="section highlights-section"><div className="container"><div className="highlight-header"><SectionHeading eyebrow="04 / The middle ground" title="Built Around Connection." /><p>We keep the door open, the conversation moving, and the atmosphere kind.</p></div><div className="highlight-grid">{highlights.map(({ icon: Icon, title, text }) => <article className="highlight-item" key={title}><Icon size={19} /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return <section className="section faq-section" id="faq"><div className="container faq-grid"><SectionHeading eyebrow="05 / Good to know" title="Questions, Answered." /><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${open === index ? 'open' : ''}`} key={question}><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}><span>{question}</span><ChevronDown size={18} /></button><AnimatePresence initial={false}>{open === index && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{answer}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>
}

function CTA() {
  return <section className="cta-section"><div className="container cta-inner"><Sparkles size={19} /><h2>Your Next Conversation<br /><em>Starts Here.</em></h2><p>Don't stay a stranger. Come hang out, meet new people, and find your place with us.</p><a className="button button-light" href={DISCORD_INVITE} target="_blank" rel="noreferrer">Join the Discord <ArrowUpRight size={17} /></a></div></section>
}

function Footer() {
  return <footer className="footer"><div className="container footer-grid"><div><Logo /><p>A welcoming corner for conversations,<br />connections, and a little fun.</p></div><div className="footer-links"><span>Explore</span><a href="#about">About</a><a href="#activities">Activities</a><a href="#community">Community</a><a href="#faq">FAQ</a></div><div className="footer-links"><span>Find us</span><a href={DISCORD_INVITE} target="_blank" rel="noreferrer">Discord <ArrowUpRight size={13} /></a></div></div><div className="container footer-bottom"><span>© 2025 Titik Temu</span><span>Made for people in between.</span></div></footer>
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goToTop = () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return <AnimatePresence>
    {visible && <motion.button className="back-to-top" type="button" aria-label="Back to top" onClick={goToTop} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} whileTap={{ scale: 0.94 }}><ArrowUp size={17} /></motion.button>}
  </AnimatePresence>
}

function App() {
  return <div className="site"><Navbar /><main><Hero /><About /><Activities /><DiscordPreview /><Highlights /><FAQ /><CTA /></main><Footer /><BackToTop /></div>
}

export default App
