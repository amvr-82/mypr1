import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 fixed bottom-0 right-0">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 text-right direction-rtl">
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">وب‌سایت من</h1>
          <p className="text-sm text-gray-400 leading-6">
            سایت تستی ریکت امیرحسین هست پوف{" "}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            لینک‌های سریع
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#khane" className="hover:text-white transition-all">
                خانه
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-all">
                درباره ما
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-all">
                پروژه‌ها
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-all">
                تماس با ما
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            ما را دنبال کنید
          </h2>
          <div className="flex justify-end gap-4">
            <a href="#" className="hover:text-white transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} تمامی حقوق امیرحسین محفوظ است
      </div>
    </footer>
  );
}

export default Footer;
