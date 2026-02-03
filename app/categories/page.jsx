import Image from "next/image";

export default function CategoriesPage() {
  const categories = [
    { name: "Grocery", image: "/groceries.png" },
    { name: "Vegetables", image: "/veg.png" },
    { name: "Fruits", image: "/fruit.png" },
    { name: "Spices", image: "/powder.png" },
    { name: "Snacks", image: "/snack.png" },
    { name: "Dairy", image: "/milk.png" },
    { name: "Beverages", image: "/drink.png" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Shop by Category
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "25px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.name}
            style={{
              padding: "20px",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "0.3s",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Centered Image */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "12px",
              }}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                width={80}
                height={80}
              />
            </div>

            <h3 style={{ fontSize: "16px", fontWeight: "600" }}>
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}


