import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Try from "./components/Try";
import TryDetails from "./components/TryDetails";
import CardComponent from "./components/CardComponent";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Coins" element={<Coins />} />
          <Route path="/Exchanges" element={<Exchanges />} />
          <Route path="/Coin/:id" element={<CoinDetails />} />
          <Route path="/Try/:id" element={<TryDetails />} />
          <Route path="/Try" element={<Try />} />
          <Route path="/CardComponent" element={<CardComponent />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
