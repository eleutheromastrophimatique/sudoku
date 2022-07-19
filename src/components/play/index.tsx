/** @jsxImportSource @emotion/react */
import { ChangeEvent, FC } from "react";

import { FaEraser } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { ImCross } from "react-icons/im";

import { Difficulty } from "../difficulty";
import { Numbers } from "../numbers";
import { CircularButton } from "../styles";

interface IPlay {
  handleDifficultyChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleErase: () => void;
  handleHint: () => void;
  handleClickNumber: (number: string) => void;
  handleClickErrorMode: () => void;
}

export const Play: FC<IPlay> = ({
  handleDifficultyChange,
  handleErase,
  handleHint,
  handleClickNumber,
  handleClickErrorMode,
}) => {
  return (
    <>
      <Difficulty
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          handleDifficultyChange(e)
        }
      />
      <div
        css={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-around",
        }}
      >
        <CircularButton onClick={() => handleErase()}>
          <FaEraser size="1.5em" />
        </CircularButton>
        <CircularButton onClick={() => handleHint()}>
          <FcIdea size="1.5em" />
        </CircularButton>
        <CircularButton onClick={() => handleClickErrorMode()}>
          <ImCross size="1.5em" />
        </CircularButton>
      </div>
      <Numbers onClick={(number: string) => handleClickNumber(number)} />
    </>
  );
};
