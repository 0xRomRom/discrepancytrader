import React, { useEffect, useState } from "react";
import { Connection, PublicKey, Keypair } from "@solana/web3.js";
import stl from "./Config.module.css";
import bs58 from "bs58";

const Config = () => {
  const [balance, setBalance] = useState(null);
  const privateKey = import.meta.env.VITE_PRIVATE_KEY;

  if (!privateKey) {
    throw new Error("Private key not found in .env file");
  }

  // Decode the private key and create a Keypair
  const keypair = Keypair.fromSecretKey(bs58.decode(privateKey));
  const connection = new Connection(import.meta.env.VITE_RPC_URL, "confirmed");
  const publicKey = keypair.publicKey;

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const lamports = await connection.getBalance(publicKey);
        const sol = (lamports / 1e9).toFixed(2);

        setBalance(sol);
      } catch (error) {
        console.error("Error fetching balance:", error);
        setBalance("Error");
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className={stl.queue}>
      <h2>Config</h2>
      <div className={stl.queueBox}>
        <div className={stl.balanceBox}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Solana_logo.png/252px-Solana_logo.png"
            alt="Solana"
            className={stl.solImg}
          />
          <span>{balance !== null ? `${balance} SOL` : "Loading..."}</span>
        </div>
        <div className={stl.configDiv}>
          <span>{publicKey.toBase58()} </span>
          <button className={stl.launchCta}>Launch</button>
        </div>
      </div>
    </div>
  );
};

export default Config;
