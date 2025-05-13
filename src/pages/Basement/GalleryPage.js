import { createBoxMarker } from "../../components/MarkerBox";
import PhotoSphereView from "../../components/PhotoSphereView";

const GalleryPage = ({ image }) => {
  const markers = [
    createBoxMarker({
      id: "mummy",
      title: "Mummy 2023",
      yaw: "0deg",
      pitch: "-40deg",
      paddingX: 20,
      paddingY: 20,
      tooltip: "Mummy 2023",
      link: "https://kuula.co/share/collection/7JV5Q?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1",
    }),
  ];
  return (
    <PhotoSphereView
      imageUrl={image}
      caption="Welcome to the Gallery"
      markers={markers}
    />
  );
};

export default GalleryPage;
