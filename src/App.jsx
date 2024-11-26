import { useState } from "react";
import stl from "./App.module.css";
import { tokensArray } from "./tokens";
import MainList from "./components/mainlist/MainList";

const App = () => {
  const [tokens, setTokens] = useState(tokensArray);

  return (
    <div className={stl.app}>
      <MainList tokens={tokens} setTokens={setTokens} />
    </div>
  );
};

export default App;
