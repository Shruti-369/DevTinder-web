import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Body from './Body';
import Login from './Login';
import Home from './Home';
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import { Provider } from "react-redux";
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<h1>Home</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;