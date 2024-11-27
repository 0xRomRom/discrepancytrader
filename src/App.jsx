import { useState } from "react";
import stl from "./App.module.css";
import { tokensArray } from "./tokens";
import MainList from "./components/mainlist/MainList";
import Queue from "./components/queue/Queue";

const App = () => {
  const [tokens, setTokens] = useState(tokensArray);
  const [queueTokens, setQueuedTokens] = useState([]);

  return (
    <div className={stl.app}>
      <MainList tokens={tokens} setTokens={setTokens} />
      <Queue queueTokens={queueTokens} />
    </div>
  );
};

export default App;
