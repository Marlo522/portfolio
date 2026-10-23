import { useRef, useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowUpRight, Loader2, Send } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '@/components/SectionWrapper'
import { personal } from '@/data/personal'

const emailConfigured = Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID && import.meta.env.VITE_EMAILJS_TEMPLATE_ID && import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!formRef.current || status === 'sending') return
    const data = new FormData(formRef.current)
    const nextErrors: Record<string, string> = {}
    if (!String(data.get('user_name') ?? '').trim()) nextErrors.user_name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get('user_email') ?? ''))) nextErrors.user_email = 'Please enter a valid email address.'
    if (String(data.get('message') ?? '').trim().length < 10) nextErrors.message = 'Please write at least 10 characters.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      formRef.current.querySelector<HTMLElement>('[name="' + Object.keys(nextErrors)[0] + '"]')?.focus()
      return
    }
    setStatus('sending')
    try {
      await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY })
      setStatus('success')
      formRef.current.reset()
    } catch { setStatus('error') }
  }

  const links = [
    { label: 'GitHub', href: personal.socials.github },
    { label: 'LinkedIn', href: personal.socials.linkedin },
    { label: 'Facebook', href: personal.socials.facebook },
  ]

  return (
    <SectionWrapper id="contact" label="Contact">
      <SectionHeading eyebrow="07 / THE NEXT BUILD" title="Let's work together." subtitle="For web and mobile projects, collaboration, or a conversation about my work." />
      <div className="contact-layout">
        <div className="contact-details">
          <span className="eyebrow">DROP ME A LINE</span>
          <a className="contact-email" href={'mailto:' + personal.socials.email}>{personal.socials.email}<ArrowUpRight size={24} /></a>
          <p>{personal.location}</p>
          <a className="contact-phone" href={personal.phoneHref}>{personal.phone}</a>
          <div className="contact-socials">{links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={15} /></a>)}</div>
        </div>
        {emailConfigured && <div className="contact-form-panel">
          {status === 'success' ? <div role="status"><h3>Message sent.</h3><p>Thanks for getting in touch.</p><button className="button" onClick={() => setStatus('idle')}>Write another message</button></div> :
            <form ref={formRef} onSubmit={submit} noValidate className="contact-form" aria-label="Send a message">
              {(['user_name', 'user_email', 'message'] as const).map((field) => (
                <div className="form-field" key={field}>
                  <label htmlFor={field}>{field === 'user_name' ? 'Your name' : field === 'user_email' ? 'Email address' : 'Message'}</label>
                  {field === 'message' ?
                    <textarea id={field} name={field} rows={5} required aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? field + '-error' : undefined} /> :
                    <input id={field} name={field} type={field === 'user_email' ? 'email' : 'text'} autoComplete={field === 'user_email' ? 'email' : 'name'} required aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? field + '-error' : undefined} />}
                  {errors[field] && <p className="field-error" id={field + '-error'} role="alert">{errors[field]}</p>}
                </div>
              ))}
              {status === 'error' && <p className="field-error" role="alert">Your message could not be sent. Please try again or use the email link.</p>}
              <button id="contact-submit-btn" type="submit" className="button button-dark" disabled={status === 'sending'}>{status === 'sending' ? <><Loader2 size={17} className="animate-spin" />Sending…</> : <>Send message<Send size={17} /></>}</button>
            </form>}
        </div>}
      </div>
    </SectionWrapper>
  )
}
