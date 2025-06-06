const Stars = () => {
  return (
    <group>
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
          ]}
        >
          <sphereGeometry args={[0.02]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
    </group>
  );
};

export default Stars;