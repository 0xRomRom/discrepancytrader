import { useState } from "react";
import stl from "./App.module.css";
import { tokensArray } from "./tokens";
import MainList from "./components/mainlist/MainList";
import Queue from "./components/queue/Queue";
import Config from "./components/config/Config";
import Logs from "./components/logs/Logs";

const App = () => {
  const [tokens, setTokens] = useState(tokensArray);
  const [queueTokens, setQueuedTokens] = useState([]);
  const [tradeLogs, setTradeLogs] = useState([]);

  return (
    <div className={stl.app}>
      <Config />
      <MainList tokens={tokens} setTokens={setTokens} />
      <Queue queueTokens={queueTokens} setQueuedTokens={setQueuedTokens} />
      <Logs tradeLogs={tradeLogs} setTradeLogs={setTradeLogs} />
    </div>
  );
};

export default App;
