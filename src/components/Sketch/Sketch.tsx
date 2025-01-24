import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function getPoint(): [number, number, number] {
  const u = Math.random();
  const v = Math.random();
  const theta = u * 2.0 * Math.PI;
  const phi = Math.acos(2.0 * v - 1.0);
  const r = Math.cbrt(Math.random());
  const sinTheta = Math.sin(theta);
  const cosTheta = Math.cos(theta);
  const sinPhi = Math.sin(phi);
  const cosPhi = Math.cos(phi);
  return [r * sinPhi * cosTheta, r * sinPhi * sinTheta, r * cosPhi];
}

const PointsCloud: React.FC = () => {
  const pointsRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    const vertices = [];
    for (let i = 0; i < 10000; i++) {
      const point = getPoint();
      vertices.push(4 * point[0], 4 * point[1], 4 * point[2]);

    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    if (pointsRef.current) {
      pointsRef.current.geometry = geometry;
    }
  }, []);

  return (
    <points ref={pointsRef}>
      <pointsMaterial size={0.01} sizeAttenuation alphaTest={0.5} transparent />
    </points>
  );
};

const Scene: React.FC = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 1.5 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 1.5 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(({ camera }) => {
    if (cameraRef.current) {
      const dampFactor = 0.05;
      camera.position.x += (mouse.current.x * 2 - camera.position.x) * dampFactor;
      camera.position.y += (mouse.current.y * 2 - camera.position.y) * dampFactor;
       camera.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <perspectiveCamera ref={cameraRef} position={[0, 0, 2]} />
      <PointsCloud />
      <OrbitControls />
    </>
  );
};

const Sketch = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2], fov: 70 }}>
      <color attach="background" args={[0x000000]} />
      <Scene />
    </Canvas>
  );
};

export default Sketch;
