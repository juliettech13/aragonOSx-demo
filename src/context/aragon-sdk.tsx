import { createContext, useEffect, useContext, useState } from 'react';

import { useSigner } from 'wagmi';
import { Client, Context, ContextParams, ContextPlugin, IDepositParams, IMintTokenParams, TokenVotingClient } from '@aragon/sdk-client';

import { ETHToWei } from '../helpers/crypto';

interface AragonSDKWrapperContext {
  children: JSX.Element;
}

const AragonSDKContext = createContext({});

export function AragonSDKWrapper({ children }: AragonSDKWrapperContext): JSX.Element {
  const [client, setClient] = useState<Client | undefined>(undefined);
  const signer = useSigner().data || undefined;

  useEffect(() => {
    const aragonSDKContextParams: ContextParams = {
      network: 'goerli',
      signer,
      daoFactoryAddress: '0x66DBb74f6cADD2486CBFf0b9DF211e3D7961eBf9',
      web3Providers: ['https://rpc.ankr.com/eth_goerli'],
      ipfsNodes: [
        {
          url: 'https://testing-ipfs-0.aragon.network/api/v0',
          headers: { 'X-API-KEY': process.env.REACT_APP_IPFS_KEY || '' }
        },
      ],
      graphqlNodes: [{ url: 'https://subgraph.satsuma-prod.com/aragon/core-goerli/api' }]
    };

    const context: Context = new Context(aragonSDKContextParams);
    setClient(new Client(context));
  }, [signer]);

  return (
    <AragonSDKContext.Provider value={{ client }}>
      {children}
    </AragonSDKContext.Provider>
  )
}

export function useAragonSDKContext(): any {
  return useContext(AragonSDKContext);
}

export function depositETH(client: Client, amountToDeposit: number) {
  const depositParams: IDepositParams = {
    daoAddressOrEns: "0xae8586ee1ef50544683b6d9d608ff920ab081357",
    amount: ETHToWei(amountToDeposit),
    reference: "ETH deposit"
  };

  return client.methods.deposit(depositParams);
}

export async function mintToken(signer: any) {
  const aragonSDKContextParams: ContextParams = {
    network: 'goerli',
    signer,
    daoFactoryAddress: '0x66DBb74f6cADD2486CBFf0b9DF211e3D7961eBf9',
    web3Providers: ['https://rpc.ankr.com/eth_goerli'],
    ipfsNodes: [
      {
        url: 'https://testing-ipfs-0.aragon.network/api/v0',
        headers: { 'X-API-KEY': process.env.REACT_APP_IPFS_KEY || '' }
      },
    ],
    graphqlNodes: [{ url: 'https://subgraph.satsuma-prod.com/aragon/core-goerli/api' }]
  };

  const context: Context = new Context(aragonSDKContextParams);
  const contextPlugin: ContextPlugin = ContextPlugin.fromContext(context);
  const client = new TokenVotingClient(contextPlugin);

  const params: IMintTokenParams = {
    address: signer.address,
    amount: BigInt(10)
  };

  const minterAddress = "0x0987654321098765432109876543210987654321";
  const action = await client.encoding.mintTokenAction(minterAddress, params);
  console.log(action);
}
