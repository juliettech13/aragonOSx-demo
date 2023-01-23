import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';

import PanamaPark from '../../images/panama-park.jpg';
import Donate from '../../images/donate.png';
import Vote from '../../images/vote.png';
import Park from '../../images/park.png';
import FundraisingModal from '../../components/FundraisingModal';

const styles = StyleSheet.create({
  h2Title: {
    paddingBottom: '4%'
  },
  parkImg: {
    width: '330px',
    paddingBottom: '10%',
    filter: "drop - shadow(0px 24px 32px rgba(31, 41, 51, 0.04)) drop- shadow(0px 16px 24px rgba(31, 41, 51, 0.04)) drop- shadow(0px 4px 8px rgba(31, 41, 51, 0.04)) drop - shadow(0px 0px 1px rgba(31, 41, 51, 0.04))"
  },
  howWeDoImg: {
    width: '270px',
    height: '220px',
    margin: '5%'
  },
  card: {
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  progressBar: {
    borderRadius: '10px',
    backgroundColor: 'white'
  },
  center: {
    display: 'block',
    margin: '0 auto',
    width: '70%'
  }
});

export default function LandingPage(): JSX.Element {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="green-banner banner">
        <Container>
          <Row>
            <Col>
              <div className="text-left">
                <h1 className="green-banner-title">WE TURN <br/>PRIVATE PARKS <br /><span className="bold800">PUBLIC</span></h1>
                <Button
                  variant="success"
                  size="lg"
                  onClick={() => setShowModal(true)}
                >
                  CONTRIBUTE HERE
                </Button>
              </div>
            </Col>
            <Col>
              <div className="text-right">
                <img src={PanamaPark} alt="Parque Omar, Panamá" className={css(styles.parkImg)}/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="banner">
        <div>
          <h2 className={css(styles.h2Title)}>How do we do this?</h2>
        </div>
        <Container>
          <Row>
            <Col>
              <div className={css(styles.card)}>
                <img src={Donate} alt="Donate" className={css(styles.howWeDoImg)} />
                <h3>Contribute</h3>
                <p className="padding-top5">Contribute ETH to the project and get $PARK tokens in return.</p>
              </div>
            </Col>
            <Col>
              <div className={css(styles.card)}>
                <img src={Vote} alt="Vote" className={css(styles.howWeDoImg)} />
                <h3>Vote</h3>
                <p className="padding-top5">Select the park we want to collectively purchase and turn public.</p>
              </div>
            </Col>
            <Col>
              <div className={css(styles.card)}>
                <img src={Park} alt="Park" className={css(styles.howWeDoImg)} />
                <h3>Enjoy</h3>
                <p className="padding-top5">Enjoy a new public park with your friends in your neighborhood!</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="green-banner flex flex-direction-column">
        <div className={css(styles.h2Title)}>
          <h2><span className="bold800">First park:</span> Coco Park, Panama City</h2>
        </div>
        <div className={css(styles.center)}>
          <ProgressBar variant="success" now={60} label="60%" className={css(styles.progressBar)} />
          <p className="padding-top3 padding-bottom5 bold400">We are 65% along the way. 16 ETH to go 🚀.</p>
          <Button
            size="lg"
            variant="success"
            onClick={() => navigate('create-proposal')}
          >
            HELP US REACH OUR GOAL
          </Button>
        </div>
      </div>

      <FundraisingModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}
