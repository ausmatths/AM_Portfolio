import {  } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null!)

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#4CAF50" />
    </mesh>
  );
};

export default Earth;