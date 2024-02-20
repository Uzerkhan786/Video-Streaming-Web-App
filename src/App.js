import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./utils/store";
import { Provider } from "react-redux";
import Rout from "./components/Rout";
import VideoDetails from "./components/VideoDetails";
import SearchVideos from "./components/SearchVideos";
import Header from "./components/Header";
import Extra from "./components/Extra";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Rout />} />
            <Route path={"/videos/:id"} element={<VideoDetails />} />
            <Route path={"/search"} element={<SearchVideos />} />
            <Route path={"/extra"} element={<Extra />} />
          </Routes>
        </Provider>

      </BrowserRouter>


    </div>
  );
}

export default App;
