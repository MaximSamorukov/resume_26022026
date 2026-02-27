import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const useActiveSection = (ids: string[]) => {
  const [activeId, setActiveId] = useState("");
  const prevActiveIdRef = useRef("");

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        const nextActive = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          )[0];

        if (nextActive) setActiveId(nextActive.target.id);
      },
      {
        threshold: [0.1],
      },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  useLayoutEffect(() => {
    if (!activeId || prevActiveIdRef.current === activeId) return;
    prevActiveIdRef.current = activeId;

    const el = document.getElementById(activeId);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  }, [activeId]);

  return activeId;
};
