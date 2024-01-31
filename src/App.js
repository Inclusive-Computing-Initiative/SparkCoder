import "./styles.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Courses from './components/Courses';
import { HashRouter, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <HashRouter>
        <NavBar/>
        <Routes>
            <Route index element = {<HomePage/>}/>
            <Route path = '/courses' element = {<Courses/>}/>
            <Route path = '/contact' element = {<Contact/>}/>
        </Routes>
        <Footer/>
    </HashRouter>
  );
}
