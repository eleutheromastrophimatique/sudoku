import moment from "moment";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

interface ISudokuContext {
  difficulty: string;
  setDifficulty: Dispatch<SetStateAction<string>>;
  gameArray: string[];
  setGameArray: Dispatch<SetStateAction<string[]>>;
  initArray: string[];
  setInitArray: Dispatch<SetStateAction<string[]>>;
  cellSelected: number;
  setCellSelected: Dispatch<SetStateAction<number>>;
  won: boolean;
  setWon: Dispatch<SetStateAction<boolean>>;
  gameStartedAt: moment.Moment;
  setGameStartedAt: Dispatch<SetStateAction<moment.Moment>>;
}

interface SudokuProviderProps {
  children: ReactNode;
}

const SudokuContext = createContext<null | ISudokuContext>(null);
SudokuContext.displayName = "SudokuContext";

const SudokuProvider = ({ children }: SudokuProviderProps) => {
  const [gameArray, setGameArray] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<string>("Easy");
  const [cellSelected, setCellSelected] = useState<number>(-1);
  const [initArray, setInitArray] = useState<string[]>([]);
  const [won, setWon] = useState<boolean>(false);
  const [gameStartedAt, setGameStartedAt] = useState<moment.Moment>(moment());

  return (
    <SudokuContext.Provider
      value={{
        gameArray,
        setGameArray,
        difficulty,
        setDifficulty,
        cellSelected,
        setCellSelected,
        initArray,
        setInitArray,
        won,
        setWon,
        gameStartedAt,
        setGameStartedAt,
      }}
    >
      {children}
    </SudokuContext.Provider>
  );
};

const useSudokuContext = (): ISudokuContext => {
  const context = useContext(SudokuContext);

  if (!context) {
    throw new Error(
      "useSudoku doit être utilisé à l'intérieur de SudokuProvider "
    );
  }

  return context;
};

export { SudokuProvider, useSudokuContext };
