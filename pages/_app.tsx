import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { NETWORK } from "../const/addresses";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={NETWORK}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
