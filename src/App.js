import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Navigation from "./components/Navigation";
import Popup from "./components/Popup";

import "./sass/main.scss"
import "./fonts/icon-font.css"

export default function App() {
  return (
    <>
      <Navigation />
      <Header />
      <MainContent />
      <Footer />
      <Popup />
    </>
  );
}
