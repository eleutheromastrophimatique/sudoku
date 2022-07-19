import styled from "@emotion/styled";
import * as colors from "../colors";

export const Overlay = styled.div({
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: "1",
  cursor: "pointer",
  position: "fixed",
  top: 0,
  left: 0,
});

export const OverlayText = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  fontSize: "50px",
  color: colors.base,
  transform: "translate(-50%, -50%)",
  msTransform: "translate(-50%, -50%)",
});
