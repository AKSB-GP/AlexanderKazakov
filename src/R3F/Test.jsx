import * as React from "react";

import { Canvas } from '@react-three/fiber'




const Test = () =>{
        <div className="bg-red-300">
<Canvas>
<ambientLight intensity={0.5} />
<directionalLight color="red" position={[0, 0, 5]} />    <mesh>
      <sphereGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
    </Canvas>            
        </div>

    
}
export default Test

/*
export default () => {
    const { scene } = Drei.useGLTF("/src/assets/Cube.glb");
    return (
      <div className="h-screen h-100 z-0 ">
        <React.Suspense fallback={<p>...loading...</p>}>
          <Fiber.Canvas>
            <Drei.PerspectiveCamera makeDefault />
            <Drei.OrbitControls  enableRotate />
           
            
            <Drei.Box position={[-1.2, 0, 0]} />
            <Drei.Stage>
              <group dispose={null}>
                <primitive scale={[1, 1, 1]} object={scene} />
              </group>
            </Drei.Stage>
          </Fiber.Canvas>
        </React.Suspense>
      </div>
    );
  
  };
  useGLTF.preload("/src/assets/Cube.glb")*/