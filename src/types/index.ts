export interface Product {
  id: string | number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
}
