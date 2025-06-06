import { useRef } from 'react'
import * as THREE from 'three'

const Ball = () => {
  const meshRef = useRef<THREE.Mesh>(null!)

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color="#FF5722" />
    </mesh>
  );
};

export default Ball;