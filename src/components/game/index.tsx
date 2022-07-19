/** @jsxImportSource @emotion/react */
import moment from "moment";
import { ChangeEvent, FC, useEffect, useState } from "react";

import { useSudokuContext } from "../../context/SudokuContext";
import { getUniqueSudoku } from "../../solver/UniqueSudoku";
import { Grid } from "../grid";
import { Play } from "../play";
import { Button, Overlay, OverlayText } from "../styles";
import { Timer } from "../timer";

export const Game: FC = () => {
  const {
    difficulty,
    setDifficulty,
    cellSelected,
    setCellSelected,
    initArray,
    setInitArray,
    setWon,
    gameArray,
    setGameArray,
    setGameStartedAt,
  } = useSudokuContext();

  const [solvedArray, setSolvedArray] = useState<string[]>([]);
  const [overlay, setOverlay] = useState<boolean>(false);
  const [errorMode, setErrorMode] = useState<boolean>(false);

  /* Sudoku related functions */
  function newGame(e?: ChangeEvent<HTMLSelectElement>) {
    let [tempInitArray, tempSolvedArray] = getUniqueSudoku(difficulty, e);
    setInitArray(tempInitArray);
    setGameArray(tempInitArray);
    setSolvedArray(tempSolvedArray);
    setCellSelected(-1);
    setGameStartedAt(moment());
    setWon(false);
  }

  function fillCell(index: number, value: string) {
    if (initArray[index] === "0") {
      const tempArray = gameArray.slice();

      tempArray[index] = value;
      setGameArray(tempArray);
      //setOverlay(true);

      if (isWon()) {
        setWon(true);
        setOverlay(true);
      }
    }
  }

  function isWon() {
    return gameArray.join() === solvedArray.join();
  }

  /* Click and Change Event Handlers */

  function handleClickCellSelection(indexOfArray: number) {
    setCellSelected(indexOfArray);
  }

  function handleClickNewGame() {
    newGame();
  }

  function handleClickNumber(number: string) {
    if (cellSelected !== -1) {
      fillCell(cellSelected, number);
    }
  }

  function handleErase() {
    if (cellSelected !== -1 && gameArray[cellSelected] !== "0") {
      fillCell(cellSelected, "0");
    }
  }

  function handleHint() {
    if (gameArray[cellSelected] === "0") {
      fillCell(cellSelected, solvedArray[cellSelected]);
    }
  }

  function handleDifficultyChange(e: ChangeEvent<HTMLSelectElement>) {
    console.log("difficulty", e.target.value);
    let diff = e.target.value;
    setDifficulty(diff);
    newGame(e);
  }

  function handleClickErrorMode() {
    console.log(errorMode);
    setErrorMode(!errorMode);
  }

  useEffect(() => {
    newGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      css={{
        display: "flex",
        flexFlow: "row wrap",
        gap: "2rem",
        width: "90%",
      }}
    >
      {overlay && (
        <Overlay onClick={() => setOverlay(false)}>
          <OverlayText>Congratulations ! You've Solved It ! 🎉</OverlayText>
        </Overlay>
      )}

      <Grid
        onClick={(indexOfArray: number) =>
          handleClickCellSelection(indexOfArray)
        }
      />
      <div
        css={{
          display: "flex",
          flexBasis: "36%",
          flexFlow: "column wrap",
          justifyContent: "space-between",
        }}
      >
        <Button onClick={() => handleClickNewGame()}>New Game</Button>
        <Timer />
        <Play
          handleDifficultyChange={(e: ChangeEvent<HTMLSelectElement>) =>
            handleDifficultyChange(e)
          }
          handleErase={handleErase}
          handleHint={handleHint}
          handleClickNumber={(number: string) => handleClickNumber(number)}
          handleClickErrorMode={handleClickErrorMode}
        />
      </div>
    </div>
  );
};
