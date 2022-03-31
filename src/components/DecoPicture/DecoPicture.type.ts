import { Room } from 'api/models/Room.type';

export default interface DecoPictureProps {
  data: Room;
  setSelectedProduct: React.Dispatch<React.SetStateAction<number | null>>;
  selectedProduct: number | null;
}

export interface DecoCardWrapperProps {
  pointX: number;
  pointY: number;
}

export interface CardOpenerProps {
  src: string;
}
