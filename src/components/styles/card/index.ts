import styled from "@emotion/styled";
import * as colors from "../colors";

export const Card = styled.div({
  width: "80%",
  boxShadow: "0 5px 10px #999",
  backgroundColor: colors.base,
  padding: "2rem",
  borderRadius: "8px",
  margin: "2rem auto",
  display: "flex",
  flexFlow: "column wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  height: "90vh",
});
