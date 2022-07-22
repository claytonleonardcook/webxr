import { useFrame } from "@react-three/fiber";
import { useXR, XRController } from "@react-three/xr";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";

type ControllerProps = (
  | {
      isRight: boolean;
      isLeft?: boolean;
    }
  | {
      isRight?: boolean;
      isLeft: boolean;
    }
) & { children?: React.ReactNode };

const Controller = ({ isRight, isLeft, children }: ControllerProps) => {
  const { controllers } = useXR();
  const [controller, setController] = useState<XRController | undefined>();

  useEffect(() => {
    if (isRight) setController(controllers[0]);
    if (isLeft) setController(controllers[1]);
  }, [controllers, isLeft, isRight]);

  const controllerRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (controller) {
      const { x, y, z } = controller.controller.position;
      const {
        x: thetaX,
        y: thetaY,
        z: thetaZ,
      } = controller.controller.rotation;
      controllerRef.current.position.set(x, y, z);
      controllerRef.current.rotation.set(thetaX, thetaY, thetaZ);
    }
  });

  return <mesh ref={controllerRef}>{children}</mesh>;
};

export default Controller;
