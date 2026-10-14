import { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, Bot, BrainCircuit, Check, ChevronDown, Clock3,
  Code2, Database, FileText, Globe2, Headphones, Mail,
  Menu, MessageCircle, Network, Plus, Send, Settings2, Sparkles,
  Target, Workflow, X, Zap,
} from 'lucide-react'
import './App.css'

type Solution = { title: string; eyebrow: string; description: string; icon: typeof Bot; nodes: string[]; tone: string }

const solutions: Solution[] = [
  { title: 'AI Email Manager', eyebrow: 'Inbox intelligence', description: 'Reads, classifies, flags unusual messages, and drafts thoughtful responses so your team can focus on decisions.', icon: Mail, nodes: ['Incoming email', 'AI reads', 'Classify', 'Draft reply'], tone: 'lavender' },
  { title: 'AI Lead Generation Agent', eyebrow: 'Pipeline momentum', description: 'Researches prospects, scores fit, enriches records, and keeps your CRM ready for confident outreach.', icon: Target, nodes: ['Target list', 'Research', 'Qualify', 'CRM sync'], tone: 'blue' },
  { title: 'AI Customer Support Agent', eyebrow: 'Helpful by default', description: 'Answers common questions, understands intent, and routes nuanced requests to the right human.', icon: Headphones, nodes: ['Question', 'Understand', 'Resolve', 'Escalate'], tone: 'pink' },
  { title: 'AI Content Workflow', eyebrow: 'From idea to publish', description: 'Turns ideas into drafts, approvals, and publishing-ready assets through a clear, connected workflow.', icon: FileText, nodes: ['Brief', 'Draft', 'Approve', 'Publish'], tone: 'lavender' },
  { title: 'Business Workflow Agent', eyebrow: 'Systems that connect', description: 'Moves information between the tools your business already uses, without the manual copy and paste.', icon: Network, nodes: ['Trigger', 'Decide', 'Connect', 'Complete'], tone: 'blue' },
]

