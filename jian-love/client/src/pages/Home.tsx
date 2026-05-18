/*
 * Home Page - Brand Site Redesign (Enhanced)
 * - Hero Section with background image
 * - Concept Section with left image, right text
 * - Why Japan? Section with 3 cards
 * - Brand Slogan Section
 * - Shop Section
 * - SNS Section
 */

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663642419506/FCTUSsJY7rt9b3sdUPbB8v/hero-background-A8RXe8ztkLyv7KbqZitGgw.webp";

export default function Home() {
  const [language, setLanguage] = useState<"ja" | "en" | "zh">("ja");

  const whyJapanContent = {
    ja: [
      {
        number: "01",
        title: "真贋保証",
        subtitle: "AUTHENTICITY",
        description: "日本国内の信頼できる市場から厳選。徹底した真贋・状態確認。",
      },
      {
        number: "02",
        title: "品質基準",
        subtitle: "QUALITY",
        description: "世界が注目する日本の保管状態と、透明性の高い市場体系。",
      },
      {
        number: "03",
        title: "青山から世界へ",
        subtitle: "FROM TOKYO",
        description: "青山を拠点に、世界中で愛されるラグジュアリーのみをセレクト。",
      },
    ],
    en: [
      {
        number: "01",
        title: "Authenticity",
        subtitle: "真贋保証",
        description: "Carefully curated from trusted Japanese markets with thorough authentication and condition verification.",
      },
      {
        number: "02",
        title: "Quality",
        subtitle: "品質基準",
        description: "Japan's renowned preservation standards and transparent market system trusted worldwide.",
      },
      {
        number: "03",
        title: "From Tokyo",
        subtitle: "青山から世界へ",
        description: "Curating only the finest luxury pieces from our Aoyama headquarters to the world.",
      },
    ],
    zh: [
      {
        number: "01",
        title: "正品保证",
        subtitle: "AUTHENTICITY",
        description: "从日本信誉市场精心甄选，严格的真伪鉴定与状态确认。",
      },
      {
        number: "02",
        title: "品质标准",
        subtitle: "QUALITY",
        description: "世界认可的日本保管标准与透明的市场体系。",
      },
      {
        number: "03",
        title: "从东京出发",
        subtitle: "FROM TOKYO",
        description: "以青山为据点，向世界精选最优质的奢侈品。",
      },
    ],
  };

  const conceptContent = {
    ja: {
      title: "CONCEPT",
      subtitle: "時代を超えて受け継がれる価値",
      description: "私たちは、ただの中古ではなく、未来へ繋がるヴィンテージを届けます。新品にはない存在感。一点ごとに異なる物語。時代を超えて受け継がれる価値。VINTAGE JIANは、東京・青山を拠点に、世界中で愛され続けるラグジュアリーヴィンテージを厳選しています。",
    },
    en: {
      title: "CONCEPT",
      subtitle: "A value that transcends generations",
      description: "We deliver timeless pieces that carry history into the future. A presence that new items cannot replicate. A unique story behind every piece. A value that transcends generations. Based in Tokyo Aoyama, VINTAGE JIAN curates timeless luxury vintage pieces loved around the world.",
    },
    zh: {
      title: "理念",
      subtitle: "跨越时代的价值",
      description: "我们希望将那些跨越时代、依然被珍视的经典，从日本带向世界。不同于新品的完美无瑕，Vintage 的魅力，在于它承载的时间痕迹与故事。VINTAGE JIAN 以东京・青山为据点，甄选来自世界各地、历久弥新的奢侈品古董精品。",
    },
  };

  const shopCategories = [
    { name: "CHANEL", icon: "👜" },
    { name: "HERMÈS", icon: "👜" },
    { name: "LOUIS VUITTON", icon: "👜" },
    { name: "DIOR", icon: "👜" },
    { name: "PRADA", icon: "👜" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main style={{ flex: 1 }}>
        {/* Hero Section with Background Image */}
        <section
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${HERO_BG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            color: "#fff",
            padding: "120px 20px",
            minHeight: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "'Suranna', serif",
              fontSize: "clamp(48px, 8vw, 80px)",
              fontWeight: 400,
              fontStyle: "italic",
              marginBottom: "30px",
              letterSpacing: "0.02em",
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            TIME CREATES VALUE.
          </h1>

          <div
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "14px",
              color: "#e8e8e8",
              lineHeight: 2,
              maxWidth: "700px",
              marginBottom: "20px",
              letterSpacing: "0.05em",
            }}
          >
            <p style={{ margin: "0 0 8px 0" }}>時が価値をつくる。</p>
            <p style={{ margin: "0 0 8px 0" }}>Time Creates Value.</p>
            <p style={{ margin: 0 }}>时间创造价值。</p>
          </div>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "13px",
              color: "#AF9461",
              letterSpacing: "0.08em",
              marginBottom: "50px",
              margin: "0 0 50px 0",
            }}
          >
            Based in Aoyama, Tokyo. Curated Authentic Vintage.
          </p>

          <a
            href="/shopping-guide"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              color: "#000",
              background: "#AF9461",
              padding: "14px 36px",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "inline-block",
              transition: "background 0.3s, transform 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#9d8451";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#AF9461";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            Explore Collection
          </a>
        </section>

        {/* Concept Section */}
        <section
          style={{
            background: "#fff",
            padding: "100px 20px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
          >
            {/* Left: Concept Image */}
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663642419506/FCTUSsJY7rt9b3sdUPbB8v/concept-vintage-bag-oC4dt86xyiAkFiMDvaMPfX.webp"
              alt="Luxury Vintage Chanel Bag"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "2px",
              }}
            />

            {/* Right: Concept Text */}
            <div>
              <h2
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "12px",
                  letterSpacing: "0.1em",
                }}
              >
                {conceptContent[language].title}
              </h2>
              <h3
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: "24px",
                  fontWeight: 400,
                  color: "#AF9461",
                  marginBottom: "30px",
                  fontStyle: "italic",
                }}
              >
                {conceptContent[language].subtitle}
              </h3>
              <p
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: "15px",
                  color: "#555",
                  lineHeight: 1.9,
                  marginBottom: 0,
                }}
              >
                {conceptContent[language].description}
              </p>
            </div>
          </div>
        </section>

        {/* Why Japan Section */}
        <section
          style={{
            background: "#f5f5f5",
            padding: "100px 20px",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "36px",
                fontWeight: 700,
                color: "#1a1a1a",
                textAlign: "center",
                marginBottom: "20px",
                letterSpacing: "0.05em",
              }}
            >
              Why Japan?
            </h2>
            <p
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "15px",
                color: "#666",
                textAlign: "center",
                marginBottom: "60px",
                maxWidth: "600px",
                margin: "0 auto 60px",
              }}
            >
              日本の中古市場は、世界が注目する透明性と信頼性を備えています。
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "40px",
                marginBottom: "60px",
              }}
            >
              {whyJapanContent[language].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#fff",
                    padding: "50px 40px",
                    textAlign: "center",
                    border: "1px solid #e8e8e8",
                    transition: "box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 24px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "56px",
                      fontWeight: 700,
                      color: "#AF9461",
                      marginBottom: "20px",
                    }}
                  >
                    {item.number}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Noto Serif JP', serif",
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#1a1a1a",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "12px",
                      color: "#999",
                      letterSpacing: "0.1em",
                      marginBottom: "16px",
                    }}
                  >
                    {item.subtitle}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Noto Serif JP', serif",
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Language Tabs */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {(["ja", "en", "zh"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: language === lang ? "#AF9461" : "#999",
                    background: "none",
                    border: "none",
                    padding: "8px 16px",
                    cursor: "pointer",
                    borderBottom:
                      language === lang ? "2px solid #AF9461" : "none",
                    transition: "all 0.2s",
                  }}
                >
                  {lang === "ja" ? "日本語" : lang === "en" ? "English" : "中文"}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Slogan Section */}
        <section
          style={{
            background: "#fff",
            padding: "100px 20px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "'Suranna', serif",
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#1a1a1a",
                marginBottom: "20px",
                letterSpacing: "0.02em",
              }}
            >
              Beyond Time.
            </h2>
            <p
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "18px",
                color: "#666",
                marginBottom: "0",
                lineHeight: 1.8,
              }}
            >
              時代を超える美しさ。
            </p>
          </div>
        </section>

        {/* Shop Section */}
        <section
          style={{
            background: "#f5f5f5",
            padding: "100px 20px",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "32px",
                fontWeight: 700,
                color: "#1a1a1a",
                textAlign: "center",
                marginBottom: "60px",
              }}
            >
              Shop by Brand
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "30px",
              }}
            >
              {shopCategories.map((cat, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#fff",
                    padding: "40px 20px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    border: "1px solid #e8e8e8",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#fafafa";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#AF9461";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#fff";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#e8e8e8";
                  }}
                >
                  <div style={{ fontSize: "36px", marginBottom: "12px" }}>
                    {cat.icon}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      margin: 0,
                    }}
                  >
                    {cat.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SNS Section */}
        <section
          style={{
            background: "#000",
            color: "#fff",
            padding: "80px 20px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "'Suranna', serif",
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 400,
                fontStyle: "italic",
                marginBottom: "20px",
                letterSpacing: "0.02em",
              }}
            >
              Timeless Luxury Curated in Tokyo.
            </h2>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "14px",
                color: "#ccc",
                marginBottom: "30px",
              }}
            >
              Follow us on Instagram for the latest collections and stories.
            </p>
            <a
              href="https://www.instagram.com/jian_tokyo/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: "#000",
                background: "#AF9461",
                padding: "12px 28px",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                display: "inline-block",
                transition: "background 0.3s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#9d8451";
                (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#AF9461";
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              Follow Instagram
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
