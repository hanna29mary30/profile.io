import './App.css';
import  Profile from "./Profile";
import Navigation from './Navigation';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from './components/Todos';
import Contact from "./Contact";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
