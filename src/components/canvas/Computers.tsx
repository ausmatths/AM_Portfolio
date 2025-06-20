import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

interface ComputersProps {
  isMobile: boolean;
}

const Computers = ({ isMobile }: ComputersProps) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  
  return (
    <group>
      {/* Base lighting */}
      <ambientLight intensity={0.6} />
      <hemisphereLight intensity={0.4} groundColor='#444444' />
      
      {/* Main spotlight */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />
      
      {/* Monitor screen glow effects */}
      <pointLight 
        position={[0, -1, 0]} 
        intensity={1.5} 
        color="#4a9eff" 
        distance={8}
      />
      <pointLight 
        position={[2, -1, 0]} 
        intensity={1.2} 
        color="#ffffff" 
        distance={6}
      />
      
      {/* RGB lighting effects */}
      <pointLight 
        position={[3, -2, 2]} 
        intensity={1} 
        color="#ff6b9d" 
        distance={5}
      />
      <pointLight 
        position={[-2, -2, 2]} 
        intensity={1} 
        color="#00d4ff" 
        distance={5}
      />
      <pointLight 
        position={[1, -2, 3]} 
        intensity={0.8} 
        color="#a855f7" 
        distance={4}
      />
      
      {/* General coverage lights */}
      <pointLight position={[20, 20, 20]} intensity={2} />
      <pointLight position={[-20, -20, -20]} intensity={1} />
      <pointLight position={[0, 10, 10]} intensity={2} />
      
      {/* Directional light */}
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.5} 
        castShadow
      />
      
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;