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
      signer: signer,
      // TO-DO: add this to .env based on environment
      daoFactoryAddress: '0x8B4Ca38524fCeCbD5acA39C7cd2f3B762B1d91Bf',
      // TO-DO: add this to .env based on environment
      web3Providers: [`https://eth-goerli.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_GOERLI_KEY}`],
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
            // 'https://api.thegraph.com/subgraphs/name/aragon/aragon-zaragoza-goerli',
            'https://subgraph.satsuma-prod.com/aragon/core-goerli/playground'
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
