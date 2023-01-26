import { createContext, useEffect, useContext, useState } from 'react';

import { useSigner } from 'wagmi';
import { Client, Context, ContextParams } from '@aragon/sdk-client';

const AragonSDKContext = createContext({});

// TO-DO: remove any
export function AragonSDKWrapper({ children }: any): JSX.Element {
  const [client, setClient] = useState<Client | undefined>(undefined);
  // add typescript wagmi signer type
  const signer = useSigner().data || undefined;

  useEffect(() => {
    const aragonSDKContextParams: ContextParams = {
      // TO-DO: add this to .env based on env
      network: 'goerli',
      signer,
      // TO-DO: add this to .env based on environment
      daoFactoryAddress: '0x66DBb74f6cADD2486CBFf0b9DF211e3D7961eBf9',
      // TO-DO: add this to .env based on environment
      web3Providers: ['https://rpc.ankr.com/eth_goerli'],
      ipfsNodes: [
        {
          url: 'https://testing-ipfs-0.aragon.network/api/v0',
          headers: { 'X-API-KEY': process.env.REACT_APP_IPFS_KEY || '' },
        },
      ],
      graphqlNodes: [
        {
          // which node to use for tutorials?
          url:
            'https://subgraph.satsuma-prod.com/aragon/core-goerli/api'
        },
      ],
    };

    const context = new Context(aragonSDKContextParams);
    setClient(new Client(context));
  }, [signer]);

  return (
    <AragonSDKContext.Provider value={{ client }}>
      {children}
    </AragonSDKContext.Provider>
  )
}

// TO-DO: remove any
export function useAragonSDKContext(): any {
  return useContext(AragonSDKContext);
}
