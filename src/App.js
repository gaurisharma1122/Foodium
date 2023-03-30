import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/recipes" element={<Recipes />} />
          <Route exact path="/favourites" element={<Favourites />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
