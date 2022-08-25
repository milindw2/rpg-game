
import { useBox } from "@react-three/cannon"

const Ground = props=>{
  const [ref, api] = useBox(()=>({args:[500,0,500],...props}))
  return(
    <mesh ref={ref} {...props} receiveShadow>
      <boxBufferGeometry args={[500,0,500]}/>
      <meshPhysicalMaterial color={'green'} />
    </mesh>
  )
}

export default Ground
