import * as React from "react";

import { Canvas } from '@react-three/fiber'




const Scene = () => {
  return (
    //ändras diven för att täcka hela
    <div className="bg-yellow-300">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="hotpink" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )



}
export default Scene
