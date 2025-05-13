const MarkerButton = ({ title }) => {
  return (
    <div
      style={{
        position: "relative",
        width: 120, // slightly larger for better clarity
        height: 70,
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
          top: "45%", // centered more accurately
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "SoakedBlood",
          fontSize: 18, // increased for readability
          fontWeight: "normal", // ✅ not bold
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
