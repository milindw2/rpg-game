import * as THREE from 'three'

import React, { Suspense, useMemo }  from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";

import "./index.css";
// import Plane from './components/Plane';
import Environment from './components/Environment';
import Orbit from './components/Orbit';
// import Archer from './components/Archer'
// import WalkingMan from './components/WalkingMan'
  import CuteGirl from './components/CuteGirl'
  import Leonard from './components/Leonard'
  import Girl from "./components/Girl"
  import Ground from "./components/Ground";
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
        {/* <CuteGirl  position={[6, 12, -48]} /> */}
        <Girl position={[6, 12, -48]} ></Girl>
        {/* <Leonard></Leonard> */}
        {/* <Environment path='/env/scene.gltf'  scale={new Array(3).fill(0.004)}/> */}
        <Environment path="/env/Bhk.glb" scale={new Array(3).fill(5.00)}/>
        <Suspense fallback={null}>
          {/* <WalkingMan /> */}
          {/* <Archer /> */}
          
        </Suspense>
        <Ground />
        </Physics>
        <Orbit />
      </Canvas>
    
      </div> 
  );
}

export default App;


