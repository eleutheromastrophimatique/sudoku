import styled from "@emotion/styled";
import * as colors from "../colors";

export const Button = styled.button({
  width: "100%",
  padding: "2rem",
  borderRadius: "4px",
  color: colors.base,
  backgroundColor: colors.dblue,
  border: "none",
  fontWeight: "bold",
  cursor: "pointer",
  ":hover": {
    backgroundColor: colors.ldblue,
  },
});

export const CircularButton = styled.button({
  padding: "2rem",
  borderRadius: "50%",
  border: "none",
  color: colors.dblue,
  backgroundColor: colors.gray10,
  fontWeight: "bold",
  cursor: "pointer",
  ":hover": {
    backgroundColor: colors.gray20,
  },
});
