import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SNS() {
  const [language, setLanguage] = useState<"ja" | "en" | "zh">("ja");
  const [instaPosts, setInstaPosts] = useState<any[]>([]);

  const snsContent = {
    ja: {
      title: "SNS",
      subtitle: "ソーシャルメディア",
      description: "最新の入荷情報やブランドストーリーは、各SNSプラットフォームでご確認ください。",
      followUs: "フォローして最新情報をチェック",
      red: "Red（小红书）",
      instagram: "Instagram",
      viewProfile: "プロフィールを見る",
      redAccounts: [
        {
          name: "chickaretta",
          id: "chicka",
          description: "ファッション・ライフスタイル情報",
          link: "https://www.xiaohongshu.com/user/profile/chicka",
        },
        {
          name: "Ula's Vintage Shop",
          id: "vintagejian",
          description: "最新ヴィンテージアイテム紹介",
          link: "https://www.xiaohongshu.com/user/profile/vintagejian",
        },
      ],
      instaAccount: {
        name: "jian_tokyo",
        handle: "jian_tokyo",
        description: "東京発のヴィンテージラグジュアリー",
        link: "https://www.instagram.com/jian_tokyo/",
      },
    },
    en: {
      title: "SNS",
      subtitle: "Social Media",
      description: "Follow us on social media to stay updated with the latest arrivals and brand stories.",
      followUs: "Follow us for the latest updates",
      red: "Red (Little Red Book)",
      instagram: "Instagram",
      viewProfile: "View Profile",
      redAccounts: [
        {
          name: "chickaretta",
          id: "chicka",
          description: "Fashion & Lifestyle Updates",
          link: "https://www.xiaohongshu.com/user/profile/chicka",
        },
        {
          name: "Ula's Vintage Shop",
          id: "vintagejian",
          description: "Latest Vintage Items",
          link: "https://www.xiaohongshu.com/user/profile/vintagejian",
        },
      ],
      instaAccount: {
        name: "jian_tokyo",
        handle: "jian_tokyo",
        description: "Vintage Luxury from Tokyo",
        link: "https://www.instagram.com/jian_tokyo/",
      },
    },
    zh: {
      title: "SNS",
      subtitle: "社交媒体",
      description: "关注我们的社交媒体平台，获取最新的入库信息和品牌故事。",
      followUs: "关注我们获取最新信息",
      red: "小红书",
      instagram: "Instagram",
      viewProfile: "查看资料",
      redAccounts: [
        {
          name: "chickaretta",
          id: "chicka",
          description: "时尚与生活方式信息",
          link: "https://www.xiaohongshu.com/user/profile/chicka",
        },
        {
          name: "Ula's Vintage Shop",
          id: "vintagejian",
          description: "最新古董商品介绍",
          link: "https://www.xiaohongshu.com/user/profile/vintagejian",
        },
      ],
      instaAccount: {
        name: "jian_tokyo",
        handle: "jian_tokyo",
        description: "来自东京的古董奢侈品",
        link: "https://www.instagram.com/jian_tokyo/",
      },
    },
  };

  const content = snsContent[language];

  // Instagram フィードを読み込む（Instagram Embed API）
  useEffect(() => {
    // Instagram embed script を動的に読み込む
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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

        {/* SNS Content Section */}
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

            {/* Red Section */}
            <div style={{ marginBottom: "80px" }}>
              <h2
                style={{
                  fontFamily: "'Suranna', serif",
                  fontSize: "32px",
                  fontStyle: "italic",
                  color: "#AF9461",
                  marginBottom: "40px",
                  textAlign: "center",
                }}
              >
                {content.red}
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "40px",
                }}
              >
                {content.redAccounts.map((account, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "40px",
                      border: "1px solid #e8e8e8",
                      background: "#f9f9f9",
                      transition: "all 0.3s",
                      textAlign: "center",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 8px 24px rgba(0,0,0,0.08)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "#AF9461";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "#e8e8e8";
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "#1a1a1a",
                        marginBottom: "8px",
                      }}
                    >
                      {account.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "16px",
                        color: "#AF9461",
                        fontWeight: 600,
                        marginBottom: "12px",
                        margin: "12px 0",
                      }}
                    >
                      @{account.id}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Noto Serif JP', serif",
                        fontSize: "14px",
                        color: "#666",
                        lineHeight: 1.6,
                        marginBottom: "20px",
                      }}
                    >
                      {account.description}
                    </p>
                    <a
                      href={account.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        padding: "12px 24px",
                        background: "#AF9461",
                        color: "#fff",
                        textDecoration: "none",
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        transition: "all 0.3s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "#8b7548";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "#AF9461";
                      }}
                    >
                      {content.viewProfile}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "#e8e8e8",
                margin: "80px 0",
              }}
            />

            {/* Instagram Section */}
            <div>
              <h2
                style={{
                  fontFamily: "'Suranna', serif",
                  fontSize: "32px",
                  fontStyle: "italic",
                  color: "#AF9461",
                  marginBottom: "40px",
                  textAlign: "center",
                }}
              >
                {content.instagram}
              </h2>

              <div
                style={{
                  padding: "40px",
                  border: "1px solid #e8e8e8",
                  background: "#f9f9f9",
                  textAlign: "center",
                  transition: "all 0.3s",
                  marginBottom: "40px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#AF9461";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#e8e8e8";
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: "8px",
                  }}
                >
                  {content.instaAccount.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "16px",
                    color: "#AF9461",
                    fontWeight: 600,
                    marginBottom: "12px",
                    margin: "12px 0",
                  }}
                >
                  @{content.instaAccount.handle}
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif JP', serif",
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {content.instaAccount.description}
                </p>
                <a
                  href={content.instaAccount.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "12px 24px",
                    background: "#AF9461",
                    color: "#fff",
                    textDecoration: "none",
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    transition: "all 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#8b7548";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#AF9461";
                  }}
                >
                  {content.viewProfile}
                </a>
              </div>

              {/* Instagram Feed Embed */}
              <div
                style={{
                  marginTop: "60px",
                  padding: "40px",
                  background: "#f9f9f9",
                  border: "1px solid #e8e8e8",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: "30px",
                  }}
                >
                  {language === "ja"
                    ? "最新の投稿"
                    : language === "en"
                      ? "Latest Posts"
                      : "最新发布"}
                </h3>
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/jian_tokyo/?utm_source=ig_embed&amp;utm_campaign=loading"
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow:
                      "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: "0",
                    width: "calc(100% - 2px)",
                  }}
                >
                  <div style={{ padding: "16px" }}>
                    <a
                      href="https://www.instagram.com/jian_tokyo/?utm_source=ig_embed&amp;utm_campaign=loading"
                      style={{
                        background: "#FFFFFF",
                        lineHeight: "0",
                        padding: "0 0",
                        textAlign: "center",
                        textDecoration: "none",
                        width: "100%",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <div
                          style={{
                            backgroundColor: "#F4F4F4",
                            borderRadius: "50%",
                            flexGrow: "0",
                            height: "40px",
                            marginRight: "14px",
                            width: "40px",
                          }}
                        ></div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: "1",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: "4px",
                              flexGrow: "0",
                              height: "14px",
                              marginBottom: "6px",
                              width: "100px",
                            }}
                          ></div>
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: "4px",
                              flexGrow: "0",
                              height: "14px",
                              width: "60px",
                            }}
                          ></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </blockquote>
                <p
                  style={{
                    fontFamily: "'Noto Serif JP', serif",
                    fontSize: "14px",
                    color: "#999",
                    marginTop: "20px",
                  }}
                >
                  {language === "ja"
                    ? "Instagram プロフィールで最新の投稿をご覧ください"
                    : language === "en"
                      ? "Visit our Instagram profile to see the latest posts"
                      : "访问我们的 Instagram 资料查看最新发布"}
                </p>
              </div>
            </div>
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
