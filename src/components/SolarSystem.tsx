import Planet from "./Planet.tsx";
import Sun from "./Sun.tsx";


// Компонент Солнечной системы
export default function SolarSystem() {
  return (
    <>
      <Sun/>
      {/* Меркурий */}
      <Planet radius={10} size={0.3} color="#a8a8a8" speed={0.15} eccentricity={0.2}/>
      {/* Венера */}
      <Planet radius={15} size={0.5} color="#e6b856" speed={0.12} eccentricity={0.01}/>
      {/* Земля */}
      <Planet radius={20} size={0.5} color="#2e6cba" speed={0.1} eccentricity={0.02}/>
      {/* Марс */}
      <Planet radius={25} size={0.4} color="#c1440e" speed={0.08} eccentricity={0.09}/>
      {/* Юпитер */}
      <Planet radius={35} size={1.2} color="#d39c7a" speed={0.05} eccentricity={0.05}/>
      {/* Сатурн */}
      <Planet radius={45} size={1.0} color="#e5c08d" speed={0.04} eccentricity={0.06}/>
      {/* Уран */}
      <Planet radius={55} size={0.8} color="#4fd0e7" speed={0.03} eccentricity={0.05}/>
      {/* Нептун */}
      <Planet radius={65} size={0.8} color="#3661d1" speed={0.02} eccentricity={0.01}/>
    </>
  );
}