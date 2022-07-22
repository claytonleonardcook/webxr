import React from "react";
import { useRef } from "react";
import { PointLight } from "three/src/lights/PointLight";

type FlashlightProps = {
  color?: number;
  intesity?: number;
};

const Flashlight = ({ color, intesity }: FlashlightProps) => {
  const flashlightRef = useRef<PointLight>(null!);
  return <pointLight ref={flashlightRef} color={color} intensity={intesity}/>;
};

export default Flashlight;
