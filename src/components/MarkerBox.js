// // components/MarkerBox.js
// export const createBoxMarker = ({
//   id,
//   title,
//   yaw,
//   pitch,
//   paddingX = 12,
//   paddingY = 6,
//   tooltip,
//   link,
// }) => ({
//   id,
//   position: { yaw, pitch },
//   html: `<div style="
//     background: transparent;
//     border: 3px solid #ccc;
//     padding: ${paddingY}px ${paddingX}px;
//     border-radius: 4px;
//     font-size: 14px;
//     cursor: pointer;
//     white-space: nowrap;
//     color: white;
//     text-shadow: 0 0 3px black;
//   ">${title}</div>`,
//   anchor: "bottom center",
//   tooltip,
//   data: { link },
// });
import ReactDOMServer from "react-dom/server";
import React from "react";
import MarkerButton from "./MarkerButton";

export const createBoxMarker = ({ id, title, yaw, pitch, tooltip, link }) => {
  const buttonElement = document.createElement("div");
  buttonElement.innerHTML = ReactDOMServer.renderToString(
    <MarkerButton title={title} />
  );

  return {
    id,
    position: { yaw, pitch },
    element: buttonElement,
    anchor: "bottom center",
    tooltip,
    data: { link },
  };
};
