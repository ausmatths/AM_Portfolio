import { useRef } from 'react'
import * as THREE from 'three'

const Computers = () => {
  const meshRef = useRef<THREE.Mesh>(null!)

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 1, 0.1]} />
      <meshStandardMaterial color="#2196F3" />
    </mesh>
  );
};

export default Computers;