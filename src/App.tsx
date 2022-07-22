import React from "react";
import { PerspectiveCamera } from "@react-three/drei";
import Controllers from "./organisms/Controllers";
import { VRCanvas } from "@react-three/xr";
import Default from "./scenes/Default";
import "./App.css";


function App() {
  return (
    <VRCanvas>
      <Controllers />
      <Default />
      <PerspectiveCamera position={[0, 1, 5]} makeDefault />
    </VRCanvas>
  );
}

export default App;
