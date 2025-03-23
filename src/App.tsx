import { OrbitControls, Stars } from "@react-three/drei"; // Импорт компонентов для звезд
import { Canvas } from "@react-three/fiber";
import SolarSystem from "./components/SolarSystem.tsx";


// Основной компонент сцены
export default function App() {
  return (
    <Canvas
      shadows={true}
      camera={{
        position: [0, 100, 100],
        fov: 45,
        near: 0.1,
        far: 1000,
      }}
    >
      <directionalLight
        position={[10, 20, 10]}
        intensity={1.5}
        castShadow={true}
      />

      <ambientLight intensity={0.2}/>

      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxDistance={200}
        minDistance={20}
      />
      <Stars saturation={0.5}/>

      <SolarSystem/>
    </Canvas>
  );
}