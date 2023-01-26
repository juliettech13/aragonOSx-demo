import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { AragonSDKWrapper } from './context/aragon-sdk';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const { chains, provider } = configureChains(
  [mainnet, goerli],
  [
    alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_GOERLI_KEY || '' }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'aragonOSx demo',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        theme={darkTheme({
          accentColor: '#001F5C',
          accentColorForeground: 'white',
          borderRadius: 'medium',
          fontStack: 'system',
          overlayBlur: 'small',
        })}
        chains={chains}
      >
        <AragonSDKWrapper>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AragonSDKWrapper>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
