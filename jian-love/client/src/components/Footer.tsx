/*
 * Footer Component - Black background, white text
 * - Copyright text
 * - Privacy policy link
 * - Antique dealer license number
 * - TOP button (scroll to top)
 */

import { useState, useEffect } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        style={{
          background: "#1a1a1a",
          color: "#fff",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "12px",
              color: "#aaa",
              margin: 0,
              lineHeight: 1.8,
            }}
          >
            2022 Copyright used vintage shop jian Blossom Diva | Developed By{" "}
            <a
              href="#"
              style={{ color: "#ccc", textDecoration: "underline" }}
            >
              Blossom Themes
            </a>
            . Powered by{" "}
            <a
              href="#"
              style={{ color: "#ccc", textDecoration: "underline" }}
            >
              WordPress
            </a>
            .{" "}
            <a
              href="#"
              style={{ color: "#ccc", textDecoration: "underline" }}
            >
              プライバシーポリシー
            </a>
          </p>

          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "10px",
              color: "#888",
              margin: "8px 0 0 0",
              paddingTop: "8px",
              borderTop: "1px solid #333",
            }}
          >
            古物商許可証: 301122219344 東京都公安委員会
          </p>
        </div>
      </footer>

      {/* TOP button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "#e91e8c",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10px",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.05em",
            cursor: "pointer",
            zIndex: 100,
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          <span style={{ fontSize: "14px", lineHeight: 1 }}>▲</span>
          <span>TOP</span>
        </button>
      )}
    </>
  );
}
