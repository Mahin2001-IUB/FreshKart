// import Image from "next/image";

// export default function EarnAndHow() {
//   return (
//     <section
//       style={{
//         minHeight: "100vh",               
//         display: "flex",
//         alignItems: "center",               
//         justifyContent: "center",           
//         padding: "40px 20px",
//       }}
//     >
//       <div
//         style={{
//           textAlign: "center",
//           maxWidth: "900px",
//         }}
//       >
//         {/* TEXT */}
//         <h2
//           style={{
//             fontSize: "28px",
//             fontWeight: "700",
//             marginBottom: "12px",
//           }}
//         >
//           Shop & Earn Points
//         </h2>

//         <p
//           style={{
//             fontSize: "16px",
//             color: "#555",
//             maxWidth: "650px",
//             margin: "0 auto 32px",
//             lineHeight: "1.6",
//           }}
//         >
//           The more you shop the more you earn – cash back, free shipping,
//           exclusive offers and more. Discover the perks of FreshKart membership.
//         </p>

//         {/* IMAGE */}
//         <Image
//           src="/phone.png"
//           alt="FreshKart mobile app"
//           width={700}
//           height={450}
//           style={{
//             maxWidth: "100%",
//             height: "auto",
//             borderRadius: "18px",
//             boxShadow: "0 14px 35px rgba(0,0,0,0.2)",
//             margin: "0 auto",
//           }}
//         />
//       </div>
//     </section>
//   );
// }
import Image from "next/image";

export default function EarnAndHow() {
  return (
    <section style={styles.wrapper}>
      <div style={styles.container}>
        {/* LEFT CONTENT */}
        <div style={styles.textBox}>
          <h2 style={styles.heading}>Shop & Earn Points 💰</h2>

          <p style={styles.subtext}>
            The more you shop, the more you earn. Unlock cashback, free delivery,
            and exclusive member-only offers with FreshKart rewards.
          </p>

          <div style={styles.benefits}>
            <div style={styles.benefitCard}>🪙 Earn points on every order</div>
            <div style={styles.benefitCard}>🚚 Free delivery on selected items</div>
            <div style={styles.benefitCard}>🎁 Special deals for members</div>
          </div>

          <button style={styles.cta}>Start Earning Today</button>
        </div>

        {/* RIGHT IMAGE */}
        <div style={styles.imageBox}>
          <Image
            src="/phone.png"
            alt="FreshKart mobile app"
            width={520}
            height={360}
            style={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    width: "100%",
    padding: "100px 20px",
    background: "linear-gradient(180deg, #ffffff, #f9fafb)",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center",
  },

  textBox: {
    padding: "10px",
  },

  heading: {
    fontSize: "38px",
    fontWeight: "800",
    marginBottom: "14px",
    color: "#111827",
  },

  subtext: {
    fontSize: "17px",
    color: "#6b7280",
    lineHeight: "1.7",
    marginBottom: "28px",
  },

  benefits: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    marginBottom: "32px",
  },

  benefitCard: {
    background: "#ffffff",
    padding: "14px 18px",
    borderRadius: "14px",
    fontSize: "15px",
    boxShadow: "0 8px 18px rgba(0,0,0,0.06)",
  },

  cta: {
    padding: "14px 34px",
    borderRadius: "999px",
    border: "none",
    background: "#ff8c32",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(255,140,50,0.4)",
  },

  imageBox: {
    background: "#ffffff",
    borderRadius: "26px",
    padding: "22px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    display: "flex",
    justifyContent: "center",
  },

  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "18px",
  },
};

