import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Muscles() {
  const { scene } = useGLTF("/models/muscles/muscles.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone();
        child.userData.originalColor = child.material.color?.clone?.() || null;
      }
    });
  }, [scene]);

  const handlePointerOver = (e) => {
    e.stopPropagation();
    e.object.material.color.set("#dc2626");
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    const original = e.object.userData.originalColor;
    if (original) e.object.material.color.copy(original);
    document.body.style.cursor = "default";
  };

  return (
    <primitive
      object={scene}
      scale={1.2}
      position={[0, 2, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
}
