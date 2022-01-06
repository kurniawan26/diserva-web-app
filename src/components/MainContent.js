import React from "react";
import About from "./About";
import Book from "./Book";
import Features from "./Features";
import Stories from "./Stories";
import Tours from "./Tours";

export default function MainContent() {
  return (
    <main>
      <About />
      <Features />
      <Tours />
      <Stories />
      <Book />
    </main>
  );
}
