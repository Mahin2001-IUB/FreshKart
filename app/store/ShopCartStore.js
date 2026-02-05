// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// const ShopCartContext = createContext(null);

// export function ShopCartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   // Load from localStorage
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("shop_cart")) || [];
//     setCart(saved);
//   }, []);

//   // Save to localStorage
//   useEffect(() => {
//     localStorage.setItem("shop_cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     setCart((prev) => {
//       const exists = prev.find((p) => p.id === product.id);
//       if (exists) {
//         return prev.map((p) =>
//           p.id === product.id ? { ...p, qty: p.qty + 1 } : p
//         );
//       }
//       return [...prev, { ...product, qty: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((p) => p.id !== id));
//   };

//   return (
//     <ShopCartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </ShopCartContext.Provider>
//   );
// }

// export function useShopCart() {
//   return useContext(ShopCartContext);
// }

"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ShopCartContext = createContext(null);

// ✅ SAFE localStorage reader
const getInitialCart = () => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("shop_cart")) || [];
  } catch {
    return [];
  }
};

export function ShopCartProvider({ children }) {
  const [cart, setCart] = useState(getInitialCart); // ✅ FIX HERE

  // ✅ Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem("shop_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("shop_cart");
  };

  return (
    <ShopCartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </ShopCartContext.Provider>
  );
}

export function useShopCart() {
  return useContext(ShopCartContext);
}

