import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Circulatory() {
  const { scene } = useGLTF("/models/circulatory/circulatory.glb");

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
    document.body.style.cursor = "pointer";

    if (e.object.material?.color) {
      e.object.material.color.set("#ef4444"); // artery red
    }
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    document.body.style.cursor = "default";

    const original = e.object.userData.originalColor;
    if (original && e.object.material?.color) {
      e.object.material.color.copy(original);
    }
  };

  return (
    <primitive
      object={scene}
      scale={3.8}
      position={[0, -2.3, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
}

useGLTF.preload("/models/circulatory/circulatory.glb");
