import React from "react";
import { useRef } from "react";
import { PointLight } from "three/src/lights/PointLight";

type FlashlightProps = {
  color: number;
};

const Flashlight = ({ color }: FlashlightProps) => {
  const flashlightRef = useRef<PointLight>(null!);
  return <pointLight ref={flashlightRef} color={color} />;
};

export default Flashlight;
