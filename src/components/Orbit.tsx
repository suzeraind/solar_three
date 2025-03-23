import { useRef } from "react";
import * as THREE from "three";

interface OrbitProps {
  radius: number;
  eccentricity?: number
}

// Компонент для отображения орбиты
export default function Orbit({radius, eccentricity = 0}: OrbitProps) {
  const points = useRef<THREE.BufferGeometry>(null!);

  const orbitPoints = new Float32Array(101 * 3);
  for (let i = 0; i <= 100; i++) {
    const angle = (i / 100) * Math.PI * 2;
    const x = Math.sin(angle) * radius * (1 - eccentricity);
    const z = Math.cos(angle) * radius;
    orbitPoints[i * 3] = x;
    orbitPoints[i * 3 + 1] = 0;
    orbitPoints[i * 3 + 2] = z;
  }

  return (
    <line>
      <bufferGeometry ref={points}>
        <bufferAttribute
          attach="attributes-position"
          args={[orbitPoints, 3]}
          itemSize={3}
          count={orbitPoints.length / 3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="gray" transparent={true} opacity={0.3}/>
    </line>
  );
}
