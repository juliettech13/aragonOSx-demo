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
import { STRINGS } from '../../strings/english';

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
                <h1 className="green-banner-title">{STRINGS.weTurn} <br/>{STRINGS.privateParks} <br /><span className="bold800">{STRINGS.public}</span></h1>
                <Button
                  variant="success"
                  size="lg"
                  onClick={() => setShowModal(true)}
                >
                  {STRINGS.contributeHere}
                </Button>
              </div>
            </Col>
            <Col>
              <div className="text-right">
                <img src={PanamaPark} alt={STRINGS.parkNamePlaceholder} className={css(styles.parkImg)}/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="banner">
        <div>
          <h2 className={css(styles.h2Title)}>{STRINGS.howDoWeDoThis}</h2>
        </div>
        <Container>
          <Row>
            <Col>
              <div className={css(styles.card)}>
                <img src={Donate} alt={STRINGS.invest} className={css(styles.howWeDoImg)} />
                <h3>{STRINGS.contribute}</h3>
                <p className="padding-top5">{STRINGS.contributeETH}</p>
              </div>
            </Col>
            <Col>
              <div className={css(styles.card)}>
                <img src={Vote} alt={STRINGS.vote} className={css(styles.howWeDoImg)} />
                <h3>{STRINGS.vote}</h3>
                <p className="padding-top5">{STRINGS.selectPark}</p>
              </div>
            </Col>
            <Col>
              <div className={css(styles.card)}>
                <img src={Park} alt={STRINGS.park} className={css(styles.howWeDoImg)} />
                <h3>{STRINGS.enjoy}</h3>
                <p className="padding-top5">{STRINGS.enjoyPark}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="green-banner banner flex flex-direction-column">
        <div className={css(styles.h2Title)}>
          <h2><span className="bold800">{STRINGS.firstPark}:</span> {STRINGS.cocoParque}</h2>
        </div>
        <div className={css(styles.center)}>
          <ProgressBar variant="success" now={60} label="60%" className={css(styles.progressBar)} />
          <p className="padding-top3 padding-bottom5 bold400">{STRINGS.progressUpdate}</p>
          <Button
            size="lg"
            variant="success"
            onClick={() => navigate('create-proposal')}
          >
            {STRINGS.helpUsReachOurGoal}
          </Button>
        </div>
      </div>

      <FundraisingModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}
