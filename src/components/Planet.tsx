import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';
import Orbit from "./Orbit.tsx";

// Компонент Планеты
interface PlanetProps {
  radius: number;
  size: number;
  color: string;
  speed: number;
  eccentricity?: number;
}

export default function Planet({radius, size, color, speed, eccentricity = 0}: PlanetProps) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    const angle = ref.current.rotation.y;
    const x = Math.sin(angle) * radius * (1 - eccentricity);
    const z = Math.cos(angle) * radius;
    ref.current.position.set(x, 0, z);
    ref.current.rotation.y += delta * speed;
  });

  return (
    <>
      <Orbit radius={radius} eccentricity={eccentricity}/>
      <mesh ref={ref} castShadow={true} receiveShadow={true}>
        <sphereGeometry args={[size, 32, 32]}/>
        <meshStandardMaterial color={color}/>
      </mesh>
    </>
  );
}