import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
  return (
     <footer className="footer-section">
      <Container>
        <Row>
          <Col md={4} className="footer-column">
            <h4>LOCATION</h4>
            <p>2215 John Daniel Drive
              <br />Clark, MO 65243
            </p>
          </Col>

          <Col md={4} className="footer-column">
            <h4>AROUND THE WEB</h4>
            <div className="footer-social">
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-link"><i className="fab fa-dribbble"></i></a>
            </div>
          </Col>

          <Col md={4} className="footer-column">
            <h4>ABOUT FREELANCER</h4>
            <p>Freelance is a free to use, MIT licensed
              <br />Bootstrap theme created by <a href="#">Start Bootstrap</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer