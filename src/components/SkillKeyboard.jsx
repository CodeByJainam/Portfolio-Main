// SkillKeyboard.jsx
import { Application } from "@splinetool/runtime";
import gsap from "gsap";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { SKILLS, SkillNames } from "../constants/skills";
import { sleep } from "../utils/sleep";
import useMediaQuery from "../utils/useMediaQuery";
import soundEffects from "../utils/soundEffects";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const STATES = {
  hero: {
    desktop: {
      scale: { x: 0.35, y: 0.33, z: 0.35 },
      position: { x: 20, y: 0, z: 40 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.17, y: 0.17, z: 0.17 },
      position: { x: 10, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  skills: {
    desktop: {
      scale: { x: 0.33, y: 0.33, z: 0.33 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: Math.PI / 12, z: 0 },
    },
    mobile: {
      scale: { x: 0.24, y: 0.24, z: 0.24 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 6, z: 0 },
    },
  },
  projects: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
  },
  contact: {
    desktop: {
      scale: { x: 0.33, y: 0.33, z: 0.33 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.24, y: 0.24, z: 0.24 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
  },
};

const SkillKeyboard = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const splineContainer = useRef(null);
  const sectionRef = useRef(null);
  const [splineApp, setSplineApp] = useState();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeSection, setActiveSection] = useState("skills");
  const [keyboardRevealed, setKeyboardRevealed] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const keyboardStates = (section) => {
    return STATES[section][isMobile ? "mobile" : "desktop"];
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // --- LOGIC TO HIDE UNWANTED KEYS ---
  useEffect(() => {
    if (!splineApp) return;

    // Yeh wo keys hain jo aapko HATANI hain (jo aapke naye list mein nahi hain)
    const keysToHide = [
      "ts", "vue", "nextjs", "tailwind", "nodejs", "express", 
      "postgres", "mongodb", "git", "prettier", "npm", "firebase", 
      "wordpress", "linux", "docker", "nginx", "aws", "vim"
    ];

    keysToHide.forEach((keyName) => {
      const obj = splineApp.findObjectByName(keyName);
      if (obj) {
        obj.visible = false; // Key ko chhupa do
      }
    });

    // Bootstrap ka logic: Kyunki "bootstrap" naam ka object 3D file mein nahi hai,
    // wo waise bhi nahi dikhega. Agar aap chahte hain ki 'Tailwind' wala button 
    // 'Bootstrap' ban jaye, toh hume texture swap karna padega, jo complex hai.
    // Filhal ke liye extra keys hide ho jayengi.

  }, [splineApp]);

  const handleMouseHover = (e) => {
    if (!splineApp || selectedSkill?.name === e.target.name) return;
    if (e.target.name === "body" || e.target.name === "platform") {
      setSelectedSkill(null);
      if (splineApp.getVariable("heading") && splineApp.getVariable("desc")) {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }
    } else {
      if (!selectedSkill || selectedSkill.name !== e.target.name) {
        // Sirf unhi skills ko select karein jo hamari list (SKILLS) mein hain
        if (SKILLS[e.target.name]) {
            const skill = SKILLS[e.target.name];
            setSelectedSkill(skill);
        }
      }
    }
  };

  useEffect(() => {
    if (!selectedSkill || !splineApp) return;
    splineApp.setVariable("heading", selectedSkill.label);
    splineApp.setVariable("desc", selectedSkill.shortDescription);
  }, [selectedSkill, splineApp]);

  useEffect(() => {
    if (!splineApp) return;
    const textDesktopLight = splineApp.findObjectByName("text-desktop");
    const textMobileLight = splineApp.findObjectByName("text-mobile");
    if (!textDesktopLight || !textMobileLight) return;
    if (activeSection !== "skills") {
      textDesktopLight.visible = false;
      textMobileLight.visible = false;
      return;
    }
    if (!isMobile) {
      textDesktopLight.visible = true;
      textMobileLight.visible = false;
    } else {
      textDesktopLight.visible = false;
      textMobileLight.visible = true;
    }
  }, [splineApp, isMobile, activeSection]);

  useEffect(() => {
    handleSplineInteractions();
    handleGsapAnimations();
  }, [splineApp]);

  useEffect(() => {
    if (!splineApp || keyboardRevealed || !isInView) return;
    revealKeyCaps();
  }, [splineApp, keyboardRevealed, activeSection, isInView]);

  const revealKeyCaps = async () => {
    if (!splineApp) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;
    kbd.visible = false;
    await sleep(400);
    kbd.visible = true;
    setKeyboardRevealed(true);
    
    gsap.fromTo(
      kbd?.scale,
      { x: 0.01, y: 0.01, z: 0.01 },
      {
        x: keyboardStates(activeSection).scale.x,
        y: keyboardStates(activeSection).scale.y,
        z: keyboardStates(activeSection).scale.z,
        duration: 1.5,
        ease: "elastic.out(1, 0.6)",
      }
    );

    // Filter out unwanted keys from animation list
    const unwantedKeys = [
        "ts", "vue", "nextjs", "tailwind", "nodejs", "express", 
        "postgres", "mongodb", "git", "prettier", "npm", "firebase", 
        "wordpress", "linux", "docker", "nginx", "aws", "vim"
      ];

    const allObjects = splineApp.getAllObjects();
    const keycaps = allObjects.filter((obj) => obj.name === "keycap");
    
    await sleep(900);
    
    // Sirf un keys ko animate karein jo visible hain (optional logic based on hierarchy)
    // Spline objects structure ke hisaab se generic animation chala rahe hain, 
    // lekin humne upar specific keys hide kar di hain, to wo dikhengi nahi.
    
    if (isMobile) {
      const mobileKeyCaps = allObjects.filter(
        (obj) => obj.name === "keycap-mobile"
      );
      mobileKeyCaps.forEach((keycap) => {
        keycap.visible = true;
      });
    } else {
      const desktopKeyCaps = allObjects.filter(
        (obj) => obj.name === "keycap-desktop"
      );
      desktopKeyCaps.forEach(async (keycap, idx) => {
        await sleep(idx * 70);
        keycap.visible = true;
      });
    }

    keycaps.forEach(async (keycap, idx) => {
      keycap.visible = false;
      await sleep(idx * 70);
      keycap.visible = true;
      gsap.fromTo(
        keycap.position,
        { y: 100 },
        { y: 25, duration: 0.5, delay: 0.1, ease: "bounce.out" }
      );
    });
  };

  const handleSplineInteractions = () => {
    if (!splineApp) return;
    splineApp.addEventListener("keyUp", (e) => {
      if (!splineApp) return;
      splineApp.setVariable("heading", "");
      splineApp.setVariable("desc", "");
    });
    
    splineApp.addEventListener("keyDown", (e) => {
      if (!splineApp) return;
      // Sirf allowed skills par click kaam karega
      if(SKILLS[e.target.name]) {
        const skill = SKILLS[e.target.name];
        setSelectedSkill(skill);
        splineApp.setVariable("heading", skill.label);
        splineApp.setVariable("desc", skill.shortDescription);
        soundEffects.playClick();
      }
    });

    splineApp.addEventListener("mouseHover", handleMouseHover);
  };

  const handleGsapAnimations = () => {
    if (!splineApp) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd || !splineContainer.current) return;
    gsap.set(kbd.scale, { ...keyboardStates("hero").scale });
    gsap.set(kbd.position, { ...keyboardStates("hero").position });
    gsap.timeline({
      onStart: () => setActiveSection("skills"),
    });
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      style={{
        width: "100%",
        height: "100vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontSize: "4rem",
            fontWeight: 700,
            marginTop: 34,
            textAlign: "center",
            letterSpacing: 2,
            color: "#fff",
            textShadow: "0 2px 16px rgba(0,0,0,0.2)",
          }}
        >
          Skills
        </h2>
        <p style={{ textAlign: "center", color: "#aaa" }}>
          (hint: press a key)
        </p>
        <Suspense fallback={<div>Loading 3D Keyboard...</div>}>
          <Spline
            ref={splineContainer}
            onLoad={(app) => setSplineApp(app)}
            scene="/assets/skills-keyboard.spline"
          />
        </Suspense>
      </div>
      <span id="projects"></span>
    </section>
  );
};

export default SkillKeyboard;