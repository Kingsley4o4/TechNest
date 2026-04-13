import Image from "next/image";
import ShopNowButton from "@/components/ui/shared/ShopNowButton";

export default function Hero() {
  const IPHONE17_IMG = {};

  const HERO_IMGS = {
    Hero: (
      <Image
        src="/assets/home/IphoneImg.png"
        alt="iPhone 17 Pro"
        width={400}
        height={400}
      />
    ),
    PlayStation: (
      <Image
        src="/assets/home/hero/PlayStation.png"
        alt="PlayStation"
        width={350}
        height={350}
      />
    ),
    Airpod: (
      <Image
        src="/assets/home/hero/Airpod.png"
        alt="Airpod"
        width={100}
        height={150}
      />
    ),
    AppleVision: (
      <Image
        src="/assets/home/hero/AppleVision.png"
        alt="AppleVision"
        width={150}
        height={200}
      />
    ),
    MacBookPro: (
      <Image
        src="/assets/home/hero/MacBookPro14.png"
        alt="MacBookPro"
        width={700}
        height={700}
      />
    ),
    MacBookProMobile: (
      <Image
        src="/assets/home/hero/MacBookProMob14.png"
        alt="MacBookPro"
        width={300}
        height={300}
      />
    ),
  };

  return (
    <main className="">
      {/* ── HERO: iPhone ── */}
      <div className="bg-[#211C24] min-h-159.25 relative">
        {/* Mobile */}
        <div className="flex flex-col items-center text-center px-6 pt-12 pb-0 lg:hidden">
          <p className="text-accent-border text-sm tracking-widest uppercase mb-2">
            Pro.Beyond.
          </p>
          <h1 className="text-white text-5xl leading-tight">
            IPhone 17 <span className="font-black">Pro</span>
          </h1>
          <p className="text-accent-border text-sm mt-3 max-w-xs">
            Created to change everything for the better. For everyone.
          </p>
          <ShopNowButton className="mt-6 mb-4">Shop Now</ShopNowButton>
          <div className="mt-4">{HERO_IMGS.Hero}</div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex absolute top-0 left-0 w-full h-full items-center justify-around lg:mx-auto">
          <div className="flex flex-col">
            <h1 className="text-hero-heading font-bold text-accent-border">
              Pro.Beyond.
            </h1>
            <p className="text-8xl text-white font-thin tracking-tight">
              IPhone 17 <span className="font-black">Pro</span>
            </p>
            <p className="text-card-title text-accent-border pt-2">
              Created to change everything for the better. For everyone.
            </p>
            <ShopNowButton>Shop Now</ShopNowButton>
          </div>
          <div>{HERO_IMGS.Hero}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-146 overflow-hidden">
        {/* LEFT COLUMN — PlayStation on top, AirPods+Vision below */}
        <div className="flex flex-col ">
          {/* PlayStation */}
          <div
            className="bg-white  flex flex-col items-center text-center px-6 py-10
                            lg:flex-row lg:items-center lg:text-left lg:justify-center lg:py-0 lg:px-0"
          >
            {HERO_IMGS.PlayStation}

            <div className="mt-4 lg:mt-0 lg:relative lg:right-10">
              <h1 className="text-section-title">PlayStation 5</h1>
              <p className="text-hero-label text-accent-border">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>

          {/* AirPods + Vision Pro */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 flex-1">
            {/* AirPods */}
            <div
              className="bg-[#EDEDED]  flex flex-col items-center text-center px-6 py-10
                            lg:flex-row lg:items-center lg:text-left lg:justify-center lg:py-0 lg:px-0"
            >
              {HERO_IMGS.Airpod}
              <div className="mt-4 lg:mt-0 flex flex-col justify-center w-full items-center">
                <h1 className="text-section-title font-extralight">
                  Apple <br /> AirPods <br />
                  <span className="font-normal">Max</span>
                </h1>
                <p className="text-hero-label text-accent-border">
                  Computational audio. <br /> Listen, it's powerful
                </p>
              </div>
            </div>

            {/* Vision Pro */}
            <div
              className="bg-bg-grycards flex flex-col items-center text-center px-6 py-10
                            lg:flex-row lg:items-center lg:text-left lg:py-0 lg:px-0"
            >
              {HERO_IMGS.AppleVision}
              <div className="mt-4 lg:mt-0 flex flex-col justify-center items-center w-full">
                <h1 className="text-section-title font-extralight text-white">
                  Apple <br /> Vision <span className="font-normal">Pro</span>
                </h1>
                <p className="text-accent-border text-hero-label">
                  An immersive way to <br /> experience <br /> entertainment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-[#EDEDED] flex flex-col items-center text-center px-6 py-10
                        lg:flex-row lg:items-center lg:text-left lg:px-0"
        >
          {/* Mobile MacbookPro image  */}
          <div className="lg:hidden">{HERO_IMGS.MacBookProMobile}</div>

          {/* Text */}
          <div className="flex flex-col items-center lg:items-start -mt-14 lg:mt-0 lg:w-full lg:ml-22">
            <h1 className="font-thin text-[40px] lg:text-[48px] leading-tight">
              Macbook
            </h1>
            <span className="font-normal text-[40px] lg:text-[48px]">Air</span>
            <p className="text-section-label text-accent-border mt-2">
              The new 15-inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <ShopNowButton className="border-black text-black mt-4">
              Shop Now
            </ShopNowButton>
          </div>

          {/* Desktop MacbookPro image */}
          <div className="hidden lg:flex justify-end w-full lg:mt-20 -mt-16 overflow-visible">
            {HERO_IMGS.MacBookPro}
          </div>
        </div>
      </div>

      {/* BROWSE BY CATEGORY */}
    </main>
  );
}
