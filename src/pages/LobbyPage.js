// pages/LobbyPage.js

import PhotoSphereView from "../components/PhotoSphereView";

const baseUrl = "/assets/images/";

const LobbyPage = () => {
  return (
    <PhotoSphereView
      imageUrl={`${baseUrl}lobby.jpg`}
      caption="Welcome to the Lobby"
      markers={[]}
    />
  );
};

export default LobbyPage;
