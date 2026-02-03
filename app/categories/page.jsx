import Image from "next/image";

export default function CategoriesPage() {
  const categories = [
    { 
      name: "Grocery", 
      image: "/groceries.png",
      description: "Daily essentials & staples",
    },
    { 
      name: "Vegetables", 
      image: "/veg.png",
      description: "Fresh farm vegetables",
    },
    { 
      name: "Fruits", 
      image: "/fruit.png",
      description: "Seasonal & imported fruits",
    },
    { 
      name: "Spices", 
      image: "/powder.png",
      description: "Aromatic cooking spices",
    },
    { 
      name: "Snacks", 
      image: "/snack.png",
      description: "Quick bites & treats",
    },
    { 
      name: "Dairy", 
      image: "/milk.png",
      description: "Milk, cheese & butter",
    },
    { 
      name: "Beverages", 
      image: "/drink.png",
      description: "Juices & soft drinks",
    },
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Shop by Category</h1>
      <p style={styles.subtitle}>
        Browse products by category and find what you need faster
      </p>

      <div style={styles.grid}>
        {categories.map((cat) => (
          <div key={cat.name} style={styles.card}>
            <div style={styles.imageBox}>
              <Image
                src={cat.image}
                alt={cat.name}
                width={90}
                height={90}
              />
            </div>

            <h3 style={styles.name}>{cat.name}</h3>
            <p style={styles.desc}>{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "50px 20px",
    background: "linear-gradient(135deg, #ecfeff, #f0fdf4)",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    marginBottom: "8px",
    fontSize: "28px",
    fontWeight: "700",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "35px",
    color: "#6b7280",
    fontSize: "14px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "25px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    padding: "22px 18px",
    borderRadius: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.25s ease",
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "14px",
  },
  name: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "4px",
  },
  desc: {
    fontSize: "13px",
    color: "#6b7280",
  },
};


