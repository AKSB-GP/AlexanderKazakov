import * as React from "react";
import { useMemo, useRef } from "react";

import { Canvas } from '@react-three/fiber'
import { CameraControls, OrbitControls } from "@react-three/drei";
import { Camera } from "three";



const BasicParticles = () => {
  // This reference gives us direct access to our points
  const points = useRef();

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <points ref={points} position={[3,0,-1]}>
      <sphereGeometry args={[2, 48, 48]} />
      <pointsMaterial color="white" size={0.015} sizeAttenuation />
    </points>
  );
};


const Scene = () => {
  return (
   
   <Canvas style={{background: "#000000"}} >
       <OrbitControls enableZoom={false}
        enablePan={false}>
            enableRotate={false}
        </OrbitControls>
      <BasicParticles/>
    <ambientLight intensity={0.1} />
    <directionalLight color="red" position={[0, 0, 5]} />
   
  </Canvas>
  );



};

export default Scene;