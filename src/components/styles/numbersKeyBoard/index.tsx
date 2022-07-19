import styled from "@emotion/styled";
import * as colors from "../colors";

export const NumbersKeyboard = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "5px",
  flexBasis: "50%",
});

export const NumberKey = styled.div({
  textAlign: "center",
  fontSize: "3rem",
  fontWeight: "bold",
  color: colors.dblue,
  padding: "30px",
  cursor: "pointer",
  borderRadius: "6px",
  background: colors.gray10,
  ":hover": {
    background: colors.gray20,
  },
});
