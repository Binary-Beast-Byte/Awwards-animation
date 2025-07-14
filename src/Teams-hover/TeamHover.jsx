import  { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const NAMES = [
  "Olivia", "Liam", "Emma", "Noah", "Ava",
  "Oliver", "Isabella", "Elijah", "Sophia", "James",
];

export const TeamHover = () => {
  const imageRefs = useRef([]);
  const nameRefs = useRef([]);
  const defaultLetters = useRef([]);
  const profileContainerRef = useRef(null);

  const setImageRef = (el, index) => {
    if (el) imageRefs.current[index] = el;
  };

  const setNameRef = (el, index) => {
    if (el) nameRefs.current[index] = el;
  };

  useGSAP(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth <= 900) return;

    // Split each name's h1 into chars and add "letter" class
    const nameHeadings = nameRefs.current.map(ref => ref.querySelector("h1"));
    nameHeadings.forEach((heading) => {
      if (!heading) return;
      const split = new SplitText(heading, { type: "chars" });
      split.chars.forEach(char => char.classList.add("letter"));
    });

    // Set initial y of default letters (Olivia)
    const defaultName = nameRefs.current[0];
    if (defaultName) {
      defaultLetters.current = Array.from(defaultName.querySelectorAll(".letter"));
      gsap.set(defaultLetters.current, { y: "100%" });
    }

    const handleMouseEnter = (imgEl, index) => {
      const nameEl = nameRefs.current[index];
      const letters = nameEl?.querySelectorAll(".letter");
      if (!letters) return;

      gsap.to(imgEl, {
        width: 140,
        height: 140,
        duration: 0.5,
        ease: "power4.out",
      });

      gsap.to(letters, {
        y: "-100%",
        ease: "power4.out",
        duration: 0.75,
        stagger: { each: 0.025, from: "center" },
      });
    };

    const handleMouseLeave = (imgEl, index) => {
      const nameEl = nameRefs.current[index];
      const letters = nameEl?.querySelectorAll(".letter");
      if (!letters) return;

      gsap.to(imgEl, {
        width: 70,
        height: 70,
        duration: 0.5,
        ease: "power4.out",
      });

      gsap.to(letters, {
        y: "0%",
        ease: "power4.out",
        duration: 0.75,
        stagger: { each: 0.025, from: "center" },
      });
    };

    // Attach event listeners to images
    imageRefs.current.forEach((img, i) => {
      const onEnter = () => handleMouseEnter(img, i);
      const onLeave = () => handleMouseLeave(img, i);

      img.addEventListener("mouseenter", onEnter);
      img.addEventListener("mouseleave", onLeave);

      // Cleanup function to remove listeners when component unmounts
      return () => {
        img.removeEventListener("mouseenter", onEnter);
        img.removeEventListener("mouseleave", onLeave);
      };
    });

    // Profile container hover to animate default letters
    const container = profileContainerRef.current;
    if (container) {
      const showDefault = () => {
        gsap.to(defaultLetters.current, {
          y: "0%",
          ease: "power4.out",
          duration: 0.75,
          stagger: { each: 0.025, from: "center" },
        });
      };

      const hideDefault = () => {
        gsap.to(defaultLetters.current, {
          y: "100%",
          ease: "power4.out",
          duration: 0.75,
          stagger: { each: 0.025, from: "center" },
        });
      };

      container.addEventListener("mouseenter", showDefault);
      container.addEventListener("mouseleave", hideDefault);

      return () => {
        container.removeEventListener("mouseenter", showDefault);
        container.removeEventListener("mouseleave", hideDefault);
      };
    }
  }, []);

  return (
    <section className="team">
      <div className="profile-images" ref={profileContainerRef}>
        {NAMES.map((_, i) => (
          <div
            key={i}
            className="img"
            ref={(el) => setImageRef(el, i)}
            style={{ width: 70, height: 70, overflow: "hidden" }}
          >
            <img src={`/teams/${i + 1}.jpg`} alt={`Team member ${i + 1}`} />
          </div>
        ))}
      </div>

      <div className="profile-names">
        {NAMES.map((name, i) => (
          <div
            key={name}
            className={`name ${i === 0 ? "default" : ""}`}
            ref={(el) => setNameRef(el, i)}
          >
            <h1>{name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};
