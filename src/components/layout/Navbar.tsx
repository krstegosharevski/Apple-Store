import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Store", path: "/store" },
  { name: "Mac", path: "/mac" },
  { name: "iPad", path: "/ipad" },
  { name: "iPhone", path: "/iphone" },
  { name: "Watch", path: "/watch" },
  { name: "AirPods", path: "/airpods" },
  { name: "TV & Home", path: "/tv-home" },
  { name: "Entertainment", path: "/entertainment" },
  { name: "Support", path: "/support" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1d1d1f]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 text-xs font-medium text-white/80">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 hover:text-white transition-colors">
              <svg viewBox="0 0 14 18" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.843 3.59c.563-.694.942-1.644.838-2.59-.817.034-1.808.546-2.39 1.23-.466.54-.91 1.508-.788 2.435.91.07 1.778-.383 2.34-1.075zm2.84 8.44c-.015-1.558 1.272-2.312 1.33-2.346-1.002-1.465-2.55-1.66-3.11-1.69-1.32-.134-2.576.78-3.246.78-.67 0-1.705-.75-2.79-.73-1.415.02-2.72.822-3.447 2.08-1.47 2.548-.375 6.32 1.055 8.385.7 1.01 1.53 2.13 2.61 2.09 1.04-.04 1.44-.67 2.7-.67 1.25 0 1.62.67 2.7.65 1.1-.02 1.83-1.03 2.52-2.04.8-1.16 1.13-2.29 1.14-2.35-.02-.01-2.14-.82-2.15-2.43z" />
              </svg>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <button className="hover:text-white transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <button className="hover:text-white transition-colors">
                <ShoppingBag className="w-4 h-4" />
              </button>
              <button
                className="md:hidden hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#1d1d1f] pt-12 px-4"
          >
            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-white/80 hover:text-white text-2xl font-medium border-b border-white/10 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
