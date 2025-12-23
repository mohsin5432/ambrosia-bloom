import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import chocolateBarImage from '@/assets/chocolate-bar.webp';

function ChocolateBar() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(chocolateBarImage);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef} castShadow>
        <boxGeometry args={[2.4, 3.2, 0.35]} />
        <meshStandardMaterial 
          map={texture}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 50;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  const positions = Array.from({ length: count }, () => ({
    x: (Math.random() - 0.5) * 10,
    y: (Math.random() - 0.5) * 10,
    z: (Math.random() - 0.5) * 5 - 2,
    speed: Math.random() * 0.5 + 0.2,
  }));
  
  useFrame((state) => {
    if (meshRef.current) {
      const dummy = new THREE.Object3D();
      positions.forEach((pos, i) => {
        dummy.position.set(
          pos.x,
          pos.y + Math.sin(state.clock.elapsedTime * pos.speed + i) * 0.5,
          pos.z
        );
        dummy.scale.setScalar(0.02 + Math.sin(state.clock.elapsedTime + i) * 0.01);
        dummy.updateMatrix();
        meshRef.current!.setMatrixAt(i, dummy.matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color="#E8B4B8" transparent opacity={0.6} />
    </instancedMesh>
  );
}

export default function ProductScene() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#FFB6C1" />
        <pointLight position={[5, -5, -5]} intensity={0.3} color="#DEB887" />
        
        <ChocolateBar />
        <Particles />
        
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
