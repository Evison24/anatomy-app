import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Organs({ onSelect }) {
  const { scene } = useGLTF("/models/organs/organs.glb");

  // 🔑 Clone materials + store original color
  useEffect(() => {
    let index = 0;

    scene.traverse((child) => {
      if (child.isMesh) {
        // assign stable index for mapping
        child.userData.meshIndex = index;
        index++;

        // clone material so changes are isolated
        child.material = child.material.clone();
        child.userData.originalColor = child.material.color?.clone?.() || null;
      }
    });

    console.log("🫀 ORGANS: mesh count =", index);
  }, [scene]);

  const handlePointerOver = (e) => {
    e.stopPropagation();
    document.body.style.cursor = "pointer";

    // fade all other organs
    scene.traverse((child) => {
      if (child.isMesh && child !== e.object) {
        child.material.transparent = true;
        child.material.opacity = 0.2;
      }
    });

    // highlight hovered organ
    if (e.object.material?.color) {
      e.object.material.transparent = false;
      e.object.material.opacity = 1;
      e.object.material.color.set("#22c55e"); // green
    }
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    document.body.style.cursor = "default";

    // restore all organs
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.transparent = false;
        child.material.opacity = 1;

        const original = child.userData.originalColor;
        if (original && child.material.color) {
          child.material.color.copy(original);
        }
      }
    });
  };

  const handleClick = (e) => {
    e.stopPropagation();

    onSelect({
      id: e.object.userData.meshIndex, // 🔑 index-based mapping
      mesh: e.object,
    });

    console.log("Clicked organ mesh index:", e.object.userData.meshIndex);
  };

  return (
    <primitive
      object={scene}
      scale={5.5}
      position={[0, 1, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    />
  );
}

useGLTF.preload("/models/organs/organs.glb");
