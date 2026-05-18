/*
 * Shopping Guide Page
 * - Japanese / English / Chinese (Simplified) tabs
 * - WeChat Shop, Payment, Shipping, Products, Customs, Return Policy
 */

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ShoppingGuide() {
  const [language, setLanguage] = useState<"ja" | "en" | "zh">("ja");

  const content = {
    ja: {
      title: "ショッピングガイド",
      sections: [
        {
          title: "微信商店",
          content: "WeChat を通じた便利なショッピング体験をご提供しています。",
        },
        {
          title: "支払方式",
          content: "以下の支払方式に対応しています：",
          items: [
            "銀行電信送金（Bank Wire Transfer）",
            "支付宝（Alipay）",
            "微信支付（WeChat Pay）",
            "PayPal",
            "クレジットカード",
            "Wise",
          ],
        },
        {
          title: "配送サービス",
          content:
            "EMS（日本郵政）、UPS、または FEDEX を通じて、50カ国以上への配送に対応しています。",
          note: "※ 配送業者はお客様がご指定いただくことはできません。",
        },
        {
          title: "取扱商品",
          items: [
            "ヴィンテージ・中古名牌バッグ（Vintage Bags）",
            "アクセサリー（Accessories）",
            "腕時計（Watches）",
            "中古衣類（Used Clothing）",
          ],
        },
        {
          title: "関税・輸入税について",
          content:
            "商品が目的地国に到着した際に、輸入関税および税金が発生する可能性があります。これらの費用は受取人がご負担ください。",
          note: "各国の関税政策が異なるため、具体的な金額はお知らせできません。関税についてのご質問は、お客様の国・地域の税関部門にお問い合わせください。",
        },
        {
          title: "返品について",
          subsections: [
            {
              subtitle: "返品期限",
              items: [
                "すべて1点物の為、基本的に返品・交換は致しかねます。",
                "商品の特性上、「イメージと実際の商品が違う」・「想定よりも汚れ・キズ・破れがひどかった」・「サイズが合わない」等の内容はお客様都合と判断し返品には一切応じかねます。",
                "当店の不手際にて商品不良があった場合は、商品到着後3日以内にご連絡をお願い致します。",
                "通販は、訪問販売と異なりクーリングオフ適用外になります。",
                "インターネットの性質上（撮影方法・照明・デジタルカメラ・PCモニターの設定等）、商品ページのイメージ写真と色合いなどが異なる場合がございますので予めご了承下さい。",
              ],
            },
            {
              subtitle: "返品送料",
              items: [
                "お客様のご都合でキャンセルの場合は、お客様にて返送料はご負担とさせて頂きます。",
                "不良品に該当する商品のご返品に限り、当社にて返送料は負担させて頂きますので予めご了承のほど宜しくお願い致します。",
              ],
            },
          ],
        },
      ],
    },
    en: {
      title: "Shopping Guide",
      sections: [
        {
          title: "WeChat Shop",
          content: "Our WeChat Shop provides convenient shopping experience for customers.",
        },
        {
          title: "Payment Methods",
          content: "We support the following payment methods:",
          items: [
            "Bank Wire Transfer",
            "Alipay (支付宝)",
            "WeChat Pay (微信支付)",
            "PayPal",
            "Credit Card",
            "Wise",
          ],
        },
        {
          title: "Shipping Services",
          content:
            "We ship to over 50 countries worldwide via EMS (Japan Post), UPS, or FedEx.",
          note: "※ Shipping company cannot be specified by customers.",
        },
        {
          title: "Products We Carry",
          items: [
            "Vintage/Pre-owned Designer Bags",
            "Accessories",
            "Watches",
            "Used Clothing",
          ],
        },
        {
          title: "Customs & Import Duties",
          content:
            "Import duties and taxes may apply when packages arrive at the destination country. These fees are the responsibility of the recipient.",
          note: "Due to varying customs policies by country, we cannot provide specific amounts. For questions about customs fees, please contact the customs department of your country/region.",
        },
        {
          title: "Return Policy",
          subsections: [
            {
              subtitle: "Return Period",
              items: [
                "As all items are one-of-a-kind, returns and exchanges are generally not accepted.",
                "Due to the nature of our products, requests such as \"the item differs from the image,\" \"the stains, scratches, or damage are worse than expected,\" or \"the size does not fit\" will be considered customer-related reasons, and returns will not be accepted under any circumstances.",
                "If there is a defect caused by our error, please contact us within 3 days after receiving the item.",
                "Please note that online/mail-order sales are not subject to the cooling-off period, unlike door-to-door sales.",
                "Due to the nature of the internet and photography conditions (lighting, camera settings, monitor settings, etc.), the actual color and appearance of the product may differ slightly from the images shown on the product page. Thank you for your understanding.",
              ],
            },
            {
              subtitle: "Return Shipping Costs",
              items: [
                "If a return or cancellation is made for customer convenience, the customer will be responsible for the return shipping costs.",
                "For returns of defective items attributable to our company, we will cover the return shipping costs. Thank you for your understanding.",
              ],
            },
          ],
        },
      ],
    },
    zh: {
      title: "购物指南",
      sections: [
        {
          title: "微信商店",
          content: "我们的微信商店为客户提供便捷的购物体验。",
        },
        {
          title: "支付方式",
          content: "支持以下支付方式：",
          items: [
            "银行电汇（Bank Wire Transfer）",
            "支付宝（Alipay）",
            "微信支付（WeChat Pay）",
            "PayPal",
            "信用卡",
            "Wise",
          ],
        },
        {
          title: "配送服务",
          content:
            "我们通过 EMS（日本邮政）、UPS 或 FEDEX 向50多个国家发货。",
          note: "※配送公司无法由客户指定。",
        },
        {
          title: "经营商品",
          items: [
            "古董/中古名牌包（Vintage Bags）",
            "配饰（Accessories）",
            "手表（Watches）",
            "二手服饰（Used Clothing）",
          ],
        },
        {
          title: "关税 / 进口税",
          content:
            "包裹到达目的地国家后，可能会产生进口关税及税费。相关费用需由收件人自行承担。",
          note: "由于各国关税政策不同，我们无法提供具体金额。如对海关费用有疑问，请联系您所在国家/地区的海关部门咨询。",
        },
        {
          title: "退货政策",
          subsections: [
            {
              subtitle: "退货期限",
              items: [
                "由于所有商品均为独一无二的单品，原则上不接受退货或换货。",
                "因商品特性，如\"与想象中的商品不同\"、\"污渍、划痕或破损比预期严重\"或\"尺寸不合适\"等情况，均视为客户个人原因，本店一概不接受退货。",
                "如因本店原因导致商品存在质量问题，请在收到商品后3日内与我们联系。",
                "网络销售不同于上门推销，不适用于\"冷静期（Cooling-off）\"制度。",
                "由于网络购物及拍摄环境的影响（如拍摄方式、灯光、相机及显示器设置等），商品页面图片的颜色和实物可能会存在一定差异，敬请谅解。",
              ],
            },
            {
              subtitle: "退货运费",
              items: [
                "因客户个人原因取消订单或退货时，退货运费需由客户自行承担。",
                "仅限于属于商品质量问题的退货，本店将承担退货运费，敬请理解。",
              ],
            },
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
              marginBottom: "30px",
            }}
          >
            {currentContent.title}
          </h1>

          {/* Content sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {currentContent.sections.map((section, idx) => (
              <section key={idx}>
                <h2
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    marginBottom: "12px",
                  }}
                >
                  {section.title}
                </h2>

                {section.content && (
                  <p
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "14px",
                      color: "#555",
                      lineHeight: 1.8,
                      marginBottom: "12px",
                    }}
                  >
                    {section.content}
                  </p>
                )}

                {section.items && (
                  <ul
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "14px",
                      color: "#555",
                      lineHeight: 1.8,
                      marginLeft: "20px",
                      marginBottom: "12px",
                    }}
                  >
                    {section.items.map((item, i) => (
                      <li key={i} style={{ marginBottom: "6px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections && (
                  <div style={{ marginLeft: "0px" }}>
                    {section.subsections.map((subsection, subIdx) => (
                      <div key={subIdx} style={{ marginBottom: "20px" }}>
                        <h3
                          style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "#333",
                            marginBottom: "10px",
                          }}
                        >
                          {subsection.subtitle}
                        </h3>
                        <ul
                          style={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: "14px",
                            color: "#555",
                            lineHeight: 1.8,
                            marginLeft: "20px",
                          }}
                        >
                          {subsection.items.map((item, i) => (
                            <li key={i} style={{ marginBottom: "8px" }}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {section.note && (
                  <p
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "13px",
                      color: "#999",
                      lineHeight: 1.7,
                      fontStyle: "italic",
                    }}
                  >
                    {section.note}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
