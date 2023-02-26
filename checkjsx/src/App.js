import Photo from "./profile/Photo";
import Adress from "./profile/Adress";
import Fullname from "./profile/Fullname";
import './App.css'
function App() {
  return (
    <div className="app">
      <Fullname />
      <Adress />
      <Photo />
    </div>
  );
}

export default App;
