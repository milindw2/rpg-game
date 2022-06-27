import { useLoader } from "react-three-fiber";
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
const Charactor = props =>{
    const model = useLoader(GLTFLoader, props.path)

        model.scene.traverse(child => {
            if(child.isMesh){
                child.castShadow =  true;
                child.recieveShadow = true
                child.material.side = THREE.FrontSide
            }
        })
    return(
        <primitive  object={model.scene} scale={props.scale} position={[1,1.5,1]}/>
    )
}

export default Charactor;