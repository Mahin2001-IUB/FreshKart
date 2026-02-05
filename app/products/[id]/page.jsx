
// import Footer from "@/app/components/Footer/Footer";
// import Navbar from "@/app/components/Navbar/Navbar";
// import Image from "next/image";

// const products = [
//   {
//     id: 1,
//     name: "Oil",

//     price: 1500,
//     rating: 4.3,
//     image: "/1.png",
//     description: "Premium cooking oil suitable for everyday use.",
//     details: ["Cold refined", "Light texture", "Cholesterol free"],
//   },
//   {
//     id: 2,
//     name: "Ghee",
//     price: 1000,
//     rating: 5,
//     image: "/2.png",
//     description: "Traditional desi ghee made from pure milk.",
//     details: ["Cow milk based", "Rich aroma", "Healthy fats"],
//   },
//   {
//     id: 3,
//     name: "Honey Nut",
//     price: 800,
//     rating: 4,
//     image: "/3.png",
//     description: "Crunchy honey coated nuts.",
//     details: ["Natural honey", "Energy booster", "No preservatives"],
//   },
//   {
//     id: 4,
//     name: "Daal",
//     price: 150,
//     rating: 4.7,
//     image: "/4.png",
//     description: "High-protein lentils for daily meals.",
//     details: ["Farm sourced", "Quick cooking", "Protein rich"],
//   },
//   {
//     id: 5,
//     name: "Cashew Nut",
//     price: 1400,
//     rating: 4.6,
//     image: "/5.png",
//     description: "Premium quality cashew nuts.",
//     details: ["Handpicked", "Crunchy", "Rich in minerals"],
//   },
//   {
//     id: 6,
//     name: "Red Flour",
//     price: 100,
//     rating: 4.8,
//     image: "/6.png",
//     description: "Freshly milled red flour.",
//     details: ["Stone ground", "High fiber", "Healthy diet"],
//   },
//   {
//     id: 7,
//     name: "Rice",
//     price: 150,
//     rating: 4.4,
//     image: "/7.png",
//     description: "Fine quality rice with rich taste.",
//     details: ["Long grain", "Soft texture", "Naturally grown"],
//   },
//   {
//     id: 8,
//     name: "Cumin Powder",
//     price: 130,
//     rating: 4.1,
//     image: "/8.png",
//     description: "Aromatic cumin powder.",
//     details: ["Pure spice", "Strong aroma", "Enhances flavor"],
//   },
//   {
//     id: 9,
//     name: "Combo Powder",
//     price: 430,
//     rating: 4.9,
//     image: "/9.png",
//     description: "Essential spice combo pack.",
//     details: ["Multiple spices", "Everyday cooking", "Balanced flavor"],
//   },
//   {
//     id: 10,
//     name: "Crystal Honey",
//     price: 1300,
//     rating: 5,
//     image: "/10.png",
//     description: "100% natural crystal honey.",
//     details: ["Raw honey", "No sugar added", "Immunity booster"],
//   },
//   {
//     id: 11,
//     name: "Dates",
//     price: 1250,
//     rating: 4.6,
//     image: "/11.png",
//     description: "Premium quality dates.",
//     details: ["Naturally sweet", "Energy rich", "Imported quality"],
//   },
//   {
//     id: 12,
//     name: "Milk",
//     price: 140,
//     rating: 4.5,
//     image: "/20.png",
//     description: "Fresh dairy milk.",
//     details: ["Rich calcium", "Farm fresh", "Daily nutrition"],
//   },
//   {
//     id: 13,
//     name: "Olive Pickle",
//     price: 200,
//     rating: 4.5,
//     image: "/12.png",
//     description: "Traditional olive pickle.",
//     details: ["Authentic recipe", "Spicy taste", "Preservative free"],
//   },
//   {
//     id: 14,
//     name: "Fruit Basket",
//     price: 1600,
//     rating: 4.8,
//     image: "/14.png",
//     description: "Mixed seasonal fruits basket.",
//     details: ["Fresh fruits", "Farmer sourced", "Family pack"],
//   },
//   {
//     id: 15,
//     name: "Avocado",
//     price: 800,
//     rating: 4.1,
//     image: "/15.png",
//     description: "Fresh healthy avocado.",
//     details: ["Omega-3 rich", "Creamy texture", "Diet friendly"],
//   },

//   {
//   id: 16,
//   name: "Cheese",
//   price: 900,
//   rating: 4.4,
//   image: "/17.png",
//   description: "Fresh and delicious dairy cheese.",
//   details: ["Rich in calcium", "Creamy texture", "High protein"],
// },

// ];


// export default async function ProductDetails({ params }) {
//   const { id } = await params;
//   const product = products.find((p) => p.id === Number(id));

//   if (!product) {
//     return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
//   }

//   return (
//     <>
//       <Navbar />

//       <main style={{ maxWidth: "1000px", margin: "40px auto", padding: "20px" }}>
//         <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          
//           {/* IMAGE */}
//           <Image
//             src={product.image}
//             alt={product.name}
//             width={320}
//             height={320}
//           />

//           {/* DETAILS */}
//           <div>
//             <h1>{product.name}</h1>

//             <p style={{ fontSize: "22px", fontWeight: "bold", marginTop: "10px" }}>
//               Tk {product.price}
//             </p>

