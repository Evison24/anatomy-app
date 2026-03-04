import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Nervous() {
  const { scene } = useGLTF("/models/nervous/nervous.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone();
        child.userData.originalColor = child.material.color?.clone?.() || null;
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={3.5} position={[0, -1.7, 0]} />;
}

useGLTF.preload("/models/nervous/nervous.glb");
