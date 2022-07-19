import styled from "@emotion/styled";
import * as colors from "../colors";

const cellVariants: { [key: string]: { background?: string; color: string } } =
  {
    selected: {
      background: colors.ldblue,
      color: colors.base,
    },
    userFilled: {
      color: colors.toreaBay,
    },
  };

export const Cell = styled.td(
  {
    border: "1px solid grey",
    width: "6.66%",
    padding: "20px 0",
    cursor: "pointer",
    textAlign: "center",
    fontWeight: "bolder",
    fontSize: "170%",
    ":nth-child(3n)": {
      borderRight: "3px solid black",
    },
  },
  ({ variant }: { variant: string }) => cellVariants[variant]
);

/* export const Cell = ({ selected, userFilled }: {selected?: boolean, userFilled?: boolean}) =>
  styled.td({
    border: "1px solid grey",
    width: "6.66%",
    padding: "20px 0",
    cursor: "pointer",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "170%",
    background: selected ? colors.ldblue : colors.base,
    color: userFilled ? colors.ldblue : colors.black,
    ":nth-child(3n)": {
      borderRight: "2px solid black",
    },
  });  */
