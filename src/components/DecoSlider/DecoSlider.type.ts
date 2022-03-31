import { Product } from 'api/models/Room.type';

export default interface DecoSliderProps {
  productList: Product[];
  selectedProduct: number | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<number | null>>;
}
