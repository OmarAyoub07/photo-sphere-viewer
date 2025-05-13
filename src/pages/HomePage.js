import { createBoxMarker } from "../components/MarkerBox";
import PhotoSphereView from "../components/PhotoSphereView";

const HomePage = ({ image }) => {
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
    createBoxMarker({
      id: "room-1",
      title: "Career",
      yaw: "11deg",
      pitch: "-25deg",
      paddingX: 20,
      paddingY: 20,
      tooltip: "Contact Us",
      link: "/bedroom",
    }),
    createBoxMarker({
      id: "office",
      title: "Contact Us",
      yaw: "7.5deg",
      pitch: "-12.5deg",
      paddingX: 20,
      paddingY: 20,
      tooltip: "Contact Us",
      link: "/office",
    }),
  ];

  return (
    <PhotoSphereView
      imageUrl={image}
      caption="Parc national du Mercantour <b>&copy; Damien Sorel</b>"
      markers={markers}
    />
  );
};

export default HomePage;
