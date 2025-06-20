import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  
  return (
    <Html as='div' center>
      <div className="loader-container">
        <span className='canvas-loader'></span>
        <p className="loader-text">
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;