//             <p style={{ color: "gold", fontSize: "18px" }}>
//               ⭐ {product.rating}
//             </p>

//             {/* DESCRIPTION */}
//             <div style={{ marginTop: "20px" }}>
//               <h3>Product Description</h3>
//               <p style={{ lineHeight: "1.6", color: "#555" }}>
//                 {product.description}
//               </p>
//             </div>

//             {/* EXTRA DETAILS (DIFFERENT PER PRODUCT) */}
//             <div style={{ marginTop: "15px" }}>
//               <h3>Key Features</h3>
//               <ul style={{ paddingLeft: "20px", color: "#555" }}>
//                 {product.details.map((item, index) => (
//                   <li key={index} style={{ marginBottom: "6px" }}>
//                     ✔ {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <button
//               style={{
//                 marginTop: "25px",
//                 padding: "12px 28px",
//                 backgroundColor: "#ff8c32",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "16px",
//               }}
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }

import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/Navbar/Navbar";
import Image from "next/image";

const products = [
  { id: 1, name: "Oil", price: 1500, rating: 4.3, image: "/1.png", description: "Premium cooking oil suitable for everyday use.", details: ["Cold refined", "Light texture", "Cholesterol free"] },
  { id: 2, name: "Ghee", price: 1000, rating: 5, image: "/2.png", description: "Traditional desi ghee made from pure milk.", details: ["Cow milk based", "Rich aroma", "Healthy fats"] },
  { id: 3, name: "Honey Nut", price: 800, rating: 4, image: "/3.png", description: "Crunchy honey coated nuts.", details: ["Natural honey", "Energy booster", "No preservatives"] },
  { id: 4, name: "Daal", price: 150, rating: 4.7, image: "/4.png", description: "High-protein lentils for daily meals.", details: ["Farm sourced", "Quick cooking", "Protein rich"] },
  { id: 5, name: "Cashew Nut", price: 1400, rating: 4.6, image: "/5.png", description: "Premium quality cashew nuts.", details: ["Handpicked", "Crunchy", "Rich in minerals"] },
  { id: 6, name: "Red Flour", price: 100, rating: 4.8, image: "/6.png", description: "Freshly milled red flour.", details: ["Stone ground", "High fiber", "Healthy diet"] },
  { id: 7, name: "Rice", price: 150, rating: 4.4, image: "/7.png", description: "Fine quality rice with rich taste.", details: ["Long grain", "Soft texture", "Naturally grown"] },
  { id: 8, name: "Cumin Powder", price: 130, rating: 4.1, image: "/8.png", description: "Aromatic cumin powder.", details: ["Pure spice", "Strong aroma", "Enhances flavor"] },
  { id: 9, name: "Combo Powder", price: 430, rating: 4.9, image: "/9.png", description: "Essential spice combo pack.", details: ["Multiple spices", "Everyday cooking", "Balanced flavor"] },
  { id: 10, name: "Crystal Honey", price: 1300, rating: 5, image: "/10.png", description: "100% natural crystal honey.", details: ["Raw honey", "No sugar added", "Immunity booster"] },
  { id: 11, name: "Dates", price: 1250, rating: 4.6, image: "/11.png", description: "Premium quality dates.", details: ["Naturally sweet", "Energy rich", "Imported quality"] },
  { id: 12, name: "Milk", price: 140, rating: 4.5, image: "/20.png", description: "Fresh dairy milk.", details: ["Rich calcium", "Farm fresh", "Daily nutrition"] },
  { id: 13, name: "Olive Pickle", price: 200, rating: 4.5, image: "/12.png", description: "Traditional olive pickle.", details: ["Authentic recipe", "Spicy taste", "Preservative free"] },
  { id: 14, name: "Fruit Basket", price: 1600, rating: 4.8, image: "/14.png", description: "Mixed seasonal fruits basket.", details: ["Fresh fruits", "Farmer sourced", "Family pack"] },
  { id: 15, name: "Avocado", price: 800, rating: 4.1, image: "/15.png", description: "Fresh healthy avocado.", details: ["Omega-3 rich", "Creamy texture", "Diet friendly"] },
  { id: 16, name: "Cheese", price: 900, rating: 4.4, image: "/17.png", description: "Fresh and delicious dairy cheese.", details: ["Rich in calcium", "Creamy texture", "High protein"] },
];

export default async function ProductDetails({ params }) {
  // ✅ MUST await params in Next.js 15
  const { id } = await params;

  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Product not found
      </h2>
    );
  }

  return (
    <>
      <Navbar />

      <main style={{ maxWidth: "1100px", margin: "40px auto", padding: "20px" }}>
        <div style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>
          {/* IMAGE */}
          <div
            style={{
              width: "360px",
              height: "360px",
              backgroundColor: "#f9f9f9",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* DETAILS */}
          <div style={{ flex: 1 }}>
            <h1>{product.name}</h1>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              Tk {product.price}
            </p>
            <p style={{ color: "#f59e0b" }}>⭐ {product.rating}</p>

            <h3>Description</h3>
            <p>{product.description}</p>

            <h3>Key Features</h3>
            <ul>
              {product.details.map((item, index) => (
                <li key={index}>✔ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}


