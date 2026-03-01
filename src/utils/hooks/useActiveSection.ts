import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export const useActiveSection = (ids: string[]) => {
  const [activeId, setActiveId] = useState("");
  const timeoutRef = useRef<number | null>(null);
  const prevActiveIdRef = useRef("");

  const setActivePage = useCallback((id: string) => {
    if (!id || prevActiveIdRef.current === id) return;
    prevActiveIdRef.current = id;
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const handleScroll = useCallback(
    (e: Event) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setActivePage(activeId);
      }, 150);
    },
    [activeId],
  );

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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
        threshold: [0.2],
      },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      return observer.disconnect();
    };
  }, [ids]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { activeId, setActivePage };
};
