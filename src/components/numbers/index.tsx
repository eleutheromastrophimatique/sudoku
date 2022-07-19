import { FC } from "react";
import { NumberKey, NumbersKeyboard } from "../styles/numbersKeyBoard";

interface INumbers {
  onClick: (number: string) => void;
}

export const Numbers: FC<INumbers> = ({ onClick }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <NumbersKeyboard>
      {numbers.map((number, index) => (
        <NumberKey key={index} onClick={() => onClick(number.toString())}>
          {number}
        </NumberKey>
      ))}
    </NumbersKeyboard>
  );
};
