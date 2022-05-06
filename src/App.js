import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import RoutesPage from "./config/RoutesPage";

import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <RoutesPage />
      <Footer />
    </>
  );
}

export default App;
