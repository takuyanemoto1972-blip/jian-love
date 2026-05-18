/*
 * Company Page - Multilingual Support
 * - Company Information, Address, Recruitment
 */

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Company() {
  const [language, setLanguage] = useState<"ja" | "en" | "zh">("ja");

  const companyContent = {
    ja: {
      title: "COMPANY",
      subtitle: "企業情報",
      description: "VINTAGE JIAN について",
      sections: [
        {
          title: "会社概要",
          content: "VINTAGE JIAN は、東京・青山を拠点に、世界中で愛され続けるラグジュアリーヴィンテージを厳選しています。",
        },
        {
          title: "所在地",
          addresses: [
            {
              name: "本店",
              address: "3156-11 Ookura-cho Machida-shi Tokyo",
            },
            {
              name: "青山店",
              address: "4-18-8 Minamiaoyama Minato-ku Tokyo",
            },
          ],
        },
        {
          title: "リクルート",
          recruitments: [
            {
              position: "バイヤー募集",
              description: "世界中のヴィンテージアイテムを厳選・買付けするバイヤーを募集しています。ファッション業界での経験や目利き力を活かせる職種です。",
            },
            {
              position: "提携業者募集",
              description: "ヴィンテージ商品の買取、修理、クリーニングなど、各種サービスの提携業者を募集しています。",
            },
            {
              position: "ライブ配信者募集",
              description: "SNS・ライブ配信プラットフォームでVINTAGE JIAN の商品を紹介していただくライブ配信者を募集しています。",
            },
          ],
        },
      ],
    },
    en: {
      title: "COMPANY",
      subtitle: "Company Information",
      description: "About VINTAGE JIAN",
      sections: [
        {
          title: "Company Overview",
          content: "Based in Tokyo Aoyama, VINTAGE JIAN curates timeless luxury vintage pieces loved around the world.",
        },
        {
          title: "Location",
          addresses: [
            {
              name: "Main Store",
              address: "3156-11 Ookura-cho Machida-shi Tokyo",
            },
            {
              name: "Aoyama Store",
              address: "4-18-8 Minamiaoyama Minato-ku Tokyo",
            },
          ],
        },
        {
          title: "Recruitment",
          recruitments: [
            {
              position: "Buyer",
              description: "We are recruiting buyers to carefully select and purchase vintage items from around the world. This is a position where you can leverage your experience and expertise in the fashion industry.",
            },
            {
              position: "Partner Companies",
              description: "We are recruiting partner companies for various services such as vintage product purchases, repairs, and cleaning.",
            },
            {
              position: "Live Streamers",
              description: "We are recruiting live streamers to introduce VINTAGE JIAN products on SNS and live streaming platforms.",
            },
          ],
        },
      ],
    },
    zh: {
      title: "公司信息",
      subtitle: "企业介绍",
      description: "关于 VINTAGE JIAN",
      sections: [
        {
          title: "公司概况",
          content: "VINTAGE JIAN 以东京・青山为据点，甄选来自世界各地、历久弥新的奢侈品古董精品。",
        },
        {
          title: "地址",
          addresses: [
            {
              name: "总店",
              address: "3156-11 Ookura-cho Machida-shi Tokyo",
            },
            {
              name: "青山店",
              address: "4-18-8 Minamiaoyama Minato-ku Tokyo",
            },
          ],
        },
        {
          title: "招聘信息",
          recruitments: [
            {
              position: "买手招聘",
              description: "我们正在招聘买手，负责从世界各地精心挑选和采购古董商品。这是一个可以发挥您在时尚行业经验和眼光的职位。",
            },
            {
              position: "合作伙伴招聘",
              description: "我们正在招聘合作伙伴公司，提供古董商品购买、维修、清洁等各种服务。",
            },
            {
              position: "直播主招聘",
              description: "我们正在招聘直播主在社交媒体和直播平台上介绍 VINTAGE JIAN 的商品。",
            },
          ],
        },
      ],
    },
  };

  const content = companyContent[language];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section
          style={{
            background: "#000",
            color: "#fff",
            padding: "80px 20px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h1
              style={{
                fontFamily: "'Suranna', serif",
                fontSize: "clamp(36px, 6vw, 56px)",
                fontWeight: 400,
                fontStyle: "italic",
                marginBottom: "12px",
                letterSpacing: "0.02em",
              }}
            >
              {content.title}
            </h1>
            <p
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "18px",
                color: "#ccc",
                marginBottom: "0",
              }}
            >
              {content.subtitle}
            </p>
          </div>
        </section>

        {/* Company Info Section */}
        <section
          style={{
            background: "#fff",
            padding: "100px 20px",
          }}
        >
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            {/* Description */}
            <p
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "16px",
                color: "#666",
                textAlign: "center",
                marginBottom: "80px",
                maxWidth: "600px",
                margin: "0 auto 80px",
                lineHeight: 1.8,
              }}
            >
              {content.description}
            </p>

            {/* Sections */}
            {content.sections.map((section, sectionIdx) => (
              <div key={sectionIdx} style={{ marginBottom: "80px" }}>
                {/* Section Title */}
                <h2
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: "40px",
                    paddingBottom: "16px",
                    borderBottom: "2px solid #AF9461",
                  }}
                >
                  {section.title}
                </h2>

                {/* Company Overview */}
                {section.content && (
                  <p
                    style={{
                      fontFamily: "'Noto Serif JP', serif",
                      fontSize: "16px",
                      color: "#666",
                      lineHeight: 1.8,
                      marginBottom: "40px",
                    }}
                  >
                    {section.content}
                  </p>
                )}

                {/* Addresses */}
                {section.addresses && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                      gap: "30px",
                    }}
                  >
                    {section.addresses.map((addr, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: "30px",
                          background: "#f5f5f5",
                          border: "1px solid #e8e8e8",
                          borderLeft: "4px solid #AF9461",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "#AF9461",
                            marginBottom: "12px",
                          }}
                        >
                          {addr.name}
                        </h3>
                        <p
                          style={{
                            fontFamily: "'Noto Serif JP', serif",
                            fontSize: "14px",
                            color: "#666",
                            margin: 0,
                            lineHeight: 1.6,
                          }}
                        >
                          {addr.address}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Recruitments */}
                {section.recruitments && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                      gap: "30px",
                    }}
                  >
                    {section.recruitments.map((rec, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: "30px",
                          background: "#fff",
                          border: "1px solid #e8e8e8",
                          transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 8px 24px rgba(0,0,0,0.08)";
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "#AF9461";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "none";
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "#e8e8e8";
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: "18px",
                            fontWeight: 600,
                            color: "#1a1a1a",
                            marginBottom: "12px",
                          }}
                        >
                          {rec.position}
                        </h3>
                        <p
                          style={{
                            fontFamily: "'Noto Serif JP', serif",
                            fontSize: "14px",
                            color: "#666",
                            lineHeight: 1.8,
                            margin: 0,
                          }}
                        >
                          {rec.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Language Selector */}
        <section
          style={{
            background: "#f5f5f5",
            padding: "60px 20px",
            textAlign: "center",
          }}
        >
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
