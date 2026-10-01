import Container from 'react-bootstrap/Container'
import img from './../assets/avataaars.svg'

function Start() {
  return (
         <header className="start-section">
      <Container className="d-flex align-items-center flex-column">
        <img
          className="start-avatar mb-5"
          src={img}
          alt="Avatar"
        />

        <h1 className="start-heading text-uppercase mb-0">Start Bootstrap</h1>

        <div className="section-divider divider-light">
         <div className="section-divider-line"></div>
          <div className="section-divider-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="section-divider-line"></div>
        </div>

        <p className="start-subheading mb-0">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </Container>
    </header>
  )
}

export default Start