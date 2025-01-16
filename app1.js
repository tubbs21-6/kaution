import React, { useState } from 'react';
import {
  Search,
  ShoppingCart,
  Heart,
  Star,
  Plus,
  Minus,
  X,
  Zap,
  Cpu,
  Terminal
} from "lucide-react";

const Kaution = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentCategory, setCurrentCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Cyber-Wear",
    "Neo-Tech",
    "Street-Gear",
    "Luminous",
    "Retro-Future"
  ];

  // Enhanced product data with cyberpunk theme
  const products = {
    "Cyber-Wear": [
      {
        id: 1,
        name: "Neon Pulse Jacket",
        price: 89.99,
        rating: 4.8,
        image: "/api/placeholder/280/320",
        description: "LED-infused smart jacket with reactive lighting",
        features: ["Motion reactive", "Weather adaptive", "RGB customizable"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Neon Blue", "Cyber Pink", "Digital Green"]
      },
      {
        id: 2,
        name: "Digital Combat Pants",
        price: 75.99,
        rating: 4.6,
        image: "/api/placeholder/280/320",
        description: "Tactical cargo pants with glowing seams",
        features: ["Water resistant", "Multiple pockets", "Reflective trim"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Shadow Black", "Steel Grey", "Urban Camo"]
      }
    ],
    "Neo-Tech": [
      {
        id: 3,
        name: "Holographic Hoodie",
        price: 129.99,
        rating: 4.9,
        image: "/api/placeholder/280/320",
        description: "Color-shifting smart fabric hoodie",
        features: ["Temperature control", "Built-in speakers", "Phone integration"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Iridescent", "Matrix Green", "Digital Storm"]
      }
    ],
    "Street-Gear": [
      {
        id: 4,
        name: "Circuit Tee",
        price: 45.99,
        rating: 4.7,
        image: "/api/placeholder/280/320",
        description: "Glow-in-dark circuit pattern t-shirt",
        features: ["UV reactive", "Moisture wicking", "Anti-static"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Circuit Blue", "Neon Grid", "Binary White"]
      }
    ],
    "Luminous": [
      {
        id: 5,
        name: "Light Stream Vest",
        price: 149.99,
        rating: 4.8,
        image: "/api/placeholder/280/320",
        description: "Fiber optic illuminated vest",
        features: ["Sound reactive", "App controlled", "12hr battery"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Cyber Blue", "Digital Pink", "Matrix Green"]
      }
    ],
    "Retro-Future": [
      {
        id: 6,
        name: "Synthwave Bomber",
        price: 199.99,
        rating: 4.9,
        image: "/api/placeholder/280/320",
        description: "80s inspired smart bomber jacket",
        features: ["Heat sensitive color", "Built-in USB ports", "RFID blocking"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Retro Purple", "Sunset Orange", "Miami Blue"]
      }
    ]
  };

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const ProductCard = ({ product }) => (
    <div className="bg-black border border-indigo-500 rounded-lg overflow-hidden relative group hover:border-pink-500 transition-all duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
      </div>

      <div className="p-4 relative">
        <div className="flex justify-between items-start">
          <h4 className="text-lg font-bold text-indigo-400 group-hover:text-pink-400 transition-colors">
            {product.name}
          </h4>
          <button
            onClick={() => toggleFavorite(product.id)}
            className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
          >
            <Heart
              className={`h-5 w-5 ${
                favorites.includes(product.id)
                  ? "text-pink-500"
                  : "text-indigo-400"
              }`}
            />
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-2">{product.description}</p>

        <div className="flex flex-wrap gap-2 my-3">
          {product.features.map((feature, idx) => (
            <span key={idx} className="text-xs bg-indigo-900 text-indigo-300 px-2 py-1 rounded">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-green-400">${product.price}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-400">{product.rating}</span>
          </div>
        </div>

        <button
          onClick={() => handleAddToCart(product)}
          className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-2 rounded font-medium
                     hover:from-pink-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center justify-center">
            <Zap className="w-4 h-4 mr-2" />
            Add to Cart
          </div>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-black border-b border-indigo-500">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                KAUTION_
              </span>
              <Terminal className="inline-block w-6 h-6 ml-2 text-pink-500" />
            </h1>
            
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-indigo-500 rounded-lg text-indigo-100
                           focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                  placeholder="Search products..."
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-indigo-400" />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button className="p-2 hover:text-pink-400 transition-colors">
                <ShoppingCart 
                  className="h-6 w-6"
                  onClick={() => setIsCartOpen(true)}
                />
              </button>
            </div>
          </div>

          <nav className="flex space-x-6 mt-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCurrentCategory(category)}
                className={`${
                  currentCategory === category
                    ? "text-pink-400 border-b-2 border-pink-400"
                    : "text-indigo-400 hover:text-pink-400"
                } pb-2 transition-colors whitespace-nowrap`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(currentCategory === "All" 
            ? Object.values(products).flat()
            : products[currentCategory] || []
          ).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-96 bg-gray-900 border-l border-indigo-500">
            <div className="p-4 border-b border-indigo-500 flex justify-between items-center">
              <h2 className="text-lg font-bold text-indigo-400">Neural Cart_</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-pink-400 hover:text-pink-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-4">
              {cartItems.length === 0 ? (
                <p className="text-gray-400">Your cart is empty</p>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center mb-4 p-2 border border-indigo-500 rounded">
                      <span className="text-indigo-300">{item.name}</span>
                      <span className="text-pink-400">x{item.quantity}</span>
                    </div>
                  ))}
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-2 rounded-lg mt-4
                                   hover:from-pink-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300">
                    Initialize Checkout_
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kaution;
