import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei'; // ← Fixed: Removed unused Sphere
import * as THREE from 'three';
import CanvasLoader from '../Loader';

const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const atmosphereRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5; // Slow rotation
    }
  });

  return (
    <group>
      {/* Main Earth */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial>
          <primitive 
            object={new THREE.CanvasTexture(createEarthTexture())} 
            attach="map" 
          />
        </meshPhongMaterial>
      </mesh>
      
      {/* Atmosphere Glow */}
      <mesh ref={atmosphereRef} scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial
          color="#4FC3F7"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

// Create Earth texture with continents
const createEarthTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  // Ocean base
  ctx.fillStyle = '#2196F3';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add continent-like shapes
  ctx.fillStyle = '#4CAF50';
  
  // North America
  ctx.beginPath();
  ctx.ellipse(100, 80, 40, 30, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // South America
  ctx.beginPath();
  ctx.ellipse(120, 150, 25, 40, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Africa
  ctx.beginPath();
  ctx.ellipse(260, 120, 30, 50, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Europe
  ctx.beginPath();
  ctx.ellipse(250, 70, 20, 15, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Asia
  ctx.beginPath();
  ctx.ellipse(350, 80, 60, 35, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Australia
  ctx.beginPath();
  ctx.ellipse(400, 180, 25, 15, 0, 0, Math.PI * 2);
  ctx.fill();

  // Add some cloud-like effects
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 15 + 5;
    ctx.beginPath();
    ctx.ellipse(x, y, radius, radius * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  return canvas;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
          autoRotateSpeed={0.5}
        />
        
        {/* Improved Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[5, 3, 5]} 
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4FC3F7" />
        
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;