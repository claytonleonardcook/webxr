import { useTexture, Plane, Sky } from "@react-three/drei";
import React, { useRef } from "react";
import { Mesh, DoubleSide, GridHelper } from "three";

const Default = () => {
  const sceneRef = useRef<Mesh>(null!);
  const map = useTexture("/Tiles/Tiles_4K_Color.jpg");
  const normalMap = useTexture("/Tiles/Tiles_4K_NormalDX.jpg");
  const roughnessMap = useTexture("/Tiles/Tiles_4K_Roughness.jpg");

  return (
    <>
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
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
    </>
  );
};

export default Default;
