import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";
import NothingHere from "../Containers/NothingHere";
import Search from "../Containers/Search";
import Cart from "../Containers/Cart";
import SigIn from "../Containers/SigIn";
import Register from "../Containers/Register";


function App() {
  return (
    <div className="App" style={{fontFamily: "Inter"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/sigin" element={<SigIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<NothingHere />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
