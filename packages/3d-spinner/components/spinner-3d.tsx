import { useSpring } from "framer-motion"
import React, { MutableRefObject, useEffect, useRef } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import * as THREE from "three"

const Box = () => {
  return (
    <mesh>
      <boxGeometry attach="geometry" />
      {["rgb(172,131,248)", "rgb(102,16,242)", "rgb(240,182,211)"]
        .flatMap(x => [x, x])
        .map((color, i) => (
          <meshBasicMaterial key={i} color={color} attachArray="material" />
        ))}
    </mesh>
  )
}

const Material = props => (
  <meshBasicMaterial color="rgb(102,16,242)" {...props} />
)

const B = props => {
  return (
    <group {...props}>
      <mesh position={[0, -0.1, 0]}>
        <ringGeometry attach="geometry" args={[0.15, 0.2, 64]} />
        <Material attach="material" side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[-0.175, 0.08, 0]}>
        <planeGeometry attach="geometry" args={[0.05, 0.375]} />
        <Material attach="material" side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[-0.175, 0.27, 0]}>
        <circleGeometry attach="geometry" args={[0.025, 64]} />
        <Material attach="material" side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

const Spinner = () => {
  const groupRef: MutableRefObject<any> = useRef()
  const x = useSpring(0, { damping: 0, mass: 10, stiffness: 70 })
  useFrame(() => {
    groupRef.current.rotation.y = x.get()
  })
  useEffect(() => {
    x.set(Math.PI * 2)
  }, [])
  return (
    <group ref={groupRef}>
      <Box />
      <B position={[0, 0, 0.501]} />
      <B position={[0, 0, -0.501]} rotation={new THREE.Euler(0, Math.PI, 0)} />
    </group>
  )
}

const Spinner3D = props => {
  return (
    <Canvas
      colorManagement
      camera={{
        position: [0, 0.5, 1],
        zoom: 100,
      }}
      orthographic
      {...props}
    >
      <Spinner />
    </Canvas>
  )
}

export default Spinner3D
