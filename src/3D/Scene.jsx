import * as React from "react";
import { useMemo, useRef } from "react";

import { Canvas } from '@react-three/fiber'

const Particles = ()=>{

  const points = useRef();

  return (

    <points>
      <sphereGeometry position={[2, 0, 0]} scale={2}>
      <pointsMaterial color="#5786F5" size={0.015} sizeAttenuation />

      </sphereGeometry>
    </points>


  )
}



const Scene = () => {
  return (
    <Canvas style={{background: "#000000"}} orthographic={false}>
    <ambientLight intensity={0.1} />
    <directionalLight color="red" position={[0, 0, 5]} />
    <mesh position={[2, 0, 0]} scale={2}>
      <sphereGeometry />
      <pointsMaterial wireframe/>
    </mesh>
  </Canvas>
  );



};

export default Scene;