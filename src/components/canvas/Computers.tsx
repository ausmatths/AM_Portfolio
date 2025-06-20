import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

interface ComputersProps {
  isMobile: boolean;
}

const Computers = ({ isMobile }: ComputersProps) => {
  console.log("🔍 Loading GLTF model...");
  
  const computer = useGLTF("/desktop_pc/scene.gltf");
  console.log("✅ GLTF loaded successfully:", computer);
  console.log("📦 Scene children:", computer.scene.children);
  
  return (
    <group>
      {/* Bright lighting to see everything */}
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={0.5} />
      
      {/* Test cubes to verify positioning */}
      <mesh position={[-4, 0, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="red" />
      </mesh>
      
      {/* Your computer model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      
      {/* Another test cube */}
      <mesh position={[4, 0, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="blue" />
      </mesh>
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
      camera={{ position: [0, 0, 10], fov: 75 }}  
      gl={{ preserveDrawingBuffer: true }}
      style={{ height: "100vh", width: "100%" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={true} />  {}
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;