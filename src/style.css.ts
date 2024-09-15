import { globalStyle, style } from "@vanilla-extract/css";

const bottomBtn = style({
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
});

const container = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
  gap: "1rem",
});

const box = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
  gap: "1rem",
  borderRadius: "24px",
  border: "2px solid #F3F4F5",
});

const radioContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
});

const radioTextContainerSelected = style({
  border: "2px solid black",
  borderRadius: "var(--border-radius-xl)",
});

const radioTextContainer = style({
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "16px",
  boxSizing: "border-box",
  border: "2px solid black",
  borderRadius: "var(--border-radius-xl)",
});

globalStyle(`${radioTextContainer} > p:nth-of-type(1)`, {
  fontWeight: "500",
});

const radioSmartMore = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const status = style({
  position: "absolute",
  top: "-11px",
  right: "-4px",
});

const smartOptionsButton = style({
  width: "100%",
  maxWidth: "220px",
  margin: "0 auto",
});

export const appSt = {
  bottomBtn,
  container,
  box,
  radioContainer,
  radioTextContainer,
  radioTextContainerSelected,
  radioSmartMore,
  status,
  smartOptionsButton,
};
