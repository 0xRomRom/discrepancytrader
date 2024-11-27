import stl from "./Queue.module.css";
import { GoInbox } from "react-icons/go";

const Queue = ({ queueTokens, setQueueTokens }) => {
  return (
    <div className={stl.queue}>
      <h2>Queue</h2>

      <ul>
        {queueTokens.length === 0 && (
          <div className={stl.emptyQueue}>
            <GoInbox />
            Queue Empty
          </div>
        )}
        {queueTokens.length > 0 &&
          queueTokens.map((token) => {
            return <li></li>;
          })}
      </ul>
    </div>
  );
};

export default Queue;