const faqs = [
  ['What is AI automation?', 'AI automation combines intelligent decision-making with connected workflows to handle repetitive work, route information, and trigger the next best action.'],
  ['What type of business processes can you automate?', 'Lead research, email management, customer support, data processing, reporting, approvals, scheduling, and the repetitive handoffs between your tools.'],
  ['Can you connect different apps together?', 'Yes. I can connect APIs, webhooks, CRMs, Google Workspace, Slack, email tools, databases, and more through custom logic and workflow platforms.'],
  ['Can you build custom AI agents?', 'Yes. Custom agents can be designed around your process, instructions, knowledge sources, tools, and human review requirements.'],
  ['Can you automate email management?', 'Yes. Email workflows can classify incoming messages, detect spam or priority, draft responses, and route items for review.'],
  ['Do you work with n8n and Python?', 'Yes. I use n8n for visual integrations and Python when custom scripts, data processing, or deeper control are the right fit.'],
  ['How does an automation project start?', 'We begin with a discovery conversation about your workflow, the friction points, and the outcome you want. Then I map the best next step.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSolution, setActiveSolution] = useState(0)
  const [demo, setDemo] = useState('Email Automation')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el))
    return () => reveal.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="site-shell">
      <nav className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark"><Sparkles size={17} /></span><span>Ayesha <b>Noor</b></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['Home', 'About', 'Services', 'Solutions', 'Projects', 'Process', 'Contact'].map((label) => <a key={label} href={`#${label.toLowerCase()}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s automate <ArrowRight size={16} /></a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-dot" /> AI AUTOMATION SPECIALIST</div>
            <h1>Automate your business.<br /><em>Work smarter with AI.</em></h1>
            <p className="hero-lede">I build intelligent AI agents, automated workflows, chatbots, and business systems that reduce repetitive work and help businesses operate faster.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">Start an automation project <ArrowRight size={18} /></a><a className="button button-ghost" href="#projects">View my work <ArrowDownRight size={18} /></a></div>
            <div className="trust-line"><Check size={16} /> AI Agents <span>•</span> Automation <span>•</span> Workflows <span>•</span> Chatbots <span>•</span> Python <span>•</span> n8n</div>
          </div>
          <div className="hero-visual reveal">
            <div className="visual-glow" />
            <div className="workflow-window">
              <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>automation / lead-flow</span><span className="live-dot"><b /> live</span></div>
              <div className="window-canvas">
                <div className="flow-label">INTELLIGENT WORKFLOW <span>•</span> RUNNING</div>
                <div className="flow-path path-one"><span /><span /><span /></div>
                <div className="workflow-node node-trigger"><span className="node-icon lavender"><Mail size={18} /></span><small>TRIGGER</small><b>New lead received</b></div>
                <div className="workflow-node node-ai"><span className="node-icon dark"><BrainCircuit size={18} /></span><small>AI AGENT</small><b>Qualify & enrich</b></div>
                <div className="workflow-node node-crm"><span className="node-icon blue"><Database size={18} /></span><small>DESTINATION</small><b>CRM updated</b></div>
                <div className="mini-chip chip-a"><Sparkles size={13} /> decision</div><div className="mini-chip chip-b"><Zap size={13} /> instant sync</div>
              </div>
              <div className="window-footer"><span><span className="status-pulse" /> 3 steps completed</span><span>n8n / custom logic</span></div>
            </div>
          </div>
        </section>

        <section className="skills-strip"><div className="strip-inner">{[['AI Automation', BrainCircuit], ['n8n', Workflow], ['Python', Code2], ['AI Agents', Bot], ['Chatbots', MessageCircle], ['APIs', Globe2], ['Workflow Automation', Network]].map(([name, Icon]) => <div className="skill" key={name as string}>{Icon && <Icon size={18} />}<span>{name as string}</span></div>)}</div></section>

        <section id="about" className="section-pad about-section">
          <div className="section-heading reveal"><div className="section-kicker">01 / ABOUT</div><h2>Turning repetitive work<br /><span>into intelligent systems.</span></h2></div>
          <div className="about-grid"><div className="about-portrait reveal"><div className="portrait-orbit orbit-a" /><div className="portrait-orbit orbit-b" /><div className="portrait-core"><div className="portrait-initials">AN</div><div className="portrait-caption"><b>Ayesha Noor</b><span>AI Automation Specialist</span></div></div><div className="float-pill pill-top"><Sparkles size={16} /> AI-powered</div><div className="float-pill pill-bottom"><Clock3 size={16} /> works 24/7</div></div><div className="about-copy reveal"><p className="large-copy">I help businesses automate repetitive processes using AI, intelligent workflows, and custom automation systems.</p><p>From lead generation and email management to customer support and internal operations, I design systems that work continuously in the background—so your team can spend more time on meaningful work.</p><div className="stats-row"><div><strong>AI-powered</strong><span>Intelligent automation systems</span></div><div><strong>24/7</strong><span>Automated workflows</span></div><div><strong>Custom built</strong><span>Tailored to your needs</span></div></div></div></div>
        </section>

        <section id="services" className="section-pad soft-section"><div className="section-heading centered reveal"><div className="section-kicker">02 / SERVICES</div><h2>AI automation services<br /><span>built for real business.</span></h2><p>Practical systems that connect your tools, your data, and your next best action.</p></div><div className="service-grid">{[['01', 'AI Agents', 'Build custom AI agents that understand information, make decisions, use tools, and perform business tasks.', Bot], ['02', 'Workflow Automation', 'Connect apps and automate repetitive business processes using intelligent workflows.', Workflow], ['03', 'AI Chatbots', 'Create AI-powered chatbots for websites, support, lead qualification, and communication.', MessageCircle], ['04', 'Email Automation', 'Read, classify, organize, draft, and manage email intelligently.', Mail], ['05', 'Lead Generation Automation', 'Automate lead research, qualification, data collection, and outreach workflows.', Target], ['06', 'Python & n8n Automation', 'Develop custom systems using Python, n8n, APIs, webhooks, and AI models.', Code2]].map(([num, title, desc, Icon]) => <article className="service-card reveal" key={title as string}><div className="card-top"><span>{num as string}</span><Icon size={24} /></div><h3>{title as string}</h3><p>{desc as string}</p><a href="#contact">Explore service <ArrowUpRightIcon /></a></article>)}</div></section>

        <section id="solutions" className="section-pad solutions-section"><div className="section-heading reveal"><div className="section-kicker">03 / AI SOLUTIONS</div><h2>What can be<br /><span>automated?</span></h2></div><div className="solutions-layout"><div className="solution-tabs">{solutions.map((solution, index) => { const Icon = solution.icon; return <button key={solution.title} className={`solution-tab ${activeSolution === index ? 'active' : ''}`} onClick={() => setActiveSolution(index)}><span className="tab-icon"><Icon size={19} /></span><span><small>{solution.eyebrow}</small><b>{solution.title}</b></span><ArrowRight size={17} /></button> })}</div><div className={`solution-showcase ${solutions[activeSolution].tone}`}><div className="showcase-copy"><div className="section-kicker">{solutions[activeSolution].eyebrow.toUpperCase()}</div><h3>{solutions[activeSolution].title}</h3><p>{solutions[activeSolution].description}</p><a className="text-link" href="#contact">Discuss this solution <ArrowRight size={16} /></a></div><div className="solution-flow">{solutions[activeSolution].nodes.map((node, i) => <div className="solution-step" key={node}><span>{String(i + 1).padStart(2, '0')}</span><b>{node}</b>{i < solutions[activeSolution].nodes.length - 1 && <ArrowRight size={16} />}</div>)}</div></div></div></section>

        <section id="projects" className="section-pad soft-section"><div className="section-heading centered reveal"><div className="section-kicker">04 / PROJECTS</div><h2>Automation projects<br /><span>with a clear purpose.</span></h2></div><div className="project-grid">{[['AI Email Management System', 'AI • n8n • Gmail / Outlook • APIs', 'An intelligent email workflow that analyzes incoming messages, categorizes them, detects spam and suspicious messages, and creates professional reply drafts.', '01', Mail], ['AI Lead Generation Agent', 'AI Agents • n8n • Python • APIs', 'An automated lead research and qualification system designed to reduce manual prospecting.', '02', Target], ['AI Customer Support Workflow', 'AI • Chatbot • APIs • Automation', 'An AI-powered support workflow that handles common customer questions and routes complex requests.', '03', Headphones]].map(([title, tags, desc, num, Icon]) => <article className="project-card reveal" key={title as string}><div className="project-visual"><div className="project-index">{num as string}</div><Icon size={40} /><div className="project-lines"><span /><span /><span /></div><div className="project-chip">workflow preview</div></div><div className="project-body"><div className="project-tags">{tags as string}</div><h3>{title as string}</h3><p>{desc as string}</p><a className="text-link" href="#contact">View case study <ArrowRight size={16} /></a></div></article>)}</div></section>

        <section id="process" className="section-pad process-section"><div className="section-heading reveal"><div className="section-kicker">05 / PROCESS</div><h2>A better way to<br /><span>build automation.</span></h2><p>Clear thinking up front. Reliable systems on the other side.</p></div><div className="process-line">{[['01', 'Discover', 'Understand the business, workflow, and repetitive tasks.', Target], ['02', 'Design', 'Plan the agent, automation logic, integrations, and workflow.', BrainCircuit], ['03', 'Build', 'Develop and connect the system using AI, APIs, Python, and n8n.', Settings2], ['04', 'Optimize', 'Test reliability, improve the experience, and refine the workflow.', Zap]].map(([num, title, desc, Icon]) => <div className="process-step reveal" key={title as string}><div className="process-number">{num as string}<Icon size={20} /></div><h3>{title as string}</h3><p>{desc as string}</p></div>)}</div></section>

        <section className="section-pad tech-section"><div className="tech-intro reveal"><div className="section-kicker">06 / TECH STACK</div><h2>Tools that make<br /><span>systems work.</span></h2><p>Flexible, dependable building blocks for thoughtful automation.</p></div><div className="tech-grid reveal">{[['AI / LLMs', BrainCircuit], ['n8n', Workflow], ['Python', Code2], ['APIs', Globe2], ['Webhooks', Network], ['Gmail', Mail], ['Google Sheets', Database], ['Slack', MessageCircle], ['CRM integrations', Target], ['Chatbots', Headphones], ['Databases', Database]].map(([name, Icon]) => <div className="tech-item" key={name as string}><Icon size={21} /><span>{name as string}</span></div>)}</div></section>

        <section className="section-pad demo-section"><div className="demo-header reveal"><div><div className="section-kicker">07 / INTERACTIVE DEMO</div><h2>See automation<br /><span>in action.</span></h2></div><div className="demo-select-wrap"><label htmlFor="demo-select">Try a workflow</label><select id="demo-select" value={demo} onChange={(e) => setDemo(e.target.value)}><option>Email Automation</option><option>Lead Generation</option><option>Customer Support</option></select><ChevronDown size={16} /></div></div><div className="demo-board reveal"><div className="demo-path"><div className="demo-node"><span>01</span><b>{demo === 'Email Automation' ? 'Incoming email' : demo === 'Lead Generation' ? 'New prospect' : 'Customer question'}</b></div><div className="demo-arrow"><ArrowDownRight size={22} /></div><div className="demo-node active"><span>02</span><b>AI reads & understands</b></div><div className="demo-arrow"><ArrowDownRight size={22} /></div><div className="demo-node"><span>03</span><b>AI classifies</b></div><div className="demo-branch"><div><span className="branch-dot pink" /> Not the right fit<div className="branch-result">Route for review</div></div><div><span className="branch-dot blue" /> Important / qualified<div className="branch-result">Take next action</div></div></div></div></div></section>

        <section className="why-section section-pad"><div className="section-heading centered reveal"><div className="section-kicker">08 / THE WHY</div><h2>Why automate?</h2></div><div className="why-grid">{[['Save time', 'Reduce repetitive manual work.', Clock3], ['Reduce errors', 'Create consistent automated processes.', Check], ['Work 24/7', 'Let systems operate continuously.', Zap], ['Scale faster', 'Build workflows that grow with the business.', ArrowUpRightIcon]].map(([title, desc, Icon]) => <div className="why-card reveal" key={title as string}><Icon size={25} /><h3>{title as string}</h3><p>{desc as string}</p></div>)}</div></section>

        <section className="testimonial-section section-pad"><div className="placeholder-quote reveal"><div className="quote-mark">“</div><p>Client testimonial will appear here.</p><span>Placeholder — replace with a verified client quote</span></div></section>

        <section id="faq" className="section-pad faq-section"><div className="section-heading reveal"><div className="section-kicker">09 / FAQ</div><h2>Questions, answered<br /><span>clearly.</span></h2></div><div className="faq-list reveal">{faqs.map(([q, a], i) => <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}</span>{openFaq === i ? <X size={19} /> : <Plus size={19} />}</button>{openFaq === i && <p>{a}</p>}</div>)}</div></section>

        <section className="final-cta section-pad"><div className="cta-orbit orbit-1" /><div className="cta-orbit orbit-2" /><div className="final-cta-content reveal"><div className="section-kicker">LET’S BUILD WHAT’S NEXT</div><h2>Ready to automate<br /><em>your workflow?</em></h2><p>Let’s turn repetitive tasks into intelligent automated systems.</p><div className="hero-actions"><a className="button button-light" href="#contact">Start a project <ArrowRight size={18} /></a><a className="button button-dark-ghost" href="#contact">Let’s talk <MessageCircle size={18} /></a></div></div></section>

        <section id="contact" className="section-pad contact-section"><div className="contact-intro reveal"><div className="section-kicker">10 / CONTACT</div><h2>Let’s build something<br /><span>intelligent.</span></h2><p>Have a workflow in mind? Tell me what you’d like to automate and I’ll help you find the smartest next step.</p><div className="contact-person"><div className="contact-avatar">AN</div><div><b>Ayesha Noor</b><span>AI Automation Specialist</span></div></div><div className="social-links"><a href="#contact" aria-label="LinkedIn"><Globe2 size={18} /></a><a href="#contact" aria-label="GitHub"><Code2 size={18} /></a><a href="#contact" aria-label="Email"><Mail size={18} /></a></div></div><form className="contact-form reveal" onSubmit={handleSubmit}>{submitted ? <div className="success-state"><div className="success-icon"><Check /></div><h3>Inquiry received.</h3><p>Thanks for reaching out. Your project details are ready for a thoughtful reply.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another inquiry <ArrowRight size={16} /></button></div> : <><div className="form-row"><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>Company<input placeholder="Company name" /></label><label>Budget<select defaultValue=""><option value="" disabled>Select a range</option><option>Under $1,000</option><option>$1,000 – $5,000</option><option>$5,000+</option></select></label></div><label>What would you like to automate?<input placeholder="e.g. lead qualification, email workflows…" /></label><label>Message<textarea required placeholder="Tell me a little about your workflow or goal…" rows={4} /></label><button className="button button-primary submit-button" type="submit">Send project inquiry <Send size={17} /></button></>}</form></section>
      </main>

      <footer className="footer"><div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark"><Sparkles size={17} /></span><span>Ayesha <b>Noor</b></span></a><p>AI Automation Specialist</p></div><div className="footer-links"><div><b>Explore</b><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div><div><b>Capabilities</b><span>AI Agents</span><span>Automation</span><span>n8n</span><span>Python</span></div></div><div className="footer-bottom"><span>© 2026 Ayesha Noor. All rights reserved.</span><span>Built for smarter work <Sparkles size={13} /></span></div></footer>
    </div>
  )
}

function ArrowUpRightIcon() { return <ArrowRight size={16} /> }

export default App
