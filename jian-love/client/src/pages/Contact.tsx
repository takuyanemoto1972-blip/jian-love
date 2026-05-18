/*
 * Contact Page - Multilingual Support
 * - Support Languages: Japanese, English, Chinese
 * - Email, WeChat, Phone Contact Information
 */

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [language, setLanguage] = useState<"ja" | "en" | "zh">("ja");

  const contactContent = {
    ja: {
      title: "CONTACT",
      subtitle: "お問い合わせ",
      description: "ご不明な点やご質問がございましたら、お気軽にお問い合わせください。",
      supportLanguages: "サポート言語",
      languages: "中国語・日本語・英語",
      email: "メールアドレス",
      wechat: "WeChat ID",
      phone: "電話番号",
      contactMethods: [
        {
          icon: "mail",
          title: "Email",
          value: "info@jian.love",
          description: "メールでのお問い合わせ",
        },
        {
          icon: "wechat",
          title: "WeChat",
          value: ["vintagejian", "ula-ren"],
          description: "WeChat でのお問い合わせ",
          qrCodes: [
            { id: "vintagejian", url: "/manus-storage/IMG_5174_e1d6e8a7.JPG" },
            { id: "ula-ren", url: "/manus-storage/17767_07bbdb64.JPG" },
          ],
        },
        {
          icon: "phone",
          title: "Phone",
          value: ["+81(JP)042-736-6669", "+81(JP)080-7341-7277"],
          description: "お電話でのお問い合わせ",
        },
      ],
    },
    en: {
      title: "CONTACT",
      subtitle: "Get in Touch",
      description: "If you have any questions or inquiries, please feel free to contact us.",
      supportLanguages: "Supported Languages",
      languages: "Chinese, Japanese, English",
      email: "Email Address",
      wechat: "WeChat ID",
      phone: "Phone Number",
      contactMethods: [
        {
          icon: "mail",
          title: "Email",
          value: "info@jian.love",
          description: "Contact us via email",
        },
        {
          icon: "wechat",
          title: "WeChat",
          value: ["vintagejian", "ula-ren"],
          description: "Contact us via WeChat",
          qrCodes: [
            { id: "vintagejian", url: "/manus-storage/IMG_5174_e1d6e8a7.JPG" },
            { id: "ula-ren", url: "/manus-storage/17767_07bbdb64.JPG" },
          ],
        },
        {
          icon: "phone",
          title: "Phone",
          value: ["+81(JP)042-736-6669", "+81(JP)080-7341-7277"],
          description: "Contact us by phone",
        },
      ],
    },
    zh: {
      title: "联系我们",
      subtitle: "联系方式",
      description: "如有任何疑问或咨询，欢迎随时与我们联系。",
      supportLanguages: "支持语言",
      languages: "中文、日语、英文",
      email: "邮箱地址",
      wechat: "微信 ID",
      phone: "电话号码",
      contactMethods: [
        {
          icon: "mail",
          title: "Email",
          value: "info@jian.love",
          description: "通过邮件联系我们",
        },
        {
          icon: "wechat",
          title: "WeChat",
          value: ["vintagejian", "ula-ren"],
          description: "通过微信联系我们",
          qrCodes: [
            { id: "vintagejian", url: "/manus-storage/IMG_5174_e1d6e8a7.JPG" },
            { id: "ula-ren", url: "/manus-storage/17767_07bbdb64.JPG" },
          ],
        },
        {
          icon: "phone",
          title: "Phone",
          value: ["+81(JP)042-736-6669", "+81(JP)080-7341-7277"],
          description: "通过电话联系我们",
        },
      ],
    },
  };

  const content = contactContent[language];

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

        {/* Contact Info Section */}
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

            {/* Support Languages */}
            <div
              style={{
                background: "#f5f5f5",
                padding: "40px",
                marginBottom: "60px",
                textAlign: "center",
                border: "1px solid #e8e8e8",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#999",
                  letterSpacing: "0.1em",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}
              >
                {content.supportLanguages}
              </h3>
              <p
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: "20px",
                  color: "#1a1a1a",
                  margin: 0,
                }}
              >
                {content.languages}
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "40px",
              }}
            >
              {content.contactMethods.map((method, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "40px",
                    border: "1px solid #e8e8e8",
                    background: "#fff",
                    transition: "all 0.3s",
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
                  {/* Icon */}
                  <div
                    style={{
                      fontSize: "32px",
                      marginBottom: "20px",
                    }}
                  >
                    {method.icon === "mail" && "✉️"}
                    {method.icon === "wechat" && "💬"}
                    {method.icon === "phone" && "📞"}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      marginBottom: "12px",
                    }}
                  >
                    {method.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "'Noto Serif JP', serif",
                      fontSize: "13px",
                      color: "#999",
                      marginBottom: "20px",
                    }}
                  >
                    {method.description}
                  </p>

                  {/* Contact Values */}
                  <div style={{ marginBottom: "20px" }}>
                    {Array.isArray(method.value) ? (
                      method.value.map((val, i) => (
                        <p
                          key={i}
                          style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: "15px",
                            color: "#AF9461",
                            fontWeight: 600,
                            margin: "8px 0",
                            wordBreak: "break-word",
                          }}
                        >
                          {val}
                        </p>
                      ))
                    ) : (
                      <p
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "15px",
                          color: "#AF9461",
                          fontWeight: 600,
                          margin: 0,
                          wordBreak: "break-word",
                        }}
                      >
                        {method.value}
                      </p>
                    )}
                  </div>

                  {/* QR Codes */}
                  {method.qrCodes && (
                    <div
                      style={{
                        marginTop: "20px",
                        paddingTop: "20px",
                        borderTop: "1px solid #e8e8e8",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "20px",
                        }}
                      >
                        {method.qrCodes.map((qr: any, i: number) => (
                          <div key={i}>
                            <p
                              style={{
                                fontFamily: "'Open Sans', sans-serif",
                                fontSize: "12px",
                                color: "#AF9461",
                                fontWeight: 600,
                                marginBottom: "10px",
                              }}
                            >
                              {qr.id}
                            </p>
                            <img
                              src={qr.url}
                              alt={`${qr.id} WeChat QR Code`}
                              style={{
                                maxWidth: "120px",
                                height: "auto",
                                borderRadius: "4px",
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
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
