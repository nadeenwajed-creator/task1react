import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'

import cabin from '../assets/cabin.png'
import cake from '../assets/cake.png'
import circus from '../assets/circus.png'
import game from '../assets/game.png'
import safe from '../assets/safe.png'
import submarine from '../assets/submarine.png'

function Portfolio() {
 const [selectedItem, setSelectedItem] = useState(null)

  const portfolioItems = [
    { image: cabin, title: 'LOG CABIN' },
    { image: cake, title: 'TASTY CAKE' },
    { image: circus, title: 'CIRCUS TENT' },
    { image: game, title: 'CONTROLLER' },
    { image: safe, title: 'LOCKED SAFE' },
    { image: submarine, title: 'SUBMARINE' }
  ]

  return (
    <section  className="portfolio-section" id="portfolio">
      <Container>
        <h2 className="portfolio-title">PORTFOLIO</h2>

        <div className="section-divider">
          <div className="section-divider-line"></div>
          <div className="section-divider-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="section-divider-line"></div>
        </div>

        <Row>
          {portfolioItems.map((item) => (
            <Col md={6} lg={4} key={item.title}>
              <div
                className="portfolio-item"
                onClick={() => setSelectedItem(item)}
              >
                <img src={item.image} alt={item.title} />

                <div className="portfolio-item-caption">
                  <div className="portfolio-item-caption-content">
                    <i className="fas fa-plus"></i>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal
        show={selectedItem !== null}
        onHide={() => setSelectedItem(null)}
        centered
        size="lg"
      >
        <Modal.Body className="portfolio-modal">
          <button
            type="button"
            className="portfolio-modal-close"
            onClick={() => setSelectedItem(null)}
          >
            ×
          </button>

          {selectedItem && (
            <>
              <h2 className="modal-title">{selectedItem.title}</h2>

              <div className="modal-divider">
                <div></div>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <div></div>
              </div>

              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="modal-image"
              />

              <p className="modal-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia neque assumenda ipsam nihil, molestias magnam,
                recusandae quos qui inventore quisquam velit asperiores, vitae?
                Reprehenderit soluta, eos quod consectetur itaque. Nam.
              </p>

              <button
                type="button"
                className="close-window"
                onClick={() => setSelectedItem(null)}
              >
                × Close Window
              </button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default Portfolio