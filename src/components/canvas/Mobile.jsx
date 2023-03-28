import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Mobiles = () => {
  const mobile = useGLTF("./iphone_12_pro/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.75} groundColor="black" />
      <spotLight
        position={[-30, 10, 40]}
        angle={0.1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[0, -0.85, 0]} intensity={5} />
      <primitive
        object={mobile.scene}
        scale={0.045}
        position-y={-2.75}
        rotation-y={0}
      />
    </mesh>
  );
};

const MobilesCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Mobiles />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default MobilesCanvas;
