import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

export function ProductPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div className="bg-black text-white min-h-screen" ref={containerRef}>
      {/* Sticky Product Nav */}
      <nav className="sticky top-12 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 h-14 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-tight">iPhone 16 Pro</h1>
          <div className="flex items-center space-x-4 text-xs font-medium">
            <span className="hidden md:inline text-white/70 hover:text-white cursor-pointer transition-colors">Overview</span>
            <span className="hidden md:inline text-white/70 hover:text-white cursor-pointer transition-colors">Tech Specs</span>
            <button className="bg-white text-black px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">Buy</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative h-[90vh] flex flex-col items-center justify-center overflow-hidden sticky top-26"
      >
        <div className="z-10 text-center flex flex-col items-center max-w-4xl px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-semibold tracking-tightest mb-6 bg-gradient-to-r from-[#e2e2e2] via-[#ffffff] to-[#a1a1a6] bg-clip-text text-transparent"
          >
            Built for Apple Intelligence.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl font-light text-white/80 max-w-2xl text-balance"
          >
            Featuring the A18 Pro chip. A stunning titanium design. Camera Control. And a huge leap in battery life.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-0 w-full h-[50vh] flex justify-center items-end"
        >
          <img 
            src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=2000&auto=format&fit=crop" 
            alt="iPhone 16 Pro Titanium" 
            className="object-cover object-top h-full w-auto opacity-90"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </motion.section>

      {/* Spacer for sticky effect */}
      <div className="h-[90vh]"></div>

      {/* Feature Section 1: Titanium */}
      <section className="relative min-h-screen bg-[#111111] py-32 px-4 flex flex-col items-center z-20">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Titanium.<br/>So strong. So light.</h3>
            <p className="text-xl text-white/70 max-w-2xl text-balance">
              iPhone 16 Pro features a Grade 5 titanium design with a new, refined microblasted finish. Titanium has one of the highest strength-to-weight ratios of any metal, making these models incredibly strong and impressively light.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#1d1d1f] rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-8"
            >
              <img src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=1000&auto=format&fit=crop" alt="Titanium texture" className="w-full h-full object-cover rounded-2xl opacity-80" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#1d1d1f] rounded-3xl overflow-hidden aspect-square flex flex-col justify-between p-12"
            >
              <h4 className="text-3xl font-medium">Four stunning colors.</h4>
              <div className="flex space-x-4">
                 <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-[#c0bba9]"></div>
                 <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-[#f2f1eb]"></div>
                 <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-[#4b4845]"></div>
                 <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-[#2f2f2f]"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Camera Control Section */}
      <section className="relative min-h-screen bg-black py-32 px-4 flex flex-col items-center z-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h3 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Take total camera control.</h3>
            <p className="text-xl text-white/70 max-w-xl text-balance mb-8">
              Now you can take the perfect photo or video in record time. Camera Control gives you an easier way to quickly access camera tools. Simply slide your finger to adjust camera functions like exposure or depth of field, and toggle through each lens or use digital zoom to frame your shot.
            </p>
            <button className="text-white hover:underline text-lg font-medium flex items-center">
              Watch the film <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="aspect-[4/5] bg-[#1d1d1f] rounded-3xl overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop" alt="Camera Control" className="w-full h-full object-cover opacity-70" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-12">
                <p className="text-2xl font-medium">Click to launch. Click again to shoot.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing / Conversion Section */}
      <section className="bg-white text-black py-32 px-4 flex flex-col items-center z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-semibold tracking-tight mb-8">Which iPhone is right for you?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="border border-gray-200 rounded-3xl p-8 flex flex-col items-center hover:shadow-xl transition-shadow">
              <h3 className="text-3xl font-semibold mb-2">iPhone 16 Pro</h3>
              <p className="text-gray-500 mb-6">The ultimate iPhone.</p>
              <p className="text-xl font-medium mb-8">From $999 or $41.62/mo. for 24 mo.*</p>
              <button className="bg-blue-600 text-white w-full py-3 rounded-full font-medium hover:bg-blue-700 transition-colors mb-4">Buy</button>
              <button className="text-blue-600 hover:underline font-medium text-sm">Learn more &gt;</button>
            </div>
            
            <div className="border border-gray-200 rounded-3xl p-8 flex flex-col items-center hover:shadow-xl transition-shadow">
              <h3 className="text-3xl font-semibold mb-2">iPhone 16</h3>
              <p className="text-gray-500 mb-6">A total powerhouse.</p>
              <p className="text-xl font-medium mb-8">From $799 or $33.29/mo. for 24 mo.*</p>
              <button className="bg-blue-600 text-white w-full py-3 rounded-full font-medium hover:bg-blue-700 transition-colors mb-4">Buy</button>
              <button className="text-blue-600 hover:underline font-medium text-sm">Learn more &gt;</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
