// components/SmoothScrollWrapper.tsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

export const SmoothScrollWrapper = ({ children, smooth = 1.2 }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth,
    });

    return () => {
      // Cleanup
      smoother.kill();
    };
  }, [smooth]);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};
