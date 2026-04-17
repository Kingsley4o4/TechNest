import {
  Smartphone,
  Watch,
  Camera,
  Headphones,
  MonitorStop,
  Gamepad2,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Product } from "@/types";

export interface CategoryIcon {
  icon: LucideIcon;
  name: string;
}

// ICONS contains icon and the name of the category
export const ICONS: CategoryIcon[] = [
  {
    icon: Smartphone,
    name: "Smartphones",
  },
  {
    icon: Watch,
    name: "Smartwatches",
  },
  {
    icon: Camera,
    name: "Cameras",
  },
  {
    icon: Headphones,
    name: "Headphones",
  },
  {
    icon: MonitorStop,
    name: "Monitors",
  },
  {
    icon: Gamepad2,
    name: "Gaming",
  },
];

export default ICONS;

// PRODUCTS_LIST contains name, image and price of the product
export const PRODUCTS_LIST: Product[] = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
    image: "/assets/home/Iphone14pro.png",
    price: 999,
    category: "Smartphones",
  },
  {
    id: 2,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    image: "/assets/home/smartwatch.png",
    price: 500,
    category: "Smartwatches",
  },
  {
    id: 3,
    name: "Blackmagic Pocket Cinema Camera 6k",
    image: "/assets/home/camera.png",
    price: 300,
    category: "Cameras",
  },
  {
    id: 4,
    name: "AirPods Max Silver Starlight Aluminium",
    image: "/assets/home/Headphone.png",
    price: 150,
    category: "Headphones",
  },
  {
    id: 5,
    name: "Galaxy Buds FE Graphite",
    image: "/assets/home/bud.png",
    price: 150,
    category: "Headphones",
  },
  {
    id: 6,
    name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    image: "/assets/home/ipad.png",
    price: 200,
    category: "Tablets",
  },
  {
    id: 7,
    name: "Samsung Galaxy Watch6 Classic 47mm Black",
    image: "/assets/home/watch.png",
    price: 600,
    category: "Smartwatches",
  },
  {
    id: 8,
    name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    image: "/assets/home/sumsung.png",
    price: 700,
    category: "Smartphones",
  },
];

export const DISCOUNT_PRODUCT: Product[] = [
  {
    id: 101,
    name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    image: "/assets/home/Iphone14pro.png",
    price: 1437,
    category: "Smartphones",
  },
  {
    id: 102,
    name: "AirPods Max Silver Starlight Aluminium",
    image: "/assets/home/Headphone.png",
    price: 549,
    category: "Headphones",
  },
  {
    id: 103,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    image: "/assets/home/smartwatch.png",
    price: 399,
    category: "Smartwatches",
  },
  {
    id: 104,
    name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
    image: "/assets/home/Iphone14pro.png",
    price: 1499,
    category: "Smartphones",
  },
];
