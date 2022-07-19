import styled from "@emotion/styled";
//import * as colors from "../colors";

export const SelectContainer = styled.div({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
});

export const SelectLabel = styled.span({
  flexBasis: "15%",
  fontSize: "15px",
  fontWeight: "bold",
});

export const Select = styled.select({
  flexBasis: "80%",
  padding: "1rem",
});
