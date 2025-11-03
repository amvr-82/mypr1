import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-start gap-4 h-20 flex-row-reverse">
        <div className="flex items-center gap-3">
          <img
            src="src/assets/20250909_1656_لوگوی حروف اناشید_simple_compose_01k4qadx83f0ps7trqrezg63ej.png"
            alt="لوگو"
            className="w-16 h-16 rounded-full"
          />
        </div>

        {/* لینک‌ها */}
        <ul className="flex gap-6 text-white text-sm font-medium flex-row-reverse">
          <li>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              خانه
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              درباره ما
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              پروژه‌ها
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              تماس با ما
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
