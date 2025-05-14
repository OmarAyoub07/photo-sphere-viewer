const MarkerShape = ({ title }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "18vw", // responsive width
        maxWidth: 180,
        minWidth: 120,
        height: "30vw", // responsive height
        maxHeight: 200,
        minHeight: 70,
        cursor: "pointer",
        color: "white",
        // border: "3px solid #ccc"
      }}
    >

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
          // textShadow: "0 0 4px black",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default MarkerShape;
