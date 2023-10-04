import React from "react";
import Header from "./Header";
import Body from "./Body";
import data from "./data";
import Footer from "./Footer";

function App() {
  const wallCards = data.map((place) => {
    return <Body key={place.id} place={place} />;
  });

  return (
    <div className="app">
      <Header />
      <section className="bodyList">{wallCards}</section>
      <Footer />
    </div>
  );
}

export default App;
