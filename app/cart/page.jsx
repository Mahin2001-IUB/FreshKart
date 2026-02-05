"use client";

import Link from "next/link";
import { useShopCart } from "@/app/store/ShopCartStore";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function CartPage() {
  const { cart, removeFromCart } = useShopCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <main style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
        <h1>Your Cart</h1>
        <p style={{ marginTop: "20px" }}>Your cart is empty.</p>
        <Link href="/">
          <button style={styles.backBtn}>Go Shopping</button>
        </Link>
      </main>
    );
  }

  return (
   <>
   <Navbar></Navbar>
    <main style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
      <h1>Your Cart</h1>

      <div style={{ marginTop: "30px" }}>
        {cart.map((item) => (
          <div key={item.id} style={styles.item}>
            <div>
              <h3>{item.name}</h3>
              <p>Tk {item.price}</p>
              <p>Qty: {item.qty}</p>
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

      <hr style={{ margin: "30px 0" }} />

      <h2>Total: Tk {totalPrice}</h2>

      <button style={styles.checkoutBtn}>Checkout</button>
    </main>
   <Footer></Footer>
   </>
  );
}

/* ===== STYLES ===== */

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "12px",
  },
  removeBtn: {
    background: "#dc2626",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  checkoutBtn: {
    marginTop: "20px",
    padding: "12px 24px",
    background: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  backBtn: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#0d9488",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
