import "./App.css";
import Home from "./Components/Home";
import LandingPage from "./Components/LandingPage";
import Form from "./Components/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      {/* <Home />
      <Form />
      <LandingPage /> */}

      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" exact={true} element={<Form />} />
          <Route path="/landingpage" exact={true} element={<LandingPage />} />
        </Routes>
        <Navigation />
      </Router>
    </>
  );
}

export default App;
