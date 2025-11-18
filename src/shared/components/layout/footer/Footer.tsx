import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">PriceCompare</h3>
            <p className="text-sm">En uygun fiyatları karşılaştırın, akıllıca alışveriş yapın.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Seller */}
          <div>
            <h4 className="text-white font-semibold mb-4">Satıcılar İçin</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/register/seller" className="hover:text-white transition-colors">
                  Satıcı Ol
                </Link>
              </li>
              <li>
                <Link href="/seller/login" className="hover:text-white transition-colors">
                  Satıcı Girişi
                </Link>
              </li>
              <li>
                <Link href="/seller-guide" className="hover:text-white transition-colors">
                  Satıcı Rehberi
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Bizi Takip Edin</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 PriceCompare. Tüm hakları saklıdır.</p>
        </div>
      </div>

      <div className="bg-neutral-700 h-80 w-screen overflow-hidden text-center">
        <div className="text-[35rem] font-semibold -translate-y-40 text-neutral-300">Setbul</div>
      </div>
    </footer>
  );
}
