import { DefaultXRControllers } from "@react-three/xr";
import React from "react";
import Controller from "./Controller";
import Flashlight from "./Flashlight";

function Controllers() {
  return (
    <>
      <DefaultXRControllers />
      <Controller isRight>
        <Flashlight color={0xff0000} intesity={3}/>
      </Controller>
      <Controller isLeft>
        <Flashlight color={0x0000ff}/>
      </Controller>
    </>
  );
}

export default Controllers;
