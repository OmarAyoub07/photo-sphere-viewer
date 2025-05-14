import { createBoxMarker, createMarkerShape } from "../../components/MarkerBox";
import PhotoSphereView from "../../components/PhotoSphereView";

const GalleryPage = ({ image }) => {
  const markers = [
    createBoxMarker({
      id: "ProjectGallery",
      title: "Project Gallery",
      yaw: "0deg",
      pitch: "-40deg",
      paddingX: 20,
      paddingY: 20,
      // tooltip: "Project Gallery",
      // link: "",
    }),

  createMarkerShape({
      id: "Alot Like Life",
      // title: "Alot Like Life",
      yaw: "120deg",
      pitch: "10deg",
      paddingX: 100,
      paddingY: 20,
      tooltip: "Alot Like Life",
      link: "https://kuula.co/post/5QJPx/collection/7KwgL",
    }),

    createMarkerShape({
      id: "Music hell",
      // title: "Music hell",
      yaw: "90deg",
      pitch: "10deg",
      paddingX: 100,
      paddingY: 20,
      tooltip: "Music hell",
      link: "https://kuula.co/post/n1/collection/7b2SL",
    }),

  createMarkerShape({
      id: "Curse of the Nile",
      // title: "Curse of the Nile",
      yaw: "30deg",
      pitch: "0deg",
      paddingX: 100,
      paddingY: 20,
      tooltip: "Curse of the Nile",
      link: "",//It's not available
    }),
  createMarkerShape({
      id: "Join me for a bite",
      // title: "Join me for a bite",
      yaw: "-27deg",
      pitch: "0deg",
      paddingX: 100,
      paddingY: 20,
      tooltip: "Join me for a bite",
      link: "",//It's not available
    }),
    createMarkerShape({
      id: "LucaPark",
      // title: "Lucapark",
      yaw: "-50deg",
      pitch: "0deg",
      paddingX: 100,
      paddingY: 20,
      tooltip: "Lucapark",
      link: "https://kuula.co/edit/5BCYk/collection/7KtY8",
    }),

      createMarkerShape({
      id: "Ricky and Morty",
      // title: "Ricky and Morty",
      yaw: "-80deg",
      pitch: "0deg",
      paddingX: 100,
      paddingY: 20,
      tooltip: "Ricky and Morty",
      link: "https://kuula.co/share/collection/7KC3y?logo=-1&info=0&fs=1&vr=1&zoom=1&initload=0&thumbs=1",
    }),

   createMarkerShape({
      id: "SkyWar",
      // title: "Sky War",
      yaw: "-115deg",
      pitch: "2deg",
      paddingX: 100,
      paddingY: 20,
      tooltip: "Sky War",
      link: "https://kuula.co/edit/5tWtG/collection/7ZG6",// the link isn't working
    }),

   createMarkerShape({
      id: "DeadZone",
      // title: "Dead Zone",
      yaw: "-115deg",
      pitch: "30deg",
      paddingX: 100,
      paddingY: 20,
      tooltip: "Dead Zone",
      link: "https://kuula.co/edit/hNzR7/collection/7ZbY0",
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
