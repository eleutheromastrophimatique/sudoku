import { ChangeEvent, FC } from "react";
import { useSudokuContext } from "../../context/SudokuContext";
import { SelectContainer, SelectLabel, Select } from "../styles";

interface IDifficulty {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Difficulty: FC<IDifficulty> = ({ onChange }) => {
  const { difficulty } = useSudokuContext();
  const difficulties = ["Easy", "Medium", "Hard"];
  return (
    <SelectContainer>
      <SelectLabel>Difficulty :</SelectLabel>
      <Select onChange={onChange} defaultValue={difficulty}>
        {difficulties.map((difficulty, index) => (
          <option value={difficulty} key={index}>
            {difficulty}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};
