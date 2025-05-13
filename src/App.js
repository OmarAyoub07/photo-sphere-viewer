import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LobbyPage from "./pages/Basement/LobbyPage";
import Dinning2Page from "./pages/Basement/Dinning2Page";
import GalleryPage from "./pages/Basement/GalleryPage";
import KitchenPage from "./pages/Basement/KitchenPage";
import BathroomPage from "./pages/Floor1/BathroomPage";
import BedroomPage from "./pages/Floor1/BedroomPage";
import Bedroom2Page from "./pages/Floor1/Bedroom2Page";
import DressingRoomPage from "./pages/Floor1/DressingRoom2Page";
import LivingRoomPage from "./pages/Floor1/LivingRoomPage";
import LaundryPage from "./pages/Floor2/Laundry";
import OfficePage from "./pages/Floor2/OfficePage";

function App() {
  const assetsPath = "/assets/images/360/";

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage image={`${assetsPath}home.jpg`} />}
        />
        <Route
          path="/lobby"
          element={<LobbyPage image={`${assetsPath}lobby.jpg`} />}
        />
        <Route
          path="/dining"
          element={<Dinning2Page image={`${assetsPath}dining.jpg`} />}
        />
        <Route
          path="/gallery"
          element={<GalleryPage image={`${assetsPath}gallery.jpg`} />}
        />
        <Route
          path="/kitchen"
          element={<KitchenPage image={`${assetsPath}kitchen.jpg`} />}
        />

        <Route
          path="/bathroom"
          element={<BathroomPage image={`${assetsPath}bathroom.jpg`} />}
        />
        <Route
          path="/bedroom"
          element={<BedroomPage image={`${assetsPath}bedroom.jpg`} />}
        />
        <Route
          path="/bedroom2"
          element={<Bedroom2Page image={`${assetsPath}bedroom2.jpg`} />}
        />
        <Route
          path="/dressing-room"
          element={
            <DressingRoomPage image={`${assetsPath}dressing-room.jpg`} />
          }
        />
        <Route
          path="/living-room"
          element={<LivingRoomPage image={`${assetsPath}living-room.jpg`} />}
        />

        <Route
          path="/laundry"
          element={<LaundryPage image={`${assetsPath}laundry.jpg`} />}
        />
        <Route
          path="/office"
          element={<OfficePage image={`${assetsPath}office.jpg`} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
