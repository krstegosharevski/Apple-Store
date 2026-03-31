import { motion } from "motion/react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Mac", icon: "💻" },
  { name: "iPhone", icon: "📱" },
  { name: "iPad", icon: "📝" },
  { name: "Apple Watch", icon: "⌚" },
  { name: "AirPods", icon: "🎧" },
  { name: "AirTag", icon: "🏷️" },
  { name: "Apple TV", icon: "📺" },
  { name: "Accessories", icon: "🔌" },
];

const products = [
  { id: 1, name: "iPhone 16 Pro", price: "From $999", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=500&auto=format&fit=crop", isNew: true },
  { id: 2, name: "MacBook Air M3", price: "From $1099", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=500&auto=format&fit=crop", isNew: true },
  { id: 3, name: "iPad Pro", price: "From $999", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=500&auto=format&fit=crop", isNew: false },
  { id: 4, name: "Apple Watch Series 10", price: "From $399", img: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=500&auto=format&fit=crop", isNew: true },
];

export function Store() {
  return (
    <div className="bg-[#f5f5f7] min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h1 className="text-5xl font-semibold tracking-tight text-[#1d1d1f]">
            <span className="text-[#86868b]">Store.</span> The best way to buy the products you love.
          </h1>
          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <div className="flex flex-col">
              <span className="text-sm font-medium">Need shopping help?</span>
              <a href="#" className="text-blue-600 text-sm hover:underline">Ask a Specialist</a>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
               <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Specialist" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </motion.div>

        {/* Categories Carousel */}
        <div className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide mb-12">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col items-center min-w-[120px] cursor-pointer group"
            >
              <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center text-4xl mb-4 group-hover:shadow-md transition-shadow">
                {category.icon}
              </div>
              <span className="text-sm font-medium text-[#1d1d1f] group-hover:underline">{category.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Latest Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold tracking-tight mb-8">
            <span className="text-[#86868b]">The latest.</span> Take a look at what's new, right now.
          </h2>
          
          <div className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide">
            {products.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="min-w-[300px] md:min-w-[400px] bg-white rounded-3xl p-8 flex flex-col shadow-sm hover:shadow-xl transition-shadow cursor-pointer relative overflow-hidden group"
              >
                {product.isNew && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">New</span>
                )}
                <h3 className="text-2xl font-semibold mb-1">{product.name}</h3>
                <p className="text-[#1d1d1f] mb-8">{product.price}</p>
                <div className="mt-auto aspect-square flex items-center justify-center">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Apple Experience Section */}
        <div>
          <h2 className="text-3xl font-semibold tracking-tight mb-8">
            <span className="text-[#86868b]">The Apple experience.</span> Do even more with Apple products and services.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between h-[400px] relative overflow-hidden group cursor-pointer">
              <div className="z-10">
                <h3 className="text-2xl font-semibold mb-2">Apple Trade In</h3>
                <p className="text-gray-600 max-w-xs">Get credit toward a new device, or put it on a gift card.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-80 group-hover:scale-105 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=800&auto=format&fit=crop" alt="Trade In" className="w-full h-full object-cover rounded-tl-3xl" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="bg-black text-white rounded-3xl p-8 shadow-sm flex flex-col justify-between h-[400px] relative overflow-hidden group cursor-pointer">
              <div className="z-10">
                <h3 className="text-2xl font-semibold mb-2">Apple Card</h3>
                <p className="text-gray-400 max-w-xs">Get up to 3% Daily Cash back with every purchase.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-80 group-hover:scale-105 transition-transform duration-500">
                 <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" alt="Apple Card" className="w-full h-full object-cover rounded-tl-3xl" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
