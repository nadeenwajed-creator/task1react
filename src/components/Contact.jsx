import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const [nameTouched, setNameTouched] = useState(false)
  const [emailTouched, setEmailTouched] = useState(false)
  const [phoneTouched, setPhoneTouched] = useState(false)
  const [messageTouched, setMessageTouched] = useState(false)

  const formValid = name.trim() !== '' &&
   email.trim() !== '' &&email.includes('@') && email.includes('.') &&
   phone.trim() !== '' &&
   message.trim() !== ''

  function handleSubmit(x) {
    x.preventDefault()
    setNameTouched(true)
    setEmailTouched(true)
    setPhoneTouched(true)
    setMessageTouched(true)
  }

  return (
    <section className="contact-section" id="contact">
      <Container>
        <h2 className="contact-heading text-uppercase">
          Contact Me
        </h2>
        <div className="section-divider">
          <div className="section-divider-line"></div>
          <div className="section-divider-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="section-divider-line"></div>
        </div>

        <Form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <div className={name ? 'floating-field has-value' : 'floating-field'}>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setNameTouched(true)}
                className={
                  nameTouched && name.trim() === ''
                    ? 'has-error'
                    : ''
                }/>
              <label>Full name</label>
              {nameTouched && name.trim() === '' && (
                <i className="fas fa-circle-exclamation error-icon"></i>
              )}
            </div>
            {nameTouched && name.trim() === '' && (
             <div className="error-message">
                A name is required.
              </div>
            )}
          </div>

          <div className="contact-form-group">
            <div className={email ? 'floating-field has-value' : 'floating-field'}>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => setEmailTouched(true)}
                className={ emailTouched && (email.trim() === '' || !email.includes('@') || !email.includes('.')) ? 'has-error': ''}
              />
              <label>Email address</label>
              {emailTouched && (email.trim() === '' || !email.includes('@') || !email.includes('.')) && ( <i className="fas fa-circle-exclamation error-icon"></i> )}
            </div>

            {emailTouched && email.trim() === '' && (
              <div className="error-message">
                An email is required.
              </div>
            )}

            {emailTouched && email.trim() !== '' && (!email.includes('@') || !email.includes('.')) && (
                <div className="error-message">
                  Email is not valid.
                </div>
              )}
          </div>

          <div className="contact-form-group">
            <div className={phone ? 'floating-field has-value' : 'floating-field'}>
              <Form.Control
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => setPhoneTouched(true)}
                className={
                  phoneTouched && phone.trim() === ''
                    ? 'has-error'
                    : ''
                }
              />
              <label>Phone number</label>
              {phoneTouched && phone.trim() === '' && (
                <i className="fas fa-circle-exclamation error-icon"></i>
              )}
            </div>
            {phoneTouched && phone.trim() === '' && (
              <div className="error-message">
                A phone number is required.
              </div>
            )}
          </div>

          <div className="contact-form-group">
            <div className={message ? 'floating-field has-value' : 'floating-field'}>
              <Form.Control
                as="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={() => setMessageTouched(true)}
                className={
                  messageTouched && message.trim() === '' ? 'has-error': ''
                }
              />
              <label>Message</label>
              {messageTouched && message.trim() === '' && (
                <i className="fas fa-circle-exclamation error-icon"></i>
              )}
            </div>
            {messageTouched && message.trim() === '' && (
              <div className="error-message">
                A message is required.
              </div>
            )}
          </div>
          <Button type="submit" className="contact-button" disabled={!formValid}> Send
          </Button>
        </Form>
      </Container>
    </section>
  )
}

export default Contact