import React from "react";
import { useRef } from "react";

import { PerspectiveCamera, Plane, Sky, useTexture } from "@react-three/drei";
import { VRCanvas, DefaultXRControllers, useXR } from "@react-three/xr";
import "./App.css";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three/src/objects/Mesh";
import { DoubleSide, GridHelper, PointLight } from "three";

type FlashlightProps = {
  color: number;
};

function Flashlight({ color }: FlashlightProps) {
  const flashlightRef = useRef<PointLight>(null!);
  return <pointLight ref={flashlightRef} color={color} />;
}

function Controllers() {
  const { controllers } = useXR();
  const controllerRef = useRef<Mesh>(null!);
  useFrame(() => {
    if (controllers[0]) {
      const { x, y, z } = controllers[0].controller.position;
      const {
        x: thetaX,
        y: thetaY,
        z: thetaZ,
      } = controllers[0].controller.rotation;
      controllerRef.current.position.set(x, y, z);
      controllerRef.current.rotation.set(thetaX, thetaY, thetaZ);
    }
  });

  return (
    <>
      <DefaultXRControllers />
      <mesh ref={controllerRef}>
        <Flashlight color={0xfff} />
      </mesh>
    </>
  );
}

function Scene() {
  const sceneRef = useRef<Mesh>(null!);
  const map = useTexture("/Tiles/Tiles_4K_Color.jpg");
  const normalMap = useTexture("/Tiles/Tiles_4K_NormalDX.jpg");
  const roughnessMap = useTexture("/Tiles/Tiles_4K_Roughness.jpg");

  return (
    <mesh ref={sceneRef}>
      <Plane position={[0, 1, 0]} scale={2}>
        <meshStandardMaterial
          map={map}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          side={DoubleSide}
        />
      </Plane>
      <primitive object={new GridHelper(10)} />
    </mesh>
  );
}

function App() {
  return (
    <VRCanvas>
      <PerspectiveCamera position={[0, 1, 5]} makeDefault />
      <Controllers />
      <Scene />

      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
    </VRCanvas>
  );
}

export default App;
