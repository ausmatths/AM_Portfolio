import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);
  const atmosphereRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += delta * 0.2;
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.25;
  });

  const earthTexture = new THREE.CanvasTexture(createDetailedEarthTexture());
  const cloudTexture = new THREE.CanvasTexture(createCloudTexture());

  return (
    <group>
      {/* Earth Surface */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial 
          map={earthTexture}
          shininess={1000}
          specular={new THREE.Color(0x2266aa)}
        />
      </mesh>
      
      {/* Clouds Layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.01, 64, 64]} />
        <meshPhongMaterial
          map={cloudTexture}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>
      
      {/* Atmosphere */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[2.1, 64, 64]} />
        <meshBasicMaterial
          color="#87CEEB"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

const createDetailedEarthTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // Deep ocean blue
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#001f3f');
  gradient.addColorStop(0.5, '#0074D9');
  gradient.addColorStop(1, '#001f3f');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Detailed continents
  const continents = [
    // North America
    { x: 150, y: 120, w: 80, h: 100, color: '#228B22' },
    // South America  
    { x: 200, y: 280, w: 50, h: 120, color: '#32CD32' },
    // Africa
    { x: 480, y: 180, w: 60, h: 140, color: '#DAA520' },
    // Europe
    { x: 460, y: 100, w: 40, h: 30, color: '#228B22' },
    // Asia
    { x: 600, y: 120, w: 200, h: 100, color: '#8FBC8F' },
    // Australia
    { x: 750, y: 320, w: 60, h: 40, color: '#CD853F' }
  ];

  continents.forEach(continent => {
    ctx.fillStyle = continent.color;
    ctx.beginPath();
    ctx.ellipse(continent.x, continent.y, continent.w, continent.h, 0, 0, Math.PI * 2);
    ctx.fill();
  });

  return canvas;
};

const createCloudTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = 'transparent';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Create cloud patterns
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const w = Math.random() * 100 + 30;
    const h = Math.random() * 30 + 10;
    
    ctx.beginPath();
    ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
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
          autoRotateSpeed={1}
        />
        
        <ambientLight intensity={0.2} />
        <directionalLight 
          position={[5, 3, 5]} 
          intensity={1.5}
          castShadow
        />
        <pointLight position={[-10, 0, -10]} intensity={0.3} color="#4FC3F7" />
        
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;