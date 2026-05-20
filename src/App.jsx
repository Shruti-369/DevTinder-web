import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Body from './components/Body';
import Login from './components/Login';
import Home from './components/Home';
import Feed from './components/Feed';
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
            <Route path="/" element={<Feed />}>
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<h1>Home</h1>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;