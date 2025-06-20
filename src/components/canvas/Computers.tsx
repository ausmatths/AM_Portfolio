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
      
      {/* Monitor screen glow - enhanced */}
      <pointLight 
        position={[0, -1, 0]} 
        intensity={2} 
        color="#4a9eff" 
        distance={10}
      />
      <pointLight 
        position={[2, -1, 0]} 
        intensity={1.8} 
        color="#ffffff" 
        distance={8}
      />
      
      {/* PC Case RGB fans - positioned to match your setup */}
      <pointLight 
        position={[3.5, -1, 2]} 
        intensity={1.5} 
        color="#ff1493" 
        distance={6}
      />
      <pointLight 
        position={[3.5, -2, 2]} 
        intensity={1.3} 
        color="#8a2be2" 
        distance={5}
      />
      <pointLight 
        position={[3.5, -3, 2]} 
        intensity={1.2} 
        color="#00bfff" 
        distance={5}
      />
      
      {/* Under-desk RGB strip lighting */}
      <pointLight 
        position={[-2, -4, 0]} 
        intensity={1} 
        color="#ff4500" 
        distance={8}
      />
      <pointLight 
        position={[0, -4, 0]} 
        intensity={1} 
        color="#00ff7f" 
        distance={8}
      />
      <pointLight 
        position={[2, -4, 0]} 
        intensity={1} 
        color="#1e90ff" 
        distance={8}
      />
      
      {/* Keyboard RGB glow */}
      <pointLight 
        position={[0, -3.5, -1]} 
        intensity={0.8} 
        color="#ff69b4" 
        distance={4}
      />
      
      {/* Mousepad RGB glow */}
      <pointLight 
        position={[1.5, -3.5, -0.5]} 
        intensity={0.7} 
        color="#9932cc" 
        distance={3}
      />
      
      {/* Additional accent lighting */}
      <pointLight 
        position={[-3, -2, 1]} 
        intensity={0.8} 
        color="#00ffff" 
        distance={6}
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