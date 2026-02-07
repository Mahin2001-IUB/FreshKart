
export default function DeliveryImage() {
  return (
    <section style={styles.wrapper}>
      <div style={styles.container}>
        {/* Text content */}
        <div style={styles.textBox}>
          <h2 style={styles.heading}>
            Fast & Reliable Delivery 🚚
          </h2>
          <p style={styles.subtext}>
            Fresh groceries delivered to your doorstep with care, speed,
            and quality you can trust.
          </p>

          <div style={styles.cityRow}>
            {["Dhaka", "Barisal", "Khulna"].map((city) => (
              <span key={city} style={styles.cityPill}>
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Image */}
        <div style={styles.imageBox}>
          <img
            src="/pic2.png"
            alt="Delivery illustration"
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
    padding: "80px 20px",
    background: "linear-gradient(180deg, #fff7ed 0%, #ffffff 100%)",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
  },

  textBox: {
    padding: "20px",
  },

  heading: {
    fontSize: "36px",
    fontWeight: "800",
    marginBottom: "14px",
    color: "#111827",
  },

  subtext: {
    fontSize: "17px",
    color: "#6b7280",
    marginBottom: "26px",
    lineHeight: "1.6",
  },

  cityRow: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },

  cityPill: {
    padding: "10px 22px",
    borderRadius: "999px",
    background: "#ff8c32",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "600",
    boxShadow: "0 6px 16px rgba(255,140,50,0.35)",
  },

  imageBox: {
    display: "flex",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    maxWidth: "520px",
    height: "auto",
    borderRadius: "20px",
  },
};




