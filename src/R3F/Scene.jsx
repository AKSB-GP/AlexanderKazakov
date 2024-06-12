import * as React from "react";

import { Canvas } from '@react-three/fiber'


//- är vänster/ner flr x och y 

const Scene = () => {
  return (
    <Canvas>
    <ambientLight intensity={0.1} />
    <directionalLight color="red" position={[0, 0, 5]} />
    <mesh position={[2, 0, 0]}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  </Canvas>
  );



};

export default Scene;
