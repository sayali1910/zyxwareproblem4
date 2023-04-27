export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
}
export interface CartContextProps {
  cartData: Array<ProductInterface>;
  updateCartData: (newValue: Array<ProductInterface>) => void;
}
