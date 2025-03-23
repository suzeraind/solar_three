// Компонент для создания звездного фона
import { PointMaterial, Points } from "@react-three/drei";

export default function Stars() {
  const stars = new Float32Array(5000 * 3); // 5000 звезд
  for (let i = 0; i < stars.length; i += 3) {
    stars[i] = (Math.random() - 0.5) * 1000; // x
    stars[i + 1] = (Math.random() - 0.5) * 1000; // y
    stars[i + 2] = (Math.random() - 0.5) * 1000; // z
  }

  return (
    <Points positions={stars}>
      <PointMaterial
        transparent
        color="#fff"
        size={0.3}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}