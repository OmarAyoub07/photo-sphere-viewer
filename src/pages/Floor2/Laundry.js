import PhotoSphereView from "../../components/PhotoSphereView";

const LaundryPage = ({ image }) => {
  const markers = [
    // createBoxMarker({
    //   id: "lobby",
    //   title: "Lobby",
    //   yaw: "0deg",
    //   pitch: "-40deg",
    //   paddingX: 20,
    //   paddingY: 20,
    //   tooltip: "Click to open Wikipedia",
    //   link: "/lobby",
    // }),
  ];
  return (
    <PhotoSphereView
      imageUrl={image}
      caption="Welcome to the Laundry"
      markers={markers}
    />
  );
};

export default LaundryPage;
