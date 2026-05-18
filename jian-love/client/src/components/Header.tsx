/*
 * Header Component - jian.love replica
 * - Top bar: BLACK background, Instagram link (left), Search icon (right)
 * - Site title: centered, large italic Suranna font
 * - Subtitle: "CHANEL" in small caps
 * - Navigation: centered, active page highlighted in green
 */

import { useState } from "react";
import { Search, X, Menu } from "lucide-react";
import { useLocation } from "wouter";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "SNS", href: "/news" },
    { label: "SHOPPING GUIDE", href: "/shopping-guide" },
    { label: "ABOUT US", href: "/about-us" },
    { label: "CONTACT", href: "/contact" },
    { label: "COMPANY", href: "/company" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location === "/";
    }
    return location.startsWith(href);
  };

  return (
    <header style={{ background: "#fff" }}>
      {/* Top bar - BLACK background */}
      <div
        style={{
          background: "#1a1a1a",
          padding: "6px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: hamburger + Instagram */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: "none",
                border: "none",
                padding: "2px 4px",
                display: "flex",
                alignItems: "center",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              <Menu size={16} />
            </button>
            <a
              href="https://www.instagram.com/jian_tokyo/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "12px",
                color: "#fff",
                letterSpacing: "0.03em",
                textDecoration: "none",
              }}
            >
              Instagram
            </a>
          </div>

          {/* Right: Search */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              style={{
                background: "none",
                border: "none",
                padding: "2px",
                display: "flex",
                alignItems: "center",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              <Search size={16} />
            </button>
          </div>
        </div>

        {/* Search dropdown */}
        {searchOpen && (
          <div
            style={{
              background: "#333",
              padding: "10px 0",
              borderTop: "1px solid #444",
            }}
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <input
                type="text"
                placeholder="検索..."
                autoFocus
                style={{
                  flex: 1,
                  padding: "7px 12px",
                  border: "1px solid #555",
                  background: "#444",
                  color: "#fff",
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "13px",
                  outline: "none",
                }}
              />
              <button
                onClick={() => setSearchOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  padding: "4px",
                  color: "#ccc",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <X size={15} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Site title */}
      <div
        style={{
          textAlign: "center",
          padding: "24px 20px 14px",
          background: "#fff",
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "'Suranna', serif",
            fontSize: "clamp(28px, 5.5vw, 58px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#1a1a1a",
            letterSpacing: "0.01em",
            display: "block",
            lineHeight: 1.15,
            textDecoration: "none",
          }}
        >
          used vintage shop jian
        </a>
        <span
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "10px",
            color: "#aaa",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            display: "block",
            marginTop: "4px",
          }}
        >
          CHANEL
        </span>
      </div>

      {/* Navigation */}
      <nav
        style={{
          borderTop: "1px solid #e8e8e8",
          borderBottom: "1px solid #e8e8e8",
          background: "#fff",
          overflowX: "auto",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px",
            flexWrap: "wrap",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: isActive(item.href) ? "#4CAF50" : "#555",
                letterSpacing: "0.07em",
                padding: "13px 12px",
                display: "block",
                textTransform: "uppercase",
                borderBottom: isActive(item.href)
                  ? "2px solid #4CAF50"
                  : "2px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                if (!isActive(item.href)) {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#4CAF50";
                  el.style.borderBottomColor = "#4CAF50";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(item.href)) {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#555";
                  el.style.borderBottomColor = "transparent";
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            style={{
              background: "#fff",
              borderTop: "1px solid #e8e8e8",
            }}
          >
            {navItems.map((item) => (
              <a
                key={`mobile-${item.label}`}
                href={item.href}
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: isActive(item.href) ? "#4CAF50" : "#555",
                  letterSpacing: "0.07em",
                  padding: "12px 20px",
                  display: "block",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
