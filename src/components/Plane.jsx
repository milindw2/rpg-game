
const Plane = props =>{
    return(
        <mesh>
        <planeBufferGeometry />
        <meshPhysicalMaterial transparent opacity={0.5}/>
    </mesh>
    )
}

export default Plane;