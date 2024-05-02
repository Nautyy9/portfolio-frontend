/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 static/wizards_room/MODEL.glb -o Character.tsx -T -t -r public
*/

import * as THREE from "three";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useGLTF, useAnimations, useFBX, useScroll } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { useStore } from "../stateManager/valtio";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type GLTFResult = GLTF & {
  nodes: {
    Object_10001: THREE.SkinnedMesh;
    Object_11001: THREE.SkinnedMesh;
    Object_12001: THREE.SkinnedMesh;
    Object_13001: THREE.SkinnedMesh;
    Object_14001: THREE.SkinnedMesh;
    Object_15001: THREE.SkinnedMesh;
    Object_16001: THREE.SkinnedMesh;
    Object_17001: THREE.SkinnedMesh;
    Object_18001: THREE.SkinnedMesh;
    Object_19001: THREE.SkinnedMesh;
    Object_2001: THREE.SkinnedMesh;
    Object_20001: THREE.SkinnedMesh;
    Object_21001: THREE.SkinnedMesh;
    Object_22001: THREE.SkinnedMesh;
    Object_23001: THREE.SkinnedMesh;
    Object_24001: THREE.SkinnedMesh;
    Object_25001: THREE.SkinnedMesh;
    Object_26001: THREE.SkinnedMesh;
    Object_27001: THREE.SkinnedMesh;
    Object_28001: THREE.SkinnedMesh;
    Object_29001: THREE.SkinnedMesh;
    Object_3001: THREE.SkinnedMesh;
    Object_30001: THREE.SkinnedMesh;
    Object_31001: THREE.SkinnedMesh;
    Object_32001: THREE.SkinnedMesh;
    Object_33001: THREE.SkinnedMesh;
    Object_34001: THREE.SkinnedMesh;
    Object_35001: THREE.SkinnedMesh;
    Object_36001: THREE.SkinnedMesh;
    Object_37001: THREE.SkinnedMesh;
    Object_38001: THREE.SkinnedMesh;
    Object_39001: THREE.SkinnedMesh;
    Object_4001: THREE.SkinnedMesh;
    Object_40001: THREE.SkinnedMesh;
    Object_41001: THREE.SkinnedMesh;
    Object_42001: THREE.SkinnedMesh;
    Object_43001: THREE.SkinnedMesh;
    Object_44001: THREE.SkinnedMesh;
    Object_45001: THREE.SkinnedMesh;
    Object_46001: THREE.SkinnedMesh;
    Object_47001: THREE.SkinnedMesh;
    Object_48001: THREE.SkinnedMesh;
    Object_49001: THREE.SkinnedMesh;
    Object_5001: THREE.SkinnedMesh;
    Object_50001: THREE.SkinnedMesh;
    Object_51001: THREE.SkinnedMesh;
    Object_52001: THREE.SkinnedMesh;
    Object_53001: THREE.SkinnedMesh;
    Object_54001: THREE.SkinnedMesh;
    Object_55001: THREE.SkinnedMesh;
    Object_56001: THREE.SkinnedMesh;
    Object_57001: THREE.SkinnedMesh;
    Object_58001: THREE.SkinnedMesh;
    Object_59001: THREE.SkinnedMesh;
    Object_6001: THREE.SkinnedMesh;
    Object_60001: THREE.SkinnedMesh;
    Object_61001: THREE.SkinnedMesh;
    Object_62001: THREE.SkinnedMesh;
    Object_63001: THREE.SkinnedMesh;
    Object_64001: THREE.SkinnedMesh;
    Object_65001: THREE.SkinnedMesh;
    Object_66001: THREE.SkinnedMesh;
    Object_67001: THREE.SkinnedMesh;
    Object_68001: THREE.SkinnedMesh;
    Object_69001: THREE.SkinnedMesh;
    Object_7001: THREE.SkinnedMesh;
    Object_70001: THREE.SkinnedMesh;
    Object_71001: THREE.SkinnedMesh;
    Object_72001: THREE.SkinnedMesh;
    Object_73001: THREE.SkinnedMesh;
    Object_74001: THREE.SkinnedMesh;
    Object_75001: THREE.SkinnedMesh;
    Object_76001: THREE.SkinnedMesh;
    Object_77001: THREE.SkinnedMesh;
    Object_78001: THREE.SkinnedMesh;
    Object_79001: THREE.SkinnedMesh;
    Object_8001: THREE.SkinnedMesh;
    Object_80001: THREE.SkinnedMesh;
    Object_81001: THREE.SkinnedMesh;
    Object_82001: THREE.SkinnedMesh;
    Object_9001: THREE.SkinnedMesh;
    mixamorigHips: THREE.Bone;
  };
  materials: {
    ["material_0.001"]: THREE.MeshStandardMaterial;
    darkbrown: THREE.MeshStandardMaterial;
    brown: THREE.MeshStandardMaterial;
    ["lambert28.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    lambert10: THREE.MeshStandardMaterial;
  };
};

type ActionName =
  | "Armature.008|Armature|mixamo.com|Layer0"
  | "Armature|mixamo.com|Layer0_Armature"
  | "BALL_2"
  | "BALL_3"
  | "BALL"
  | "CONTACT"
  | "FLYING"
  | "IDLE"
  | "JUMP"
  | "LOOKBACK"
  | "SITTING_IDLE"
  | "SKILL"
  | "WORK";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;
type MageType = JSX.IntrinsicElements["group"];

const faceMat = new THREE.MeshStandardMaterial({ color: 0xe8beac });
const eyesMesh = new THREE.MeshStandardMaterial({
  color: 0x000000,
  roughness: 10,
  metalness: 10,
});

export default function FinalModel({ ...props }: MageType) {
  const mageRef = useRef<THREE.Group | null>(null);
  // const [activeAnim, setActiveAnim] = useState<string>("BALL");
  const store = useStore();
  const activeAnim = useMemo(() => store.activeAnim, [store.activeAnim]);
  const prevAnim = useMemo(() => store.prevAnim, [store.prevAnim]);

  const { nodes, materials, animations } = useGLTF(
    "/../MODEL-transformed.glb"
  ) as GLTFResult;
  const { actions } = useAnimations<THREE.AnimationClip>(animations, mageRef);
  // const { animations: flyingAnimation } = useFBX(
  //   "/static/Animations/flying.fbx"
  // );
  // const { actions: FlyingAction } = useAnimations<THREE.AnimationClip>(
  //   flyingAnimation,
  //   mageRef
  // );
  // console.log(FlyingAction);
  const scroll = useScroll();
  const tl = useRef<GSAPTimeline | null>(null);
  const postl = useRef<GSAPTimeline | null>(null);
  useEffect(() => {
    if (mageRef.current) {
      if (activeAnim === "FLYING") mageRef.current.position.y = -5;
      else if (activeAnim === "JUMP") {
        mageRef.current.position.y = -14;
        mageRef.current.scale.x = 10;
        mageRef.current.scale.y = 10;
        mageRef.current.scale.z = 10;
      }
    }
    if (activeAnim && scroll.offset > 0) {
      actions[activeAnim]!.syncWith(actions[prevAnim]!);
      actions[activeAnim]!.fadeOut(0.5).reset().fadeIn(0).play().paused = true;
      if (activeAnim === "FLYING") {
        actions[activeAnim]!.fadeOut(0.5).reset().fadeIn(0).play().paused =
          false;
        actions[activeAnim]!.repetitions = Infinity;
        actions[activeAnim]!.fadeOut(0.5).reset().play();
      }
      // else {
      // }
    } else {
      actions[activeAnim]!.fadeIn(0.5).setDuration(10).play();
    }

    return () => {
      actions[activeAnim]?.fadeOut(0.5).reset().stop();

      // if (tl.current) {
      //   tl.current.clear();
      //   tl.current = null;
      // }

      // if (postl.current) {
      //   postl.current.clear();
      //   postl.current = null;
      // }
    };
  }, [activeAnim]);
  useGSAP(
    () => {
      postl.current = gsap.timeline();
      tl.current = gsap.timeline();
      if (tl.current && mageRef.current) {
        gsap.from(mageRef.current.position, {
          x: -70,
          y: -15,
          duration: 5,
          ease: "power4.out",
          overwrite: "auto",
        });
        // tl.current.to(
        //   mageRef.current.scale,
        //   {
        //     x: 10,
        //     y: 10,
        //     z: 10,
        //     duration: 0.1,
        //     // overwrite: "auto",
        //   },
        //   0
        // );
        //* posttl contols the bounce rebound effect
        postl.current.to(
          mageRef.current.position,
          {
            y: -15,
            duration: 2,
            overwrite: "auto",
            ease: "power1.in",
          },
          "+=5"
        );
        // tl.current.to(
        //   mageRef.current.scale,
        //   {
        //     duration: 10,
        //     x: 3,
        //     y: 3,
        //     z: 3,
        //     ease: "sine.inOut",
        //     overwrite: "auto",
        //   },
        //   1
        // );
        tl.current.to(
          mageRef.current.position,
          {
            duration: 10,
            ease: "power1.out",
            x: Math.PI / 2,
            overwrite: "auto",
          },
          1
        );
        tl.current
          .to(
            mageRef.current.position,
            {
              duration: 10,
              y: -100,
              overwrite: "auto",
            },
            0.85
          )
          .to(
            mageRef.current.scale,
            {
              duration: 6,
              x: 6,
              y: 6,
              z: 6,
              ease: "sine.inOut",
              overwrite: "auto",
            },
            1
          );
        // .to(
        //   mageRef.current.position,
        //   {
        //     duration: 10,
        //     y: -150,
        //     overwrite: "auto",
        //   },
        //   10
        // );
        // tl.current.to(
        //   mageRef.current.position,
        //   {
        //     duration: 8,
        //     y: -200,
        //     overwrite: "auto",
        //   },
        //   "<"
        // );
      }
    },
    { scope: mageRef }
  );

  useFrame((state, delta) => {
    // console.log(scroll.offset);
    // console.log(mageRef.current?.position);
    // console.log(mageRef.current?.scale);
    // console.log(tl.current?.duration());
    // console.log(scroll.offset);
    // console.log(mageRef.current?.position.y);
    if (tl.current && postl.current) {
      // console.log(scroll.offset);
      tl.current.seek(scroll.offset * tl.current.duration() * 0.7);
      // console.log(scroll.offset * postl.current.duration() * 0.7);
      // console.log(scroll.offset * postl.current.duration() * 30);

      postl.current.seek(scroll.offset * postl.current.duration() * 30);
    }
    if (!scroll.offset) {
      store.activeAnim = "BALL";
      store.prevAnim = "JUMP";
    }
    if (scroll.offset > 0 && scroll.offset <= 0.08) {
      store.prevAnim = "BALL";
      // console.log(scroll.offset);
      // console.log(actions[activeAnim]!.getClip().duration );
      store.activeAnim = "JUMP";
      actions[activeAnim]!.time =
        actions[activeAnim]!.getClip().duration * scroll.offset * 5;
    }
    // if (scroll.offset > 0.03 && scroll.offset <= 0.07) {
    //   actions[activeAnim]!.time =
    //     actions[activeAnim]!.getClip().duration * scroll.offset * 5;
    // }
    if (scroll.offset > 0.08 && scroll.offset <= 1) {
      // console.log("flying");
      store.prevAnim = "JUMP";
      store.activeAnim = "FLYING";
      // actions[activeAnim]!.syncWith(actions["JUMP"]!);
      // console.log(actions[activeAnim]!);
      // actions[activeAnim]!.time =
      //   actions[activeAnim]!.getClip().duration * scroll.offset * 1;
    }
    // if (scroll.offset >= 0.55) {
    //   // console.log("idle");
    //   store.activeAnim = "IDLE";
    //   actions[activeAnim]!.time =
    //     actions[activeAnim]!.getClip().duration * scroll.offset * 5;
    // }
  });

  return (
    <group ref={mageRef} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001" position={[0, 1.04, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Object_10001"
            geometry={nodes.Object_10001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_10001.skeleton}
          />
          <skinnedMesh
            name="Object_11001"
            geometry={nodes.Object_11001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_11001.skeleton}
          />
          <skinnedMesh
            name="Object_12001"
            geometry={nodes.Object_12001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_12001.skeleton}
          />
          <skinnedMesh
            name="Object_13001"
            geometry={nodes.Object_13001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_13001.skeleton}
          />
          <skinnedMesh
            name="Object_14001"
            geometry={nodes.Object_14001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_14001.skeleton}
          />
          <skinnedMesh
            name="Object_15001"
            geometry={nodes.Object_15001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_15001.skeleton}
          />
          <skinnedMesh
            name="Object_16001"
            geometry={nodes.Object_16001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_16001.skeleton}
          />
          <skinnedMesh
            name="Object_17001"
            geometry={nodes.Object_17001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_17001.skeleton}
          />
          <skinnedMesh
            name="Object_18001"
            geometry={nodes.Object_18001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_18001.skeleton}
          />
          <skinnedMesh
            name="Object_19001"
            geometry={nodes.Object_19001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_19001.skeleton}
          />
          <skinnedMesh
            name="Object_2001"
            geometry={nodes.Object_2001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_2001.skeleton}
          />
          <skinnedMesh
            name="Object_20001"
            geometry={nodes.Object_20001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_20001.skeleton}
          />
          <skinnedMesh
            name="Object_21001"
            geometry={nodes.Object_21001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_21001.skeleton}
          />
          <skinnedMesh
            name="Object_22001"
            geometry={nodes.Object_22001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_22001.skeleton}
          />
          <skinnedMesh
            name="Object_23001"
            geometry={nodes.Object_23001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_23001.skeleton}
          />
          <skinnedMesh
            name="Object_24001"
            geometry={nodes.Object_24001.geometry}
            material={materials.darkbrown}
            skeleton={nodes.Object_24001.skeleton}
          />
          <skinnedMesh
            name="Object_25001"
            geometry={nodes.Object_25001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_25001.skeleton}
          />
          <skinnedMesh
            name="Object_26001"
            geometry={nodes.Object_26001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_26001.skeleton}
          />
          <skinnedMesh
            name="Object_27001"
            geometry={nodes.Object_27001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_27001.skeleton}
          />
          <skinnedMesh
            name="Object_28001"
            geometry={nodes.Object_28001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_28001.skeleton}
          />
          <skinnedMesh
            name="Object_29001"
            geometry={nodes.Object_29001.geometry}
            material={materials.brown}
            skeleton={nodes.Object_29001.skeleton}
          />
          <skinnedMesh
            name="Object_3001"
            geometry={nodes.Object_3001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_3001.skeleton}
          />
          <skinnedMesh
            name="Object_30001"
            geometry={nodes.Object_30001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_30001.skeleton}
          />
          <skinnedMesh
            name="Object_31001"
            geometry={nodes.Object_31001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_31001.skeleton}
          />
          <skinnedMesh
            name="Object_32001"
            geometry={nodes.Object_32001.geometry}
            material={materials.brown}
            skeleton={nodes.Object_32001.skeleton}
          />
          <skinnedMesh
            name="Object_33001"
            geometry={nodes.Object_33001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_33001.skeleton}
          />
          <skinnedMesh
            name="Object_34001"
            geometry={nodes.Object_34001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_34001.skeleton}
          />
          <skinnedMesh
            name="Object_35001"
            geometry={nodes.Object_35001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_35001.skeleton}
          />
          <skinnedMesh
            name="Object_36001"
            geometry={nodes.Object_36001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_36001.skeleton}
          />
          <skinnedMesh
            name="Object_37001"
            geometry={nodes.Object_37001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_37001.skeleton}
          />
          <skinnedMesh
            name="Object_38001"
            geometry={nodes.Object_38001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_38001.skeleton}
          />
          <skinnedMesh
            name="Object_39001"
            geometry={nodes.Object_39001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_39001.skeleton}
          />
          <skinnedMesh
            name="Object_4001"
            geometry={nodes.Object_4001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_4001.skeleton}
          />
          <skinnedMesh
            name="Object_40001"
            geometry={nodes.Object_40001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_40001.skeleton}
          />
          <skinnedMesh
            name="Object_41001"
            geometry={nodes.Object_41001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_41001.skeleton}
          />
          <skinnedMesh
            name="Object_42001"
            geometry={nodes.Object_42001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_42001.skeleton}
          />
          <skinnedMesh
            name="Object_43001"
            geometry={nodes.Object_43001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_43001.skeleton}
          />
          <skinnedMesh
            name="Object_44001"
            geometry={nodes.Object_44001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_44001.skeleton}
          />
          <skinnedMesh
            name="Object_45001"
            geometry={nodes.Object_45001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_45001.skeleton}
          />
          <skinnedMesh
            name="Object_46001"
            geometry={nodes.Object_46001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_46001.skeleton}
          />
          <skinnedMesh
            name="Object_47001"
            geometry={nodes.Object_47001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_47001.skeleton}
          />
          <skinnedMesh
            name="Object_48001"
            geometry={nodes.Object_48001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_48001.skeleton}
          />
          <skinnedMesh
            name="Object_49001"
            geometry={nodes.Object_49001.geometry}
            material={eyesMesh}
            skeleton={nodes.Object_49001.skeleton}
          />
          <skinnedMesh
            name="Object_5001"
            geometry={nodes.Object_5001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_5001.skeleton}
          />
          <skinnedMesh
            name="Object_50001"
            geometry={nodes.Object_50001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_50001.skeleton}
          />
          <skinnedMesh
            name="Object_51001"
            geometry={nodes.Object_51001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_51001.skeleton}
          />
          <skinnedMesh
            name="Object_52001"
            geometry={nodes.Object_52001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_52001.skeleton}
          />
          <skinnedMesh
            name="Object_53001"
            geometry={nodes.Object_53001.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.Object_53001.skeleton}
          />
          <skinnedMesh
            name="Object_54001"
            geometry={nodes.Object_54001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_54001.skeleton}
          />
          <skinnedMesh
            name="Object_55001"
            geometry={nodes.Object_55001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_55001.skeleton}
          />
          <skinnedMesh
            name="Object_56001"
            geometry={nodes.Object_56001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_56001.skeleton}
          />
          <skinnedMesh
            name="Object_57001"
            geometry={nodes.Object_57001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_57001.skeleton}
          />
          <skinnedMesh
            name="Object_58001"
            geometry={nodes.Object_58001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_58001.skeleton}
          />
          <skinnedMesh
            name="Object_59001"
            geometry={nodes.Object_59001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_59001.skeleton}
          />
          <skinnedMesh
            name="Object_6001"
            geometry={nodes.Object_6001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_6001.skeleton}
          />
          <skinnedMesh
            name="Object_60001"
            geometry={nodes.Object_60001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_60001.skeleton}
          />
          <skinnedMesh
            name="Object_61001"
            geometry={nodes.Object_61001.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.Object_61001.skeleton}
          />
          <skinnedMesh
            name="Object_62001"
            geometry={nodes.Object_62001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_62001.skeleton}
          />
          <skinnedMesh
            name="Object_63001"
            geometry={nodes.Object_63001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_63001.skeleton}
          />
          <skinnedMesh
            name="Object_64001"
            geometry={nodes.Object_64001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_64001.skeleton}
          />
          <skinnedMesh
            name="Object_65001"
            geometry={nodes.Object_65001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_65001.skeleton}
          />
          <skinnedMesh
            name="Object_66001"
            geometry={nodes.Object_66001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_66001.skeleton}
          />
          <skinnedMesh
            name="Object_67001"
            geometry={nodes.Object_67001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_67001.skeleton}
          />
          <skinnedMesh
            name="Object_68001"
            geometry={nodes.Object_68001.geometry}
            material={materials.brown}
            skeleton={nodes.Object_68001.skeleton}
          />
          <skinnedMesh
            name="Object_69001"
            geometry={nodes.Object_69001.geometry}
            material={materials.brown}
            skeleton={nodes.Object_69001.skeleton}
          />
          <skinnedMesh
            name="Object_7001"
            geometry={nodes.Object_7001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_7001.skeleton}
          />
          <skinnedMesh
            name="Object_70001"
            geometry={nodes.Object_70001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_70001.skeleton}
          />
          <skinnedMesh
            name="Object_71001"
            geometry={nodes.Object_71001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_71001.skeleton}
          />
          <skinnedMesh
            name="Object_72001"
            geometry={nodes.Object_72001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_72001.skeleton}
          />
          <skinnedMesh
            name="Object_73001"
            geometry={nodes.Object_73001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_73001.skeleton}
          />
          <skinnedMesh
            name="Object_74001"
            geometry={nodes.Object_74001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_74001.skeleton}
          />
          <skinnedMesh
            name="Object_75001"
            geometry={nodes.Object_75001.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.Object_75001.skeleton}
          />
          <skinnedMesh
            name="Object_76001"
            geometry={nodes.Object_76001.geometry}
            material={faceMat}
            skeleton={nodes.Object_76001.skeleton}
          />
          <skinnedMesh
            name="Object_77001"
            geometry={nodes.Object_77001.geometry}
            material={materials.brown}
            skeleton={nodes.Object_77001.skeleton}
          />
          <skinnedMesh
            name="Object_78001"
            geometry={nodes.Object_78001.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.Object_78001.skeleton}
          />
          <skinnedMesh
            name="Object_79001"
            geometry={nodes.Object_79001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_79001.skeleton}
          />
          <skinnedMesh
            name="Object_8001"
            geometry={nodes.Object_8001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_8001.skeleton}
          />
          <skinnedMesh
            name="Object_80001"
            geometry={nodes.Object_80001.geometry}
            material={materials.darkbrown}
            skeleton={nodes.Object_80001.skeleton}
          />
          <skinnedMesh
            name="Object_81001"
            geometry={nodes.Object_81001.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.Object_81001.skeleton}
          />
          <skinnedMesh
            name="Object_82001"
            geometry={nodes.Object_82001.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.Object_82001.skeleton}
          />
          <skinnedMesh
            name="Object_9001"
            geometry={nodes.Object_9001.geometry}
            material={materials["material_0.001"]}
            skeleton={nodes.Object_9001.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/../MODEL-transformed.glb");

function switchAnimations({
  mageRef,
  track,

  activeAnim,
}: {
  mageRef: React.MutableRefObject<THREE.Group | null>;
  track: THREE.AnimationAction;
  activeAnim: string;
}) {
  switch (activeAnim) {
    case "JUMP":
      // console.log("i");
      // track.repetitions = 1;
      track.reset().fadeOut(0.5).fadeIn(0.5).play().paused = true;
      // track.reset().fadeOut(0.5).setDuration(3).fadeIn(0.5).play();
      break;
    case "FLYING":
      // console.log("flying");
      // track.repetitions = Infinity;

      // console.log(track.getClip());
      track.reset().fadeOut(0.5).fadeIn(0.5).play().paused = true;

      // track.reset().fadeOut(0.5).setDuration(2).fadeIn(0.5).play();
      break;
    case "BALL":
      // console.log("f");
      track.setDuration(10).fadeIn(0.5).play();
      track.repetitions = Infinity;
      break;
    case "SKILL":
      // console.log("i");

      track.reset().setDuration(5).fadeIn(0.5).play();
      break;
    case "WORK":
      // console.log("i");

      break;
    case "CONTACT":
      // console.log("n");
      break;
    case "attack":
      // console.log("h");
      break;
    case "IDLE":
      track.repetitions = Infinity;
      track.reset().setDuration(5).fadeIn(0.5).play();
      break;
    case "LOOKBACK":
      track.repetitions = Infinity;
      track.reset().setDuration(5).fadeIn(0.5).play();
      break;

    default:
      // console.log("e");
      track.fadeOut(0.5).stop();
  }
}