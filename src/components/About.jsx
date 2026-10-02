import Container from 'react-bootstrap/Container'

function About() {
  return (
   <section className="about-section" id="about">
      <Container>
        <h2 className="about-heading text-uppercase">
          About
        </h2>

        <div className="section-divider light">
          <div className="section-divider-line"></div>
          <div className="section-divider-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="section-divider-line"></div>
        </div>

        <div className="about-content">
          <p className="about-text">
            Freelancer is a free bootstrap theme created by Start Bootstrap.
            The download includes the complete source files including HTML,
            CSS, and JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>

          <p className="about-text">
            You can create your own custom avatar for the masthead, change the
            icon in the dividers, and add your email address to the contact
            form to make it fully functional!
          </p>
        </div>
      </Container>
    </section>
  )
}

export default About