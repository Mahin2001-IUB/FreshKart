

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useShopCart } from "@/app/store/ShopCartStore";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function CheckoutPage() {
  const { cart, clearCart } = useShopCart();
  const router = useRouter();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const vat = subtotal * 0.05;
  const total = subtotal + vat;

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customer.name || !customer.phone || !customer.city || !customer.address) {
      alert("Please fill all required fields");
      return;
    }

    const newOrder = {
      id: "ORD-" + Date.now(),
      customer,
      items: cart,
      subtotal: subtotal.toFixed(2),
      vat: vat.toFixed(2),
      total: total.toFixed(2),
      paymentMethod: "Cash on Delivery",
      date: new Date().toLocaleString(),
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.unshift(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    clearCart();
    router.push("/orders");
  };

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <p style={{ textAlign: "center", marginTop: "60px" }}>
          Your cart is empty.
        </p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main style={styles.page}>
        <h1 style={styles.title}>Checkout</h1>

        <div style={styles.layout}>
          {/* CUSTOMER DETAILS */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Customer Details</h2>

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

              <select
                name="city"
                value={customer.city}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="">Select City *</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Barishal">Barishal</option>
                <option value="Khulna">Khulna</option>
              </select>

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
          </div>

          {/* ORDER SUMMARY */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Order Summary</h2>

            {cart.map((item) => (
              <div key={item.id} style={styles.row}>
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>Tk {item.price * item.qty}</span>
              </div>
            ))}

            <hr style={styles.divider} />

            <div style={styles.row}>
              <span>Subtotal</span>
              <span>Tk {subtotal.toFixed(2)}</span>
            </div>

            <div style={styles.row}>
              <span>VAT (5%)</span>
              <span>Tk {vat.toFixed(2)}</span>
            </div>

            <div style={styles.totalRow}>
              <strong>Total</strong>
              <strong>Tk {total.toFixed(2)}</strong>
            </div>
          </div>
        </div>
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
    gridTemplateColumns: "1.2fr 1fr",
    gap: "30px",
  },
  card: {
    background: "#fff",
    borderRadius: "14px",
    padding: "24px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
  },
  cardTitle: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    minHeight: "90px",
    fontSize: "14px",
  },
  placeOrderBtn: {
    marginTop: "10px",
    padding: "14px",
    background: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    fontSize: "15px",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "14px",
    fontSize: "18px",
  },
  divider: {
    margin: "16px 0",
  },
};




