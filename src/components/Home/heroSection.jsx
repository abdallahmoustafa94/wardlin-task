import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Typography } from "@mui/material";
import * as THREE from "three";

const CustomGeometryParticles = (props) => {
  const { count } = props;

  const points = useRef();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const distance = 1;

    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      let x = distance * Math.sin(theta) * Math.cos(phi);
      let y = distance * Math.sin(theta) * Math.sin(phi);
      let z = distance * Math.cos(theta);

      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock } = state;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      points.current.geometry.attributes.position.array[i3] +=
        Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
      points.current.geometry.attributes.position.array[i3 + 1] +=
        Math.cos(clock.elapsedTime + Math.random() * 10) * 0.01;
      points.current.geometry.attributes.position.array[i3 + 2] +=
        Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.012} color="#000" sizeAttenuation depthWrite={false} />
    </points>
  );
};

const Scene = () => {
  return (
    <div style={{ position: "relative", height:'70vh' }}>
      <Canvas camera={{ position: [0.5, 0.5, 0.5] }}>
        <ambientLight intensity={0.5} />
        <CustomGeometryParticles count={2000} />
        <OrbitControls />
      </Canvas>
      <div style={{ position: "absolute", top: '40%', left: 0, width: "100%", textAlign: "center", zIndex: 1 }}>
  <Typography variant="h1">
  Wardlin
</Typography>
<Typography variant="subtitle" sx={{fontWeight:'700'}}>Elevating Excellence, Shaping Tomorrow.</Typography>
</div>

    </div>
  );
};

export default Scene;
