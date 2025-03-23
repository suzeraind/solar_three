import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { useRef } from "react";
import * as THREE from "three";

export default function Sun() {
  const sunRef = useRef<THREE.Mesh>(null!);
  const atmosphereRef = useRef<THREE.Mesh>(null!);
  const texture = new THREE.TextureLoader().load("/textures/sun.jpg");

  useFrame((_, delta) => {
    sunRef.current.rotation.y += delta * 0.1;
    atmosphereRef.current.rotation.y += delta * 0.1;
  });

  return (
    <group>
      <mesh ref={sunRef}>
        <sphereGeometry args={[5, 64, 64]}/>
        <meshStandardMaterial
          map={texture}
          emissive="yellow"
          emissiveIntensity={5}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[6, 64, 64]}/>
        <meshBasicMaterial
          color="red"
          transparent={true}
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <EffectComposer>
        <Bloom intensity={0.6} luminanceThreshold={0.5} luminanceSmoothing={0.025}/>
      </EffectComposer>
    </group>
  );
}