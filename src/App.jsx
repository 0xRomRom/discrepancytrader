import { useState } from "react";
import stl from "./App.module.css";
import { tokensArray } from "./tokens";
import MainList from "./components/mainlist/MainList";
import Queue from "./components/queue/Queue";
import Config from "./components/config/Config";

const App = () => {
  const [tokens, setTokens] = useState(tokensArray);
  const [queueTokens, setQueuedTokens] = useState([]);

  return (
    <div className={stl.app}>
      <Config />
      <MainList tokens={tokens} setTokens={setTokens} />
      <Queue queueTokens={queueTokens} setQueuedTokens={setQueuedTokens} />
    </div>
  );
};

export default App;
