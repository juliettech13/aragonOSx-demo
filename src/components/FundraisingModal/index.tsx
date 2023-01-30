import React, { Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import { ethers } from 'ethers';
import { useSigner } from 'wagmi';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { DaoDepositSteps } from "@aragon/sdk-client";
import { depositETH, mintToken, useAragonSDKContext } from '../../context/aragon-sdk';

import { STRINGS } from '../../strings/english';

interface Params {
  setAlertText: Dispatch<SetStateAction<string>>;
  setAlertVariant: Dispatch<SetStateAction<'success' | 'danger'>>;
  showModal: boolean;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function FundraisingModal(params: Params): JSX.Element {
  const { setAlertText, setAlertVariant, showModal, setShowAlert, setShowModal } = params;

  const [amountToDeposit, setAmountToDeposit] = useState<number>(0);

  const { client } = useAragonSDKContext();
  const signer = useSigner().data || undefined;

  async function handleSubmit(event: MouseEvent) {
    event?.preventDefault();

    const DAODepositSteps = await depositETH(client, amountToDeposit);
    for await (const step of DAODepositSteps) {
      try {
        switch (step.key) {
          case DaoDepositSteps.DEPOSITING:
            setShowModal(false);
            setAlertText(`Depositing ${amountToDeposit} ETH into ParksDAO. Here is your transaction hash: ${step.txHash}`);
            setShowAlert(true);
            break;
          case DaoDepositSteps.DONE:
            setAlertText(`Successfully deposited ${ethers.utils.formatEther(step.amount)} ETH into ParksDAO!`);
            setShowAlert(true);
            mintToken(signer);
            break;
        }
      } catch (error) {
        setAlertText(`${error}`);
        setAlertVariant('danger');
        setShowAlert(true);
      }
    }
  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} backdrop>
      <Modal.Header closeButton>
        <Modal.Title>
          <h4>{STRINGS.contribute}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="bold600">{STRINGS.howMuchWouldYouLikeToContribute}</p>

        <Form>
          <Form.Group className="mb-3" controlId="amountOfETH">
            <Form.Control
              type="number"
              min="0"
              max="1000"
              step="any"
              placeholder={STRINGS.enterETHAmount}
              value={amountToDeposit}
              onChange={(event) => setAmountToDeposit(parseFloat(event.target.value))}
            />
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
