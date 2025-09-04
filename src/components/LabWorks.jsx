import React from 'react';

const LabWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="text-xl font-bold">
          lab.<span className="text-xs align-super">®</span>
        </div>
        <nav className="flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-gray-600">SHOP</a>
          <a href="#" className="hover:text-gray-600">TOUR</a>
          <a href="#" className="hover:text-gray-600">EXPLORE</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <div className="text-xs">EN</div>
          <div className="text-xs">FR</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-12">
        <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto">
          
          {/* Left Column */}
          <div className="col-span-3 space-y-8">
            {/* Title Section */}
            <div>
              <h1 className="text-4xl font-bold mb-2">
                LAB. WORKS<span className="text-sm align-super">TM</span>
              </h1>
              <p className="text-sm text-gray-600 mb-4">
                CRAFTED CREATIONS — ©2020
              </p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>🌿</span>
                <span>🔒</span>
                <span className="border-b border-gray-300">——</span>
              </div>
            </div>

            {/* Product Info Card */}
            <div className="bg-black text-white p-4 max-w-xs">
              <div className="w-12 h-12 bg-white rounded mb-3 flex items-center justify-center">
                <div className="w-6 h-6 bg-black rounded-full"></div>
              </div>
              <h3 className="text-xs font-medium mb-2">
                THE APPRECIATION OF LAB. VISUAL FAMILY<br/>
                COLLECTION AND PROTECTION KEEP ORDERS<br/>
                ALL RIGHTS RESERVED
              </h3>
            </div>
          </div>

          {/* Center Column - Main Product */}
          <div className="col-span-6 flex items-center justify-center relative">
            {/* Product Image Container */}
            <div className="relative">
              {/* Main Gas Mask */}
              <div className="w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center relative shadow-2xl">
                {/* Gas Mask Illustration - Simplified SVG representation */}
                <div className="relative w-64 h-64">
                  {/* Main mask body */}
                  <div className="absolute inset-0 bg-gray-700 rounded-3xl transform rotate-3"></div>
                  
                  {/* Eye pieces */}
                  <div className="absolute top-12 left-12 w-20 h-16 bg-black rounded-2xl border-4 border-gray-600"></div>
                  <div className="absolute top-12 right-12 w-20 h-16 bg-black rounded-2xl border-4 border-gray-600"></div>
                  
                  {/* Filter/Breathing apparatus */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-gray-800 rounded-lg border-2 border-gray-600">
                    <div className="w-full h-3 bg-gray-600 mt-2 rounded"></div>
                    <div className="w-full h-3 bg-gray-600 mt-1 rounded"></div>
                    <div className="w-full h-3 bg-gray-600 mt-1 rounded"></div>
                  </div>
                  
                  {/* Side straps */}
                  <div className="absolute top-8 -left-4 w-8 h-32 bg-gray-600 rounded-full transform -rotate-12"></div>
                  <div className="absolute top-8 -right-4 w-8 h-32 bg-gray-600 rounded-full transform rotate-12"></div>
                </div>
              </div>

              {/* Product Number */}
              <div className="absolute -bottom-8 right-0 text-right">
                <div className="text-6xl font-light text-gray-300">01</div>
                <div className="flex items-center space-x-2 text-xs">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-3 space-y-8">
            {/* Product Details */}
            <div className="text-right">
              <div className="text-xs text-gray-500 mb-2">LAB.</div>
              <div className="text-xs text-gray-500 mb-2">TECHNICAL</div>
              <div className="text-xs text-gray-500 mb-8">COLLECTION 2020</div>
              
              <div className="border-l-2 border-gray-200 pl-4 text-left">
                <h3 className="text-sm font-medium mb-2">HIGHLIGHT</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  DEFENSE ELEMENTS<br/>
                  & TOXIC COMPOUNDS
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex flex-col items-end space-y-4">
              <div className="text-xs text-gray-400">02</div>
              <div className="w-0.5 h-16 bg-gray-200"></div>
              <div className="text-xs text-gray-400">03</div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-center mt-16">
          <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
};

export default LabWorks;