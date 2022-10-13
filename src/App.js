import "./App.css";
import Navigation from "./components/Navigation";
import Films from "./components/Films";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Detail from "./components/Detail";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import News from "./components/News";


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Films />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
