/*
 * Sidebar Component - Recent posts widget
 * - Widget title: 最近の投稿
 * - List of recent post links
 */

const recentPosts = [
  { title: "Christian DIOR saddle bag", href: "#" },
  { title: "CHANEL BAG", href: "#" },
  { title: "Wechat Shop", href: "#" },
  { title: "SOLSO PARK", href: "#" },
  { title: "PRADA back pack", href: "#" },
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "280px",
        flexShrink: 0,
      }}
    >
      <section
        style={{
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            color: "#333",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            padding: "10px 0",
            borderBottom: "2px solid #333",
            marginBottom: "15px",
          }}
        >
          最近の投稿
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {recentPosts.map((post) => (
            <li
              key={post.title}
              style={{
                borderBottom: "1px solid #e5e5e5",
              }}
            >
              <a
                href={post.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 0",
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "13px",
                  color: "#333",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#4CAF50";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#333";
                }}
              >
                <span style={{ color: "#999", fontSize: "12px" }}>›</span>
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
