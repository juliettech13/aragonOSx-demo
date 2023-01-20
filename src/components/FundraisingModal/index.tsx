import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  modalTitle: {
    fontFamily: 'Syne',
    textTransform: 'uppercase',
    fontWeight: 700,
    color: '#001F5C'
  },
  boldText: {
    fontWeight: 600
  }
});

interface Params {
  show: boolean;
  handleClose: () => void;
}

export default function FundraisingModal(params: Params): JSX.Element {
  const { show, handleClose } = params;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className={css(styles.modalTitle)}>Contribute ETH</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className={css(styles.boldText)}>How much would you like to contribute?</p>

        <Form>
          <Form.Group className="mb-3" controlId="amountOfETH">
            <Form.Control type="number" placeholder="Enter the ETH amount" />
            <Form.Text className="text-muted">
              We're currently only accepting ETH, but plan to add more cryptocurrencies in the future.
            </Form.Text>
          </Form.Group>

          <Button variant="success" type="submit">
            CONTRIBUTE
          </Button>
        </Form>

      </Modal.Body>
    </Modal>
  );
}
