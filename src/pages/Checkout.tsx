import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

export function Checkout() {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-[#f5f5f7] min-h-screen pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-black text-white' : 'bg-gray-300 text-gray-500'} font-semibold text-sm`}>
              {step > 1 ? <Check className="w-4 h-4" /> : 1}
            </div>
            <div className={`h-px w-16 ${step >= 2 ? 'bg-black' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-black text-white' : 'bg-gray-300 text-gray-500'} font-semibold text-sm`}>
              {step > 2 ? <Check className="w-4 h-4" /> : 2}
            </div>
            <div className={`h-px w-16 ${step >= 3 ? 'bg-black' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? 'bg-black text-white' : 'bg-gray-300 text-gray-500'} font-semibold text-sm`}>
              3
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Checkout Area */}
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              {step === 1 && (
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight mb-6">How would you like to get your order?</h2>
                  <div className="space-y-4">
                    <label className="flex items-start p-4 border border-blue-600 rounded-2xl cursor-pointer bg-blue-50/30">
                      <input type="radio" name="delivery" className="mt-1 w-4 h-4 text-blue-600" defaultChecked />
                      <div className="ml-4">
                        <span className="block font-semibold text-lg">Delivery</span>
                        <span className="block text-gray-500 text-sm mt-1">Free delivery. Arrives by Tomorrow.</span>
                      </div>
                    </label>
                    <label className="flex items-start p-4 border border-gray-300 rounded-2xl cursor-pointer hover:border-gray-400">
                      <input type="radio" name="delivery" className="mt-1 w-4 h-4 text-blue-600" />
                      <div className="ml-4">
                        <span className="block font-semibold text-lg">Pick up</span>
                        <span className="block text-gray-500 text-sm mt-1">Available today at Apple Fifth Avenue.</span>
                      </div>
                    </label>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" placeholder="First Name" className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
                      <input type="text" placeholder="Last Name" className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
                      <input type="text" placeholder="Street Address" className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 md:col-span-2" />
                      <input type="text" placeholder="City" className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
                      <div className="flex gap-4">
                        <input type="text" placeholder="State" className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 w-1/2" />
                        <input type="text" placeholder="ZIP" className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 w-1/2" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button 
                      onClick={() => setStep(2)}
                      className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight mb-6">How would you like to pay?</h2>
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border border-gray-300 rounded-2xl cursor-pointer hover:border-gray-400">
                      <input type="radio" name="payment" className="w-4 h-4 text-blue-600" />
                      <span className="ml-4 font-semibold">Apple Pay</span>
                    </label>
                    <label className="flex items-center p-4 border border-blue-600 rounded-2xl cursor-pointer bg-blue-50/30">
                      <input type="radio" name="payment" className="w-4 h-4 text-blue-600" defaultChecked />
                      <span className="ml-4 font-semibold">Credit or Debit Card</span>
                    </label>
                    <label className="flex items-center p-4 border border-gray-300 rounded-2xl cursor-pointer hover:border-gray-400">
                      <input type="radio" name="payment" className="w-4 h-4 text-blue-600" />
                      <span className="ml-4 font-semibold">Apple Card Monthly Installments</span>
                    </label>
                  </div>

                  <div className="mt-8">
                    <div className="space-y-4">
                      <input type="text" placeholder="Card Number" className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
                      <div className="flex gap-4">
                        <input type="text" placeholder="MM/YY" className="w-1/2 p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
                        <input type="text" placeholder="CVV" className="w-1/2 p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between items-center">
                    <button 
                      onClick={() => setStep(1)}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Back
                    </button>
                    <button 
                      onClick={() => setStep(3)}
                      className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
                    >
                      Review Order
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl font-semibold tracking-tight mb-4">Thank you for your order.</h2>
                    <p className="text-xl text-gray-500 mb-8">We'll email you an order confirmation with details and tracking info.</p>
                    <Link to="/" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors inline-block">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-96">
            <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-24">
              <h3 className="text-2xl font-semibold tracking-tight mb-6">Order Summary</h3>
              
              <div className="flex items-start space-x-4 mb-6 pb-6 border-b border-gray-200">
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center p-2">
                  <img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=200&auto=format&fit=crop" alt="iPhone 16 Pro" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-semibold">iPhone 16 Pro</h4>
                  <p className="text-sm text-gray-500 mb-2">Natural Titanium, 256GB</p>
                  <p className="font-medium">$1,099.00</p>
                </div>
              </div>

              <div className="space-y-4 text-sm mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">$1,099.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Estimated Tax</span>
                  <span className="font-medium">$96.16</span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-semibold tracking-tight">$1,195.16</span>
              </div>
              
              <div className="mt-8 flex items-center justify-center space-x-2 text-gray-500 text-xs">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
