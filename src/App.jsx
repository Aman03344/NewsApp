import React, { useState } from "react";
import Navbar from "./conponents/Navbar";
import Heading from "./conponents/Heading";
import Form from "./conponents/Form";
import Topics from "./conponents/Topics";

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState("Political");

  

  return (
    <>
      <Navbar />
      <Heading />
      <Form/>
      <Topics/>
    </>
  );
};

export default App;
