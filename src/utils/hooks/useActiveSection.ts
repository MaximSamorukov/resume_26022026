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
  const [scrollTo, setScrollTo] = useState("");

  const setActivePage = useCallback(
    (id: string) => {
      setScrollTo(id);
    },
    [activeId, setScrollTo],
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

  useLayoutEffect(() => {
    if (!scrollTo || prevActiveIdRef.current === scrollTo) return;
    prevActiveIdRef.current = scrollTo;
    const el = document.getElementById(scrollTo);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  }, [scrollTo]);

  useEffect(() => {
    function handleScroll(e: Event) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setActivePage(activeId);
      }, 50);
    }
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [activeId, setActivePage]);
  return { activeId, setActivePage };
};
