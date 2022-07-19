/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState } from "react";
import moment from "moment";
import { useSudokuContext } from "../../context/SudokuContext";
import { MyTimer } from "../styles";

export const Timer: FC = () => {
  const [currentTime, setCurrentTime] = useState<moment.Moment>(moment());
  const { won, gameStartedAt } = useSudokuContext();

  useEffect(() => {
    if (!won) {
      setTimeout(() => tick(), 1000);
    }
  });

  function tick() {
    setCurrentTime(moment());
  }

  function getTimeCollapsed() {
    let totalSecondsPassed = currentTime.diff(gameStartedAt, "seconds");
    let duration = moment.duration(totalSecondsPassed, "seconds");
    let hours = duration.hours();
    let minutes = duration.minutes();
    let seconds = duration.seconds();

    let timePassed = "";

    timePassed += hours ? "" + hours + ":" : "";
    timePassed += minutes ? (minutes < 10 ? "0" : "") + minutes + ":" : "00:";
    timePassed += seconds < 10 ? "0" + seconds : seconds;

    return timePassed;
  }
  return <MyTimer>{getTimeCollapsed()}</MyTimer>;
};
