// import Footer from "../components/Footer/Footer";
// import Navbar from "../components/Navbar/Navbar";

// export default function LoginPage() {
//   return (
//     <>
//       <Navbar />

//       <div style={styles.page}>
//         <div style={styles.card}>
//           <h2 style={styles.title}>Welcome Back 👋</h2>
//           <p style={styles.subtitle}>Login to continue shopping</p>

//           <form>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               style={styles.input}
//             />

//             <input
//               type="password"
//               placeholder="Enter your password"
//               style={styles.input}
//             />

//             <button style={styles.button}>Login</button>
//           </form>

//           <div style={styles.extra}>
//             <span style={styles.link}>Forgot password?</span>
//             <span style={styles.link}>Create account</span>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// const styles = {
//   page: {
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(135deg, #ecfeff, #f0fdf4)",
//     padding: "20px",
//   },
//   card: {
//     width: "100%",
//     maxWidth: "400px",
//     padding: "35px 30px",
//     borderRadius: "14px",
//     backgroundColor: "#fff",
//     boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "6px",
//     fontSize: "24px",
//     fontWeight: "700",
//   },
//   subtitle: {
//     textAlign: "center",
//     marginBottom: "25px",
//     fontSize: "14px",
//     color: "#6b7280",
//   },
//   input: {
//     width: "100%",
//     padding: "12px 14px",
//     marginBottom: "15px",
//     borderRadius: "8px",
//     border: "1px solid #e5e7eb",
//     fontSize: "14px",
//     outline: "none",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     marginTop: "10px",
//     backgroundColor: "#059669",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "16px",
//     fontWeight: "600",
//   },
//   extra: {
//     marginTop: "18px",
//     display: "flex",
//     justifyContent: "space-between",
//     fontSize: "13px",
//     color: "#059669",
//   },
//   link: {
//     cursor: "pointer",
//   },
// };

// import Footer from "../components/Footer/Footer";
// import Navbar from "../components/Navbar/Navbar";

// export default function LoginPage() {
//   return (
//     <>
//       <Navbar />

//       <div style={styles.page}>
//         <div style={styles.card}>
//           <h2 style={styles.title}>Welcome Back 👋</h2>
//           <p style={styles.subtitle}>Login to continue shopping</p>

//           <form>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               style={styles.input}
//             />

//             <input
//               type="password"
//               placeholder="Enter your password"
//               style={styles.input}
//             />

//             <button style={styles.button}>Login</button>
//           </form>

//           {/* Divider */}
//           <div style={styles.dividerBox}>
//             <span style={styles.dividerLine}></span>
//             <span style={styles.dividerText}>or continue with</span>
//             <span style={styles.dividerLine}></span>
//           </div>

//           {/* Social Login */}
//           <div style={styles.socialBox}>
//             <button style={{ ...styles.socialBtn, backgroundColor: "#db4437" }}>
//               Google
//             </button>
//             <button style={{ ...styles.socialBtn, backgroundColor: "#1877f2" }}>
//               Facebook
//             </button>
//             <button style={{ ...styles.socialBtn, backgroundColor: "#6b7280" }}>
//               Email
//             </button>
//           </div>

//           <div style={styles.extra}>
//             <span style={styles.link}>Forgot password?</span>
//             <span style={styles.link}>Create account</span>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// const styles = {
//   page: {
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(135deg, #ecfeff, #f0fdf4)",
//     padding: "20px",
//   },
//   card: {
//     width: "100%",
//     maxWidth: "400px",
//     padding: "35px 30px",
//     borderRadius: "14px",
//     backgroundColor: "#fff",
//     boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "6px",
//     fontSize: "24px",
//     fontWeight: "700",
//   },
//   subtitle: {
//     textAlign: "center",
//     marginBottom: "25px",
//     fontSize: "14px",
//     color: "#6b7280",
//   },
//   input: {
//     width: "100%",
//     padding: "12px 14px",
//     marginBottom: "15px",
//     borderRadius: "8px",
//     border: "1px solid #e5e7eb",
//     fontSize: "14px",
//     outline: "none",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     marginTop: "10px",
//     backgroundColor: "#059669",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "16px",
//     fontWeight: "600",
//   },

//   dividerBox: {
//     display: "flex",
//     alignItems: "center",
//     margin: "20px 0",
//     gap: "10px",
//   },
//   dividerLine: {
//     flex: 1,
//     height: "1px",
//     backgroundColor: "#e5e7eb",
//   },
//   dividerText: {
//     fontSize: "12px",
//     color: "#6b7280",
//   },

//   socialBox: {
//     display: "flex",
//     justifyContent: "space-between",
//     gap: "10px",
//     marginBottom: "15px",
//   },
//   socialBtn: {
//     flex: 1,
//     padding: "10px",
//     borderRadius: "8px",
//     border: "none",
//     color: "#fff",
//     cursor: "pointer",
//     fontSize: "14px",
//     fontWeight: "500",
//   },

//   extra: {
//     marginTop: "18px",
//     display: "flex",
//     justifyContent: "space-between",
//     fontSize: "13px",
//     color: "#059669",
//   },
//   link: {
//     cursor: "pointer",
//   },
// };

'use client';

import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login clicked (demo)");
  };

  return (
    <>
      <Navbar />

      <div style={styles.page}>
        <div style={styles.card}>
          <h2 style={styles.title}>Welcome Back 👋</h2>
          <p style={styles.subtitle}>Login to continue shopping</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              style={styles.input}
              required
            />

            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>

          {/* Divider */}
          <div style={styles.dividerBox}>
            <span style={styles.dividerLine}></span>
            <span style={styles.dividerText}>or continue with</span>
            <span style={styles.dividerLine}></span>
          </div>

          {/* Social Login */}
          <div style={styles.socialBox}>
            <button style={{ ...styles.socialBtn, backgroundColor: "#db4437" }}>
              Google
            </button>
            <button style={{ ...styles.socialBtn, backgroundColor: "#1877f2" }}>
              Facebook
            </button>
            <button style={{ ...styles.socialBtn, backgroundColor: "#6b7280" }}>
              Email
            </button>
          </div>

          {/* Links */}
          <div style={styles.extra}>
            <Link href="/forgot-password" style={styles.link}>
              Forgot password?
            </Link>
            <Link href="/register" style={styles.link}>
              Create account
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #ecfeff, #f0fdf4)",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "35px 30px",
    borderRadius: "14px",
    backgroundColor: "#fff",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
  },
  title: {
    textAlign: "center",
    marginBottom: "6px",
    fontSize: "24px",
    fontWeight: "700",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "14px",
    color: "#6b7280",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    backgroundColor: "#059669",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
  },
  dividerBox: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0",
    gap: "10px",
  },
  dividerLine: {
    flex: 1,
    height: "1px",
    backgroundColor: "#e5e7eb",
  },
  dividerText: {
    fontSize: "12px",
    color: "#6b7280",
  },
  socialBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  socialBtn: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
  },
  extra: {
    marginTop: "18px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
  },
  link: {
    color: "#059669",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "500",
  },
};


