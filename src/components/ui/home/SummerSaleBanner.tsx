import ShopNowBtn from "@/components/ui/shared/ShopNowButton";
import Image from "next/image";

export default function SummerSaleBanner() {
  return (
    <div className="w-full h-150 md:h-110 relative overflow-hidden bg-[#211C24]">
      {/* Background Banner Image */}
      <Image
        className="object-cover md:object-center"
        src="/assets/home/BannerImg.png"
        fill
        alt="bannerimg"
        priority
      />

      {/* Background Decorative Images for Mobile - Positioned in corners */}
      <div className="absolute top-0 left-0 w-full h-full md:hidden pointer-events-none">
        {/* Top Left - Tablet */}
        <div className="absolute -top-10 -left-10 w-48 h-48 opacity-80 rotate-[-15deg]">
          <Image
            src="/assets/home/ipad.png"
            alt="Summer Sale"
            fill
            className="object-contain"
          />
        </div>
        {/* Top Right - Phone */}
        <div className="absolute top-0 -right-10 w-48 h-48 opacity-80 rotate-15">
          <Image
            src="/assets/home/Iphone14pro.png"
            alt="Summer Sale"
            fill
            className="object-contain"
          />
        </div>
        {/* Bottom Left - Phone */}
        <div className="absolute -bottom-10 -left-10 w-48 h-48 opacity-80 rotate-10">
          <Image
            src="/assets/home/IphoneImg.png"
            alt="Summer Sale"
            fill
            className="object-contain"
          />
        </div>
        {/* Bottom Right - Watch */}
        <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-80 rotate-[-10deg]">
          <Image
            src="/assets/home/smartwatch.png"
            alt="Summer Sale"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <h2 className="text-white text-5xl md:text-[72px] font-thin tracking-tight mb-2 flex flex-col md:flex-row md:gap-4">
          <span>Big Summer</span> <span className="font-bold">Sale</span>
        </h2>
        <p className="text-[#787878] text-sm md:text-base max-w-125 mb-10 mt-4">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <ShopNowBtn className="mt-0 border-white text-white hover:bg-white hover:text-black w-full md:w-48">
          Shop Now
        </ShopNowBtn>
      </div>

      {/* Desktop Decorative Images */}
      <div className="hidden md:block pointer-events-none">
        <div className="absolute -left-25 top-1/2 -translate-y-1/2 opacity-100">
          <Image
            src="/assets/home/ipad.png"
            alt="Summer Sale"
            width={400}
            height={400}
            className="object-contain rotate-[-15deg]"
          />
        </div>
        <div className="absolute -right-25 top-1/2 -translate-y-1/2 opacity-100">
          <Image
            src="/assets/home/smartwatch.png"
            alt="Summer Sale"
            width={300}
            height={300}
            className="object-contain rotate-15"
          />
        </div>
      </div>
    </div>
  );
}
