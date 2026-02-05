"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function OrderSuccessPage() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("latest_order");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  if (!order) {
    return (
      <>
        <Navbar />
        <p style={{ textAlign: "center", marginTop: "60px" }}>
          No order found.
        </p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main style={styles.page}>
        <div style={styles.card}>
          <h1 style={styles.title}>🎉 Order Confirmed</h1>
          <p style={styles.subTitle}>
            Thank you for shopping with FreshKart
          </p>

          <div style={styles.section}>
            <strong>Order ID:</strong> {order.id} <br />
            <strong>Date:</strong> {order.date}
          </div>

          {/* CUSTOMER INFO */}
          <div style={styles.section}>
            <h3>Customer Details</h3>
            <p>
              <b>Name:</b> {order.customer.name} <br />
              <b>Phone:</b> {order.customer.phone} <br />
              <b>City:</b> {order.customer.city || "—"} <br />
              <b>Address:</b> {order.customer.address}
            </p>
          </div>

          {/* ORDER ITEMS */}
          <div style={styles.section}>
            <h3>Order Summary</h3>

            {order.items.map((item) => (
              <div key={item.id} style={styles.row}>
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>Tk {item.price * item.qty}</span>
              </div>
            ))}

            <hr />

            <div style={styles.row}>
              <span>Subtotal</span>
              <span>Tk {order.subtotal}</span>
            </div>

            <div style={styles.row}>
              <span>VAT (5%)</span>
              <span>Tk {order.vat}</span>
            </div>

            <div style={styles.totalRow}>
              <strong>Total</strong>
              <strong>Tk {order.total}</strong>
            </div>
          </div>

          {/* PAYMENT */}
          <div style={styles.section}>
            <h3>Payment Method</h3>
            <p>{order.paymentMethod}</p>
          </div>

          <Link href="/">
            <button style={styles.homeBtn}>Continue Shopping</button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    color: "#16a34a",
  },
  subTitle: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#555",
  },
  section: {
    marginTop: "20px",
    fontSize: "15px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",
    fontSize: "18px",
  },
  homeBtn: {
    marginTop: "30px",
    width: "100%",
    padding: "14px",
    background: "#0d9488",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
};
