import React from "react";
import Beginner from "./beginner/User";
import Middle from "./mid/User";
import Professional from "./professional/User";

export default function App(){
  return(
    <>
      <Beginner theAge={27} />
      <Middle theAge={26} />
      <Professional 
    </>
  )
}