import * as React from "react";
import * as Fiber from "@react-three/fiber";
import * as Drei from "@react-three/drei";
import { useGLTF } from '@react-three/drei'


export default () => {
    const { scene } = Drei.useGLTF("/src/assets/Cube.glb");
    return (
      <div className="h-screen h-100 z-0 bg-green-300">
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
  useGLTF.preload("/src/assets/Cube.glb")