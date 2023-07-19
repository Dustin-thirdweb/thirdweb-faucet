import { ConnectWallet, Web3Button, useAddress } from "@thirdweb-dev/react";
import React, { useMemo, useState, useEffect } from 'react';
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { FAUCET_ADDRESS } from "../const/addresses"

const Home: NextPage = () => {
  const address = useAddress();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Welcome to{" "}
            <span className={styles.gradientText0}>
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                thirdweb.
              </a>
            </span>
          </h1>
        </div>


        <Web3Button
          contractAddress={FAUCET_ADDRESS}
          action={(contract) => {
            contract.call("requestTokens", [address])
          }}
        >
          Request Test Funds
        </Web3Button>
        <h3 className={styles.description}>
          To donate, please send funds to {""}
          <a
            href="https://thirdweb.com/mumbai/0x084e28D93d403f0d5D29038b7E3E47c29866BC92/explorer"
            target="_blank"
            rel="noopener noreferrer"
          >
            0x084e28D93d403f0d5D29038b7E3E47c29866BC92
          </a>
        </h3>
      </div>
    </main>
  );
};

export default Home;
