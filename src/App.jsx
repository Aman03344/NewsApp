import React, { useState } from "react";
import Navbar from "./conponents/Navbar";
import Heading from "./conponents/Heading";
import Form from "./conponents/Form";
import Topics from "./conponents/Topics";
import { NewsProvider } from "./context/NewsContext";
import NewsGroup from "./conponents/NewsGroup";
import Footer from "./conponents/Footer";

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState("Political");

  return (
    <NewsProvider>
      <Navbar />
      <Heading />
      <Form />
      <Topics />
     <NewsGroup/>
     <Footer/>
    </NewsProvider>
  );
};

export default App;
