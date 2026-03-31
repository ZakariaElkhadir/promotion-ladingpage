import { HugeiconsIcon } from "@hugeicons/react";
import {
  InstagramIcon,
  YoutubeIcon,
  Facebook02Icon,
} from "@hugeicons/core-free-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center border border-white px-3 py-1 font-bold">
              VERSED
            </div>
            <p className="text-secondary mt-6">
              Clean skincare that works. No jargon, no hidden ingredients, just
              good skin.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
              <span className="w-8 h-8 border border-white/70 rounded-full flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-300 cursor-pointer">
                <HugeiconsIcon icon={InstagramIcon} className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 border border-white/70 rounded-full flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-300 cursor-pointer">
                <HugeiconsIcon icon={YoutubeIcon} className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 border border-white/70 rounded-full flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-300 cursor-pointer">
                <HugeiconsIcon icon={Facebook02Icon} className="w-4 h-4" />
              </span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-sm tracking-[0.2em] uppercase">Shop</h4>
            <ul className="text-secondary mt-5 space-y-2">
              <li className="hover:text-white transition-colors cursor-pointer">
                Best Sellers
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                New Arrivals
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Cleansers
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Serums
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Bundles
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-sm tracking-[0.2em] uppercase">About</h4>
            <ul className="text-secondary mt-5 space-y-2">
              <li className="hover:text-white transition-colors cursor-pointer">
                Our Story
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Ingredients
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Sustainability
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Community
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Careers
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-sm tracking-[0.2em] uppercase">Newsletter</h4>
            <p className="text-secondary mt-5">
              Sign up for 10% off your first order.
            </p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-input-bg text-white px-4 py-3 border border-border-dark"
              />
              <button className="w-full bg-yellow text-primary font-bold px-4 py-3 mt-3 hover:bg-[#e59800] hover:scale-105 transition-all duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border-dark/40 mt-12" />
        <div className="flex flex-col md:flex-row items-center justify-between text-secondary text-sm py-6">
          <p>© 2023 Versed Skincare. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-3 md:mt-0">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
