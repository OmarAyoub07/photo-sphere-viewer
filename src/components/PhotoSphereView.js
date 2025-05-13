// components/PhotoSphereView.js
import { useState } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import "@photo-sphere-viewer/markers-plugin/index.css";

const PhotoSphereView = ({ imageUrl, caption, markers }) => {
  const [loading, setLoading] = useState(true);
  const plugins = [[MarkersPlugin, { markers }]];

  const handleReady = (instance) => {
    setLoading(false); // hide loader
    const markersPlugin = instance.getPlugin(MarkersPlugin);
    markersPlugin.addEventListener("select-marker", (e) => {
      const url = e.marker.data?.link;
      if (url) window.open(url, "_blank");
    });
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
          }}
        >
          Loading panorama...
        </div>
      )}

      <ReactPhotoSphereViewer
        src={imageUrl}
        height="100%"
        width="100%"
        caption={caption}
        loadingImg="/assets/images/loader.gif"
        touchmoveTwoFingers
        mousewheelCtrlKey
        plugins={plugins}
        onReady={handleReady}
      />
    </div>
  );
};

export default PhotoSphereView;
