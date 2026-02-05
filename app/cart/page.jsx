
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useShopCart } from "@/app/store/ShopCartStore";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function CartPage() {
  const { cart, removeFromCart } = useShopCart();
  const router = useRouter();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      <Navbar />

      <main style={styles.page}>
        <h1 style={styles.title}>🛒 Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <div style={styles.emptyBox}>
            <p>Your cart is empty.</p>
            <Link href="/">
              <button style={styles.primaryBtn}>Start Shopping</button>
            </Link>
          </div>
        ) : (
          <div style={styles.layout}>
            {/* LEFT: CART ITEMS */}
            <div style={styles.itemsBox}>
              {cart.map((item) => (
                <div key={item.id} style={styles.itemCard}>
                  <div>
                    <h3 style={styles.itemName}>{item.name}</h3>
                    <p style={styles.price}>Tk {item.price}</p>
                    <p style={styles.qty}>Quantity: {item.qty}</p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={styles.removeBtn}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* RIGHT: SUMMARY */}
            <div style={styles.summaryBox}>
              <h2>Order Summary</h2>

              <div style={styles.summaryRow}>
                <span>Subtotal</span>
                <span>Tk {totalPrice}</span>
              </div>

              <div style={styles.summaryRow}>
                <span>Delivery</span>
                <span>Free</span>
              </div>

              <hr />

              <div style={styles.summaryTotal}>
                <strong>Total</strong>
                <strong>Tk {totalPrice}</strong>
              </div>

              <button
                style={styles.checkoutBtn}
                onClick={() => router.push("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "20px",
  },

  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "28px",
  },

  layout: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "30px",
  },

  itemsBox: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  itemCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px",
    borderRadius: "12px",
    background: "#fff",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
  },

  itemName: {
    fontSize: "18px",
    marginBottom: "6px",
  },

  price: {
    fontWeight: "bold",
  },

  qty: {
    fontSize: "14px",
    color: "#555",
  },

  removeBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  summaryBox: {
    padding: "20px",
    borderRadius: "14px",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    height: "fit-content",
    position: "sticky",
    top: "100px",
  },

  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",
    fontSize: "15px",
  },

  summaryTotal: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
    fontSize: "18px",
  },

  checkoutBtn: {
    width: "100%",
    marginTop: "20px",
    padding: "14px",
    background: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },

  emptyBox: {
    textAlign: "center",
    padding: "60px",
    background: "#f9fafb",
    borderRadius: "14px",
  },

  primaryBtn: {
    marginTop: "20px",
    padding: "12px 24px",
    background: "#0d9488",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

