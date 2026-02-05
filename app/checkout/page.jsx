"use client";

import { useState } from "react";
import { useShopCart } from "@/app/store/ShopCartStore";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function CheckoutPage() {
  const { cart, clearCart } = useShopCart();
  const router = useRouter();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const VAT_RATE = 0.05; // 5%
  const vatAmount = subtotal * VAT_RATE;
  const total = subtotal + vatAmount;

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill all required fields");
      return;
    }

    // 🔒 No backend yet — simulate order
    alert("✅ Order placed successfully!");

    clearCart();
    router.push("/");
  };

  if (cart.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "40px" }}>Cart is empty</p>;
  }

  return (
<>
<Navbar></Navbar>
    <main style={{ maxWidth: "1000px", margin: "40px auto", padding: "20px" }}>
      <h1>Checkout</h1>

      {/* ORDER SUMMARY */}
      <section style={styles.section}>
        <h2>Order Summary</h2>

        {cart.map((item) => (
          <div key={item.id} style={styles.item}>
            <span>{item.name} × {item.qty}</span>
            <span>Tk {item.price * item.qty}</span>
          </div>
        ))}

        <div style={styles.line} />

        <div style={styles.item}>
          <strong>Subtotal</strong>
          <strong>Tk {subtotal}</strong>
        </div>

        <div style={styles.item}>
          <span>VAT (5%)</span>
          <span>Tk {vatAmount.toFixed(2)}</span>
        </div>

        <div style={styles.item}>
          <strong>Total</strong>
          <strong>Tk {total.toFixed(2)}</strong>
        </div>
      </section>

      {/* CUSTOMER FORM */}
      <section style={styles.section}>
        <h2>Customer Details</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="name"
            placeholder="Full Name *"
            value={customer.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="phone"
            placeholder="Phone Number *"
            value={customer.phone}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="city"
            placeholder="City"
            value={customer.city}
            onChange={handleChange}
            style={styles.input}
          />

          <textarea
            name="address"
            placeholder="Full Address *"
            value={customer.address}
            onChange={handleChange}
            style={styles.textarea}
          />

          <button type="submit" style={styles.placeOrderBtn}>
            Place Order
          </button>
        </form>
      </section>
    </main>
    <Footer></Footer>
</>
  );

}

/* ================= STYLES ================= */

const styles = {
  section: {
    marginTop: "30px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  line: {
    height: "1px",
    background: "#ddd",
    margin: "15px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minHeight: "80px",
  },
  placeOrderBtn: {
    marginTop: "10px",
    padding: "12px",
    background: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
};
