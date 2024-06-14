import * as React from "react";

import { Canvas } from '@react-three/fiber'



const Scene = () => {
  return (
    <Canvas style={{background: "#000000"}} orthographic={false}>
    <ambientLight intensity={0.1} />
    <directionalLight color="red" position={[0, 0, 5]} />
    <mesh position={[2, 0, 0]} scale={2}>
      <sphereGeometry />
      <meshStandardMaterial wireframe/>
    </mesh>
  </Canvas>
  );



};

export default Scene;