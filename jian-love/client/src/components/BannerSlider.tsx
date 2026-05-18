/*
 * BannerSlider - jian.love Owl Carousel replica
 * Shows 3 full slides + partial left/right edges
 * Smooth CSS transform-based sliding
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Christian DIOR saddle bag",
    category: "BAG",
    img: "http://jian.love/wp-content/uploads/2022/07/80994532-3B8D-4384-A104-706C41962944-1100x614.jpeg",
  },
  {
    id: 2,
    title: "CHANEL BAG",
    category: "BAG",
    img: "http://jian.love/wp-content/uploads/2022/07/131553F4-9138-4034-A41B-ABCA8EA0C26B-1100x614.jpeg",
  },
  {
    id: 3,
    title: "Wechat Shop",
    category: "BLOG",
    img: "http://jian.love/wp-content/uploads/2022/07/533687BE-EB50-4A14-BDAC-BFE3F2B83F4A-1100x614.jpeg",
  },
  {
    id: 4,
    title: "SOLSO PARK",
    category: "BLOG",
    img: "http://jian.love/wp-content/uploads/2022/07/15584557-CB22-4FEF-936F-452A8BB77EF5-1100x614.jpeg",
  },
  {
    id: 5,
    title: "PRADA back pack",
    category: "BAG",
    img: "http://jian.love/wp-content/uploads/2022/07/BFB15934-0CE5-4163-9A40-50B823FA3AB3-1100x614.jpeg",
  },
  {
    id: 6,
    title: "FENDI BAG",
    category: "BAG",
    img: "http://jian.love/wp-content/uploads/2022/07/A0B3C094-3FD5-46E7-9367-BB097A4FBDDA-1100x614.jpeg",
  },
  {
    id: 7,
    title: "loewe bag",
    category: "BAG",
    img: "http://jian.love/wp-content/uploads/2022/07/656071C7-7A83-44B9-8D66-3DF6E572050A-1099x614.jpeg",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (dir: 1 | -1) => {
      if (animating) return;
      setAnimating(true);
      setCurrent((p) => (p + dir + slides.length) % slides.length);
      setTimeout(() => setAnimating(false), 400);
    },
    [animating]
  );

  useEffect(() => {
    intervalRef.current = setInterval(() => goTo(1), 4500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goTo]);

  // Build extended slide list for infinite effect: clone 3 before and 3 after
  // Visible window: show indices current-1, current, current+1, current+2 (plus partial edges)
  const getSlide = (offset: number) =>
    slides[(current + offset + slides.length * 10) % slides.length];

  // Render 5 items: [-1, 0, 1, 2, 3]
  // -1 and 3 are partial (edge clips)
  const items = [-1, 0, 1, 2, 3].map((offset) => ({
    offset,
    slide: getSlide(offset),
  }));

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
        }}
      >
        {items.map(({ offset, slide }) => {
          const isEdge = offset === -1 || offset === 3;
          return (
            <div
              key={offset}
              style={{
                flex: isEdge ? "0 0 75px" : "1 1 0",
                minWidth: 0,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <a href="#" style={{ display: "block" }}>
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    loading="lazy"
                  />
                  {!isEdge && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 45%, transparent 100%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: "16px 14px",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          alignSelf: "flex-start",
                          border: "1px solid rgba(255,255,255,0.75)",
                          padding: "1px 7px",
                          marginBottom: "7px",
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "10px",
                          fontWeight: 600,
                          color: "#fff",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                        }}
                      >
                        {slide.category}
                      </span>
                      <h2
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "17px",
                          fontWeight: 700,
                          color: "#fff",
                          margin: 0,
                          lineHeight: 1.3,
                          textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        {slide.title}
                      </h2>
                    </div>
                  )}
                  {isEdge && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "rgba(0,0,0,0.5)",
                        padding: "8px 6px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "10px",
                          fontWeight: 700,
                          color: "#fff",
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {slide.category}
                      </span>
                    </div>
                  )}
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {/* Prev button */}
      <button
        onClick={() => goTo(-1)}
        aria-label="prev"
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.55)",
          border: "none",
          borderRadius: "50%",
          width: "38px",
          height: "38px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          zIndex: 20,
          cursor: "pointer",
        }}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next button */}
      <button
        onClick={() => goTo(1)}
        aria-label="next"
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.55)",
          border: "none",
          borderRadius: "50%",
          width: "38px",
          height: "38px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          zIndex: 20,
          cursor: "pointer",
        }}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
