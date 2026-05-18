/*
 * MainContent Component
 * - 3-column fashion image grid
 * - Instagram screenshot image
 * - WeChat Shop screenshot image
 */

const fashionImages = [
  {
    src: "http://jian.love/wp-content/uploads/2022/07/IMG_1514-1-819x1024.jpg",
    alt: "fashion 1",
  },
  {
    src: "http://jian.love/wp-content/uploads/2022/07/IMG_1515-1-819x1024.jpg",
    alt: "fashion 2",
  },
  {
    src: "http://jian.love/wp-content/uploads/2022/07/IMG_1513-1-1-768x1024.jpg",
    alt: "fashion 3",
  },
];

export default function MainContent() {
  return (
    <main style={{ flex: 1, minWidth: 0 }}>
      {/* 3-column fashion image grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          marginBottom: "30px",
        }}
      >
        {fashionImages.map((img) => (
          <div key={img.src} style={{ overflow: "hidden" }}>
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Instagram section */}
      <div style={{ marginBottom: "24px" }}>
        <img
          src="http://jian.love/wp-content/uploads/2022/07/383637EE-1175-4C69-8905-2DC505B63B67-550x1024.jpeg"
          alt="instagram"
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
          }}
          loading="lazy"
        />
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "12px",
            color: "#666",
            marginTop: "6px",
          }}
        >
          instagram
        </p>
      </div>

      {/* WeChat Shop section */}
      <div style={{ marginBottom: "24px" }}>
        <img
          src="http://jian.love/wp-content/uploads/2022/07/5FF68CDE-A735-4997-B557-B0C4C8A77630-507x1024.jpeg"
          alt="wechat shop"
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
          }}
          loading="lazy"
        />
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "12px",
            color: "#666",
            marginTop: "6px",
          }}
        >
          wechat shop
        </p>
      </div>
    </main>
  );
}
