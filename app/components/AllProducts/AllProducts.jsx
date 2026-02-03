

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function AllProducts() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const products = [
    { id: 1, name: "Oil", price: 1500, rating: 4.3, category: "Grocery", image: "/1.png" },
    { id: 2, name: "Ghee", price: 1000, rating: 5, category: "Grocery", image: "/2.png" },
    { id: 3, name: "Honey Nut", price: 800, rating: 4, category: "Snacks", image: "/3.png" },
    { id: 4, name: "Daal", price: 150, rating: 4.7, category: "Grocery", image: "/4.png" },
    { id: 5, name: "Cashew Nut", price: 1400, rating: 4.6, category: "Snacks", image: "/5.png" },
    { id: 6, name: "Red Flour", price: 100, rating: 4.8, category: "Grocery", image: "/6.png" },
    { id: 7, name: "Rice", price: 150, rating: 4.4, category: "Grocery", image: "/7.png" },
    { id: 8, name: "Cumin Powder", price: 130, rating: 4.1, category: "Spices", image: "/8.png" },
    { id: 9, name: "Combo Powder", price: 430, rating: 4.9, category: "Spices", image: "/9.png" },
    { id: 10, name: "Crystal Honey", price: 1300, rating: 5, category: "Grocery", image: "/10.png" },
    { id: 11, name: "Dates", price: 1250, rating: 4.6, category: "Snacks", image: "/11.png" },
    { id: 12, name: "Milk", price: 140, rating: 4.5, category: "Dairy", image: "/13.png" },
    { id: 13, name: "Olive Pickle", price: 200, rating: 4.5, category: "Grocery", image: "/12.png" },
    { id: 14, name: "Fruit Basket", price: 1600, rating: 4.8, category: "Fruit", image: "/14.png" },
    { id: 15, name: "Avocado", price: 800, rating: 4.1, category: "Fruit", image: "/15.png" },
    { id: 16, name: "Cheese", price: 900, rating: 4.4, category: "Dairy", image: "/17.png"}
  ];

  let filtered =
    category === "All"
      ? [...products]
      : products.filter((p) => p.category === category);

  if (searchQuery) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.category.toLowerCase().includes(searchQuery)
    );
  }

  if (sort === "priceLow") filtered.sort((a, b) => a.price - b.price);
  if (sort === "priceHigh") filtered.sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

  return (
    <main style={{ padding: "40px", maxWidth: "1400px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        All Products
      </h1>

      <div style={styles.controls}>
        <div style={styles.tabs}>
          {["All", "Grocery", "Spices", "Snacks", "Dairy", "Fruit"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                ...styles.tab,
                ...(category === cat ? styles.activeTab : {}),
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <div style={styles.grid}>
        {filtered.length === 0 && (
          <p style={{ gridColumn: "1/-1", textAlign: "center" }}>
            No products found
          </p>
        )}

        {filtered.map((product) => (
          <div key={product.id} style={styles.cardWrapper}>
            <div className="card" style={styles.card}>
              <div style={styles.imageBox}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={180}
                  style={styles.productImage}
                />
              </div>

              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.price}>Tk {product.price}</p>
              <p style={styles.rating}>⭐ {product.rating}</p>

              <div style={styles.actions}>
                <Link href={`/products/${product.id}`}>
                  <button style={styles.viewBtn}>View</button>
                </Link>
                <button style={styles.cartBtn}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

const styles = {
  controls: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
    gap: "15px",
    flexWrap: "wrap",
  },
  tabs: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },
  tab: {
    padding: "8px 18px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
  activeTab: {
    backgroundColor: "#ff8c32",
    color: "#fff",
    border: "1px solid #ff8c32",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "30px",
    justifyItems: "center",
  },

  cardWrapper: {
    transition: "transform 0.2s ease",
  },
  card: {
    width: "230px",
    border: "1px solid #eee",
    borderRadius: "14px",
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#fff",
    cursor: "pointer",
    transition: "all 0.25s ease",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  imageBox: {
    overflow: "hidden",
    borderRadius: "12px",
    marginBottom: "10px",
  },
  productImage: {
    transition: "transform 0.3s ease",
  },
  productName: {
    fontSize: "15px",
    fontWeight: "600",
    marginBottom: "6px",
  },
  price: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  rating: {
    color: "#f59e0b",
    fontSize: "13px",
  },
  actions: {
    display: "flex",
    gap: "8px",
    marginTop: "10px",
  },
  viewBtn: {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
  },
  cartBtn: {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "none",
    background: "#ff8c32",
    color: "#fff",
    cursor: "pointer",
  },
};








