// pages/LobbyPage.js
import { createBoxMarker } from "../../components/MarkerBox";
import PhotoSphereView from "../../components/PhotoSphereView";

const LobbyPage = ({ image }) => {
  const markers = [
    createBoxMarker({
      id: "kitchen",
      title: "Our Services",
      yaw: "45deg",
      pitch: "7deg",
      paddingX: 20,
      paddingY: 20,
      tooltip: "Kitchen",
      link: "/kitchen",
    }),


    createBoxMarker({
      id: "gallery",
      title: "Our Products",
      yaw: "-82deg",
      pitch: "12deg",
      paddingX: 20,
      paddingY: 20,
      tooltip: "gallery",
      link: "/gallery",
    }),
  ];
  return (
    <PhotoSphereView
      imageUrl={image}
      caption="Welcome to the Lobby"
      markers={markers}
    />
  );
};

export default LobbyPage;
