import Image from "next/image";

export default function EarnAndHow() {
  return (
    <section
      style={{
        minHeight: "100vh",               
        display: "flex",
        alignItems: "center",               
        justifyContent: "center",           
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        {/* TEXT */}
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "12px",
          }}
        >
          Shop & Earn Points
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            maxWidth: "650px",
            margin: "0 auto 32px",
            lineHeight: "1.6",
          }}
        >
          The more you shop the more you earn – cash back, free shipping,
          exclusive offers and more. Discover the perks of FreshKart membership.
        </p>

        {/* IMAGE */}
        <Image
          src="/phone.png"
          alt="FreshKart mobile app"
          width={700}
          height={450}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "18px",
            boxShadow: "0 14px 35px rgba(0,0,0,0.2)",
            margin: "0 auto",
          }}
        />
      </div>
    </section>
  );
}

