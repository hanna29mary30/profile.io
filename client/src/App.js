import './App.css';
import  Profile from "./Profile";
import Navigation from './Navigation';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from './components/Todos';
import Contact from "./Contact";
import Projects from './Projects';
import Login from './Login';
import User from "./User";
import Newsapp from './Newsapp';
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/search" element={<Newsapp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
