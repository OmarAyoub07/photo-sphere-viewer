// components/MarkerBox.js
export const createBoxMarker = ({
  id,
  title,
  yaw,
  pitch,
  paddingX = 12,
  paddingY = 6,
  tooltip,
  link,
}) => ({
  id,
  position: { yaw, pitch },
  html: `<div style="
    background: transparent;
    border: 3px solid #ccc;
    padding: ${paddingY}px ${paddingX}px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;
    color: white;
    text-shadow: 0 0 3px black;
  ">${title}</div>`,
  anchor: "bottom center",
  tooltip,
  data: { link },
});
