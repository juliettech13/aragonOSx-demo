import React, { MouseEvent } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { STRINGS } from '../../strings/english';

interface Params {
  show: boolean;
  handleClose: () => void;
}

export default function FundraisingModal(params: Params): JSX.Element {
  const { show, handleClose } = params;

  async function handleSubmit(event: MouseEvent) {
    event?.preventDefault();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h4>{STRINGS.contribute}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="bold600">{STRINGS.howMuchWouldYouLikeToContribute}</p>

        <Form>
          <Form.Group className="mb-3" controlId="amountOfETH">
            <Form.Control type="number" placeholder={STRINGS.enterETHAmount} />
            <Form.Text className="text-muted">
              {STRINGS.onlyETH}
            </Form.Text>
          </Form.Group>
          <br />
          <Button
            variant="success"
            type="submit"
            onClick={(event) => handleSubmit(event)}
          >
            {STRINGS.contribute}
          </Button>
        </Form>

      </Modal.Body>
    </Modal>
  );
}
