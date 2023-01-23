import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TeamWork from '../../images/team-work.png';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  img: {
    width: '330px',
    paddingBottom: '10%',
    filter: "drop - shadow(0px 24px 32px rgba(31, 41, 51, 0.04)) drop- shadow(0px 16px 24px rgba(31, 41, 51, 0.04)) drop- shadow(0px 4px 8px rgba(31, 41, 51, 0.04)) drop - shadow(0px 0px 1px rgba(31, 41, 51, 0.04))"
  }
  });

export default function CreateProposalPage(): JSX.Element {
  return (
    <div className="green-banner">
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
  );
}
