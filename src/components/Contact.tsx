import { useState, useRef } from 'react'

interface ContactProps {
  isActive: boolean
}

const Contact = ({ isActive }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'email-error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const notificationTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate email before submission
    if (!isValidEmail(formData.email)) {
      setSubmitStatus('email-error')
      setStatusMessage('Please enter a valid email address. The email format you entered is incorrect.')
      if (notificationTimeout.current) clearTimeout(notificationTimeout.current)
      notificationTimeout.current = setTimeout(() => {
        setSubmitStatus('idle')
        setStatusMessage('')
      }, 4000)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setStatusMessage('')

    try {
      const response = await fetch('https://formspree.io/f/xeozerav', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
        // Auto-hide notification after 4 seconds
        if (notificationTimeout.current) clearTimeout(notificationTimeout.current)
        notificationTimeout.current = setTimeout(() => {
          setSubmitStatus('idle')
          setStatusMessage('')
        }, 4000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setSubmitStatus('error')
      setStatusMessage('Failed to send message. Please try again or contact me directly.')
      if (notificationTimeout.current) clearTimeout(notificationTimeout.current)
      notificationTimeout.current = setTimeout(() => {
        setSubmitStatus('idle')
        setStatusMessage('')
      }, 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle')
      setStatusMessage('')
    }
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  // Custom Send Button
  const SendButton = ({ disabled, loading }: { disabled: boolean, loading: boolean }) => (
    <button
      type="submit"
      className={`custom-send-btn${loading ? ' submitting' : ''}`}
      disabled={disabled}
      data-form-btn
    >
      {/* @ts-ignore */}
      <ion-icon name={loading ? 'hourglass-outline' : 'paper-plane'} className={loading ? 'loading-icon' : ''} style={{ marginRight: '8px', verticalAlign: 'middle', fontSize: '20px' }}></ion-icon>
      <span style={{ verticalAlign: 'middle', display: 'inline-block' }}>{loading ? 'Sending...' : 'Send'}</span>
    </button>
  )

  // Notification Pop-up Component
  const NotificationPopup = () => {
    if (submitStatus === 'idle') return null

    const getNotificationConfig = () => {
      switch (submitStatus) {
        case 'success':
          return {
            icon: 'checkmark-circle',
            title: 'Success!',
            className: 'success'
          }
        case 'email-error':
          return {
            icon: 'warning',
            title: 'Invalid Email',
            className: 'email-error'
          }
        case 'error':
        default:
          return {
            icon: 'close-circle',
            title: 'Error',
            className: 'error'
          }
      }
    }

    const config = getNotificationConfig()

    return (
      <div className={`notification-popup ${config.className}`}>
        <div className="notification-content">
          <div className="notification-icon">
            {/* @ts-ignore */}
            <ion-icon name={config.icon}></ion-icon>
          </div>
          <div className="notification-text">
            <h4 className="notification-title">
              {config.title}
            </h4>
            <p className="notification-message">{statusMessage}</p>
          </div>
          <button 
            className="notification-close"
            onClick={() => {
              setSubmitStatus('idle')
              setStatusMessage('')
              if (notificationTimeout.current) clearTimeout(notificationTimeout.current)
            }}
          >
            {/* @ts-ignore */}
            <ion-icon name="close"></ion-icon>
          </button>
        </div>
      </div>
    )
  }

  return (
    <article className={`contact ${isActive ? 'active' : ''}`} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps?q=Vaishali+Sector+1+Ghaziabad&output=embed"
            width="400" height="300" loading="lazy">
          </iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        {/* Notification Pop-up */}
        <NotificationPopup />

        <form onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input 
              type="text" 
              name="name" 
              className="form-input" 
              placeholder="Full name" 
              required 
              data-form-input
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div className="input-wrapper">
            <input 
              type="email" 
              name="email" 
              className="form-input" 
              placeholder="Email address" 
              required 
              data-form-input
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div className="input-wrapper">
            <input 
              type="text" 
              name="subject" 
              className="form-input" 
              placeholder="Subject" 
              required 
              data-form-input
              value={formData.subject}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div className="input-wrapper">
            <textarea 
              name="message" 
              className="form-input" 
              placeholder="Your Message" 
              required 
              data-form-input
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            ></textarea>
          </div>

          <SendButton disabled={isSubmitting || !isFormValid} loading={isSubmitting} />
        </form>
      </section>
    </article>
  )
}

export default Contact 