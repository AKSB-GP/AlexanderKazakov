import * as React from "react";

import { Canvas } from '@react-three/fiber'




const Scene = () =>{
        <div className="bg-red-300">
<Canvas/>
  <ambientLight intensity={0.1} />
  <directionalLight color="red" position={[0, 0, 5]} />
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
        
        </div>

    
}
export default Scene
