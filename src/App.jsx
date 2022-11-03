import { Map } from "./components/Map";

function App() {
  const location = {
    address:
      "Gafsa Cité Serrour ",
    lat: 34.43376127912165, 
    lng: 8.787941487763064,
  };
  return <Map location={location} zoomLevel={17} />;
}

export default App;
