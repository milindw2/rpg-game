import { Suspense } from 'react';
import Dragable from './Dragable';
import Charactor from './Charactor';
import BoundingBox from './BoundingBox';
const Girl = props => {
    return (
        <>
             <Dragable transformGroup>
            <Suspense fallback={null}>
                <Charactor path='character/scene.gltf'  scale={new Array(3).fill(1)} />
                {/* <BoundingBox  position={[1,1,1]} dims={[3,2,5]} offset={[0,-0.3,0]} visible>
              </BoundingBox> */}
            </Suspense>
              </Dragable>
              
        </>
    )
}

export default Girl;