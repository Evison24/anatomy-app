import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Skeleton({ onSelect }) {
  const { scene } = useGLTF("/models/skeleton/skeleton.glb");

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
    e.object.material.color.set("#60a5fa");
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    document.body.style.cursor = "default";
    const original = e.object.userData.originalColor;
    if (original) e.object.material.color.copy(original);
  };

  const handleClick = (e) => {
    e.stopPropagation();

    console.log("Clicked part:", e.object.name);

    onSelect({
      id: e.object.name,
      mesh: e.object,
    });
  };

  return (
    <primitive
      object={scene}
      scale={1.2}
      position={[0, 1, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    />
  );
}
