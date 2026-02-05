// "use client";

// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";

// export default function OrdersPage() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const savedOrders =
//       JSON.parse(localStorage.getItem("orders")) || [];
//     setOrders(savedOrders);
//   }, []);

//   // ✅ DELETE SINGLE ORDER
//   const deleteOrder = (id) => {
//     const updatedOrders = orders.filter((order) => order.id !== id);
//     setOrders(updatedOrders);
//     localStorage.setItem("orders", JSON.stringify(updatedOrders));
//   };

//   // ✅ CLEAR ALL ORDERS
//   const clearAllOrders = () => {
//     if (!confirm("Are you sure you want to delete all orders?")) return;
//     localStorage.removeItem("orders");
//     setOrders([]);
//   };

//   return (
//     <>
//       <Navbar />

//       <main style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
//         <div style={styles.header}>
//           <h1>My Orders</h1>

//           {orders.length > 0 && (
//             <button onClick={clearAllOrders} style={styles.clearBtn}>
//               Clear All Orders
//             </button>
//           )}
//         </div>

//         {orders.length === 0 ? (
//           <p>You have no orders yet.</p>
//         ) : (
//           orders.map((order) => (
//             <div key={order.id} style={styles.card}>
//               <div style={styles.cardHeader}>
//                 <div>
//                   <h3>Order ID: {order.id}</h3>
//                   <p>Date: {order.date}</p>
//                   <p>
//                     <b>Payment:</b> {order.paymentMethod}
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => deleteOrder(order.id)}
//                   style={styles.deleteBtn}
//                 >
//                   Delete
//                 </button>
//               </div>

//               <hr style={{ margin: "12px 0" }} />

//               {order.items.map((item) => (
//                 <div key={item.id} style={styles.row}>
//                   <span>
//                     {item.name} × {item.qty}
//                   </span>
//                   <span>Tk {item.price * item.qty}</span>
//                 </div>
//               ))}

//               <hr style={{ margin: "12px 0" }} />

//               <div style={styles.row}>
//                 <span>Subtotal</span>
//                 <span>Tk {order.subtotal}</span>
//               </div>

//               <div style={styles.row}>
//                 <span>VAT</span>
//                 <span>Tk {order.vat}</span>
//               </div>

//               <div style={styles.total}>
//                 <strong>Total</strong>
//                 <strong>Tk {order.total}</strong>
//               </div>

//               <hr style={{ margin: "12px 0" }} />

//               <p>
//                 <b>Name:</b> {order.customer.name}
//               </p>
//               <p>
//                 <b>Phone:</b> {order.customer.phone}
//               </p>
//               <p>
//                 <b>Address:</b> {order.customer.address}
//               </p>
//             </div>
//           ))
//         )}
//       </main>

//       <Footer />
//     </>
//   );
// }

// /* ================= STYLES ================= */

// const styles = {
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "20px",
//   },
//   clearBtn: {
//     background: "#dc2626",
//     color: "#fff",
//     border: "none",
//     padding: "8px 14px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "14px",
//   },
//   card: {
//     border: "1px solid #e5e7eb",
//     borderRadius: "12px",
//     padding: "20px",
//     marginBottom: "20px",
//     background: "#fff",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
//   },
//   cardHeader: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//   },
//   deleteBtn: {
//     background: "#ef4444",
//     color: "#fff",
//     border: "none",
//     padding: "6px 12px",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "13px",
//     height: "fit-content",
//   },
//   row: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: "6px",
//   },
//   total: {
//     display: "flex",
//     justifyContent: "space-between",
//     fontSize: "18px",
//     marginTop: "8px",
//   },
// };

"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  // ✅ DELETE SINGLE ORDER WITH CONFIRMATION
  const deleteOrder = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmDelete) return;

    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // ✅ CLEAR ALL ORDERS WITH CONFIRMATION
  const clearAllOrders = () => {
    const confirmClear = window.confirm(
      "This will delete ALL orders. Are you sure?"
    );

    if (!confirmClear) return;

    localStorage.removeItem("orders");
    setOrders([]);
  };

  return (
    <>
      <Navbar />

      <main style={styles.page}>
        <div style={styles.header}>
          <h1>My Orders</h1>

          {orders.length > 0 && (
            <button onClick={clearAllOrders} style={styles.clearBtn}>
              Clear All Orders
            </button>
          )}
        </div>

        {orders.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "40px" }}>
            No orders found.
          </p>
        ) : (
          orders.map((order) => (
            <div key={order.id} style={styles.card}>
              <div style={styles.cardHeader}>
                <div>
                  <p><strong>Order ID:</strong> {order.id}</p>
                  <p><strong>Date:</strong> {order.date}</p>
                  <p><strong>Payment:</strong> {order.paymentMethod}</p>
                </div>

                <button
                  onClick={() => deleteOrder(order.id)}
                  style={styles.deleteBtn}
                >
                  Delete
                </button>
              </div>

              <hr />

              {order.items.map((item) => (
                <div key={item.id} style={styles.row}>
                  <span>{item.name} × {item.qty}</span>
                  <span>Tk {item.price * item.qty}</span>
                </div>
              ))}

              <hr />

              <div style={styles.row}>
                <span>Subtotal</span>
                <span>Tk {order.subtotal}</span>
              </div>

              <div style={styles.row}>
                <span>VAT</span>
                <span>Tk {order.vat}</span>
              </div>

              <div style={styles.totalRow}>
                <strong>Total</strong>
                <strong>Tk {order.total}</strong>
              </div>

              <hr />

              <p><strong>Name:</strong> {order.customer.name}</p>
              <p><strong>Phone:</strong> {order.customer.phone}</p>
              <p><strong>Address:</strong> {order.customer.address}</p>
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
  page: {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "20px",
  },
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
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  card: {
    background: "#fff",
    borderRadius: "14px",
    padding: "20px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
    marginBottom: "24px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    margin: "8px 0",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    fontSize: "17px",
  },
};




