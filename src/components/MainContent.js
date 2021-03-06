import React from "react";
import About from "./About";
import Book from "./Book";
import Features from "./Features";
import Stories from "./Stories";
import Services from "./Services";

export default function MainContent() {
  return (
    <main>
      <About />
      <Features />
      <Services />
      <Stories />
      <Book />
    </main>
  );
}
