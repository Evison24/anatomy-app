import Skeleton from "../models/Skeleton";
import { skeletonMap } from "./skeleton/skeletonMap";
import { skeletonData } from "./skeleton/skeletonData";
import Organs from "../models/Organs";
import { organsData } from "./organs/organsData";
import { organsMap } from "./organs/organsMap";
import Muscles from "../models/Muscles";
import Circulatory from "../models/Circulatory";
import Nervous from "../models/Nervous";
import Home from "../components/Home";

export const anatomySystems = {
  home: {
    component: Home,
    layout: "canvas-only",
    camera: {
      position: [0, 0, 0],
      target: [0, 0, 0],
      fov: 45,
    },
  },
  skeleton: {
    component: Skeleton,
    map: skeletonMap,
    data: skeletonData,
    layout: "canvas-only",
    interaction: "modal",
    camera: {
      position: [0, 3, 11],
      target: [0, 1, 0],
      fov: 45,
    },
  },

  organs: {
    component: Organs,
    map: organsMap,
    data: organsData,
    layout: "canvas-only",
    interaction: "modal",
    camera: {
      position: [0, 2.8, 10],
      target: [0, 1, 0],
      fov: 45,
    },
  },

  muscles: {
    component: Muscles,
    layout: "split",
    interaction: "hover",
    camera: {
      position: [0, 2.5, 9],
      target: [0, 1.2, 0],
      fov: 40,
    },
  },

  circulatory: {
    component: Circulatory,
    layout: "split",
    interaction: "hover",
    camera: {
      position: [0, 2.6, 9],
      target: [0, 1.1, 0],
      fov: 42,
    },
  },

  nervous: {
    component: Nervous,
    layout: "split",
    interaction: "hover",
    camera: {
      position: [0, 2.4, 9],
      target: [0, 1.2, 0],
      fov: 40,
    },
  },
};
