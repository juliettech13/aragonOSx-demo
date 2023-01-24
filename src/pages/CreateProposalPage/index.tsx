import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import TeamWork from '../../images/team-work.png';
import { STRINGS } from '../../strings/english';

const styles = StyleSheet.create({
  img: {
    width: '65%',
    filter: "drop - shadow(0px 24px 32px rgba(31, 41, 51, 0.04)) drop- shadow(0px 16px 24px rgba(31, 41, 51, 0.04)) drop- shadow(0px 4px 8px rgba(31, 41, 51, 0.04)) drop - shadow(0px 0px 1px rgba(31, 41, 51, 0.04))"
  }
  });

export default function CreateProposalPage(): JSX.Element {
  return (
    <>
      <div className="green-banner banner">
        <Container>
          <Row>
            <Col>
              <div className="text-left">
                <h1 className="green-banner-title uppercase">{STRINGS.weDecide} <br /><span className="bold800">{STRINGS.together}</span></h1>
                <Button
                  variant="success"
                  size="lg"
                  className="uppercase"
                  // onClick={() => setShowModal(true)}
                >
                  {STRINGS.reviewProposals}
                </Button>
              </div>
            </Col>
            <Col>
              <div className="text-right">
                <img src={TeamWork} alt={STRINGS.teamWork} className={css(styles.img)} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="banner">
        <Container>
          <Row>
            <Col className="text-left">
              <img src={TeamWork} alt={STRINGS.teamWork} className={css(styles.img)} />
            </Col>
            <Col>
              <h2>{STRINGS.ourFirstPark}</h2>
              <br />
              <div className="text-left">
                <p>
                  {STRINGS.ourFirstParkDetails}
                </p>
                <br />
                <p>{STRINGS.itHas}</p>
                <ul>
                  <li><p>{STRINGS.aThousandTrees}</p></li>
                  <li><p>{STRINGS.aHundredHectares}</p></li>
                  <li><p>{STRINGS.firstParkLocation}</p></li>
                  <li><p>{STRINGS.localCommunityInitiative}</p></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="green-banner banner">
        <h2>{STRINGS.createAProposal}</h2>
        <br />
        <Container>
          <Form>
            <Form.Group className="mb-3 text-left" controlId="proposalTitle">
              <Form.Label><p>{STRINGS.parkName}</p></Form.Label>
              <Form.Control type="text" placeholder={STRINGS.parkNamePlaceholder} />
            </Form.Group>
            <br />
            <Form.Group className="mb-3 text-left" controlId="proposalTitle">
              <Form.Label><p>{STRINGS.proposalTLDR}</p></Form.Label>
              <Form.Control as="textarea" rows={2} placeholder={STRINGS.proposalTLDRPlaceholder} />
            </Form.Group>
            <br />
            <Form.Group className="mb-3 text-left" controlId="proposalSummary">
              <Form.Label><p>{STRINGS.proposalDescription}</p></Form.Label>
              <Form.Control as="textarea" rows={3} placeholder={STRINGS.proposalDescriptionPlaceholder} />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              {STRINGS.submitProposal}
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}
