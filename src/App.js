import Icon from "./Icon";
import { useState } from "react"

// Tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const tictactoeArray = new Array(16).fill("")
const App = () => {
  const [isCross, setIsCross] = useState(true);
  const [winMessage, setWinMessage] = useState("")

  function resetGame() {
    tictactoeArray.fill("")
    setIsCross(true)
    setWinMessage("")
  }
  function checkIsWinner() {
    if (
      tictactoeArray[0] == tictactoeArray[1] &&
      tictactoeArray[0] == tictactoeArray[2] &&  tictactoeArray[0] == tictactoeArray[3] &&
      tictactoeArray[0] != ""
    ) {
      setWinMessage(tictactoeArray[0] + " has won")
    } else if (
      tictactoeArray[4] == tictactoeArray[5] &&
      tictactoeArray[4] == tictactoeArray[6] &&  tictactoeArray[4] == tictactoeArray[7] &&
      tictactoeArray[4] != ""
    ) {
      setWinMessage(tictactoeArray[4] + " has won")
    }
    if (
      tictactoeArray[8] == tictactoeArray[9] &&
      tictactoeArray[8] == tictactoeArray[10] &&  tictactoeArray[8] == tictactoeArray[11] &&
      tictactoeArray[8] != ""
    ) {
      setWinMessage(tictactoeArray[8] + " has won")
    }
    if (
      tictactoeArray[12] == tictactoeArray[13] &&
      tictactoeArray[12] == tictactoeArray[14] &&  tictactoeArray[12] == tictactoeArray[15] &&
      tictactoeArray[12] != ""
    ) {
      setWinMessage(tictactoeArray[12] + " has won")
    }
    if (
      tictactoeArray[0] == tictactoeArray[4] &&
      tictactoeArray[0] == tictactoeArray[8] && tictactoeArray[0] == tictactoeArray[12] &&
      tictactoeArray[0] != ""
    ) {
      setWinMessage(tictactoeArray[0] + " has won")
    }
    if (
      tictactoeArray[1] == tictactoeArray[5] &&
      tictactoeArray[1] == tictactoeArray[9] && tictactoeArray[1] == tictactoeArray[13] &&
      tictactoeArray[1] != ""
    ) {
      setWinMessage(tictactoeArray[1] + " has won")
    }
    if (
      tictactoeArray[2] == tictactoeArray[6] &&
      tictactoeArray[2] == tictactoeArray[10] && tictactoeArray[2] == tictactoeArray[14] &&
      tictactoeArray[2] != ""
    ) {
      setWinMessage(tictactoeArray[2] + " has won")
    }
    if (
      tictactoeArray[3] == tictactoeArray[7] &&
      tictactoeArray[3] == tictactoeArray[11] && tictactoeArray[2] == tictactoeArray[15] &&
      tictactoeArray[3] != ""
    ) {
      setWinMessage(tictactoeArray[3] + " has won")
    }
    if (
      tictactoeArray[0] == tictactoeArray[5] &&
      tictactoeArray[0] == tictactoeArray[10] && tictactoeArray[0] == tictactoeArray[15] &&
      tictactoeArray[0] != ""
    ) {
      setWinMessage(tictactoeArray[0] + " has won")
    }
    if (
      tictactoeArray[3] == tictactoeArray[6] &&
      tictactoeArray[3] == tictactoeArray[9] && tictactoeArray[3] == tictactoeArray[12] &&
      tictactoeArray[3] != ""
    ) {
      setWinMessage(tictactoeArray[3] + " has won")
    }
  }

  function playGame(index) {
    console.log("Clicked on index", index)
    if (winMessage) {
      return toast("Game has already got over");
    } else if (tictactoeArray[index] != "") {
      return toast("Alraedy filled")
    } else {
      tictactoeArray[index] = isCross == true ? "Cross" : "Circle"
      setIsCross(!isCross);
      console.log(tictactoeArray[index])
    }
    checkIsWinner();
  }
  return (
    <div class="app-body">
      <ToastContainer position="bottom-center" />
      <h1>Lets play tic tac toe Game</h1>
      {winMessage ? (
        <div>
          <h2>{winMessage}</h2>
          <button onClick={resetGame}>Play Again</button>
        </div>
      ) : (
        <h1>{isCross == true ? "Cross" : "Circle"}'s Turn</h1>
      )}

      <div className="container">
        {tictactoeArray.map((value, index) => (
          <div className="item1" onClick={() => playGame(index)}>
            <Icon icon={value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
