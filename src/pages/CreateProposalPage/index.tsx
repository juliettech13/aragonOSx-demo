import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import TeamWork from '../../images/team-work.png';

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
                <h1 className="green-banner-title">WE DECIDE <br /><span className="bold800">TOGETHER</span></h1>
                <Button
                  variant="success"
                  size="lg"
                  // onClick={() => setShowModal(true)}
                >
                  REVIEW PROPOSALS
                </Button>
              </div>
            </Col>
            <Col>
              <div className="text-right">
                <img src={TeamWork} alt="Team Work" className={css(styles.img)} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="banner">
        <Container>
          <Row>
            <Col className="text-left">
              <img src={TeamWork} alt="Team Work" className={css(styles.img)} />
            </Col>
            <Col>
              <h2>OUR FIRST PARK</h2>
              <br />
              <div className="text-left">
                <p>
                  Coco Parque is the first ever experiment of its kind - where citizens pool in funds to collectively purchase a park in Panama City.
                </p>
                <br />
                <p>It holds:</p>
                <ul>
                  <li><p>1,000 trees</p></li>
                  <li><p>100 hectares</p></li>
                  <li><p>Located in the center of downtown Panama City</p></li>
                  <li><p>Local community initiative has committed to taking care of it after purchase</p></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="green-banner banner">
        <h2>CREATE A PROPOSAL FOR YOUR LOCAL PARK</h2>
        <br />
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="proposalTitle">
              <Form.Label><p>What's the name of the park you want to purchase?</p></Form.Label>
              <Form.Control type="text" placeholder="Parque Omar" />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="proposalTitle">
              <Form.Label><p>Give us a TLDR on where this park is located and what is the expected cost</p></Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Location: Coco del Mar, Panama City. Cost: 120k USD" />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="proposalSummary">
              <Form.Label><p>Make your full-on pitch on why this should be our next venture</p></Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="This park will completely transform the community of Coco del Mar through it's running track, community garden, and dome space." />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              SUBMIT PROPOSAL
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}
