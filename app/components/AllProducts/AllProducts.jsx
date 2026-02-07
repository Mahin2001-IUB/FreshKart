"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { useShopCart } from "@/app/store/ShopCartStore";

export default function AllProducts() {
  const { user } = useAuth();
  const { addToCart } = useShopCart();

  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [minPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

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
    { id: 12, name: "Milk", price: 140, rating: 4.5, category: "Dairy", image: "/20.png" },
    { id: 13, name: "Olive Pickle", price: 200, rating: 4.5, category: "Grocery", image: "/12.png" },
    { id: 14, name: "Fruit Basket", price: 1600, rating: 4.8, category: "Fruit", image: "/14.png" },
    { id: 15, name: "Avocado", price: 800, rating: 4.1, category: "Fruit", image: "/15.png" },
    { id: 16, name: "Cheese", price: 900, rating: 4.4, category: "Dairy", image: "/17.png" },
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

  filtered = filtered.filter(
    (p) => p.price >= minPrice && p.price <= maxPrice
  );

  if (sort === "priceLow") filtered.sort((a, b) => a.price - b.price);
  if (sort === "priceHigh") filtered.sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

  return (
    <main style={{ padding: "40px", maxWidth: "1400px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        All Products
      </h1>

      {/* CONTROLS */}
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

        <div style={styles.filterBox}>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={styles.select}
          >
            <option value="">Sort By</option>
            <option value="priceLow">Price: Low → High</option>
            <option value="priceHigh">Price: High → Low</option>
            <option value="rating">Top Rated</option>
          </select>

          <div style={styles.priceBox}>
            <strong>Price</strong>
            <input
              type="range"
              min="0"
              max="2000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <div style={styles.priceValues}>
              ৳ {minPrice} — ৳ {maxPrice}
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div style={styles.grid}>
        {filtered.map((product) => (
          <div key={product.id} style={styles.cardWrapper}>
            <div style={styles.card}>
              <div style={styles.imageBox}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.price}>Tk {product.price}</p>
                <p style={styles.rating}>⭐ {product.rating}</p>
              </div>

              <div style={styles.actions}>
                <Link href={`/products/${product.id}`}>
                  <button style={styles.viewBtn}>View</button>
                </Link>

                {user && (
                  <button
                    style={styles.cartBtn}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

/* ================= STYLES ================= */

const styles = {
  controls: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
    gap: "20px",
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
  filterBox: {
    display: "flex",
    gap: "25px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  select: {
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    cursor: "pointer",
  },
  priceBox: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    minWidth: "180px",
  },
  priceValues: {
    fontSize: "13px",
    fontWeight: "bold",
    color: "#ff8c32",
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

  /* 🔥 FIX IS HERE */
  card: {
    width: "230px",
    minHeight: "380px",
    border: "1px solid #eee",
    borderRadius: "14px",
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#fff",
    color: "#111", // ✅ FIX: prevent dark-mode fade
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  imageBox: {
    width: "180px",
    height: "180px",
    margin: "0 auto 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
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
    gap: "10px",
    justifyContent: "center",
    marginTop: "12px",
  },
  viewBtn: {
    padding: "8px 14px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
    color: "#111",
  },
  cartBtn: {
    padding: "8px 14px",
    borderRadius: "6px",
    border: "none",
    background: "#ff8c32",
    color: "#fff",
    cursor: "pointer",
  },
};
