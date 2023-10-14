import React from "react";
import './App.css';
import "react-bootstrap";
import NAVBAR from "./components/navbar";
import HOMEPAGE from "./components/Homepage";
import ABOUTME from "./components/Aboutme";
import CARTIFICATE from "./components/Certificate";
import PROJECT from "./components/Project";
import CONTACTME from "./components/Contactme";




function App() {
  return (
    <div>
     
      {/* <section className="text-gradient bg-gradient-to-r from-red-500 to-blue-500"></section> */}
      {/* bg-gradient-to-br from-red-500 via-indigo to-blue-500 */}
        <NAVBAR />
        <HOMEPAGE />
      <section>
        <ABOUTME />
        <CARTIFICATE />
        <PROJECT />
      </section>
      <CONTACTME/>
    </div>
  );
}

export default App;

