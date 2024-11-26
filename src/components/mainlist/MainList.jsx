import stl from "./MainList.module.css";
import { useState, useEffect } from "react";
const MainList = ({ tokens, setTokens }) => {
  useEffect(() => {
    const initialize = async () => {
      const queryString = tokens.map((token) => token.pair).join(",");

      try {
        const response = await fetch(
          `https://api.dexscreener.com/latest/dex/tokens/${queryString}`,
          {
            method: "GET",
            headers: {},
          }
        );
        const data = await response.json();

        const currentTokens = [...tokens];
        const updatedTokens = currentTokens.map((token) => {
          const tokenData = data.pairs.find(
            (pair) => pair.baseToken.symbol === token.symbol
          );
          const tokenPrice = tokenData
            ? Number(tokenData.priceUsd).toFixed(4)
            : "0";
          return {
            ...token,
            price: tokenPrice,
            image: tokenData ? tokenData.info.imageUrl : "",
          };
        });
        setTokens(updatedTokens);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };
    initialize();
  }, []);
  return (
    <div className={stl.modal}>
      <h2>Token Pairs</h2>
      <div className={stl.titleRow}>
        <span>Token</span>
        <span>Price</span>
      </div>
      <ul className={stl.tokenList}>
        {tokens.map((token) => (
          <li key={token.pair} className={stl.tokenItem}>
            <span>
              <img
                src={token.image}
                alt={token.symbol}
                style={{ width: "40px", height: "40px" }}
              />
              {token.symbol}
            </span>
            <span>${token.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainList;
