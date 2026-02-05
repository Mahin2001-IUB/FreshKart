"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  // ✅ DELETE SINGLE ORDER
  const deleteOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // ✅ CLEAR ALL ORDERS
  const clearAllOrders = () => {
    if (!confirm("Are you sure you want to delete all orders?")) return;
    localStorage.removeItem("orders");
    setOrders([]);
  };

  return (
    <>
      <Navbar />

      <main style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
        <div style={styles.header}>
          <h1>My Orders</h1>

          {orders.length > 0 && (
            <button onClick={clearAllOrders} style={styles.clearBtn}>
              Clear All Orders
            </button>
          )}
        </div>

        {orders.length === 0 ? (
          <p>You have no orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} style={styles.card}>
              <div style={styles.cardHeader}>
                <div>
                  <h3>Order ID: {order.id}</h3>
                  <p>Date: {order.date}</p>
                  <p>
                    <b>Payment:</b> {order.paymentMethod}
                  </p>
                </div>

                <button
                  onClick={() => deleteOrder(order.id)}
                  style={styles.deleteBtn}
                >
                  Delete
                </button>
              </div>

              <hr style={{ margin: "12px 0" }} />

              {order.items.map((item) => (
                <div key={item.id} style={styles.row}>
                  <span>
                    {item.name} × {item.qty}
                  </span>
                  <span>Tk {item.price * item.qty}</span>
                </div>
              ))}

              <hr style={{ margin: "12px 0" }} />

              <div style={styles.row}>
                <span>Subtotal</span>
                <span>Tk {order.subtotal}</span>
              </div>

              <div style={styles.row}>
                <span>VAT</span>
                <span>Tk {order.vat}</span>
              </div>

              <div style={styles.total}>
                <strong>Total</strong>
                <strong>Tk {order.total}</strong>
              </div>

              <hr style={{ margin: "12px 0" }} />

              <p>
                <b>Name:</b> {order.customer.name}
              </p>
              <p>
                <b>Phone:</b> {order.customer.phone}
              </p>
              <p>
                <b>Address:</b> {order.customer.address}
              </p>
            </div>
          ))
        )}
      </main>

      <Footer />
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  clearBtn: {
    background: "#dc2626",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
  },
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  deleteBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    height: "fit-content",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "6px",
  },
  total: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
    marginTop: "8px",
  },
};


