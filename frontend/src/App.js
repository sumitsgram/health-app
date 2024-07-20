import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import TapHealthInfo from "./components/TapHealthInfo/TapHealthInfo";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <TapHealthInfo />
      <Footer />
      {/* Other components and content */}
    </div>
  );
}

export default App;
