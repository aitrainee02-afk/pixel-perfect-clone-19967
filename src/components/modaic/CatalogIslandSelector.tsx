import { useState } from "react";

type PlatformId = "amazon" | "myntra" | "shopify";

const platforms: Array<{ id: PlatformId; label: string }> = [
  { id: "amazon", label: "Amazon" },
  { id: "myntra", label: "Myntra" },
  { id: "shopify", label: "Shopify" },
];

const productsByPlatform: Record<PlatformId, Array<{ name: string; price: string; img: string }>> = {
  amazon: [
    { name: "Satin Drape Dress", price: "₹4,999", img: "https://picsum.photos/160/180?random=11" },
    { name: "Leather Mini Bag", price: "₹7,499", img: "https://picsum.photos/160/180?random=12" },
    { name: "Crystal Perfume", price: "₹2,999", img: "https://picsum.photos/160/180?random=13" },
    { name: "Black Chronograph", price: "₹11,999", img: "https://picsum.photos/160/180?random=14" },
    { name: "Editorial Eyewear", price: "₹3,499", img: "https://picsum.photos/160/180?random=15" },
    { name: "Studio Sneaker", price: "₹5,999", img: "https://picsum.photos/160/180?random=16" },
  ],
  myntra: [
    { name: "Linen Blazer", price: "₹6,299", img: "https://picsum.photos/160/180?random=21" },
    { name: "Pleated Skirt", price: "₹3,499", img: "https://picsum.photos/160/180?random=22" },
    { name: "Silk Scarf", price: "₹1,999", img: "https://picsum.photos/160/180?random=23" },
    { name: "Gold Hoops", price: "₹2,499", img: "https://picsum.photos/160/180?random=24" },
    { name: "Knit Cardigan", price: "₹4,799", img: "https://picsum.photos/160/180?random=25" },
    { name: "Suede Loafer", price: "₹6,899", img: "https://picsum.photos/160/180?random=26" },
  ],
  shopify: [
    { name: "Organic Tee", price: "₹1,499", img: "https://picsum.photos/160/180?random=31" },
    { name: "Denim Jacket", price: "₹5,599", img: "https://picsum.photos/160/180?random=32" },
    { name: "Canvas Tote", price: "₹2,199", img: "https://picsum.photos/160/180?random=33" },
    { name: "Wool Beanie", price: "₹999", img: "https://picsum.photos/160/180?random=34" },
    { name: "Sport Watch", price: "₹8,999", img: "https://picsum.photos/160/180?random=35" },
    { name: "Cotton Hoodie", price: "₹3,899", img: "https://picsum.photos/160/180?random=36" },
  ],
};

export default function CatalogIslandSelector() {
  const [selected, setSelected] = useState<PlatformId>("amazon");
  const [animKey, setAnimKey] = useState(0);

  const handleSelect = (id: PlatformId) => {
    if (id === selected) return;
    setSelected(id);
    setAnimKey((k) => k + 1);
  };

  const products = productsByPlatform[selected];
  const platformLabel = platforms.find((p) => p.id === selected)?.label ?? "";

  return (
    <div className="w-full" style={{ background: "#0a0812" }}>
      <style>{`
        @keyframes modaicUnderlineIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes modaicCatalogIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* Ghost button stack */}
      <div className="mx-auto flex w-full max-w-[280px] flex-col gap-3">
        {platforms.map((p) => {
          const isActive = selected === p.id;
          return (
            <button
              key={p.id}
              onClick={() => handleSelect(p.id)}
              className="modaic-ghost group relative flex h-[52px] w-full flex-col items-center justify-center"
              style={{
                background: isActive ? "rgba(140, 50, 230, 0.15)" : "transparent",
                border: `1px solid ${isActive ? "#a855f7" : "rgba(255,255,255,0.1)"}`,
                borderRadius: 10,
                color: isActive ? "#ffffff" : "rgba(255,255,255,0.4)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (isActive) return;
                e.currentTarget.style.borderColor = "rgba(180, 80, 255, 0.45)";
                e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                e.currentTarget.style.background = "rgba(100, 30, 180, 0.08)";
              }}
              onMouseLeave={(e) => {
                if (isActive) return;
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <span>{p.label}</span>
              {isActive && (
                <span
                  aria-hidden
                  style={{
                    display: "block",
                    width: 36,
                    height: 1.5,
                    background: "#a855f7",
                    marginTop: 6,
                    transformOrigin: "center",
                    animation: "modaicUnderlineIn 250ms ease-out forwards",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Catalog panel */}
      <div className="mx-auto mt-8 max-w-2xl">
        <div
          key={animKey}
          style={{
            background: "#110e1c",
            border: "1px solid rgba(180,100,255,0.15)",
            borderRadius: 14,
            padding: 28,
            animation: "modaicCatalogIn 300ms ease-out 180ms both",
          }}
        >
          <div className="flex items-center gap-3">
            <h4 style={{ fontSize: 18, color: "#fff", fontWeight: 500, margin: 0 }}>{platformLabel}</h4>
            <span
              style={{
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                background: "rgba(168,85,247,0.15)",
                color: "#c084fc",
                border: "1px solid rgba(168,85,247,0.3)",
                borderRadius: 20,
                padding: "3px 10px",
              }}
            >
              Live
            </span>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 4 }}>12 products synced</p>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {products.map((prod) => (
              <div
                key={prod.name}
                style={{
                  background: "#1a1428",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <img
                  src={prod.img}
                  alt={prod.name}
                  loading="lazy"
                  style={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "16 / 18",
                    objectFit: "cover",
                    borderRadius: "8px 8px 0 0",
                  }}
                />
                <div style={{ padding: "8px 10px" }}>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", margin: 0 }}>{prod.name}</p>
                  <p style={{ fontSize: 12, color: "#c084fc", margin: 0 }}>{prod.price}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="modaic-sync"
            style={{
              width: "100%",
              height: 44,
              marginTop: 20,
              background: "rgba(120, 40, 200, 0.3)",
              border: "1px solid rgba(168, 85, 247, 0.5)",
              borderRadius: 10,
              color: "#e9d5ff",
              fontSize: 13,
              letterSpacing: "0.05em",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(140,50,230,0.45)";
              e.currentTarget.style.borderColor = "#a855f7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(120, 40, 200, 0.3)";
              e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.5)";
            }}
          >
            Sync catalog →
          </button>
        </div>
      </div>
    </div>
  );
}
