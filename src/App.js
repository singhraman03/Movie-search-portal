
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Movielist from './components/movielist/Movielist';
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Movie/:id" element={<h1>Movie detail page</h1>}></Route>
          <Route path="/Movies/:type" element={<Movielist/>}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
