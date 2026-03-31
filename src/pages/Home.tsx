import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function Home() {
  return (
    <main className="bg-black text-white min-h-screen pt-12">
      {/* Hero 1: iPhone 16 Pro */}
      <section className="relative h-[85vh] w-full flex flex-col items-center justify-start pt-16 overflow-hidden bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 text-center flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tightest mb-2">iPhone 16 Pro</h2>
          <p className="text-xl md:text-3xl font-light tracking-tight mb-6 text-white/90">Hello, Apple Intelligence.</p>
          <div className="flex items-center space-x-6">
            <Link
              to="/iphone-16-pro"
              className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors"
            >
              Learn more
            </Link>
            <Link
              to="/buy/iphone-16-pro"
              className="text-white hover:underline text-sm font-medium flex items-center"
            >
              Buy <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </motion.div>
        
        {/* Placeholder for cinematic product image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 w-full h-[60%] md:h-[70%] bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=2000&auto=format&fit=crop" 
            alt="iPhone 16 Pro" 
            className="object-cover object-top w-full h-full opacity-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Hero 2: iPhone 16 */}
      <section className="relative h-[80vh] w-full flex flex-col items-center justify-start pt-16 overflow-hidden bg-[#f5f5f7] text-black mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 text-center flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tightest mb-2">iPhone 16</h2>
          <p className="text-xl md:text-3xl font-light tracking-tight mb-6 text-black/80">Built for Apple Intelligence.</p>
          <div className="flex items-center space-x-6">
            <Link
              to="/iphone-16"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-blue-700 transition-colors"
            >
              Learn more
            </Link>
            <Link
              to="/buy/iphone-16"
              className="text-blue-600 hover:underline text-sm font-medium flex items-center"
            >
              Buy <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </motion.div>
        
        <div className="absolute bottom-0 w-full h-[60%] flex items-end justify-center">
          <img 
            src="https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=2000&auto=format&fit=crop" 
            alt="iPhone 16" 
            className="object-cover object-top w-full h-full opacity-90"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
        {/* Watch Series 10 */}
        <div className="relative h-[600px] bg-black text-white overflow-hidden flex flex-col items-center pt-12">
          <div className="z-10 text-center flex flex-col items-center">
            <h3 className="text-4xl font-semibold tracking-tight mb-2 flex items-center">
              <span className="text-2xl mr-1">ï£¿</span>WATCH
            </h3>
            <p className="text-red-500 text-sm font-medium tracking-widest uppercase mb-1">Series 10</p>
            <p className="text-xl font-light mb-4">Thinstant classic.</p>
            <div className="flex items-center space-x-4">
              <Link to="/watch" className="bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors">Learn more</Link>
              <Link to="/buy/watch" className="text-white hover:underline text-sm font-medium flex items-center">Buy <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-[60%]">
             <img src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=1000&auto=format&fit=crop" alt="Apple Watch" className="object-cover w-full h-full opacity-80" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* iPad Pro */}
        <div className="relative h-[600px] bg-[#f5f5f7] text-black overflow-hidden flex flex-col items-center pt-12">
          <div className="z-10 text-center flex flex-col items-center">
            <h3 className="text-4xl font-semibold tracking-tight mb-2">iPad Pro</h3>
            <p className="text-xl font-light mb-4">Unbelievably thin. Incredibly powerful.</p>
            <div className="flex items-center space-x-4">
              <Link to="/ipad-pro" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-blue-700 transition-colors">Learn more</Link>
              <Link to="/buy/ipad-pro" className="text-blue-600 hover:underline text-sm font-medium flex items-center">Buy <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-[60%]">
             <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop" alt="iPad Pro" className="object-cover object-center w-full h-full" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* MacBook Pro */}
        <div className="relative h-[600px] bg-[#f5f5f7] text-black overflow-hidden flex flex-col items-center pt-12">
          <div className="z-10 text-center flex flex-col items-center">
            <h3 className="text-4xl font-semibold tracking-tight mb-2">MacBook Pro</h3>
            <p className="text-xl font-light mb-4">Mind-blowing. Head-turning.</p>
            <div className="flex items-center space-x-4">
              <Link to="/macbook-pro" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-blue-700 transition-colors">Learn more</Link>
              <Link to="/buy/macbook-pro" className="text-blue-600 hover:underline text-sm font-medium flex items-center">Buy <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-[60%]">
             <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop" alt="MacBook Pro" className="object-cover object-center w-full h-full" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* AirPods 4 */}
        <div className="relative h-[600px] bg-black text-white overflow-hidden flex flex-col items-center pt-12">
          <div className="z-10 text-center flex flex-col items-center">
            <h3 className="text-4xl font-semibold tracking-tight mb-2">AirPods 4</h3>
            <p className="text-xl font-light mb-4 text-balance px-4">Iconic. Now with Active Noise Cancellation.</p>
            <div className="flex items-center space-x-4">
              <Link to="/airpods" className="bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors">Learn more</Link>
              <Link to="/buy/airpods" className="text-white hover:underline text-sm font-medium flex items-center">Buy <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-[60%]">
             <img src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1000&auto=format&fit=crop" alt="AirPods" className="object-cover object-center w-full h-full opacity-80" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>
    </main>
  );
}
