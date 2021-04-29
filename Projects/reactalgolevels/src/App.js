import React from "react";
import LevOne from "./beginner/Count";
import LevTwo from "./midlevel/Count";
import LevThree from "./pro/Count";

function App() {
  return (
    <>
      <LevOne startingPoint={1} />
      <LevTwo startingPoint= {1} />
      <LevThree startingPoint= {2} />
    </>
  );
}

export default App;
