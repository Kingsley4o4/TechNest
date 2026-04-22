import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-20">
      <div className="px-page-x-mobile lg:px-page-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4">
          {/* Brand and Description */}
          <div className="md:col-span-4 flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">cyber</h2>
            <p className="text-[#919191] text-[14px] leading-relaxed max-w-75">
              We are a residential interior design firm located in Nigeria. Our
              boutique-studio offers more than
            </p>
            {/* Social Icons for Desktop */}
            <div className="hidden md:flex gap-6 mt-20 text-white">
              <FaTwitter className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity" />
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity" />
              <FaTiktok className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity" />
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-4 flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-nav-link font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-[#CFCFCF] text-[14px]">
              <li className="cursor-pointer hover:text-white transition-colors">
                Bonus program
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Gift cards
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Credit and payment
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Service contracts
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Non-cash account
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Payment
              </li>
            </ul>
          </div>

          {/* Assistance Column */}
          <div className="md:col-span-4 flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-lg font-bold mb-6">Assistance to the buyer</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="cursor-pointer hover:text-white transition-colors">
                Find an order
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Terms of delivery
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Exchange and return of goods
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Guarantee
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Frequently asked questions
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Terms of use of the site
              </li>
            </ul>
          </div>

          {/* Social Icons for Mobile */}
          <div className="md:hidden flex justify-center gap-10 mt-6 pb-6 text-white">
            <FaTwitter className="w-6 h-6 cursor-pointer" />
            <FaFacebookF className="w-6 h-6 cursor-pointer" />
            <FaTiktok className="w-6 h-6 cursor-pointer" />
            <FaInstagram className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
