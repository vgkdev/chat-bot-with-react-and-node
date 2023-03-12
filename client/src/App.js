import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./containers/Home/HomePage";
import Header from "./components/Header";
import Footer from "./containers/footer/Footer";
import Chatting from "./containers/Chat/Chatting";
import Courses from "./containers/courses/Courses";

function App() {
  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/chatting" element={<Chatting />} />

          <Route path="/courses" element={<Courses />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
