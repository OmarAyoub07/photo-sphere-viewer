const MarkerButton = ({ title }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "18vw", // responsive width
        maxWidth: 250,
        minWidth: 120,
        height: "10vw", // responsive height
        maxHeight: 140,
        minHeight: 70,
        cursor: "pointer",
      }}
    >
      <img
        src="/assets/button/BUTTON1.png"
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "44%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "SoakedBlood",
          fontSize: "2vw", // scales with screen
          fontWeight: "normal",
          color: "white",
          textShadow: "0 0 4px black",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default MarkerButton;
