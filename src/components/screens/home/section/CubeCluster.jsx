import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const CUBE_COUNT = 120;
const CUBE_SIZE = 0.9;
const CENTER_CUBE_SIZE = 1.8;
const RADIUS = 3.9; 

function getScatteredCubes(count = CUBE_COUNT, radius = RADIUS) {
  const cubes = [];
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = 2 * Math.PI * Math.random();
    const r = radius * (0.78 + 0.22 * Math.random());
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    cubes.push({ key: i, position: [x, y, z] });
  }
  return cubes;
}

function lerpColor(a, b, t) {
  const colorA = new THREE.Color(a);
  const colorB = new THREE.Color(b);
  return colorA.lerp(colorB, t).getStyle();
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}

function ScatteredCubes() {
  const groupRef = useRef();
  const cubes = useMemo(() => getScatteredCubes(), []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.006;
      groupRef.current.rotation.y += 0.009;
      groupRef.current.rotation.z += 0.004;
    }
  });
  
  const xVals = cubes.map((cube) => cube.position[0]);
  const minX = Math.min(...xVals);
  const maxX = Math.max(...xVals);

  const glassyColor = "#7f5af0";
  const blueColor = "#0096ff";

  return (
    <group ref={groupRef}>
      {/* Central cube */}
      <RoundedBox
        args={[CENTER_CUBE_SIZE, CENTER_CUBE_SIZE, CENTER_CUBE_SIZE]}
        radius={0.22}
        smoothness={8}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          attach="material"
          color={lerpColor(glassyColor, blueColor, 0.48)}
          metalness={0.21}
          roughness={0.07}
          transmission={0.97}
          ior={1.52}
          thickness={1.7}
          specularIntensity={1.0}
          reflectivity={0.29}
          transparent
          clearcoat={0.8}
          clearcoatRoughness={0.025}
          opacity={0.85}
        />
      </RoundedBox>
      {/* Outer scattered cubes */}
      {cubes.map(({ key, position }) => {
        const t = (position[0] - minX) / (maxX - minX);
        return (
          <RoundedBox
            key={key}
            args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]}
            radius={0.18}
            smoothness={6}
            position={position}
            castShadow
            receiveShadow
          >
            <meshPhysicalMaterial
              attach="material"
              color={lerpColor(glassyColor, blueColor, t)}
              metalness={lerp(0.18, 0.32, t)}
              roughness={lerp(0.07, 0.15, t)}
              transmission={lerp(1.0, 0.0, t)}
              ior={1.48}
              thickness={1.3}
              specularIntensity={1.0}
              reflectivity={0.22}
              transparent
              clearcoat={0.7}
              clearcoatRoughness={0.03}
              opacity={lerp(0.6, 1.0, t)}
            />
          </RoundedBox>
        );
      })}
    </group>
  );
}

export default function CubeCluster() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 13], fov: 55, near: 0.1, far: 100 }}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "1.5rem",
          background: "radial-gradient(circle, #e3f6fd 60%, #cce8fa 100%)",
        }}
        shadows
      >
        <ambientLight intensity={0.9} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1.4}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <ScatteredCubes />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
          enableDamping
          dampingFactor={0.12}
        />
      </Canvas>
    </div>
  );
}
