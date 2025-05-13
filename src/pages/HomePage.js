import { createBoxMarker } from "../components/MarkerBox";
import PhotoSphereView from "../components/PhotoSphereView";

const baseUrl = "/assets/images/";

const HomePage = () => {
  const markers = [
    createBoxMarker({
      id: "lobby",
      title: "Lobby",
      yaw: "0deg",
      pitch: "-40deg",
      paddingX: 20,
      paddingY: 20,
      tooltip: "Click to open Wikipedia",
      link: "/lobby",
    }),
  ];

  return (
    <PhotoSphereView
      imageUrl={`${baseUrl}home.jpg`}
      caption="Parc national du Mercantour <b>&copy; Damien Sorel</b>"
      markers={markers}
    />
  );
};

export default HomePage;
