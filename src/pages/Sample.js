import { createBoxMarker } from "../components/MarkerBox";
import PhotoSphereView from "../components/PhotoSphereView";

const baseUrl = "/assets/images/";

const SampleView = () => {
  const markers = [
    createBoxMarker({
      id: "sun",
      title: "Sun",
      yaw: "15deg",
      pitch: "8deg",
      paddingX: 20,
      paddingY: 20,
      tooltip: "Click to open Wikipedia",
      link: "https://en.wikipedia.org/wiki/Sun",
    }),
    createBoxMarker({
      id: "moon",
      title: "Moon",
      yaw: "222deg",
      pitch: "34deg",
      paddingX: 20,
      paddingY: 20,
      tooltip: "Click to open Wikipedia",
      link: "https://en.wikipedia.org/wiki/Moon",
    }),
  ];

  return (
    <PhotoSphereView
      imageUrl={`${baseUrl}pan.jpg`}
      caption="Parc national du Mercantour <b>&copy; Damien Sorel</b>"
      markers={markers}
    />
  );
};

export default SampleView;
