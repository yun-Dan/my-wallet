import App from 'next/app';
import { WagmiConfig } from 'wagmi';
import { WagmiProvider } from 'wagmi'
import type { AppContext, AppProps } from 'next/app';
import { wagmiConfig } from '@/services/wagmi/wagmi.services';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import './../styles/index.css'

const queryClient = new QueryClient()

function Myapp({
    Component,
    pageProps
}:AppProps){
  return( 
    <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <Component {...pageProps} />
            
          </RainbowKitProvider>
        </QueryClientProvider>
    </WagmiProvider>)
    
}

export default Myapp;
