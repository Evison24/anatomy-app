import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function BasicCell() {
  const { scene } = useGLTF("/models/cell/cell.glb");

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
      e.object.material.color.set("#60a5fa");
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
      scale={2}
      position={[0, 1, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
}

useGLTF.preload("/models/cell/cell.glb");
