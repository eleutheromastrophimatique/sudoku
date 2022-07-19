/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { useSudokuContext } from "../../context/SudokuContext";
import { Board, Cell } from "../styles";

interface IGrid {
  onClick: (indexOfArray: number) => void;
}

export const Grid: FC<IGrid> = ({ onClick }) => {
  const { gameArray, cellSelected, initArray } = useSudokuContext();

  function isCellEqualToSelectedCell(row: number, column: number) {
    if (cellSelected === row * 9 + column) {
      return true;
    }
    if (gameArray[cellSelected] === "0") {
      return false;
    }
    if (gameArray[cellSelected] === gameArray[row * 9 + column]) {
      return true;
    }
  }

  return (
    <section
      css={{
        width: "60%",
      }}
    >
      <Board>
        <tbody>
          {[...Array(9)].map((_, row) => {
            return (
              <tr
                className="game-row"
                css={{
                  ":nth-child(3n)": {
                    borderBottom: "3px solid black",
                  },
                }}
                key={row}
              >
                {[...Array(9)].map((_, column) => {
                  const indexOfArray = row * 9 + column;
                  const value = gameArray[indexOfArray];
                  let selected =
                    cellSelected === indexOfArray ||
                    (cellSelected !== -1 &&
                      isCellEqualToSelectedCell(row, column));
                  let userFilled =
                    value !== "0" && initArray[indexOfArray] === "0";
                  return (
                    <Cell
                      onClick={() => onClick(indexOfArray)}
                      variant={
                        selected ? "selected" : userFilled ? "userFilled" : ""
                      }
                      className="game-cell"
                      key={column}
                    >
                      {value !== "0" && value}
                    </Cell>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Board>
    </section>
  );
};
