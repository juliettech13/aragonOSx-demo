import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Col, Container, Row } from 'react-bootstrap';

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#DCECE1',
    height: '10%',
    paddingLeft: '1%',
    paddingTop: '1%',
    paddingBottom: '1%',
    width: '100%'
  },
  logo: {
    color: "#366101",
    fontSize: "1.3rem",
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 600,
    textAlign: 'left'
  }
});

export default function NavBar(): JSX.Element {
  return (
    <div className={css(styles.navbar)}>
      <Container>
        <Row>
          <Col>
            <h2 className={css(styles.logo)}>🌳 PARKS DAO</h2>
          </Col>
          <Col className="flex flex-direction-row justify-content-end">
            <ConnectButton label="CONNECT BUTTON" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
