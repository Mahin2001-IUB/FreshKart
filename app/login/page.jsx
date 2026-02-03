// 'use client';

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/app/lib/firebase";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";

// export default function LoginPage() {
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("Login successful ✅");

//       // ✅ REDIRECT TO HOME PAGE
//       router.push("/");
//     } catch (error) {
//       alert("Invalid email or password ❌");
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div style={styles.page}>
//         <div style={styles.card}>
//           <h2 style={styles.title}>Welcome Back 👋</h2>
//           <p style={styles.subtitle}>Login to continue shopping</p>

//           <form onSubmit={handleSubmit}>
//             <input
//               name="email"
//               type="email"
//               placeholder="Enter your email"
//               style={styles.input}
//               required
//             />

//             <input
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               style={styles.input}
//               required
//             />

//             <button type="submit" style={styles.button}>
//               Login
//             </button>
//           </form>

//           {/* Divider */}
//           <div style={styles.dividerBox}>
//             <span style={styles.dividerLine}></span>
//             <span style={styles.dividerText}>or continue with</span>
//             <span style={styles.dividerLine}></span>
//           </div>

//           {/* Social buttons (UI only) */}
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
//             <Link href="/forgot-password" style={styles.link}>
//               Forgot password?
//             </Link>
//             <Link href="/register" style={styles.link}>
//               Create account
//             </Link>
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
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     backgroundColor: "#059669",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     fontWeight: "600",
//     cursor: "pointer",
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
//   },
//   extra: {
//     display: "flex",
//     justifyContent: "space-between",
//     fontSize: "13px",
//   },
//   link: {
//     color: "#059669",
//     textDecoration: "none",
//     fontWeight: "500",
//   },
// };
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // ✅ redirect to home
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
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
              name="email"
              type="email"
              placeholder="Email"
              required
              style={styles.input}
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              style={styles.input}
            />

            {error && (
              <p style={styles.error}>
                {error}
              </p>
            )}

            <button
              type="submit"
              style={{
                ...styles.button,
                opacity: loading ? 0.7 : 1,
              }}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div style={styles.extra}>
            <span>Don’t have an account?</span>
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
    background: "linear-gradient(135deg,#ecfeff,#f0fdf4)",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "32px",
    borderRadius: "14px",
    backgroundColor: "#fff",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "700",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#6b7280",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#059669",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: "6px",
  },
  error: {
    color: "#dc2626",
    fontSize: "13px",
    marginBottom: "8px",
    textAlign: "center",
  },
  extra: {
    marginTop: "16px",
    display: "flex",
    justifyContent: "center",
    gap: "6px",
    fontSize: "14px",
  },
  link: {
    color: "#059669",
    fontWeight: "600",
    textDecoration: "none",
  },
};

