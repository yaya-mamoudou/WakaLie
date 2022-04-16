import "./App.css";
import { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Timeline from "./Components/Timeline";
import DailyFeed from './Components/DailyFeed';
import NewPost from "./Components/NewPost";
import UpdateProfile from "./Components/UpdateProfile";
import Error from "./Components/Error";
import axios from "axios";

function App() {

  


  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/feed" element={<DailyFeed />} />
        <Route path="/new" element={<NewPost />} />
        <Route path='/update' element={<UpdateProfile/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

