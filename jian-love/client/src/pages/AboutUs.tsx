/*
 * About Us Page
 * - Japanese / English / Chinese (Simplified) tabs
 * - Brand Concept, About Us, Authenticity, Why Japan sections
 */

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutUs() {
  const [language, setLanguage] = useState<"ja" | "en" | "zh">("ja");

  const content = {
    ja: {
      title: "ABOUT US",
      sections: [
        {
          title: "ブランドコンセプト",
          subtitle: "Brand Concept",
          content: [
            "TIME CREATES VALUE.",
            "",
            "時を重ねたものだけが持つ、美しさがある。",
            "",
            "VINTAGE JIANは、東京・青山を拠点に、",
            "世界中で愛され続けるラグジュアリーヴィンテージを厳選しています。",
            "",
            "新品にはない存在感。",
            "一点ごとに異なる物語。",
            "時代を超えて受け継がれる価値。",
            "",
            "私たちは、",
            "ただの中古ではなく、",
            "未来へ繋がるヴィンテージを届けます。",
          ],
        },
        {
          title: "私たちについて",
          subtitle: "About Us",
          content: [
            "VINTAGE JIANは、",
            "日本国内の厳選されたオークション・コレクター・リユース市場から、",
            "本当に価値あるヴィンテージアイテムのみを選び抜いています。",
            "",
            "私たちが大切にしているのは、",
            "価格だけではなく、",
            "そのアイテムが持つ背景と時間です。",
          ],
        },
        {
          title: "真贋保証",
          subtitle: "Authenticity",
          content: [
            "すべての商品は、",
            "日本国内の信頼できる市場・業者から仕入れを行っています。",
            "",
            "真贋確認・状態確認を徹底し、",
            "安心して購入いただけるヴィンテージのみを販売しています。",
          ],
        },
        {
          title: "なぜ日本？",
          subtitle: "Why Japan?",
          content: [
            "日本の中古ブランド市場は、",
            "世界でも特に厳しい品質基準で知られています。",
            "",
            "丁寧な保管、透明性の高い市場、",
            "そして厳格な真贋管理。",
            "",
            "世界中のバイヤーが、",
            "日本市場に注目しています。",
          ],
        },
      ],
    },
    en: {
      title: "ABOUT US",
      sections: [
        {
          title: "Brand Concept",
          subtitle: "ブランドコンセプト",
          content: [
            "TIME CREATES VALUE.",
            "",
            "There is a beauty that only time can create.",
            "",
            "Based in Tokyo Aoyama, VINTAGE JIAN curates timeless luxury vintage pieces loved around the world.",
            "",
            "A presence that new items cannot replicate.",
            "A unique story behind every piece.",
            "A value that transcends generations.",
            "",
            "We do not simply sell vintage luxury.",
            "We deliver timeless pieces that carry history into the future.",
          ],
        },
        {
          title: "About Us",
          subtitle: "私たちについて",
          content: [
            "VINTAGE JIAN carefully selects authentic vintage luxury pieces from trusted Japanese auctions, collectors, and secondary markets.",
            "",
            "We value not only the price of an item,",
            "but also the story, craftsmanship, and history behind it.",
          ],
        },
        {
          title: "Authenticity",
          subtitle: "真贋保証",
          content: [
            "All items are sourced from trusted Japanese auction houses and professional luxury markets.",
            "",
            "Every piece undergoes authenticity and condition checks to ensure a reliable and secure shopping experience.",
          ],
        },
        {
          title: "Why Japan?",
          subtitle: "なぜ日本？",
          content: [
            "Japan's luxury vintage market is globally recognized for its strict quality standards and trusted authentication systems.",
            "",
            "Well-preserved items, transparent grading, and reliable sourcing make Japan one of the most respected vintage markets in the world.",
          ],
        },
      ],
    },
    zh: {
      title: "关于我们",
      sections: [
        {
          title: "品牌理念",
          subtitle: "Brand Concept",
          content: [
            "TIME CREATES VALUE.",
            "",
            "有些美，只能由时间创造。",
            "",
            "VINTAGE JIAN 以东京・青山为据点，",
            "甄选来自世界各地、历久弥新的奢侈品古董精品。",
            "",
            "不同于新品的完美无瑕，",
            "Vintage 的魅力，在于它承载的时间痕迹与故事。",
            "",
            "我们希望将那些跨越时代、依然被珍视的经典，",
            "从日本带向世界。",
          ],
        },
        {
          title: "关于我们",
          subtitle: "About Us",
          content: [
            "VINTAGE JIAN 从日本严格筛选的拍卖市场、收藏家与专业中古渠道中，",
            "挑选真正具有价值的 Vintage 精品。",
            "",
            "我们重视的，",
            "不仅是价格，",
            "更是商品背后的故事与时间价值。",
          ],
        },
        {
          title: "正品保证",
          subtitle: "Authenticity",
          content: [
            "所有商品均来自日本可信赖的拍卖市场与专业渠道。",
            "",
            "每一件商品都经过真伪鉴定与状态检查，",
            "确保客户能够安心购买。",
          ],
        },
        {
          title: "为什么选择日本中古市场？",
          subtitle: "Why Japan?",
          content: [
            "日本中古奢侈品市场，",
            "以严格的品质标准与透明的市场体系闻名全球。",
            "",
            "商品保存状态优秀，",
            "真伪管理严格，",
            "因此深受全球买家的信赖。",
          ],
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main style={{ flex: 1, padding: "40px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {/* Language tabs */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "40px",
              borderBottom: "2px solid #e8e8e8",
            }}
          >
            {(["ja", "en", "zh"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: language === lang ? "#4CAF50" : "#999",
                  background: "none",
                  border: "none",
                  padding: "12px 0",
                  borderBottom: language === lang ? "2px solid #4CAF50" : "none",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {lang === "ja" ? "日本語" : lang === "en" ? "English" : "中文"}
              </button>
            ))}
          </div>

          {/* Page title */}
          <h1
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "32px",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "40px",
            }}
          >
            {currentContent.title}
          </h1>

          {/* Content sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
            {currentContent.sections.map((section, idx) => (
              <section key={idx}>
                <div style={{ marginBottom: "20px" }}>
                  <h2
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#1a1a1a",
                      marginBottom: "4px",
                    }}
                  >
                    {section.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "13px",
                      color: "#999",
                      fontWeight: 500,
                      letterSpacing: "1px",
                    }}
                  >
                    {section.subtitle}
                  </p>
                </div>

                <div
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "14px",
                    color: "#555",
                    lineHeight: 1.9,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {section.content.join("\n")}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
