import React, { Suspense, useMemo }  from "react";
import { Canvas} from "react-three-fiber";
import { Physics } from "@react-three/cannon";
import "./index.css";
import Environment from './components/Environment';
import Orbit from './components/Orbit';
import Girl from './components/Girl'



function App() {
  return (
      <div style={{height:'100vh', width:'100vw'}}>
      <Canvas style={{background:"black"}} camera={{position:[3,3,3]}}>
      <pointLight castShadow 
      shadow-mapSize-height={2**10}
      shadow-mapSize-width={2**10}
      />
      <ambientLight intensity={0.5}/>
        <Physics>
        <Environment path='/city/scene.gltf'  scale={new Array(3).fill(0.004)}/>
        
        <Suspense fallback={null}>
          <Girl  />
        </Suspense>
        </Physics>
        <Orbit />
      </Canvas>
    
      </div> 
  );
}

export default App;


